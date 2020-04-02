import React from 'react';
import {Switch, Route} from 'react-router-dom'
import Lottie from 'react-lottie'

import classes from './App.module.css';
import * as loadingAnimation from '../../Assets/loading.json'

import AppContext from '../../Contexts/AppContext'
import MakerContext from "../../Contexts/MakerContext";

import Navbar from '../../Components/Navbar/Navbar'
import Maker from "../Maker/Maker";

const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loadingAnimation.default,
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
    }
};

function App() {
    const [loading, setLoading] = React.useState(true);
    const [burger, setBurger] = React.useState([]);
    const [cost, setCost] = React.useState(0);
    const [pieces, setPieces] = React.useState(1);

    React.useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 1000)
    }, [loading]);

    const addIngredient = (value) => {
        setBurger([...burger, value])
    };
    const removeIngredient = (value) => {
        let hasOne = true;

        setBurger(burger.filter((b) => {
            if (b === value && hasOne) {
                hasOne = false;
                return false
            }
            return true
        }))
    };

    const setPiece = (value) => {
        setPieces(value)
    };

    if ( loading ) {
        return (
            <div className={classes.Loading}>
                <Lottie
                    options={defaultOptions}
                    height={250}
                    width={250} />

                 <h1>Sedang Menyiapkan</h1>
            </div>
        )
    }

  return (
    <AppContext.Provider value={{
        cart: ["Hello", "ini", "Context"]
    }}>
        <MakerContext.Provider value={{
            burger,
            cost,
            pieces,
            addIngredient,
            removeIngredient,
            setCost,
            setPiece
        }}>
        <Navbar />
            <Switch>
                <Route path={"/"} exact component={Maker}/>
                <Route path={"/menu"} render={() => (<h1>Menu</h1>)} />
                <Route path={"/recipe"} render={() => (<h1>Recipe</h1>)} />
            </Switch>
        </MakerContext.Provider>
    </AppContext.Provider>
  );
}

export default App;
