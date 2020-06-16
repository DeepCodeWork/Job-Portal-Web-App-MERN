import React from 'react';
import classes from './Navigation.module.css';
import {withRouter} from 'react-router-dom';
import NavigationItems from './NavigationItems/NavigationItems';

const isActive = (history,path) =>{
    if(history.pathname===path)
        return "active";
    else
        return "";
};


const Navigation = () => {
    const navBar = 
        <nav className = {classes.navBar + " navbar navbar-expand-lg navbar-dark"}>
            <div className = "container">
                <a className = {classes.navbarBrand+" navbar-brand ml-1 text-white"} href="/"> <span style={{color:"#0096ea"}}>S</span><span style={{color:"white"}}>tartUp</span></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <NavigationItems active = {isActive}/>
            </div>
        </nav>

        return (navBar);
}

export default withRouter(Navigation);