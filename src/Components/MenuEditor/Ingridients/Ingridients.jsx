import React from 'react'

import classes from './Ingridients.module.css'

import SaladImage from '../../../Assets/Salad_View.png'
import CheeseImage from '../../../Assets/Cheese_View.png'
import MeatImage from '../../../Assets/Meat.png'

import {FaChevronRight} from 'react-icons/fa'
import Swiper from 'react-id-swiper'
import Ingridient from "./Ingridient/Ingridient";

const params = {
    slidesPerView: 2,
    spaceBetween: 15,
};

const items = [
    {
        title: "Salad",
        image: SaladImage
    },
    {
        title: "Cheese",
        image: CheeseImage
    },
    {
        title: "Meat",
        image: MeatImage
    }
];

const Ingridients = () => {
    const itemsGenerated = items.map((item, index) => (
        <div key={index}>
            <Ingridient {...item} />
        </div>

    ));

    return (
        <div className={classes.Ingridients}>
            <div className={classes.Information}>
                <h2>Ingredients</h2>
                <FaChevronRight style={{color: "red"}} />
            </div>
            <div className={classes.SlideMenu}>
                <Swiper {...params}>
                    {itemsGenerated}
                </Swiper>
            </div>
        </div>
    )
};

export default Ingridients