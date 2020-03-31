import React from 'react'

import MakerContext from "../../Contexts/MakerContext";

const Maker = () => {
    return (
        <MakerContext.Provider value={{
            burger: [],
            cost: 0,
            pieces: 0
        }}>
            <h1>Hello Maker</h1>
        </MakerContext.Provider>
    )
};

export default Maker