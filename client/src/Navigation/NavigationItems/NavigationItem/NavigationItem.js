import React from 'react';
import classes from './NavigationItem.module.css';
import {Link, withRouter} from 'react-router-dom';

const NavigationItem = (props) => {

    const isActive = ()=>props.isActive(props.location,props.link);

    return (
        <li className={classes.navItem+" nav-item mx-2"}>
            <Link className={isActive()+" nav-link"} to={props.link}>{props.children}</Link>
         </li>
    );
}

export default withRouter(NavigationItem);