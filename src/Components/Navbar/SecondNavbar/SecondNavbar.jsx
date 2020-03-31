import React from 'react'

import classes from './SecondNav.module.css'

const links = [
    {
        id: "maker",
        text: "Maker",
        href: "#/"
    },
    {
        id: "menu",
        text: "Menu",
        href: "#menu"
    },
    {
        id: "recipe",
        text: "Recipe",
        href: "#recipe"
    },
];

const SecondNavbar = () => {
    const [active, setActive] = React.useState("maker");

    const buttonClick = (event) => {
        setActive(event.target.id);
    };

    const generateLinks = links.map((link) => {
        return active === link.id ?
            <a href={link.href} id={link.id} key={link.id} className={classes.Active} onClick={buttonClick}>{link.text}</a>
            : <a href={link.href} id={link.id} key={link.id} onClick={buttonClick}>{link.text}</a>
    });

    return (
        <div className={classes.SecondNavbar}>
            {generateLinks}
        </div>
    )
};

export default SecondNavbar