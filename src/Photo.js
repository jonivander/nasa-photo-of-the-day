import React from "react";
import "./App.css";
import styled from "styled-components"


const PhotoStyling = styled.div`
 

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
    padding: 7vh;
    border-top: 15px solid navy; 
    border-bottom: 15px solid navy; 
    background-image: url("https://images.pexels.com/photos/998641/pexels-photo-998641.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260");
    background-attachment: fixed;
    
  }

  h3 {
    font-family: Impact;
    font-size: 3rem;
    color: blue;
  }

  div {
    height: 200vh; 
    background-repeat: no-repeat; 
    background-position: center; 
    background-size: 90%; 
  }

  p {
    font-family: Courier; 
    font-size: 1.5rem;
    color: whitesmoke;
    width: 75%;
    margin-left: auto;
    margin-right: auto; 
    margin-bottom: 15vh;
    margin-top: -20vh;
   
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
  <PhotoStyling>
      <h3>{photo.title}</h3>
      <div style={{backgroundImage: `url(${photo.url})`}}></div>
      <p>{photo.explanation}</p>
  </PhotoStyling>
  )
}

export default Photo;
