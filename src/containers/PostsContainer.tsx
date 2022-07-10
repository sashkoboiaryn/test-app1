import React, {useEffect, useState} from 'react';
import { Container} from "@mui/material";
import { IPost } from "../types/Types";
import PostItem from '../components/PostItemComponent';

interface PostsProps {
  posts: IPost[];
  localPosts: IPost[];
}

const Posts: React.FC<PostsProps> = ({posts}) => {  
 
  return (  
    <Container className='posts-container'> 
      {posts.length > 0 &&    
        posts.map(item =>     
          <PostItem 
            key={item.id} 
            post={item} />
        )}        
    </Container>
  );
}

export default Posts;
