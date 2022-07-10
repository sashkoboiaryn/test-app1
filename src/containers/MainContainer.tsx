import { useEffect } from "react";
import useGlobalState from "../state/State";
import ApiService from "../service/ApiService";
import { IPost } from "../types/Types";
import Posts from "./PostsContainer";
import { PostForm } from "../components/PostFormComponent";
import { Container, Typography } from "@mui/material";

const MainContainer = () => {

    const [posts, setPosts] = useGlobalState('posts');
    const [localPosts, setLocalPosts] = useGlobalState('localPosts');

    useEffect(() => { 
        if (posts.length === 0) {      
        ApiService.fetchPosts().then((res => setPosts(res!))); 
    
          if (localStorage.getItem("posts")) {
            setLocalPosts(JSON.parse(localStorage.getItem("posts") || "") as Array<IPost>);
          };
          if (localPosts.length) {
            setPosts(posts.concat(localPosts));
        }}                
      },[]);
    
      useEffect(() => {
        localStorage.setItem("posts", JSON.stringify(localPosts));
      }, [localPosts]);
      
    
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

    return(
        <Container sx={{mt:10}}>
            <PostForm 
                onAdd={addPost}
            /> 
            <Typography variant="h3" 
                sx={{textAlign:'center'}}>
               Posts List 
            </Typography>      
            <Posts 
                localPosts={localPosts}
                posts={posts}
            />
        </Container>   
   );
}

export default MainContainer;