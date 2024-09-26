import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { HiCurrencyDollar } from "react-icons/hi2";
import { SlCalender } from "react-icons/sl";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const JobDetails = () => {
    const notify = () => toast("Applied Successfully");

    const jobs = useLoaderData();
    const { jobId } = useParams();
    const job = jobs.find(job => jobId == job.id)
    
    return (
        <div>
            <div className='bg-[#f9f9ff] flex justify-center items-center h-[300px]'>
                
            <h1 className='text-4xl text-center font-bold'>Job Details</h1>
            </div>
            <div className='grid md:grid-cols-4 w-4/5 mx-auto mt-8 '>
                <div className='col-span-3'>
                        <h2 className='leading-8 pb-6'><span className='font-bold'>Job Descripton:</span> {job.job_description}</h2>
                        <h2 className='leading-8 pb-6'><span className='font-bold'>Job Responsibility:</span> {job.job_responsibility}</h2>
                        <h2 className='leading-8 pb-6'><span className='font-bold'>Educational Requirements:</span> <br /> {job.educational_requirements}</h2>
                        <h2 className='leading-8 pb-6'><span className='font-bold'>Experiences:</span> <br /> {job.experiences}</h2>
                </div>
                <div className='bg-[#f4f1ff] p-4 rounded-lg row-span-1'>
                    <h1 className='font-bold text-center pb-3'>Job details</h1>
                    <hr />
                    <div className='flex items-center gap-3 py-3'>
                        <HiCurrencyDollar/> <span className='font-bold'> Salary:</span><span>{job.salary}</span>
                    </div>
                    <div className='flex items-center gap-3 py-3'>
                    <SlCalender /> <span className='font-bold'>Job Title: </span><span>{job.job_title}</span>
                    </div>
                    
                    <button onClick={notify} className='btn bg-[#7E90FE] text-white w-full'>Apply Now</button>
                </div>
                
            </div>
            <ToastContainer />
        </div>
    );
};

export default JobDetails;