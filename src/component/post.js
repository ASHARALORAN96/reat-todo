import React, {useEffect, useState} from "react";
import axios from "axios";
import {useParams , useNavigate} from 'react-router-dom'


const Post = () => {
    const [postData, setPostData] = useState({});
    let params = useParams();
    const  navigate = useNavigate()
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/' + params.post_id).then(res => {
           setPostData(res.data)
    })
        }, [params.post_id])
        return (
            <div className="container">
                <h2 className="center">{postData.title}</h2>
                <p className="center">{postData.body}</p>
                <button className="btn" onClick={()=>navigate('/')}>go back to posts page</button>
            </div>
        )
    }

    export default Post
