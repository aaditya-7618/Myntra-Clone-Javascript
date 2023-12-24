import "bootstrap/dist/css/bootstrap.min.css";
import React, { useContext, useRef } from "react";
import { PostList } from "../store/Post-list-store";
import "./../App.css";

const CreatePost = () => {

  const {addPost} = useContext(PostList);

  const userIdElement = useRef();
  const postTitleElement = useRef();
  const bodyElement = useRef();
  const reactionsElement = useRef();
  const tagsElement = useRef();
  

  const handleSubmit = (event) => {
    
    event.preventDefault();

    const userId = userIdElement.current.value;
    const postTitle = postTitleElement.current.value;
    const body = bodyElement.current.value;
    const reactions = reactionsElement.current.value;
    const tags = tagsElement.current.value.split(" ");
    console.log(tags);

    addPost(userId,postTitle,body,reactions,tags);
    alert("Your Post Added :) ");
    userIdElement.current.value = "";
    postTitleElement.current.value = "";
    bodyElement.current.value = "";
    reactionsElement.current.value = "";
    tagsElement.current.value = "";
  }

  return (
      <form className="create-post" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="userId" className="form-label">
            <b>Enter Your User Id here</b>
          </label>
          <input
            type="text"
            ref={userIdElement}
            className="form-control"
            id="userId"
            placeholder="Your User Id: "
          />
        </div>

        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            <b>Post Title</b>
          </label>
          <input
            type="text"
            ref={postTitleElement}
            className="form-control"
            id="title"
            placeholder="How are you feeling today..."
          />
        </div>

        <div className="mb-3">
          <label htmlFor="body" className="form-label">
            <b>Body</b>
          </label>
          <textarea
            type="text"
            ref={bodyElement}
            rows="4"
            className="form-control"
            id="body"
            placeholder="Tell us more about it..."
          />
        </div>

        <div className="mb-3">
          <label htmlFor="reactions" className="form-label">
            <b>Number of reactions</b>
          </label>
          <input
            type="number"
            ref={reactionsElement}
            className="form-control"
            id="reactions"
            placeholder="How many people reacted to this post: "
          />
        </div>

        <div className="mb-3">
          <label htmlFor="tags" className="form-label">
            <b>Enter Your Tags using spaces</b>
          </label>
          <input
            type="text"
            ref={tagsElement}
            className="form-control"
            id="tags"
            placeholder="Your Post tags: "
          />
        </div>

        <button type="submit" className="btn btn-primary post-submit">
          Post
        </button>
      </form>
  );
};

export default CreatePost;
