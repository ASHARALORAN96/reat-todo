import React, { Component } from "react";
import {Route ,Routes ,Navigate} from 'react-router-dom'
import img from './component/assets/pokeball.png'
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
          <Route path="redirect" element={<Navigate to='/about'/>}/>
        </Routes>
      </>
    )
  }
}



export default App;
