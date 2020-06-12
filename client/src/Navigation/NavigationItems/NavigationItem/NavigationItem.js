import React from 'react';
import classes from './NavigationItem.module.css';

const NavigationItem = (props) => {
    return (
        <li className={classes.navItem+" nav-item mx-2"}>
            <a className="nav-link" href={props.link}>{props.children}</a>
         </li>
    );
}

export default NavigationItem;