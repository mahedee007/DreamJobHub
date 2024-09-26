import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='flex justify-center items-center flex-col h-screen gap-4'>
            <h1 className='text-7xl font-black text-center'>404!Not Found</h1>
            <Link className='bg-black py-4 px-7 text-white rounded-2xl' to="/">Go To Home</Link>
        </div>
    );
};

export default ErrorPage;