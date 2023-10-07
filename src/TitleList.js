import React from "react";

  export const TitleList = ({thread}) => {
return (
  <div className="title">
      <h2 className="h2_new">新着スレッド</h2>
      {/* <div>
        <p>Title: {addText}</p>
      </div> */}
      {thread.map(item => (
        <div key={item.id} className="TitleList">
          <p className="title_item">Title: {item.title}</p>
        </div>
      ))}

  </div>
)
}