import React from 'react';
import { MdArrowBackIosNew } from "react-icons/md";
import { Link } from 'react-router-dom';
// import { motion } from 'framer-motion'; // Uncomment if needed for video
// import video2 from "path/to/video2.mp4"; // Uncomment if needed for video

const AboutUs = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const cardsData = [
    {
      image: require('./Founders/Ram.jpg'),
      title: "Mr. Ram",
      description: "( Founder and Managing Head of Prabhuram Gurukul )"
    },
    {
      image: require('./Founders/SunitaShete.jpg'),
      title: "Mrs. Sunita Shete",
      description: "( Founder and Principal of Prabhuram Gurukul )"
    },
    {
      image: require('./Founders/ShubhamShete.jpg'),
      title: "Dr. Shubham Shete",
      description: "( Founder and Chief Advisor of Prabhuram Gurukul )"
    },
    {
      image: require('./Founders/SuhaniShete.jpg'),
      title: "Miss Suhani Shete",
      description: "( Yoga and Meditation Practitioner )"
    }
  ];

  const firstHalf = cardsData.slice(0, 4);

  return (
    <div className="container bg-gray-100 max-w-full px-8 py-6 mx-auto" data-aos="fade-up">
      <h1 className="text-3xl font-semibold font-serif text-gray-800 mb-8">About Us</h1>
      <p className="text-xl text-center mb-12">
        Welcome to Prabhuram Gurukul, where ancient wisdom meets modern education to cultivate well-rounded, value-driven individuals. Our curriculum integrates stories from the Ramayana, Mahabharata, Vedas, and Puranas, promoting both theoretical and applied knowledge. We focus on holistic development through sports, yoga, meditation, music, and dance, while providing dedicated healthcare facilities. Language proficiency in Sanskrit, English, Marathi, and Hindi is emphasized for effective communication. Join us on a journey of self-discovery, cultural enrichment, and lifelong learning.
      </p>
      <div className='flex justify-center'>
      <Link to="" className="flex items-center text-white hover:text-blue-900 border bg-blue-500 hover:bg-blue-200 border-indigo-600 py-2 px-6 gap-2 rounded inline-flex items-center">
      <span>Read More</span>
      <svg
        className="w-4"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
      </svg>
    </Link>
     
     
     
     
     
      </div>
     
      <div className="flex flex-wrap justify-center">
        {firstHalf.map((card, index) => (
          <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2">
            <div className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col h-full transition-transform transform hover:scale-105" data-aos="zoom-in">
              <img src={typeof card.image === 'string' ? card.image : card.image.default} alt={card.title} className="w-full h-96 object-cover" />
              <div className="px-6 py-4 flex-1 flex flex-col justify-between">
                <div>
                  <div className="font-bold text-xl mb-2">{card.title}</div>
                  <p className="text-gray-700 text-base">{card.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
     
      <div className="flex justify-center">
        {/* Uncomment and modify the video section if needed */}
        {/* <motion.video
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          loop autoPlay muted
          className="w-80 rounded-lg mb-1"
          controls
        >
          <source src={video2} type="video/mp4" />
        </motion.video> */}
      </div>
    </div>
  );
};

export default AboutUs;
