import React, { useState, useEffect, useRef } from 'react';
import classes from './dashboard.module.css'
import Layout from '../../layout/Layout';
import { isAuthenticated } from '../auth/auth';
import getjobsById from '../jobs/jobs'
import JobItems from '../jobs/jobItems';
import { Link } from 'react-router-dom';

const Dashboard = () => {

    const [jobs, setJobState] = useState([]);
    const [showJob, setShowJobState] = useState(false);
    const [currentJob, setCurrentJobState] = useState({});

    const loggedEmployer = isAuthenticated().user;
    const init = () => {
        getjobsById(loggedEmployer.employerId).then((response)=>{
            setJobState(response.data);
        })
    }

    useEffect(()=>{
        init();
    },[showJob])

    const jobDescriptionRef = useRef(null);
    
    const jobDescription = (job) => {
        setShowJobState(true)
        setCurrentJobState(job);

    }


    return (
        <Layout>
            <div className={classes.dashboard+" bg-light"}>
                <div className="container">
                    <div className="row pt-4">
                        <div className={classes.jobList+" col-lg-4 justify-content-center"}>
                            <JobItems jobList = {jobs} describe = {jobDescription}></JobItems>
                        </div>
                        <div className={classes.jobDescription+" col-lg-8 justify-content-center"}>
                            {showJob?(<div ref = {jobDescriptionRef}>
                                <div class="jumbotron">
                                    <h1 class="display-4">{currentJob.name}</h1>
                                    <p>{currentJob.location}</p>
                                    <p class="lead">{currentJob.description}</p>
                                    <hr class="my-4"/>
                                    <p class="lead">
                                        <a class="btn btn-primary btn-lg" href={currentJob.website} role="button">Learn more</a>
                                    </p>
                                </div>
                            </div>):(<div className="d-flex justify-content-center border rounded" style={{marginTop:"30%",padding:"40px 0px 40px 0px"}}>
                                <Link to="/employer/addjob"><button className="btn btn-primary px-4" >Post Job</button></Link>
                            </div>)}
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default Dashboard;