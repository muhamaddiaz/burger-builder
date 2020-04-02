import React from 'react'
import {createPortal} from 'react-dom'

import classes from './SumModal.module.css'

import makerContext from '../../../Contexts/MakerContext'

const SumModal = (props) => {
    const context = React.useContext(makerContext);

    const handleChange = (event) => {
        context.setPiece(event.target.value)
    };

    return createPortal(
        <div className={classes.SumModal}>
            <div className={classes.Content}>
                <div className={classes.Selector}>
                    <h3>How much?</h3>
                    {/*<input type="number" value={context.pieces} />*/}
                    <select value={context.pieces} onChange={handleChange}>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                    </select>
                </div>
                <button onClick={props.toggleModal}>Update basket</button>
            </div>
        </div>
    , document.querySelector("#modal"))
};

export default SumModal