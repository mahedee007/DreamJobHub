import { useEffect, useState } from 'react';
import Job from '../Job/Job';


const Jobs = () => {
    const [jobs , setJobs]= useState([]);

useEffect(()=>{
    fetch('jobs.json')
    .then(res => res.json())
    .then(data => setJobs(data))
},[])
    return (
        <>
        <div className='grid md:grid-cols-2 w-4/5 mx-auto mt-16 gap-5 mb-7'>
            {
                jobs.map(job => <Job key={job.id} job={job}></Job>)
            }

            
        </div>
        <div className='text-center pb-5' >
        <button className="btn bg-[#7E90FE] text-white ">See All Jobs</button>
        </div>
        
        
        </>
    );
};

export default Jobs;