import React from "react";

import './form.scss';

const Form = () => {

  let handleSubmit = e => {
    e.preventDefault();
    const formData = {
      method: 'GET',
      url: 'https://pokeapi.co/api/v2/pokemon'
    }

    callApi(formData);
  }


  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          <span>URL: </span>
          <input name='url' type='text' />
          <button type='submit'>GO!</button>
        </label>
        <label>
          <button id='get'> GET </button>
          <button id='post'> POST </button>
          <button id='put'> PUT </button>
          <button id='delete'> DELETE </button>
        </label>
      </form>
    </>
  )

}

export default Form;