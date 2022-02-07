import React from "react"
import Header from "./Header"
import Body from "./Body"

function App(){
  return (
    <React.Fragment>
      <Header />
      <div class="container">
        <Body />
      </div>
    </React.Fragment>
  );
}

export default App;
