import React, { Component } from 'react'
import Navbar from './components/Navbar'
import './App.css'
import News from './components/News'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom' 

export default class App extends Component {
  render() {
    return (
      <>
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<News key="general" pageSize={3} country="us" apiKey="cc5029fa80c446fc9d957ee7b41ab7b9" category="general" />}></Route>
          <Route exact path="/business" element={<News key="business" pageSize={3} country="us" apiKey="cc5029fa80c446fc9d957ee7b41ab7b9" category="business" />}></Route>
          <Route exact path="/entertainment" element={<News key="entertainment" pageSize={3} country="us" apiKey="cc5029fa80c446fc9d957ee7b41ab7b9" category="entertainment" />}></Route>
          <Route exact path="/health" element={<News key="health" pageSize={3} country="us" apiKey="cc5029fa80c446fc9d957ee7b41ab7b9" category="health" />}></Route>
          <Route exact path="/science" element={<News key="science" pageSize={3} country="us" apiKey="cc5029fa80c446fc9d957ee7b41ab7b9" category="science" />}></Route>
          <Route exact path="/sports" element={<News key="sports" pageSize={3} country="us" apiKey="cc5029fa80c446fc9d957ee7b41ab7b9" category="sports" />}></Route>
          <Route exact path="/technology" element={<News key="technology" pageSize={3} country="us" apiKey="cc5029fa80c446fc9d957ee7b41ab7b9" category="technology" />}></Route>
        </Routes>
      </Router>
      </>
    )
  }
}
