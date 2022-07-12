import React from "react";
import { Container } from "@mui/material";
import { IPost } from "../types/Types";
import PostItem from "./PostItemComponent";

interface PostsProps {
  posts: IPost[];
  localPosts: IPost[];
}

const Posts: React.FC<PostsProps> = ({ posts, localPosts }) => {
  return (
    <Container sx={{ p: 5 }}>
      {localPosts.length > 0 &&
        localPosts.map((localitem) => (
          <PostItem key={localitem.id} post={localitem} />
        ))}
      {posts.length > 0 &&
        posts.map((item) => <PostItem key={item.id} post={item} />)}
    </Container>
  );
};

export default Posts;
