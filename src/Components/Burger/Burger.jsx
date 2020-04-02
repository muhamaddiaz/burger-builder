import React from 'react'

import classes from './Burger.module.css'

import makerContext from '../../Contexts/MakerContext'

import BreadTopImage from '../../Assets/Top_Bread.png'
import BreadBottomImage from '../../Assets/Bottom_Bread.png'
import MeatImage from '../../Assets/Meat.png'
import SaladImage from '../../Assets/Salad.png'
import CheeseImage from '../../Assets/Cheese.png'

const Burger = () => {
    const context = React.useContext(makerContext);

    console.log(context.burger);

    const burgerGenerated = context.burger.map((ingredient, index) => {
        if (ingredient === "Meat") {
            return <img src={MeatImage} key={index} alt={"meat"} />
        }
        if (ingredient === "Salad") {
            return <img src={SaladImage} key={index} alt={"salad"} />
        }
        if (ingredient === "Cheese") {
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

export default React.memo(Burger)