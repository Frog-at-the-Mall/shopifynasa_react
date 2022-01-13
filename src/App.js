import logo from './logo.svg';
import './App.css';
import React from 'react'
import Title from './components/header';
import Content from './components/content';

console.log(process.env.REACT_APP_API_KEY)

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
