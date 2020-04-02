import React from 'react'

import classes from './Basket.module.css'

import makerContext from '../../Contexts/MakerContext'

import {FaShoppingCart} from 'react-icons/fa'
import SumModal from "../Modal/SumModal/SumModal";

const Basket = () => {
    const [modal, setModal] = React.useState(false);

    const context = React.useContext(makerContext);

    const toggleModal = () => {
        setModal(!modal)
    };

    return (
        <div className={classes.Basket}>
            <SumModal toggleModal={toggleModal} isShow={modal} />
            <button className={classes.Bag}><FaShoppingCart /> Add to bag</button>
            <button className={classes.Multi} onClick={toggleModal}>{context.pieces}</button>
        </div>
    )
};

export default Basket