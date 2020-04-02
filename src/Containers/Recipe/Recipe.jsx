import React from 'react'

import classes from './Recipe.module.css'
import {motion} from "framer-motion";

const Recipe = () => {
    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{
                duration: 0.2
            }}
            exit={{opacity: 0}}
            className={classes.Recipe}
        >
            <h1>Recipe</h1>
        </motion.div>
    )
};

export default Recipe