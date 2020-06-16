import React from 'react';
import JobItem from './jobItem/jobItem';

const JobItems = (props) => {
    const jobList = props.jobList.map((job,index)=>{
       return <JobItem key={index} job={job} des={props.describe}/>
    })


    return (
        <div>
            <ul className="list-group">
                {jobList}
            </ul>
        </div>
    );
}

export default JobItems;