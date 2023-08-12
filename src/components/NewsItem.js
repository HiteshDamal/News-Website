import React from 'react'

const NewsItem=(props)=>{
  
 
    let {title,description,imageUrl,newsUrl,author,date,source}=props
    return (
      <div className='my-10'>
        <div className="card">
        <span className=" badge rounded-pill bg-danger" style={{display:'flex',position:'absolute',right:'0'}}>{source}</span>
          <img src={imageUrl?imageUrl:"https://www.hindustantimes.com/ht-img/img/2023/06/13/1600x900/arshad_warsi_as_circuit_1653975956309_1686640233673.jpg"} className="card-img-top" alt="newsImage" />
         
       
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-body-secondary">By {author?author:"unknown"} on {new Date(date).toGMTString()}</small></p>
            <a href={newsUrl} target="__blank"className="btn btn-sn btn-dark">Read More</a>
          </div>
        </div>

      </div>
    )
  }
  export default NewsItem

