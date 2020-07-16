import React from "react";
import "./App.css";
import styled from "styled-components"

const PhotoStyling = styled.div`
  body {
    background-color: 'black';
    

  }

  .photoFrame {
    padding: 3vh;
    border: 2px solid grey;
  }

  h3 { 
    font-family: Impact;
    font-size: 3rem; 
    padding 2vh;
    border: 2px solid grey; 
    background-color: lightgrey;

  }
`

function Photo(props){
  const {photo} = props
  return( 
  <PhotoStyling class='photoFrame'>
      <h3>{photo.title}</h3>
      <img src={photo.url} alt={photo.title} />
      <p>{photo.explanation}</p>
  </PhotoStyling>
  )
}

export default Photo;
