import React from "react"

export const MessagePosts = ({threadMessage}) => {
  console.log(threadMessage)
  return (
    <div className="MessagePosts">
      <h2>TechTrainってどうなの？</h2>
        {threadMessage.map((item) => (
          <ul key={item.id} className="post_list_ul">
            <li key={item.id} className="post_list_li">{item.post}</li>
          </ul>
        ))}
    </div>
  )
}