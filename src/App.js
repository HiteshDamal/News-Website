
import './App.css';

import React, {  useState } from 'react'
import NAVBAR from './components/NAVBAR';
import News from './components/News';
import {
  HashRouter as Router,
  Routes,
  Route,

} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'


const   App =(props)=> {
  const[progress,setProgress]=useState(0)

  
    return (
      <div>
        <Router>
          <NAVBAR />
        
              <LoadingBar
            color='red'
            progress={progress}
            
            
              />
          

          <Routes>
            <Route exact path="/" element={ <News setProgress={setProgress}  key="general" pageSize={props.pageSize} country="us" category="general" />}/>
            <Route exact  path="/business"  element={<News setProgress={setProgress}  key="business"pageSize={props.pageSize} country="us" category="business" /> }/>
            <Route exact  path="/entertainment" element={<News setProgress={setProgress}  key="entertainment"pageSize={props.pageSize} country="us" category="entertainment" />}/>
            <Route exact  path="/health"  element={<News setProgress={setProgress} key="health" pageSize={props.pageSize} country="us" category="health" /> }/>
            <Route exact  path="/science"  element={<News setProgress={setProgress}  key="science"pageSize={props.pageSize} country="us" category="science" /> }/>
            <Route exact path="/sports" element={<News setProgress={setProgress}  key="sports"pageSize={props.pageSize} country="us" category="sports" />}/>
            <Route exact  path="/technology"  element={<News setProgress={setProgress} key="technology" pageSize={props.pageSize} country="us" category="technology" /> }/>
            <Route exact  path="/general"  element={<News setProgress={setProgress} key="technology" pageSize={props.pageSize} country="us" category="general" /> }/>
            
            

          </Routes>
        </Router>
       

      </div>
    )
  }

App.defaultProps={
  progress:0,
  pageSize:8
}
export default App


