import React from "react";
import Friend from "./Friend"

const listOfFriends = [
  {
    friendName: "Jack"
  },
  {
    friendName: "Jill"
  },
  {
    friendName: "Bob"
  }
]

function FriendsList(){
  return(
    <React.Fragment>
      <h3>Friends</h3>
      {listOfFriends.map((friend, index) =>
        <Friend friendName={friend.friendName}
          key={index}/>
          )}
    </React.Fragment>
  );
}

export default FriendsList;