import React from "react";
import Profile from "./Profile";
import Bio from "./Bio";
import NewsFeed from "./NewsFeed";
import FriendsList from "./FriendsList";

function Body(){
  return (
    <React.Fragment>
      <div class="row">
        <div class="col-4">
          <Profile />
          <Bio />
        </div>
        <div class="col-4">
          <NewsFeed />
        </div>
        <div class="col-4">
          <FriendsList />
        </div>
      </div>
    </React.Fragment>
  );
}

export default Body;