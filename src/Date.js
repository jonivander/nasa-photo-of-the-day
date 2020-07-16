import React from "react";
import "./App.css";

function Date(props){
  const {date} = props
  return(
<div>{date.date}</div>
  )
}

export default Date;
