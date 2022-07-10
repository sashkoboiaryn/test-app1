import { IPost } from "../types/Types";
import React, {useState, useEffect} from 'react'; 
import {Card, CardHeader, CardContent, Typography,} from "@mui/material";
import { lightBlue } from '@mui/material/colors';

interface PostItemProps {
    post: IPost;    
}

const PostItem: React.FC<PostItemProps> = ({post}) => {

    return(
        
      <Card className='post-card' variant="outlined" sx={{bgcolor: lightBlue[50]}}>
        <CardHeader            
          title={post.title}
        />
        <CardContent>
          <Typography 
            variant="body1" 
            color="GrayText.secondary">
              {post.body}
          </Typography>
        </CardContent>
      </Card>  
    );
}

export default PostItem;