import React from 'react'

import makerContext from '../../Contexts/MakerContext'

import classes from './Summary.module.css'
import _ from "lodash";

const Summary = () => {
    const context = React.useContext(makerContext);

    const computedSum = () => {
        let ingredientTotal = _.countBy(context.burger, (i) => {
            return i
        });

        let sumSalad = 0, sumCheese = 0, sumMeat = 0;

        if (ingredientTotal["Salad"]) {
            sumSalad = ingredientTotal["Salad"] * 1;
        }
        if (ingredientTotal["Cheese"]) {
            sumCheese = ingredientTotal["Cheese"] * 2;
        }
        if (ingredientTotal["Meat"]) {
            sumMeat = ingredientTotal["Meat"] * 3;
        }

        return (sumSalad + sumCheese + sumMeat);
    };

    return (
        <div className={classes.Summary}>
            <h3>Total</h3>
            <h2>$ {computedSum()}</h2>
        </div>
    )
};

export default Summary