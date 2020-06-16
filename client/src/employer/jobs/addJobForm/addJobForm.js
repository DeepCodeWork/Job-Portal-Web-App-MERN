import React, { useState } from 'react';
import Layout from '../../../layout/Layout'
import AddJob from './addJob/addJob';
import { isAuthenticated } from '../../auth/auth';
import {API} from '../../../config';

const AddJobform = () => {

    const [jobValues, jobState] = useState({
        name:'',
        location:'',
        website:'',
        category:'',
        description:'',
        error:'',
        success:'',
        employerId:''
    })

   
    const id = isAuthenticated().user.employerId

    //const loggedUserId = isAuthenticated().user;
    const inputHandler = (jobValue) => event=>{
        jobState({...jobValues, 
            error:'',
            employerId:id,
            [jobValue]:event.target.value})}

    const inputCategory = (category) => {
        jobState({...jobValues,category:category.value,employerId:id});
    }

    const addJob = (job) =>{
        const ADD_URL = `${API}/job/add`
        return fetch(ADD_URL,{
            method:"POST",
            headers: { 'Content-Type': 'application/json'},
            body:JSON.stringify(job)
        })
            .then(response=>{return response.json()})
            .catch(err=>console.log(err));
    };

    const addJobHandler = (event) => {
        console.log(jobValues)
        event.preventDefault();
        addJob(jobValues)
            .then((response)=>{
            if(response.error){
                console.log(response.error)
                jobState({
                    ...jobValues, error:response.error,success:false
                })
            }else{
                console.log(response)
                jobState({
                    ...jobValues,name:'',website:'',employerId:'' ,location:'',description:'',error:'',success:true
                })
            }
        }).catch((err)=>{
            console.log(err);
        })
            
    }

    

    return(
            <Layout title="Add JOB">
                <div className="row">
                    <div className="col-lg-4 offset-lg-4">
                        <div className="bg-light">
                            <AddJob addJobHandler = {addJobHandler} inputHandler = {inputHandler} 
                            state = {jobValues} inputCategory = {inputCategory}/>
                        </div>
                    </div>
    
                </div>
            </Layout>
    )
};

export default AddJobform;