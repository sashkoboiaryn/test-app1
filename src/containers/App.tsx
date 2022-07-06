import Posts from "./Posts";
import React, { useState, useEffect } from "react";
import {IPost, IUser} from '../types/Types';
import {Box} from "@mui/material";
import axios from "axios";
import MenuAppBar from "../components/AppBar";
import { PostForm } from "../components/PostForm";
import Profile from "../components/Profile";



const App: React.FC = () => {

  // SHOW POSTS
  const [posts1, setPosts] = useState<IPost[]>([])
  
  useEffect(() => {
    fetchPosts()
    /* fetchUser() */
    console.log('effect') 
    console.log(posts1);
          
  },[])
  
    async function fetchPosts() {
      try{
        let responce = await axios.get<IPost[]>('https://jsonplaceholder.typicode.com/posts')
        setPosts(responce.data);  
              
      }
      catch (e) {
        alert(e)
      }
    }

  const addPost = ( title: string,body: string) => {
    const newPost: IPost = {
      userId: 11,
      id: Date.now(),
      title: title,
      body: body,
      
    }    
    setPosts(prev => [newPost, ...prev]);  
  }
   // SHOW USERDATA
  const [user, setUser] = useState<IUser>()
     
  
  useEffect(() => {
    fetchUser()
    console.log('effect2')
    console.log(user);
       
  },[])
      async function fetchUser() {
        try{
        const responceUser = await axios.get<IUser>('https://jsonplaceholder.typicode.com/users/1')
        setUser(responceUser.data); 
        }
        catch (e) {
          alert(e)
        }                 
    }
    
  return (
    <>    
    <MenuAppBar />    
    <Profile     
    userdata={user}
    />
    <PostForm 
      onAdd={addPost}
     />
    <Posts 
      posts={posts1}/>    
    </>
  )
}

export default App;