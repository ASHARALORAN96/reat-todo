import React, {Component} from 'react';
// import {Route, Routes , Navigate} from 'react-router-dom'
// import changeColor from '../hoc/changeColor'
import axios from 'axios';
import {Link} from 'react-router-dom'
import img from './assets/pokeball.png'
import "./home.css"
import {connect} from 'react-redux'
class Home extends Component {
    render() {
        const {posts} = this.props
        const postsList = posts.length > 0 ? (posts.map(post => (
            <div className='post card'
                key={
                    post.id
            }>
                <img src={img} alt="a img"/>
                 <div className='card-content'>
                    <Link to={'/'+ post.id}><h1 className='card-title'>
                        {
                        post.title
                    }</h1>
                    </Link>
                    <p className='card-body'>
                        {
                        post.body
                    }</p>
                </div>
            </div>
        ))) : (
            <p>
                there no post yet!
            </p>
        )
        return (

            <div className='container home'>
                <h2>Home Page</h2>
                {postsList} </div>
)
    }
}

const mapStateTOProps = (state)=> {
    return{
        posts : state.posts
    }
}

export default connect(mapStateTOProps)(Home);
