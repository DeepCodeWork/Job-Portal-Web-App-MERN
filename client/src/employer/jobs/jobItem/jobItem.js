import React from 'react';

const JobItem = ({job,des}) => {
    return(
        <div className="list-group-item mb-2">
            <div className="bg-light d-flex justify-content-between p-2" style={{borderRadius:"5px"}}>
                <span className="text-capitalize" style={{fontSize:"20px",fontWeight:"bold"}}>{job.name}</span>
            </div>
            <div>

            <li className="d-flex justify-content-between align-items-center mt-2">
                    <span>{job.location}</span>
                    <button className="btn btn-primary" onClick={()=>{des(job)}}>Check</button>
            </li>
            </div>
        </div>
    );
}

export default JobItem;