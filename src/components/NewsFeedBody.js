import React from "react";
import Post from "./Post.js";

const postList = [
  {
    postTitle: 'Fido\'s Day at the Dog Park'
  },
  {
    postTitle: 'Vlog Day 1'
  },
  {
    postTitle: 'Pie Eating Contest with Granny'
  }
]

function NewsFeedBody(){
  return(
    <React.Fragment>
    <h3>NewsFeedBody</h3>
    <hr />
    {postList.map((post, index) =>
      <Post postTitle={post.postTitle}
        key={index}/>
    )}
    </React.Fragment>
  );
}

export default NewsFeedBody;