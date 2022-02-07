import React from "react";
import Profile from "./Profile";
import Bio from "./Bio";
import NewsFeed from "./NewsFeed";
import FriendsList from "./FriendsList";

function Body(){
  return (
    <React.Fragment>
      <Profile />
      <Bio />
      <NewsFeed />
      <FriendsList />
    </React.Fragment>
  );
}

export default Body;