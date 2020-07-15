import React from "react";
import "./App.css";

function Photo(props){
  const photo = props
  return(
  <div>
      <h3>{photo.title}</h3>
      <img src={photo.url} alt={photo.title} />
      <p>{photo.explanation}</p>
  </div>
  )
}

export default Photo;
