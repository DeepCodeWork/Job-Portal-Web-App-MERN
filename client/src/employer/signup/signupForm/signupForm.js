import React, { useState } from 'react';
import {API} from '../../../config';
import { Link } from 'react-router-dom';

const SignupForm = () => {

    const [inputValues, setInputState] = useState({
        name:'',
        email:'',
        phone:'',
        password:'',
        confirmPassword:'',
        error:'',
        success:false
    });

    const {email, name, phone, password, confirmPassword, error, success} = inputValues;
    const inputHandler = (inputValue) => event=>
            setInputState({
                ...inputValues, 
                error:'',
                [inputValue]:event.target.value
    })
    
    // const checkPasswordHandler = (event)=>{
    //     event.preventDefault();
    //     if(inputValues.confirmPassword!==inputValues.password){
    //         //setInputState({...inputValues,error:"Password do not match"})
    //         return true;
    //     }else{
    //         setInputState({...inputValues,error:""})
    //         return false;
    //     }
    // }

    const SignupError = () => <div className="alert alert-danger" style={{display: inputValues.error?'':'none'}}>{inputValues.error}</div>
    const SignupSuccess = () => <div className="alert alert-info" style={{display: inputValues.success?'':'none'}}>Account have been successfully created. Please sign in</div>


    const signup = (user) =>{
        const ADD_URL = `${API}/employer/add`
        console.log(user);
        return fetch(ADD_URL,{
            method:"POST",
            headers: { 'Content-Type': 'application/json'},
            body:JSON.stringify(user)
        })
            .then(response=>{console.log(response); return response.json()})
            .catch(err=>console.log(err));
    };

    const addEmployer = (event) => {

        event.preventDefault();
        signup({employerEmail:inputValues.email,
            employerName:inputValues.name,
            employerPassword:inputValues.password,
            employerNumber:inputValues.phone})
            .then((response)=>{
            if(response.error){
                setInputState({
                    ...inputValues, error:response.error,success:false
                })
            }else{
                console.log(response)
                setInputState({
                    ...inputValues,email:'',password:'',name:'',phone:'',error:'',confirmPassword:'',success:true
                })
            }
        }).catch((err)=>{
            console.log(err);
        })
            
    }


    return (
        <div>
            <div className="card bg-light text-center card-form">
                        <div className="card-body">
                            <div className="card-title"><h4>Employer Signup</h4></div>
								{SignupError()}
                                {SignupSuccess()} 
								<div>
                                <form action="">
                                    <div className="form-group">
                                        <input className="form-control form-control" value={name} 
                                            onChange={inputHandler('name')} type="text" placeholder="Name"/>
                                    </div>

                                    <div className="form-group">
                                        <input className="form-control form-control" value={email} 
                                        onChange={inputHandler('email')} type="email" name="" id="" placeholder="Email"/>
                                    </div>

                                    <div className="form-group">
                                        <input className="form-control form-control" value={phone} 
                                        onChange={inputHandler('phone')} type="email" name="" id="" placeholder="Phone"/>
                                    </div>

                                    <div className="form-group">
                                        <input className="form-control form-control" value={password} 
                                        onChange={inputHandler('password')} type="password" name="" id="" placeholder="Password"/>
                                    </div>

                                    <div className="form-group">
                                        <input className="form-control form-control" value={confirmPassword} 
                                        onChange={inputHandler('confirmPassword')} type="password" name="" id="" placeholder="Confirm Password"/>
                                    </div>
                                    
                                    
                                    <div className="form-group">
                                        <button className="btn btn-outline-dark btn-block" 
                                        onClick={addEmployer}>Submit!</button>
                                    </div>

                                    <div className="form-group">
                                        <Link to="/employer/login">Have an account? Login</Link>
                                    </div>

                                </form>
								</div>
                        </div>
                    </div>
                </div>
    );
}

export default SignupForm;