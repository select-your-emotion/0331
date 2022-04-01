import React from 'react'

const AddsongForm = (props) => {


  const submitHandler = (event) => {
    event.preventDefault();
    props.onOrder();
  }
  
  return (

    <button className="add__button" type="submit" onClick={submitHandler}>Add</button>
  )
}

export default AddsongForm