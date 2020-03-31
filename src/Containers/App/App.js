import React from 'react';
import './App.css';

import AppContext from '../../Contexts/AppContext'

import Navbar from '../../Components/Navbar/Navbar'

function App() {
  return (
    <AppContext.Provider value={{
        cart: ["Hello", "ini", "Context"]
    }}>
        <Navbar />
    </AppContext.Provider>
  );
}

export default App;
