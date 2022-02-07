import React from "react";
import ViewPosts from "./ViewPosts";
import Following from "./Following";
import Followers from "./Followers";

function Profile(){
  return(
    <React.Fragment>
      <h3>Profile</h3>
      <ViewPosts />
      <Following />
      <Followers />
    </React.Fragment>
  );
}

export default Profile;