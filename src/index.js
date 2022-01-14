import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './NavBar'
import ArticleList from './ArticleList';
import Menu from './Menu';
import './index.css'

ReactDOM.render(
   <div>
      <NavBar />
      <ArticleList />
      <Menu />
   </div>
   ,
   document.getElementById('root')
);