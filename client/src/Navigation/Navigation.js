import React from 'react';
import classes from './Navigation.module.css';
import Logo from '../Logo/Logo';
import NavigationItems from './NavigationItems/NavigationItems';


const Navigation = () => {
    const navBar = 
        <nav className = {classes.navBar + " navbar navbar-expand-lg navbar-dark fixed-top"}>
            <div className = "container">
                {/* {<Logo className = {classes.logo}/>} */}
                <a className = {classes.navbarBrand+" navbar-brand ml-1 text-white"}> <span style={{color:"#0096ea"}}>E</span><span style={{color:"white"}}>dunomics</span></a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <NavigationItems/>
            </div>
        </nav>

        return (navBar);
}

export default Navigation;