import React from 'react';
import { CiCircleCheck } from 'react-icons/ci';

interface ReasonProps {
    reason: string[];
}

const Reason: React.FC<ReasonProps> = ({ reason }) => {
    return (
        <React.Fragment>
            <p className='text-xs mb-2'>Why we love it</p>
            <div className='flex flex-col gap-2'>
                {reason.map((item, index) => (
                    <div key={index} className='flex items-center'>
                        <CiCircleCheck className='mr-2 bg-[#F3F9FF] text-cyan-800 rounded-full' />
                        <span className='text-xs'>{item}</span>
                    </div>
                ))}
            </div>
        </React.Fragment>
    );
};

export default Reason;
