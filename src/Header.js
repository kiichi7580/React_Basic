import React from "react";
import { Link } from "react-router-dom";
import './App.css';
export const Header = () => {
  return (
    <div className="header">
      <h2 className="h2_thread">掲示板</h2>
      <Link to="/thread/new" className="thread_url">スレッドをたてる</Link>
    </div>
  )
}