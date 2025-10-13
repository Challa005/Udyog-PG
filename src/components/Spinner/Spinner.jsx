import React from 'react';
import { CgSpinner } from 'react-icons/cg';

const Spinner = ({ size = 32, className = "text-blue-500" }) => {
    return (
        <div className={`flex items-center justify-center ${className}`}>
            <CgSpinner className="animate-spin" size={size} />
        </div>
    );
};

export default Spinner;
