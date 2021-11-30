import { useEffect, useState } from "react";
import './app.scss';

import axios from 'axios';
import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form';
import Results from './components/results';

function App() {

  const [pokemon, setPokemon] = useState([]);
  const [results, setResults] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
      .then(response => {
        setLoading(false);
        setResults(response.data);
      }).catch(e => {
        console.log(e, '<-- use effect error --<<')
        setLoading(false);
      })
  }, [pokemon])

    return (
      <>
        <Header />
        <div>Request Method: {results.method} </div>
        <div>URL: {results.url} </div>
        <Form 
        setPokemon={setPokemon} />
        {loading ? <p>loading</p> : <Results results={results} /> }
        <Footer />
      </>
    )
}

export default App;