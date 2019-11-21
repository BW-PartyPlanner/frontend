import React from 'react';
import Navigation from './components/Navigation';
import './styles.scss';

import FormikPotLuckForm from './components/PotLuck/PotLuckForm';

function App() {

  return (
    <div className="App">
      <Navigation />  
      <FormikPotLuckForm />   
    </div>
  );
}

export default App;