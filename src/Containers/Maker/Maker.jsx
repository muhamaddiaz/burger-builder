import React from 'react'
import {motion} from 'framer-motion'

import Burger from "../../Components/Burger/Burger";
import MenuEditor from "../../Components/MenuEditor/MenuEditor";

const Maker = () => {
    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{
                duration: 0.2
            }}
            exit={{opacity: 0}}
        >
            <Burger />
            <MenuEditor />
        </motion.div>
    )
};

export default Maker