import { useParams } from 'react-router-dom'
import React, { useEffect } from 'react'
import { useState } from 'react';
import './RecipePage.css'
import { Link } from 'react-router-dom';
import ImageSlider from './TestRecipe'
import LikeButton from './LikeButton'
import CommentList from './CommentList'
import Preview from './Preview'
import axios from 'axios'
import SearchBar from './SearchBar'
const RecipePage = (props)=> {
  
   const{id} = useParams()
   const [recipe, setRecipe] = useState(null)
   const [Author,setAuthor] = useState(null)
   const [reqError, setReqError] = useState(false)
   const [isLoading,setIsLoading] =useState(true)
    // if(props.location.aboutProps){
     

    // }
    // else{
    // recipe = props.recipe;
    // }
    // console.log(props)
   

var ingredients = [];
var instructions = [];
    useEffect(()=>{
        const fetchData =() =>{
        setIsLoading(true)
        axios({url:`http://localhost:5000/post/${id}`,method:"GET"})
            .then((response) => {
                setRecipe(response.data)
                
                
                

                
                console.log(recipe)
            
            })
            .catch((err) => {
                console.error(err)
                setReqError(true)
                
            })
        }
        fetchData()

    },[id]);
useEffect(()=>{
    if(recipe){
        setAuthor(recipe.author)
        ingredients = recipe.ingredients;
        // instructions = recipe.instructions;
        
       
    }
},[recipe])
useEffect(()=>{
    if(Author){
        console.log(Author)
        setIsLoading(false)
    }
},[Author])
   if(isLoading === true){
       return <div>LOADING</div>
   }
   else{
    return (

        <div className="projectcss">
        <div className= "container">
            <h1 className='home_header'>Recipe Central</h1>
                <Link to="./Login">
                    <button type="button" className="float">
                        Login
                    </button>
                </Link>

            <SearchBar />
            
            <div className = "recipe">
                <img className = "avatar" src={Author.profileImage} alt="Avatars"></img>
                <h1 className = "tit">{recipe.title}</h1>
                <div className = "authorName">
                    
                    <h1>{Author.firstName + " " + Author.lastName}</h1>
                  
                </div>
                <div className = 'car'><ImageSlider images={recipe.images}/></div>
                
                <div className = 'ing'>
                <h2>Ingredients</h2>
                {recipe.ingredients.map((ingredient)=>(
                    
                    <li className = 'ingre'>{ingredient}</li>
                ))}
                </div>
        <div className = "Ip">Instructions</div>
       {/* {recipe.instructions.map((instruction)=>(
           <li className ="in">{instruction}</li>
           
       
       ))} */}


        <div className = 'comment'><CommentList data = {{"recipe":recipe,"author":Author}}></CommentList></div>
        
    
            </div>
        <div className = "likey">
        <LikeButton data = {{recipe:recipe._id,curr:recipe.likes,user:Author._id}}></LikeButton>
        </div>
        </div>
        </div>
    )
       }
       }
       


    
export default RecipePage