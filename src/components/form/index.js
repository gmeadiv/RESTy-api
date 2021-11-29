import './form.scss';

function Form(props) {

  const handleSubmit = e => {
    e.preventDefault();
    const formData = {
      url: 'https://pokeapi.co/api/v2/pokemon'
    }

    props.handleApiCall(formData);
  }

  const handleClick= (e) => {
    let {value} = e.target;
    props.setRequestParams({...props.requestParams, method: value});
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          <span>URL: </span>
          <input name='url' type='text' />
          <button onClick={handleClick} type='submit'>GO!</button>
        </label>
        <label>
          <button onClick={handleClick} id='get'> GET </button>
          <button onClick={handleClick} id='post'> POST </button>
          <button onClick={handleClick} id='put'> PUT </button>
          <button onClick={handleClick} id='delete'> DELETE </button>
        </label>
      </form>
    </>
  );
}

export default Form;