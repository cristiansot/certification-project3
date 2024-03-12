import React from "react";
import '../assets/css/crud.css'

const Crud = (props) => {

  return (
    <div className="containerCrud" key={props.id}>
      <h1>{props.name}</h1>
      <button className="playBtn" key={props.id}>Play</button>
      <button className="editBtn"key={props.id}>Edit</button>
      <button className="deleteBtn"key={props.id}>Delete</button>
    </div>
  )
}

export default Crud