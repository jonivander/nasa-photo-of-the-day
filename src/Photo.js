import React from "react";
import "./App.css";
import styled from "styled-components"

const PhotoStyling = styled.div`
  body {
    background-image: url("https://images.pexels.com/photos/998641/pexels-photo-998641.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260");
    background-attachment: fixed;
  }

  img {
    padding: 3vh;
    border: 2px solid grey;
    background-color: lightgrey;
    margin-bottom: 5vh;
  }

  h1 {
    font-family: 'Courier New', Courier, monospace;
  }

  h3, p { 
    padding: 4vh;
    border: 2px solid grey; 
    background-color: lightgrey;
  }

  h3 {
    font-family: Impact;
    font-size: 3rem;
    color: navy;
  }

  p {
    font-family: Courier; 
    font-size: 1.5rem;
    width: 75%;
    margin-left: auto;
    margin-right: auto; 
  }

  .photoFrame {
    display: flex;
    flex-direction: column;
    justify-content: center;
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
