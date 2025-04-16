/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import React from 'react';

const ErrorPage = ({error,reset}:{error:any,reset:any}) => {
    return (
        <div>
            <h1 className='flex justify-center items-center font-semibold text-red-700'>Error Something...</h1>
            <p>{error.message}</p>
        </div>
    );
};

export default ErrorPage;