import React from 'react';
import logo from './logo.svg';
import './App.css';
import ListClasses from './components/canopy-components/ListClasses'
import Header from './components/ui/Header'

function App() {
  console.log('hello from the React app!')
  return (
    <div>
      <Header />
      <ListClasses />
    </div>
  );
}

export default App;
