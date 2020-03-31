import React from 'react'

import classes from './Burger.module.css'

import BreadTopImage from '../../Assets/Top_Bread.png'
import BreadBottomImage from '../../Assets/Bottom_Bread.png'
import MeatImage from '../../Assets/Meat.png'
import SaladImage from '../../Assets/Salad.png'
import CheeseImage from '../../Assets/Cheese.png'

const Burger = () => {
    const ingredients = ["salad", "meat", "cheese"];

    const burgerGenerated = ingredients.map((ingredient, index) => {
        if (ingredient === "meat") {
            return <img src={MeatImage} key={index} alt={"meat"} />
        }
        if (ingredient === "salad") {
            return <img src={SaladImage} key={index} alt={"salad"} />
        }
        if (ingredient === "cheese") {
            return <img src={CheeseImage} key={index} alt={"cheese"} />
        }

        return null
    });

    burgerGenerated.unshift(<img src={BreadTopImage} key={"top_bread"} alt={"top bread"} />);
    burgerGenerated.push(<img src={BreadBottomImage} key={"bottom_bread"} alt={"bottom bread"} />);

    return (
        <div className={classes.Burger}>
            {burgerGenerated}
        </div>
    )
};

export default Burger