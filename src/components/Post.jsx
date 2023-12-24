import "bootstrap/dist/css/bootstrap.min.css";
import React, { useContext } from "react";
import { MdDelete } from "react-icons/md";
import "./../App.css";
import { PostList as PostListContext } from "./../store/Post-list-store";

const Post = ({ currentPost }) => {
  const { deletePost } = useContext(PostListContext);

  return (
    <>
      <div className="card post-card" style={{ width: "30rem" }}>
        <div className="card-body">
          <h5 className="card-title">
            {currentPost.title}
            {currentPost.reaction !== 0 && (
              <span
                className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                onClick={() => deletePost(currentPost.id)}
              >
                <MdDelete />
              </span>
            )}
          </h5>
          <p className="card-text">{currentPost.body}</p>
          {currentPost.tags.map((tag) => (
            <span key={`${tag}`} className="badge text-bg-primary hashtag">
              {tag}
            </span>
          ))}
          {currentPost.reactions !== 0 && currentPost.reaction!== "" && (
            <div className="alert alert-success reactions" role="alert">
              This post is reacted by {currentPost.reactions} people.
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Post;
