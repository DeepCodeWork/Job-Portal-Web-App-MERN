import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import classes from './NavigationItems.module.css';

const NavigationItems = (props) => {
    const navItems = <div className={classes.btn+" collapse navbar-collapse"} id="navbarSupportedContent">
    <ul className="navbar-nav">
         <NavigationItem link = "/" isActive={props.active}>Home</NavigationItem>
         <NavigationItem link = "/about" isActive={props.active}>About</NavigationItem>
         <NavigationItem link = "/employee/login" isActive={props.active}> Eployee Login</NavigationItem>
         <NavigationItem link = "/employee/signup" isActive={props.active}>Employee SignUp</NavigationItem>
         <NavigationItem link = "/employer/login" isActive={props.active}>Employer login</NavigationItem>
         <NavigationItem link = "/employer/signup" isActive={props.active}>Employer SignUp</NavigationItem>
    </ul>
    <div className={classes.rightButton+" ml-auto pl-2"}>
        <button className={classes.loginbtn}>Login</button>
        <button className={classes.signUpbtn+" px-3 pb-1"}>Sign up</button>
    </div>
</div>
    return (navItems);
}

export default NavigationItems;