import React, {Component} from 'react';
// import {withRouter} from 'react-router-dom'
// import changeColor from '../hoc/changeColor'
import axios from 'axios';
import {Link} from 'react-router-dom'
class Home extends Component {
    state = {
        posts: []
    }

    componentDidMount = () => {
        axios.get('https://jsonplaceholder.typicode.com/posts').then(res => {
            this.setState({
                posts: res.data.slice(0, 10)
            })
        })

    }
    render() {
        const {posts} = this.state
        const postsList = posts.length > 0 ? (this.state.posts.map(post => (
            <div className='post card'
                key={
                    post.id
            }>
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
            <div className='container'>
                <h2>Home Page</h2>
                {postsList} </div>
        )
    }
}
export default Home;
