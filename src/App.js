import React, {useState, useEffect } from "react";
import Date from "./Date";
import Photo from "./Photo.js";
import axios from "axios";
import "./App.css";

function App() {
  const [data, setData] = useState('')

  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=kR3Njn7Ll11t8f2Qk71amqSE71EOrnRBh0kOVq5e`)
    .then(res => {
      setData(res.data);
    })
    .catch(error => {
      console.log(error); 
    })
  },[])

      return (
        <div className="App">
          <h1>NASA's Astronomy Photo of the Day</h1>
          <Date date = {data}/>
          <Photo photo = {data}/>
        </div>
      );
    
}

export default App;
