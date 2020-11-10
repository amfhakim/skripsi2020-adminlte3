import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/Header'
import Menu from './components/Menu'
import Footer from './components/Footer'
import * as serviceWorker from './serviceWorker';
import ContentTambahProyek from './components/ContentTambahProyek';

ReactDOM.render(
    <Header/>
    <Menu/>
    <ContentTambahProyek/>
    <Footer/>,
  document.getElementById('rootTP')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();