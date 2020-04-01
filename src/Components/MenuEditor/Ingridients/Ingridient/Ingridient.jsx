import React from 'react'

import classes from './Ingridient.module.css'

const Ingridient = (props) => {
    let ingredientStyle = [classes.Ingridient];

    if (props.title === "Salad") {
        ingredientStyle.push(classes.Salad)
    } else if (props.title === "Cheese") {
        ingredientStyle.push(classes.Cheese)
    } else if (props.title === "Meat") {
        ingredientStyle.push(classes.Meat)
    }

    return (
        <div className={ingredientStyle.join(" ")}>
            <img src={props.image} alt={"ingredient"} />
            <p>{props.title}</p>
            <div className={classes.Control}>
                <button>-</button>
                <span>0</span>
                <button>+</button>
            </div>
        </div>
    )
};

export default Ingridient