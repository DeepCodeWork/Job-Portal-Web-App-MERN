import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import classes from './NavigationItems.module.css';

const NavigationItems = (props) => {
    const navItems = <div className={classes.btn+" collapse navbar-collapse"} id="navbarSupportedContent">
    <ul className="navbar-nav">
         <NavigationItem link = "/">Home</NavigationItem>
         <NavigationItem link = "/">About</NavigationItem>
         <NavigationItem link = "/">Login</NavigationItem>
         <NavigationItem link = "/">SignUp</NavigationItem>
    </ul>
    <div className={classes.rightButton+" ml-auto pl-2"}>
        <button className={classes.loginbtn}>Login</button>
        <button className={classes.signUpbtn+" px-3 pb-1"}>Sign up</button>
    </div>
</div>
    return (navItems);
}

export default NavigationItems;