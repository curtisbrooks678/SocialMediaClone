import React from "react";
import PostStatus from "./PostStatus.js";

function NewsFeedHeader(){
  return(
    <React.Fragment>
      <h3>NewsFeedHeader</h3>
      <PostStatus />
    </React.Fragment>
    
  );
}

export default NewsFeedHeader;