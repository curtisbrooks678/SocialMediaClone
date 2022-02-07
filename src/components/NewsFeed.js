import React from "react";
import NewsFeedBody from "./NewsFeedBody";
import NewsFeedHeader from "./NewsFeedHeader";

function NewsFeed(){
  return(
    <React.Fragment>
      <h3>NewsFeed</h3>
      <NewsFeedHeader />
      <NewsFeedBody />
    </React.Fragment>
  );
}

export default NewsFeed;