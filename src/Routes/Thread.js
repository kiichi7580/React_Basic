import React from "react";
import { MessagePosts } from "../MessagePosts";
import { AddMessagePosts } from "../AddMessagePosts"; 
import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";

export const Thread = () => {
  const { thread_id } = useParams();
  const [threadMessage, setThreadMessage] = useState([]);
  async function getThreadMessage () {
    await fetch(`https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads/${ thread_id }/posts?offset=0`, {method: 'Get'})
    .then((res) => {
      console.log(res)
      return res.json()
    })
    .then((data) => {
      setThreadMessage(data.posts)
      console.log(data.posts)
    })
    .catch((error) => {
      console.log('Error:', error)
    })
  }

  useEffect(() => {
    getThreadMessage();
  }, [thread_id])

  // const newPostList = () => {
  //   console.log(threadMessage)
  //   for (let a = 0; a < threadMessage.length; a++) {
  //     return <li key={threadMessage[a].id}>{threadMessage[a].post}</li>
  //   }

  // }
  return (
    <div className="Thread">
      {/* <ul> */}
        {/* {thread_id} */}
        {/* { newPostList() } */}
      {/* </ul> */}
      <MessagePosts threadMessage={threadMessage} />
      <AddMessagePosts thread_id={thread_id} getThreadMessage={getThreadMessage}/>
    </div>
  )
}
