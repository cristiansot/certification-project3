import React from "react";

const Crud = (props) => {

  return (
    <div className="containerCrud" key={props.id}>
      <h1>{props.name}</h1>
      <buttons key={props.id}>Play</buttons>
      <buttons key={props.id}>Edit</buttons>
      <buttons key={props.id}>Delete</buttons>
    </div>
  )
}

export default Crud