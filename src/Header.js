import React from "react";
import './App.css';
export const Header = () => {
  return (
    <div className="header">
      <h2 className="h2_thread">掲示板</h2>
      <a href="http://localhost:3000/thread/new" className="thread_url">スレッドをたてる</a>
    </div>
  )
}