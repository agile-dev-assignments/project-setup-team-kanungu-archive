import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import App from './App';
import './Profile.css';
import Nav from './Nav';

import SearchBar from './SearchBar'
import FeedPost from './FeedPost'
import Preview from './Preview';
import { Form } from 'react-bootstrap';


const Avatar = 'https://picsum.photos/200';

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

//import MyRecipes from './MyRecipes'


//const ProfilePhoto = ()



//var myNewP = document.createElement("p")
//myNewP.innerHTML = "This is a paragraph"

const Article = ( { number, content } ) => {
    return (
        <article>
            <h1>{number}</h1>
            <p>{content}</p>
        </article>
    )
}

/*
function Options(props) {
    return (
        <postContent>
            <p onClick={props.editProfile}>Edit Profile</p>
            <p onClick={props.changePassword}>Change Password</p>
        </postContent>
    )
}

const MyPost = ( { post } ) => {
    return (
        <postContent>
            <p>{post}</p>
        </postContent>
    )
}
*/

const styles = {
    color: "#FF8C00", 
    backgroundColor: "#FF2D00"
}

const Profile=()=> {
    const [image, setImage] = useState({ preview: "", raw: "" });

    const handleChange = e => {
        if (e.target.files.length) {
          setImage({
            preview: URL.createObjectURL(e.target.files[0]),
            raw: e.target.files[0]
          });
        }
      };

      const handleUpload = async e => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("image", image.raw);
    
        await fetch("YOUR_URL", {
          method: "POST",
          headers: {
            "Content-Type": "multipart/form-data"
          },
          body: formData
        });
      };

    return (
        <div className="container">
            <h1>Profile</h1>
            <SearchBar />

            <h5> Good evening, USERNAME!</h5>

            <section>
                <Article number="000" content="Posts"> </Article>
                <Article number="000" content="Followers"> </Article>
                <Article number="000" content="Following"> </Article>
                <Link to="./UploadProfileImg">
                    <input type="image" className = "profileImg" alt="Click to upload profile image" src={Avatar}></input>
                </Link>
            </section>
  
            <optionRow>
                <Link to="./EditProfile">
                    <button className="button">Edit Profile</button>
                </Link>
            </optionRow>

            <optionRow>
                <Link to="./ChangePassword">
                    <button className="button">Change Password</button>
                </Link>
            </optionRow>
           
            <row>
                <FeedPost> <button className="button"><Preview recipe ={obj}/> </button> </FeedPost>
                <FeedPost> <Preview recipe = {obj}/> </FeedPost>
                <FeedPost> <Preview recipe = {obj}/> </FeedPost>
            </row>

            <row>
                <FeedPost> <Preview recipe = {obj}/> </FeedPost>
                <FeedPost> <Preview recipe = {obj}/> </FeedPost>
                <FeedPost> <Preview recipe = {obj}/> </FeedPost>
            </row>
            <Link to="./MyFeed">
                <h4>Clike here to view all My Feed</h4>
            </Link>
                    
        </div>
    )
}

export default Profile