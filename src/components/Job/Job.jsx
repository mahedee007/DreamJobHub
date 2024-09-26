import React from 'react';
import { IoLocationSharp } from "react-icons/io5";
import { HiCurrencyDollar } from "react-icons/hi2";

const Job = ({job}) => {
const {logo, job_title, company_name, remote_or_onsite, location, job_type, salary} = job;
    return (
        <div className='border border-dotted border-[#757575] p-6 rounded-2xl'>
            <img src={logo} alt="" />
            <h2 className='text-2xl font-extrabold pt-8 pb-2'>{job_title}</h2>
            <p className='font-semibold text-[20px] text-[#757575] pb-4'>{company_name}</p>
            <div className='flex gap-4'>
                <span className='py-3 px-5 border border-[#0d99ff] rounded-xl text-[#0d99ff]'>{remote_or_onsite}</span>
                <span className='py-3 px-5 border border-[#0d99ff] rounded-xl text-[#0d99ff]'>{job_type}</span>
            </div>
            <div className='flex items-center gap-4 py-5'>
                <span className='flex gap-2 items-center text-[#757575]'><IoLocationSharp /> {location}</span>
                <span className='flex gap-2 items-center text-[#757575]'><HiCurrencyDollar /> {salary}</span>
            </div>
            <button className="btn bg-[#7E90FE] text-white">View Details</button>
        </div>
    );
};

export default Job;