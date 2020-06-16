import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import employerLogin from './employer/login/login';
import employerSignup from './employer/signup/signup';
import employeeLogin from './employee/login/login';
import employeeSignup from './employee/signup/signup';
import homeSection from './home/home'; 
import aboutSection from './aboutSection/aboutSection';
import Dashboard from './employer/dashboard/dashboard';
import PrivateRoute from './employer/auth/privateRoutes';
import addJobForm from './employer/jobs/addJobForm/addJobForm';

const Routes = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={homeSection}/>
                <Route path="/about" exact component={aboutSection}/>
                <Route path="/employer/login" exact component={employerLogin}/>
                <Route path="/employer/Signup" exact component={employerSignup}/>
                <Route path="/employee/login" exact component={employeeLogin}/>
                <Route path="/employee/Signup" exact component={employeeSignup}/>
                <PrivateRoute path="/employer/dashboard" exact component={Dashboard}/>
                <PrivateRoute path="/employer/addjob" exact component={addJobForm}/>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;