import React from 'react'
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import App from './App'
import './Home.css'
import Nav from './Nav'
import Search from './Search'
import Reach from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SignedOutLogin from './SignedOutLogin'

const Home=(props)=> {
    return (
        <div className="container">
            <h1>Home Page</h1>
            <Nav />
          
            <Search />
            

        </div>
    )
}

export default Home