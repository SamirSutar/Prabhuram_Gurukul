import { Carousel } from "@material-tailwind/react";
import Carousel1 from "./PhotoGalary";
import { motion } from "framer-motion"
import { Link } from "react-router-dom";
import React, { useEffect } from 'react';



export default function Events() {
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
    <motion.div 
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}
    transition={{duration:3}}
    >
    
   
    <div className="bg-[#FFF6E7]">
   

    <Carousel
    
      loop
      autoplay
      className="rounded-xl lg:max-w-7xl h-3/4 "
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all ${
                activeIndex === i ? "w-8 bg-black" : "w-4 bg-black/50"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
        
        
      )}
      
    >
      <img
        src={require('./GalleryImages/EVENT1 copy.png')}
        alt="image 1"
        className="h-full w-full object-fill"
      />
      <img
        src={require('./GalleryImages/EV2.jpg')}
        alt="image 2"
        className="h-full w-full object-cover"
      />
      <img 
        src={require('./GalleryImages/EV3.jpg')}
        alt="image 3"
        className="h-full w-full object-cover"
      />
      
      
    </Carousel>
    
  
      
                <div className="flex justify-center mt-3">
                <Link to="/BookEvent">
                 <button
                  type="submit"
                  className="mb-6 w-72  rounded-full bg-sky-500 text-white px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal lg:mb-0"
                >
                  Click here for Registration  
                </button>
                </Link>
                </div> 
                
                
    <Carousel1/>
    

    </div>
    </motion.div>
    
   </>
  );
}
