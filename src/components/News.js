import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";



const News = (props) => {
  const [articles, setarticles] = useState([])
  const [loading, setloading] = useState(true)
  const [page, setpage] = useState(1)
  const [totalResults, settotalResults] = useState(0)
 



  const updateNews = async () => {
    props.setProgress(5);

    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=9ea1ad7f77c640ff80de76b0552c7218&page=${page}&pageSize=${props.pageSize}&search=${props.query}`

    setloading(true)
    let data = await fetch(url);
    props.setProgress(40);
    let parsedata = await data.json()
    props.setProgress(60);
    setarticles(parsedata.articles)
    setloading(false)
    settotalResults(parsedata.totalResults)
    props.setProgress(100);
  }
  useEffect(() => {
    updateNews();

  }, [])

  


const fetchMoreData = async () => {
  setpage(page + 1)
  let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=9ea1ad7f77c640ff80de76b0552c7218&page=${page}&pageSize=${props.pageSize}`

  let data = await fetch(url);
  let parsedata = await data.json()

  settotalResults(parsedata.totalResults)
  setarticles(articles.concat(parsedata.articles))

}
return (
  <>
    <h1 className='text-center' style={{margin:'90px'}}>Newsking-Top Headlines</h1>
    {loading && <Spinner />}
    <InfiniteScroll
      dataLength={articles.length}
      next={fetchMoreData}
      hasMore={articles.length !== totalResults}
      loader={<Spinner />}
    >



      <div className="container">
        <div className="row">
          {articles.map((element) => {

            return <div className="col-md-4" key={element.url}>
              <NewsItem title={element.title ? element.title.length >= 45 ? element.title.slice(0, 44) : element.title : ""} description={element.description ? element.description.slice(0, 88) : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}  />
            </div>
          })}
        </div>

      </div>
    </InfiniteScroll>

  </>

)
        }





News.defaultProps = {
  country: 'in',
  pageSize: 5,
  category: 'general',

}
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
}
export default News
