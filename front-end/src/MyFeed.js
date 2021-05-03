import React from 'react'
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import App from './App'
import './MyFeed.css'
import Nav from './Nav'
import FeedPost from './FeedPost'
import RecipePage from './RecipePage'
import SearchBar from './SearchBar'
import Preview from './Preview'
const obj = 
{
    "images": [
        "https://picsum.photos/id/117/200/300",
        "https://picsum.photos/id/7/200/300",
        "https://picsum.photos/id/90/200/300"
    ],
    "ingredients": [
        "ingredient 1",
        "ingredient 2",
        "ingredient 3"
    ],
    "instructions": [
        "Cook vegetables",
        "Prepare broth",
        "Blend"
    ],
    "comments": [],
    "slug": "soup",
    "_id": "607d76f7058b2842d563998c",
    "title": "Soup",
    "author": {
        "posts": [
            "607cd8046dced78cc134dffe",
            "607d7e1832bad543a85f6655",
            "607d804597a960443a2972a0"
        ],
        "followers": [],
        "following": [],
        "likedPosts": [],
        "slug": "chef99",
        "_id": "607c9b35c463426a0e56e31b",
        "username": "chef99",
        "email": "somebody@gmail.com",
        "firstName": "Bob",
        "lastName": "Baker",
        "bio": "World famous chef",
        "profileImage": "https://picsum.photos/id/222/200/300",
        "__v": 2
    },
    "difficulty": "advanced",
    "posted": "2020-08-20T04:00:00.000Z",
    "cuisine": "american",
    "likes": 1,
    "__v": 0
}
const MyFeed=()=> {
    return (
        <div className="container">
            <h1>My Feed</h1>
            <SearchBar />
            
                <Preview recipe = {obj}/>
            
                <Preview recipe = {obj} />
            
                <Preview recipe = {obj} />
           
                <Preview recipe = {obj}/>
         
         
        </div>
    )
}

export default MyFeed