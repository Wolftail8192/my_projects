
import './App.css';
import {useEffect, useState} from "react";
import Users from "./components/Users";
import Posts from "./components/Posts";
import Comments from "./components/Comments";

function App() {


    

  return (
    <div className="App">
        <div className={'das'}>
            <Users/>
            <hr/>
            <Posts/>
            <hr/>
        </div>
            <Comments/>

    </div>
  );
}

export default App;
