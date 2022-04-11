import React, {useEffect, useState} from "react";
import axios from "axios";
import {useParams} from 'react-router-dom'


const Post = () => {
    const [postData, setPostData] = useState({});
    let params = useParams();
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/' + params.post_id).then(res => {
           setPostData(res.data)
    })
        }, [params.post_id])
        return (
            <div className="container">
                <h2 className="center">{postData.title}</h2>
                <p className="center">{postData.body}</p>
            </div>
        )
    }

    export default Post
