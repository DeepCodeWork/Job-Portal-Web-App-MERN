import {API} from '../../config';
import { useState } from 'react';



const getJobsById = (id) => {
    const Url = `${API}/job/getById/${id}`
    return fetch(Url)
        .then((response)=>{
            return response.json();
        }).catch((err)=>{
            console.log(err);
        })
};




export default getJobsById;