import React, { Component, useState } from 'react'
import Navbar from './components/Navbar'
import './App.css'
import News from './components/News'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom' 
import LoadingBar from "react-top-loading-bar";

const App = () => {
  const pageSize = 10;
  const apiKey = import.meta.env.VITE_NEWS_API_KEY;
  const [progress, setProgress] = useState(0);

    return (
      <>
      <Router>
        <Navbar/>
        <LoadingBar
          color="#f11946"
          progress={progress}
        />
        <Routes>
          <Route exact path="/" element={<News setProgress={setProgress} key="general" pageSize={pageSize} country="us" apiKey={apiKey} category="general" />}></Route>
          <Route exact path="/business" element={<News setProgress={setProgress} key="business" pageSize={pageSize} country="us" apiKey={apiKey} category="business" />}></Route>
          <Route exact path="/entertainment" element={<News setProgress={setProgress} key="entertainment" pageSize={pageSize} country="us" apiKey={apiKey} category="entertainment" />}></Route>
          <Route exact path="/health" element={<News setProgress={setProgress} key="health" pageSize={pageSize} country="us" apiKey={apiKey} category="health" />}></Route>
          <Route exact path="/science" element={<News setProgress={setProgress} key="science" pageSize={pageSize} country="us" apiKey={apiKey} category="science" />}></Route>
          <Route exact path="/sports" element={<News setProgress={setProgress} key="sports" pageSize={pageSize} country="us" apiKey={apiKey} category="sports" />}></Route>
          <Route exact path="/technology" element={<News setProgress={setProgress} key="technology" pageSize={pageSize} country="us" apiKey={apiKey} category="technology" />}></Route>
        </Routes>
      </Router>
      </>
    )
  }

export default App