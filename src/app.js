import { useState } from "react";

import './app.scss';

import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form';
import Results from './components/results';

function App() {

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     data: null,
  //     requestParams: {}
  //   }
  // }

  const [data, setData] = useState(null);
  const [requestParams, setRequestParams] = useState({});

  const callApi = (reqParams) => {

    const data = {
      count: 2,
      results: [
        {name: 'fake thing 1', url: 'http://fakethings.com/1'},
        {name: 'fake thing 2', url: 'http://fakethings.com/2'}
      ]
    }

    setData(data);
    setRequestParams(requestParams, reqParams);
  }

    return (
      <>
        <Header />
        <div>Request Method: {requestParams.method} </div>
        <div>URL: {requestParams.url} </div>
        <Form 
        handleApiCall={callApi} 
        setRequestParams={setRequestParams}
        requestParams={requestParams} />
        <Results data={data} />
        <Footer />
      </>
    )
}

export default App;