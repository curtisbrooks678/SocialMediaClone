import React from "react";
import Home from "./Home";
import Notifications from "./Notifications";
import Messages from "./Messages";
import SearchBar from "./SearchBar";
import NewPost from "./NewPost";

function Header(){
  const HeaderStyles = {
    display: "flex",
    backgroundColor: "teal",
    overflow: "hidden"
  }
  const SearchBarStyles = {
    display: "flex",
    float: "right",

  }
  return (
    <React.Fragment>
      <nav>
        <div style={HeaderStyles}>
          <Home />
          <Notifications />
          <Messages />
        </div>
        <div class="ml-auto" style={SearchBarStyles}>
          <SearchBar />
          <NewPost />
        </div>
      </nav>
    </React.Fragment>
  );
}

export default Header;