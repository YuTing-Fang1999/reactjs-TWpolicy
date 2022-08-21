import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './NavBar'
// import ArticleList from './ArticleList';
// import Article from './Article';
import SignInScreen from './SignInScreen';
import Menu from './Menu';
import './index.css'

ReactDOM.render(
   <div>
      <NavBar />
      <Menu />
      <SignInScreen />
   </div>
   ,
   document.getElementById('root')
);