
import React, { useState } from 'react';
import axios from 'axios'; // Import Axios
import Result from 'postcss/lib/result';
import backgroundImage from './GurukulBg3.jpg';
import '../index.css'
import { motion } from 'framer-motion';
 
const HeroSection = () => {
  const initialFormData = {
    name: '',
    email: '',
    mobileNumber: '',
    standard: '',
    gender: '',
  };
 
  const [formData, setFormData] = useState(initialFormData);
  const [submissionStatus, setSubmissionStatus] = useState(null); // State to handle submission status
 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
 
  const handleSubmit = async (e) => {
    console.log("Called Sucessfully ",formData)
    e.preventDefault();
    try {
      const response = await axios.post('http://prabhuramgurukul/enquiry.php', formData); 
      console.log('Response:', response.data);
      if (response.data === "SUCCESS") {
        setSubmissionStatus('success');
        setFormData(initialFormData); 
      } else {
        setSubmissionStatus('error');
      }
    } catch (error) {
      console.error('There was an error!', error);
      setSubmissionStatus('error');
    }
  };
 
  return (
    <>
    
    <div
      className="bg-cover bg-center min-h-screen flex items-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
         <div className='invisible lg:mt-96 lg:pl-5 lg:visible'>
      <motion.h1
        className='invisible md:text-7xl font-serif font-bold mr-5 gradient-text lg:visible'
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Prabhuram Gurukul
      </motion.h1>
    </div>
   
    
      <form onSubmit={handleSubmit} className="container max-w-sm mx-auto p-8 bg-sky-950 rounded-lg shadow-lg mr-10 mb-20" data-aos="fade-left">
        <h1 className="text-xl font-serif text-white font-bold mb-6">ADMISSION ENQUIRY FOR THE SESSION 2024-25</h1>
        <div className='text-left'>
          <div className="mb-4">
            {/* <label className="block text-white text-lg font-serif font-bold mb-2" htmlFor="name">
              Name
            </label> */}
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              pattern="^[A-Za-z\s]+$" // Name pattern for alphabets and spaces
              title="Please enter only alphabets."
            />
          </div>
          <div className="mb-4">
            {/* <label className="block text-white text-lg font-serif font-bold mb-2" htmlFor="email">
              Email
            </label> */}
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$" // Email pattern
              required
              title="Please enter a valid email address in the format test@gmail.com."
            />
          </div>
          <div className="mb-4">
            
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="mobileNumber"
              type="text"
              placeholder="Mobile Number"
              name="mobileNumber"
              value={formData.mobileNumber}
              onChange={handleChange}
              pattern="[0-9]{10}" 
              required
              title="Please enter a 10-digit mobile number."
            />
          </div>
          <div className="mb-6">
           
            <select
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Select gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              {/* <option value="other">Other</option> */}
            </select>
          </div>
          <div className="mb-6">
            {/* <label className="block text-white text-lg font-serif font-bold mb-2" htmlFor="standard">
              Standard
            </label> */}
            <select
              id="standard"
              name="standard"
              value={formData.standard}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Select standard</option>
              <option value="playgroup">Playgroup</option>
              <option value="nursery">Nursery</option>
              <option value="LKG">Lkg</option>
              <option value="UKG">Ukg</option>
            
            </select>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white justify-center flex font-bold py-2 px-4 ml-28 rounded focus:outline-none focus:shadow-outline"
              type="button"  name='Send' id='Send'  value={"Send"}  onClick={handleSubmit} >     Submit
            </button>
          </div>
        </div>
      </form>
      <h1>{submissionStatus}</h1>
      {submissionStatus === 'success' && (
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
          <div className="bg-green-500 text-white p-5 rounded-lg shadow-lg">
            Form submitted successfully!
          </div>
        </div>
      )}
      {submissionStatus === 'error' && (
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
          <div className="bg-red-500 text-white p-5 rounded-lg shadow-lg">
            There was an error submitting the form. Please try again later.
          </div>
        </div>
      )}
    </div>
    </>
  );
};
 
export default HeroSection;
 