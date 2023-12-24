import React, { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  addInitialPosts: () => {},
  deletePost: () => {},
});

const PostListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "DELETE_POST") {
    newPostList = newPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload.newPostData, ...currPostList];
  }
  else if(action.type === "ADD_INITIAL_POST"){
    newPostList = action.payload.posts;
  }

  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(PostListReducer,[]);

  const addPost = (userId, postTitle, body, reactions, tags) => {
    const newPostData = {
      id: userId,
      title: postTitle,
      body: body,
      reactions: reactions,
      tags: tags,
    };
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        newPostData,
      },
    });
  };

  const addInitialPosts = (posts) => {
    console.log(posts);
    dispatchPostList({
      type: "ADD_INITIAL_POST",
      payload: {
        posts,
      },
    });
  };


  const deletePost = (postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
  };

  return (
    <PostList.Provider value={{ postList, addPost, addInitialPosts, deletePost }}>
      {children}
    </PostList.Provider>
  );
};

export default PostListProvider;
