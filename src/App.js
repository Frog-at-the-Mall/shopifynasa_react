import logo from './logo.svg';
import './App.css';
import React from 'react'
import Title from './components/header';
import Content from './components/content';

function App() {
  return (
    <div className="header">
      <Title/>
      
      <div className="content">
      <Content/>
      </div>
    </div>

    
  );
}

export default App;
