import React from 'react';
import {Switch, Route} from 'react-router-dom'
import './App.css';

import AppContext from '../../Contexts/AppContext'

import Navbar from '../../Components/Navbar/Navbar'
import Maker from "../Maker/Maker";

function App() {
  return (
    <AppContext.Provider value={{
        cart: ["Hello", "ini", "Context"]
    }}>
        <Navbar />
        <Switch>
            <Route path={"/"} exact component={Maker}/>
            <Route path={"/menu"} render={() => (<h1>Menu</h1>)} />
            <Route path={"/recipe"} render={() => (<h1>Recipe</h1>)} />
        </Switch>
    </AppContext.Provider>
  );
}

export default App;
