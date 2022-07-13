import './App.css';
import React from 'react';
import Introduce from './components/Introduce';
import History from './components/History';
import Photo from './components/Photo';
import SNSLink from './components/SNSLink';

function App() {
  return (
    <div className="App">
      <Photo/>
      <Introduce/>
      <History/>
      <SNSLink/>
    </div>
  );
}

export default App;
