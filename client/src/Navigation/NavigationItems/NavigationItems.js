import React, { Fragment } from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import classes from './NavigationItems.module.css';
import {signOut,isAuthenticated} from '../../employer/auth/auth';
import {withRouter, Link} from 'react-router-dom';

const NavigationItems = (props) => {

    const navItems = <div className={classes.btn+" collapse navbar-collapse"} id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
         <NavigationItem link = "/" isActive={props.active}>Home</NavigationItem>
         <NavigationItem link = "/about" isActive={props.active}>About</NavigationItem>
         {!isAuthenticated() && (
            <Fragment>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Employer
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <Link className="dropdown-item bg-light" to="/employer/login">Login</Link>
                        <Link className="dropdown-item bg-light" to="/employer/signup">Signup</Link>
                    </div>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Employee
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <Link className="dropdown-item bg-light" to="/employee/login">Login</Link>
                        <Link className="dropdown-item bg-light" to="/employee/signup">Signup</Link>
                    </div>
                </li>
                

            </Fragment>
         )}

         {isAuthenticated() && (
            <Fragment>
                <NavigationItem link = "/employer/dashboard" isActive={props.active}>Dashboard</NavigationItem> 
                <span className="nav-link" onClick={()=>
                    signOut(()=>{props.history.push('/')})} style={{cursor:'pointer', color:"white"}}>signout</span>  
            </Fragment>
            
         )}
         
    </ul>
</div>
    return (navItems);
}

export default withRouter(NavigationItems);