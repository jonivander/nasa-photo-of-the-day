import React from "react";
import Date from "./Date";
import Photo from "./Photo.js";
import axios from "axios";
import "./App.css";
import { render } from "react-dom";

function App() {
  state = {
    date: "",
    photo: "",
  };

  componentDidMount() {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=$DEMO_KEY`)
      .then(response => response.json())
      .then(json => this.setState({ photo: json }));
      .catch(error => {
        console.log(error); 
      })
  }
  
      return (
        <div className="App">
          <h1>NASA's Astronomy Photo of the Day</h1>
          <Date />
          <Photo photo={this.tate.photo}/>
        </div>
      );
    
}

export default App;
