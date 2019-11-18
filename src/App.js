import React from 'react';
import Navigation from './components/Navigation';
import FormikPotLuckForm from './components/PotLuckForm';

function App() {
  return (
    <div className="App">
      <Navigation />
      <h1>Hello World!</h1>
      <FormikPotLuckForm />
    </div>
  );
}

export default App;