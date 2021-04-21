import React, { useState } from 'react'
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import App from './App'
import './Home.css'
import Nav from './Nav'
import Search from './Search'
import Reach from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SignedOutLogin from './SignedOutLogin'
import MyRecipes from './MyRecipes'
import MyFeed from './MyFeed'
import SavedPosts from './SavedPosts'
import About from './About'
import SignOut from './SignOut'
import SearchBar from './SearchBar'
import FeedPost from './FeedPost'
import RecipePage from './RecipePage';
import Login from './Login';

const obj = 
 
        {
            "images": [
                "https://picsum.photos/id/237/200/300",
                "https://picsum.photos/id/207/200/300",
                "https://picsum.photos/id/203/200/300"
            ],
            "ingredients": [
                "rice",
                "beans",
                "sauce",
                ""
            ],
            "instructions": [
                "do something",
                "do something else",
                "finally"
            ],
            "comments": [
                "607efbd3ba150d52c9a5b127"
            ],
            "slug": "empanadas",
            "_id": "607cd8046dced78cc134dffe",
            "author": "607c9b35c463426a0e56e31b",
            "title": "Empanadas",
            "posted": "2020-08-20T04:00:00.000Z",
            "cuisine": "Mexican",
            "difficulty": "advanced",
            "likes": 10,
            "__v": 1
        }
    


const Home=(props)=> {
    return (
        <div className="container">

            {/* <div className="top_bar">
                <div className="bar" >
                    <h1 className='item'>Home Page</h1>
                    <div className="float_right">
                        <Link to="./Login">
                            <button type="button" className="login_btn">
                                Login
                            </button>
                        </Link> 
                    </div>
                </div>
            </div> */}

                <h1 className='home_header'>Recipe Central</h1>
                <Link to="./Login">
                    <button type="button" className="float">
                        Login
                    </button>
                </Link>

            <SearchBar />
            <h2>Explore Our Recipes Below</h2>

            <FeedPost> 
                <RecipePage recipe = {obj}/>
            </FeedPost>
            <FeedPost> 
                <RecipePage recipe ={obj}/>
            </FeedPost>
            <FeedPost> 
                <RecipePage recipe = {obj}/>
            </FeedPost>
            <FeedPost> 
                <RecipePage recipe = {obj}/>
            </FeedPost>
            <FeedPost> 
                <RecipePage recipe = {obj}/>
            </FeedPost>
        </div>
    )
}

export default Home