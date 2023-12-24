import React, { useContext, useEffect, useState } from "react";
import { PostList as PostListContext } from "./../store/Post-list-store";
import LoadingPage from "./LoadingPage";
import Post from "./Post";
import WelcomeMessage from "./WelcomeMessage";

const PostList = () => {
  const AllPost = useContext(PostListContext);
  const [fetching, setFetching] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    setFetching(true);
    fetch("https://dummyjson.com/posts", signal)
      .then((res) => res.json())
      .then((data) => {
        AllPost.addInitialPosts(data.posts);
        setFetching(false);
      });

    return () => {
      console.log("AAditya");
    };
    
  }, []);

  return (
    <>
      {!fetching && AllPost.postList.length === 0 && <WelcomeMessage />}
      {fetching && <LoadingPage />}
      {AllPost.postList.map((post) => {
        return <Post key={post.id} currentPost={post}></Post>;
      })}
    </>
  );
};

export default PostList;
