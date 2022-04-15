import React, { Component } from "react";
import {Route ,Routes ,Navigate} from 'react-router-dom'
import Home from './component/home';
import About from './component/about'
import Contact from "./component/contact";
import NavBar from "./component/navbar";
import Post from './component/post';
import Page404 from './component/404page'

class App extends Component{
  render(){
    return(
      <>
          <NavBar />
        <Routes className="App">
          <Route path='/' element={<Home/>}/>
          <Route path=':post_id/*'  element={<Post />}/>
          <Route path='about' element={<About/>} />
          <Route path='contact' element={<Contact/>} />
          <Route path="404Page" element={<Page404 />}/>
          {/* <Route path="*" element={<Navigate to='/404Page'/>}/> */}
              {/* <Routes>
                </Routes> */}
        </Routes>
      </>
    )
  }
}



export default App;
