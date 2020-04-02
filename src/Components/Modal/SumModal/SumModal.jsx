import React from 'react'
import {createPortal} from 'react-dom'
import { motion, AnimatePresence } from 'framer-motion'

import classes from './SumModal.module.css'

import makerContext from '../../../Contexts/MakerContext'

const SumModal = (props) => {
    const context = React.useContext(makerContext);

    const handleChange = (event) => {
        context.setPiece(event.target.value)
    };

    console.log(props.isShow);

    return createPortal(
        <AnimatePresence>
            {props.isShow && (
                <motion.div
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{duration: 0.2}}
                    exit={{opacity: 0}}
                    className={classes.SumModal}
                >
                    <motion.div
                        initial={{y: "100%"}}
                        animate={{y: 0}}
                        transition={{duration: 0.3}}
                        exit={{y: "100%"}}
                        className={classes.Content}
                    >
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
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    , document.querySelector("#modal"))
};

export default SumModal