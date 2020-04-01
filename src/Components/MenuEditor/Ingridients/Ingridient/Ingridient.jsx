import React from 'react'
import _ from 'lodash'

import classes from './Ingridient.module.css'

import makerContext from '../../../../Contexts/MakerContext'

const Ingridient = (props) => {
    const context = React.useContext(makerContext);

    let ingredientStyle = [classes.Ingridient];

    if (props.title === "Salad") {
        ingredientStyle.push(classes.Salad)
    } else if (props.title === "Cheese") {
        ingredientStyle.push(classes.Cheese)
    } else if (props.title === "Meat") {
        ingredientStyle.push(classes.Meat)
    }

    let ingredientTotal = _.countBy(context.burger, (i) => {
        return i
    })[props.title];
    if (ingredientTotal === undefined) {
        ingredientTotal = 0
    }

    return (
        <div className={ingredientStyle.join(" ")}>
            <img src={props.image} alt={"ingredient"} />
            <p>{props.title}</p>
            <div className={classes.Control}>
                <button onClick={() => context.removeIngredient(props.title)}>-</button>
                <span>{ingredientTotal}</span>
                <button onClick={() => context.addIngredient(props.title)}>+</button>
            </div>
        </div>
    )
};

export default Ingridient