import React from 'react'

import classes from './Menu.module.css'
import {motion} from "framer-motion";

const Menu = () => {
    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{
                duration: 0.2
            }}
            exit={{opacity: 0}}
            className={classes.Menu}
        >
            <h1>Menu</h1>
        </motion.div>
    )
};

export default Menu