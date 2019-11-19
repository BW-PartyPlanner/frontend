import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import Navigation from './components/Navigation';

import FormikPotLuckForm from './components/PotLuckForm';
import PotLuckParty from './components/PotLuckParty';

function App() {


  return (
    <div className="App">
      <Navigation />
      <h1>Hello World!</h1>
       <FormikPotLuckForm  />
      <PotLuckParty />
    </div>
  );
}

export default App;