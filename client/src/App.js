import React from 'react';
import './App.css';
import Jumbotron from './components/Jumbotron';
import SearchBus from './components/SearchBus';
import GoogleMap from './components/GoogleMap';

function App() {
  return (
    <div className="App">
      <div className="container">
      <header>
        <Jumbotron></Jumbotron>
      </header>
      <aside>
        <SearchBus></SearchBus>
      </aside>
      <main>
        <GoogleMap></GoogleMap>
      </main>
      </div>
    </div>
  );
}

export default App;
