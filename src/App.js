import React, { Component } from "react";
import {Route ,Routes} from 'react-router-dom'

import Home from './component/home';
import About from './component/about'
import Contact from "./component/contact";
import NavBar from "./component/navbar";
import Post from './component/post'

class App extends Component{
  render(){
    return(
      <>
          <NavBar />
        <Routes className="App">
          <Route path='/' element={<Home/>}/>
          <Route path='about' element={<About/>} />
          <Route path='contact' element={<Contact/>} />
          <Route path=':post_id'  element={<Post/>}/>
        </Routes>
      </>
    )
  }
}



export default App;
