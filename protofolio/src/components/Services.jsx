import React from 'react';

export const Services = ({ icon, heading, content1, content2, content3, content4 }) => {
  return (
    <div className="border border-black flex flex-col md:min-w-[400px] min-w-[300px] md:max-h-[200px] min-h-[400px] rounded-3xl p-4 bg-[#FF4D00]">
      <div className='my-6 flex justify-center items-center'>
        <img className='w-[4.5rem]' src={icon} alt="card-icon" />
      </div>
      <h3 className="text-center font-lobster text-2xl font-bold text-white mb-6">{heading}</h3>
      <ul className='text-md text-white list-disc list-inside font-bebas font-bold space-y-5 pl-4'>
        <li>{content1}</li>
        <li>{content2}</li>
        <li>{content3}</li>
        <li>{content4}</li>
      </ul>
    </div>
  );
};