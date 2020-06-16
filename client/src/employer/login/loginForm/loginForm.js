import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import {authenticate} from '../../auth/auth';
import {API} from '../../../config';


const LoginForm = () => {   

    const [loginValues, loginInputState] = useState({
        email:'k@c.com',
        password:'123123',
        error:'',
        loading:false,
        success:false,
        redirect:false
    });
    
    const {email,password,error,success,loading,redirect} = loginValues;

    const inputHandler = (inputValue) => event=>
    loginInputState({
        ...loginValues, 
        error:'',
        [inputValue]:event.target.value
});
    
    const signin = (user) =>{
        const ADD_URL = `${API}/employer/get`
        return fetch(ADD_URL,{
                method:"POST",
                headers: { 'Content-Type': 'application/json'},
                body:JSON.stringify(user)
            })
                .then(response=>{console.log(response); return response.json()})
                .catch(err=>console.log(err));
        };
    
        const loginEmployer = (event) => {
    
            event.preventDefault();
            signin({employerEmail:loginValues.email,employerPassword:loginValues.password})
                .then((response)=>{
                if(response.error){
                    loginInputState({
                        ...loginValues, error:response.error,success:false,redirect:false,loading:false
                    })
                }else{
                    authenticate(response,()=>{
                        loginInputState({
                            ...loginValues,email:'',password:'',error:'',success:true,redirect:true,loading:true
                        })
                    })
                }
            }).catch((err)=>{
                console.log(err);
            })
                
        }
        
        const loginError = () => <div className="alert alert-danger" style={{display: loginValues.error?'':'none'}}>{loginValues.error}</div>
        const loadingBox = () => <div className="alert alert-info" style={{display: loginValues.success?'':'none'}}>Loading....</div>
        const reDirectEmployer = () =>{if(redirect) return <Redirect to="/employer/dashboard"/>}
    return (
        <div>
            <div className="card bg-light text-center card-form">
                        <div className="card-body">
                            <div className="card-title">
                            <h4>Employer Login</h4></div>
								{loginError()}
                                {loadingBox()}
                                {reDirectEmployer()}
								<div>
                                <form action="">
                                    <div className="form-group">
                                        <input className="form-control form-control" onChange={inputHandler('email')} value={email} type="email" placeholder="Email"/>
                                    </div>

                                    <div className="form-group">
                                        <input className="form-control form-control" onChange={inputHandler('password')} value={password} type="password" name="" id="" placeholder="Password"/>
                                    </div>
                                    
                                    <div className="form-group">
                                        <button className="btn btn-outline-dark btn-block" onClick={loginEmployer}>Login</button>
                                    </div>

                                    <div className="form-group">
                                        <Link to="/employer/Signup">Not registered yet? Signup</Link>
                                    </div>

                                </form>
								</div>
                        </div>
                    </div>
                </div>
    );
}

export default LoginForm;