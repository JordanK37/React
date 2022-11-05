import Mycounter from "./components/Mycounter";
import MyGithub from "./components/MyGithub";
import React from "react";


function App() {
  return (
    <div>
      <Mycounter incBy={1} />
      <hr />
      <Mycounter incBy={2} />
      <hr />
      <MyGithub /> 

    </div> 
  );
}

export default App;