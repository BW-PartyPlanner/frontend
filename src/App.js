import React from 'react';
import Navigation from './components/Navigation';
import FormikGuestListForm from './components/GuestListForm'
;
import PotLuckParty from './components/PotLuckParty';

function App() {

  return (
    <div className="App">
      <Navigation />  
      <FormikGuestListForm />
      <PotLuckParty />
    </div>
  );
}

export default App;