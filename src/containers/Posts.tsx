import React, {useEffect, useState} from 'react';
import {Box, Container} from "@mui/material";
import { IPost } from "../types/Types";
import PostItem from '../components/PostItem';



interface PostsProps {
  posts: IPost[];
  
}

const Posts: React.FC<PostsProps> = ({posts}) => {  

  
  return (
    
    <Container className='posts-container'>
      
      {posts.map(item =>     
        <PostItem key={item.id} post={item}/>
        )}
    </Container>
  );
};

export default Posts;
