import './App.css';
import React from 'react';
import Header from './components/Header';
import Introduce from './components/Introduce';
import History from './components/History';
import Photo from './components/Photo';
import SNSLink from './components/SNSLink';
import SymposiumList from './components/SymposiumList';
import backgroundImage from './images/sea-ocean_00013.jpg';

function App() {
  return (
    <div className="App" style={{backgroundImage: `url(${backgroundImage})`}}>
      <Header/>
      <Photo/>
      <Introduce/>
      <History/>
      <SymposiumList/>
      <SNSLink/>
    </div>
  );
}

export default App;
