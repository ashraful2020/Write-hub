import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='text-center'>
            <h1 className='text-9xl mt-20 font-semibold text-blue-300'>Not Found !</h1>
            <h1 className='text-8xl mt-20 font-semibold text-blue-300'>404</h1>
            <Link to="/" className='text-5xl underline mt-32'>Home</Link>
        </div>
    );
};

export default NotFound;