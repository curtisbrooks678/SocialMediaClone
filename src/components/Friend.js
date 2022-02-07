import React from "react";
import AddFriend from "./AddFriend.js";
import PropTypes from "prop-types";

function Friend(props){
  return(
    <React.Fragment>
      <h3>{props.friendName}</h3>
      <AddFriend />
    </React.Fragment>
  );
}

Friend.propTypes = {
  friendName: PropTypes.string.isRequired
}

export default Friend;