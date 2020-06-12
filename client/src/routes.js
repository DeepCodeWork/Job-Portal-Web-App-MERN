import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import employerLogin from './employer/login/login';
import employerSignup from './employer/signup/signup';
import employeeLogin from './employee/login/login';
import employeeSignup from './employee/signup/signup';
import homeSection from './home/home'; 


const Routes = () => {
    return(
        <BrowserRouter>
          
            <Switch>
                <Route path="/" exact component={homeSection}/>
                <Route path="/employer/login" exact component={employerLogin}/>
                <Route path="/employer/Signup" exact component={employerSignup}/>
                <Route path="/employee/login" exact component={employeeLogin}/>
                <Route path="/employe/Signup" exact component={employeeSignup}/>
                
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;