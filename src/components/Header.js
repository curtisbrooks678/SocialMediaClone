import React from "react";
import Home from "./Home";
import Notifications from "./Notifications";
import Messages from "./Messages";
import SearchBar from "./SearchBar";
import NewPost from "./NewPost";


function Header(){
  return (
    <React.Fragment>
      <Home />
      <Notifications />
      <Messages />
      <SearchBar />
      <NewPost />
    </React.Fragment>
  );
}

export default Header