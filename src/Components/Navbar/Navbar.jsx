import React from 'react'

import classes from './Navbar.module.css'

import { FaShoppingCart } from 'react-icons/fa'
import SecondNavbar from "./SecondNavbar/SecondNavbar";

const Navbar = () => {
    const buttonClasses = [classes.CheckoutButton, classes.Active];

    return (
        <React.Fragment>
            <div className={classes.Navbar}>
                <h1>StackFood</h1>
                <button className={buttonClasses.join(" ")}>
                    <FaShoppingCart />
                </button>
            </div>
            <SecondNavbar />
        </React.Fragment>

    )
};

export default React.memo(Navbar)