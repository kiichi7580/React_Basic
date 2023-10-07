import React from 'react';
import { Header } from '../Header';
import { ThreadList } from '../ThreadList';
import { Routes, Route } from 'react-router-dom';
import New from './New';
import { Notfound } from '../Notfound';
import '../App.css'

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={ <ThreadList /> } />
        <Route path="/thread/new" element={ <New /> } />
        <Route path="*" element={ <Notfound /> } />
      </Routes>
      
    </div>
  );
}

export default App;
