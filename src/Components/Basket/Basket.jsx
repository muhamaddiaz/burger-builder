import React from 'react'

import classes from './Basket.module.css'

import {FaShoppingCart} from 'react-icons/fa'

const Basket = () => {
    return (
        <div className={classes.Basket}>
            <button className={classes.Bag}><FaShoppingCart /> Add to bag</button>
            <button className={classes.Multi}>0</button>
        </div>
    )
};

export default Basket