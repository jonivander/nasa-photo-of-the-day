import React, {useState, useEffect } from "react";
import Date from "./Date";
import Photo from "./Photo.js";
import axios from "axios";
import "./App.css";
import styled from "styled-components"

const AppStyling = styled.div`
  body{
    background-color: darkgray;
  }

  h1 {
    font-family: Courier;
    color: white;
    border: 2px solid grey;
    background-image: url("https://images.pexels.com/photos/998641/pexels-photo-998641.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260");
    background-attachment: fixed;
    /* background-image: linear-gradient(to bottom right, black, blue, grey, lightgrey, grey, blue, black); */
    padding: 7vh; 
    width: 75%;
    margin: auto;
    margin-top: 5vh;
    margin-bottom: 5vh;
  }

`

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
        <AppStyling className="App">
          <h1>NASA's Astronomy Photo of the Day</h1>
          <Date className="datePod" date = {data}/>
          <Photo photo = {data}/>
        </AppStyling>
      );
    
}

export default App;
