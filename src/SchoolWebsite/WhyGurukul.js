import React from 'react';
import {motion} from 'framer-motion'

function GurukulDetails({ GurukulData }) {
  const isOdd = GurukulData.id % 2 !== 0;
  const imagePath = require(`${GurukulData.imagePath}`);

  return (
    <motion.div
      className="bg-[#FFF6E7] flex justify-center lg:h-[70vh]"
      initial={{ opacity: 0, scale: 0.9, y: 50 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.6, delay: GurukulData.id * 0.2, ease: 'easeOut' }}
    >
    <div className="bg-[#FFF6E7] flex justify-center lg:h-[70vh]">
      <div className="w-[95%] flex flex-col md:flex-row">
        {isOdd ? (
          <>
            <div className="md:w-1/2 h-64 md:h-auto">
              <img src={imagePath} className="object-cover w-full h-full" alt="Profile" />
            </div>
            <div className="w-full md:w-1/2 flex flex-col lg:mt-14 md:pl-16">
            <div>
                <h1 className="text-sm uppercase text-left"></h1>
                <h1 className="font-serif text-3xl mt-4 text-center pb-3 ">{GurukulData.name}</h1>
                <p className=''> {GurukulData.paragraph}</p>
               
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="order-2 md:order-1 w-full md:w-1/2 flex flex-col lg:mt-14 md:pl-16">
              <div>
              <div>
                <h1 className="text-sm uppercase text-left"></h1>
                <h1 className="font-serif text-3xl mt-4 text-center pr-9 pb-3">{GurukulData.name}</h1>
                <p className='text-balance pr-16'> {GurukulData.paragraph}</p>
               
              </div>
              </div>
            </div>
            <div className="order-1 md:order-2 md:w-1/2 h-64 md:h-auto">
              <img src={imagePath} className="object-cover w-full h-full" alt="Profile" />
            </div>
          </>
        )}
      </div>
    </div>
    </motion.div>
  );
}

export default GurukulDetails;
