import { useEffect, useState } from "react";
import './app.scss';

import axios from 'axios';
import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form';
import Results from './components/results';

function App() {

  const [pokemon, setPokemon] = useState([]);

  const [data, setData] = useState(null);
  const [requestParams, setRequestParams] = useState({});

  const callApi = (formData) => {
    setRequestParams({ ...requestParams, ...formData })
  }

  useEffect(() => {

    axios.get(`${requestParams.url}`)
      .then(response => {
        setData(response.data);
      }).catch(e => {
        console.log(e, '<-- use effect error --<<')
      })

  }, [pokemon])

  return (
    <>
      <Header />
      <div>Request Method: {requestParams.method} </div>
      <div>URL: {requestParams.url} </div>
      <Form
        callApi={callApi}
        setPokemon={setPokemon}
        setRequestParams={setRequestParams}
        requestParams={requestParams} />
      {data ? <Results data={data} /> : <p>loading</p>}
      <Footer />
    </>
  )
}

export default App;