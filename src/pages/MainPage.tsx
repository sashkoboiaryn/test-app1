import { useEffect } from "react";
import useGlobalState from "../state/State";
import ApiService from "../service/ApiService";
import { IPost } from "../types/Types";
import Posts from "../components/PostsComponentr";
import { PostForm } from "../components/PostFormComponent";
import { Container, Typography } from "@mui/material";

const MainContainer: React.FC = () => {
  const [posts] = useGlobalState("posts");
  const [localPosts] = useGlobalState("localPosts");

  return (
    <Container sx={{ mt: 14 }}>
      <PostForm />
      <Typography variant="h3" sx={{ textAlign: "center" }}>
        Posts List
      </Typography>
      <Posts localPosts={localPosts} posts={posts} />
    </Container>
  );
};

export default MainContainer;
