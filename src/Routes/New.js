import React from "react";
import { useState } from "react";
import '../New.css'


function New () {
  const [text, setText] = useState("")

  // const [addText, setAddText] = useState("")

  const onClickAddText = () => {
    fetch("https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads", {
      method: 'POST',
      body: JSON.stringify({title: text}),
      headers:{
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }

    }).then((response) => {
      if(!response.ok) {
          console.log('error!');
      } 
      console.log('ok!');
      return response.json();
  }).then((data)  => {
      console.log(data);
  }).catch((error) => {
      console.log(error);
  });
    // setAddText(text)
    setText("");
  }


  return (
    <div className="New">
      <h2 className="h2_thread_create">スレッド新規作成</h2>
      <div className="form_box">
        <div>
        <input type="text" value={text} id="thread_title" name="thread_title" onChange={(event) => setText(event.target.value)}/><br/>
          <a href="http://localhost:3000/" className="back_Top">Topに戻る</a><button className="btn_create" onClick={onClickAddText}>作成</button>
        </div>
      </div>
      {/* <p>リアルタイム:{text}</p>

      <p>ボタンボックス:{addText}</p> */}
    </div>
  )
  
}

export default New;