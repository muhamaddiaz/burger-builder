import React from 'react'

import MakerContext from "../../Contexts/MakerContext";
import Burger from "../../Components/Burger/Burger";
import MenuEditor from "../../Components/MenuEditor/MenuEditor";

const Maker = () => {
    const [burger, setBurger] = React.useState([]);
    const [cost, setCost] = React.useState(0);
    const [pieces, setPieces] = React.useState(0);

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

    const addPiece = () => {
        setPieces(pieces + 1)
    };

    const reducePiece = () => {
        setPieces(pieces - 1)
    };

    return (
        <MakerContext.Provider value={{
            burger,
            cost,
            pieces,
            addIngredient,
            removeIngredient,
            setCost,
            addPiece,
            reducePiece
        }}>
            <Burger />
            <MenuEditor />
        </MakerContext.Provider>
    )
};

export default Maker