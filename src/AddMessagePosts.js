import React from "react";
import "./ThreadPosts.css";
import { useState } from "react";
import { Link } from "react-router-dom";

export const AddMessagePosts = ({thread_id, getThreadMessage}) => {
  const [post, setPost] = useState("");
  const [threadId, setThreadId] = useState("")
  
  const onClickAddPost = () => {
    fetch(`https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads/${ thread_id }/posts`, {
      method: 'POST',
      body: JSON.stringify({post: post}),
      headers:{
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }

    }).then((response) => {
      if(!response.ok) {
          console.log('error!');
      }
      setPost("");
      getThreadMessage();
      console.log(post)
      console.log('ok!');
      return response.json();
  }).then((data)  => {
      console.log(data);
      console.log(data.id);
      
      setThreadId((count)=> count + 1)
  }).catch((error) => {
      console.log(error);
  });
  };

  return (
    <div className="AddMessagePosts">
      <input type="text" value={post} className="post_form" onChange={(event)=>
      setPost(event.target.value)}></input>
      <button className="btn_post" onClick={onClickAddPost}>投稿</button>
      <p>{threadId}</p>
      <p>{post}</p>
      <Link to="/">Topに戻る</Link>
    </div>
  )

  }