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
        <nav className = {classes.navBar + " navbar navbar-expand-lg navbar-dark mb-4"}>
            <div className = "container">
                <a className = {classes.navbarBrand+" navbar-brand ml-1 text-white"} href="/"> <span style={{color:"#0096ea"}}>E</span><span style={{color:"white"}}>dunomics</span></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <NavigationItems active = {isActive}/>
            </div>
        </nav>

        return (navBar);
}

export default withRouter(Navigation);