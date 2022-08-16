import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './NavBar'
// import ArticleList from './ArticleList';
import Article from './Article';
import Menu from './Menu';
import './index.css'

ReactDOM.render(
   <div>
      <NavBar />
      <Article />
      <Menu />
   </div>
   ,
   document.getElementById('root')
);