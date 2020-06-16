import React, { Component } from 'react';
const { Route, Redirect } = require("react-router-dom")
const { isAuthenticated } = require("./auth")

const PrivateRoute = ({component:Component, ...rest}) => {
    return <Route
        {...rest}
        render={props=>
            isAuthenticated()?(<Component {...props}/>
            ):(
            <Redirect
                to={{
                    pathname:"/employer/login",
                    state:{ from:props.location }
                }}
            /> 
            )}
    />
}

export default PrivateRoute;