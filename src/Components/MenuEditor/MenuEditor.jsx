import React from 'react'

import classes from './MenuEditor.module.css'

import Ingridients from "./Ingridients/Ingridients";
import Summary from "../Summary/Summary";
import Basket from "../Basket/Basket";

const MenuEditor = () => {
    return (
        <div className={classes.Editor}>
            <Ingridients />
            <Summary />
            <Basket />
        </div>
    )
};

export default MenuEditor