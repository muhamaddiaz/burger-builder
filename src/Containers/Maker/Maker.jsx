import React from 'react'

import MakerContext from "../../Contexts/MakerContext";
import Burger from "../../Components/Burger/Burger";

const Maker = () => {
    return (
        <MakerContext.Provider value={{
            burger: [],
            cost: 0,
            pieces: 0
        }}>
            <Burger />
        </MakerContext.Provider>
    )
};

export default Maker