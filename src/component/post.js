import React, { useEffect, useState} from "react";
import axios from "axios";
import {useParams , useNavigate } from 'react-router-dom'
import { connect } from "react-redux";
// let params;
const Post = (props) => {
    //  console.log(props)
    const [postData, setPostData] = useState({});
    let params = useParams();
    console.log(params, props)
    const  navigate = useNavigate()
    const handleDelete = () => {
        console.log(params.post_id)
        props.deletePsot(params.post_id)
        navigate('/')
    }
    useEffect(() => {
            axios.get('https://jsonplaceholder.typicode.com/posts/' + params.post_id).then(res => {
                   setPostData(res.data)
            })
                }, [params.post_id])
        return (
            <div className="container">
                <h2 className="center">{postData.title}</h2>
                <p className="center">{postData.body}</p>
                <button className="btn" onClick={handleDelete}>go back to posts page</button>
            </div>
        )
    
}
const mapStateToProps = (state , ownProps) => {
console.log('ownProps',ownProps)
}

const mapDispatchToProps = (dispatch) => {
    return {
        deletePsot : (id) => {dispatch({type : 'DELETE_POST' , id:id})}
    }
}

    export default connect(mapStateToProps,mapDispatchToProps)(Post)
