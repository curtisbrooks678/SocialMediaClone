import React from "react";
import PropTypes from "prop-types";

function Post(props){
  return(
    <h3>{props.postTitle}</h3>
  );
}

Post.propTypes = {
  postTitle: PropTypes.string.isRequired
};

export default Post;