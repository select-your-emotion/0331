import React from 'react'

const AddsongForm = (props) => {


  const submitHandler = (event) => {
    event.preventDefault();
    props.onOrder();
  }
  
  return (

    <button type="submit" onClick={submitHandler}>Add</button>
  )
}

export default AddsongForm