import React, { useContext } from 'react'

import AppContext from '../../Contexts/AppContext'

const Navbar = () => {
    const appContext = useContext(AppContext);

    return (
        <h1>{appContext.cart}</h1>
    )
};

export default Navbar