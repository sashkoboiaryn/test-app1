import Posts from "./Posts";
import React, { useState, useEffect } from "react";
import {IPost, IUser} from '../types/Types';
import ApiService from "../service/ApiService";
import useGlobalState from "../state/State";
import {Box} from "@mui/material";
import axios from "axios";
import MenuAppBar from "../components/AppBar";
import { PostForm } from "../components/PostForm";
import Profile from "../components/Profile";



const App: React.FC = () => {

  // SHOW POSTS
  const [posts, setPosts] = useGlobalState('posts');
  const [localPosts, setLocalPosts] = useGlobalState('localPosts');
  const [user, setUser] = useGlobalState('user');


  const [active, setActive] = useState(false) 
  useEffect(() => { 
    if (posts.length === 0) {      
    ApiService.fetchPosts().then((res => setPosts(res!))); 

    if (localStorage.getItem("posts")) {
      setLocalPosts(JSON.parse(localStorage.getItem("posts") || "") as Array<IPost>);
    }

    if (localPosts.length) {
      setPosts(posts.concat(localPosts));
    }}                
  },[]);

  useEffect(() => {
    localStorage.setItem("posts", JSON.stringify(localPosts));
  }, [localPosts])
  

  const addPost = ( title: string,body: string) => {
    const newPost: IPost = {
      userId: 11,
      id: Date.now(),
      title: title,
      body: body,
      
    }    
    setPosts(prev => [newPost, ...prev]); 
    setLocalPosts(prev => [newPost, ...prev]); 
  };

   // SHOW USERDATA  
  useEffect(() => {
    ApiService.fetchUser().then((res => setUser(res)));      
  },[]);
 
    
  return (
    <>      
    <Profile     
    userdata={user}
    isActive={active}
    setIsActive={setActive}
    />
    <MenuAppBar
    setIsActive={setActive}
    /> 
    <PostForm 
      onAdd={addPost}
     />
    <Posts 
      localPosts={localPosts}
      posts={posts}/>    
    </>
  )
}

export default App;