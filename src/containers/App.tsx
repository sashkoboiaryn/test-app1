import React, { useEffect } from "react";
import ApiService from "../service/ApiService";
import useGlobalState from "../state/State";
import { IPost } from "../types/Types";
import MainContainer from "../pages/MainPage";
import Profile from "../pages/ProfilePage";
import NotFound from "../components/NotFoundComponent";
import { Routes, Route } from "react-router-dom";

import { MenuAppBar } from "../components/AppBarComponent";

const App: React.FC = () => {
  const [posts, setPosts] = useGlobalState("posts");
  const [localPosts, setLocalPosts] = useGlobalState("localPosts");

  useEffect(() => {
    if (posts.length === 0) {
      ApiService.fetchPosts().then((res) => setPosts(res!));

      if (localStorage.getItem("posts")) {
        setLocalPosts(
          JSON.parse(localStorage.getItem("posts") || "") as Array<IPost>
        );
      }
      if (localPosts.length) {
        setPosts(posts.concat(localPosts));
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("posts", JSON.stringify(localPosts));
  }, [localPosts]);

  return (
    <>
      <Routes>
        <Route path="/" element={<MenuAppBar />}>
          <Route index element={<MainContainer />} />
          <Route path="profile" element={<Profile />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
