import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import AOS from 'aos';
import 'aos/dist/aos.css';

const photos = [
  { src: require('./GalleryImages/S7.jpg') },
  { src: require('./GalleryImages/S2.jpg') },
  { src: require('./GalleryImages/S3.jpg') },
  { src: require('./GalleryImages/S4.jpg') },
  { src: require('./GalleryImages/S5.jpg') },
  { src: require('./GalleryImages/S8.jpg') },
  { src: require('./GalleryImages/S7.jpg') },
  { src: require('./GalleryImages/S1.jpg') },
 
]

function Photo({ src }) {
  return (
    <img
      src={src}
      alt="Gallery"
      className="w-full h-96 object-center"
      data-aos="zoom-in"
    />
  );
}

Photo.propTypes = {
  src: PropTypes.string.isRequired
};

function Gallery() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="container mx-auto max-w-full  px-8 py-6 bg-gray-100 shadow-lg rounded-lg" data-aos="fade-up">
      <h1 className="text-3xl font-semibold font-serif text-gray-800 mb-6">Photo Gallery</h1>
      <div className="flex flex-wrap justify-center">
        {photos.map((photo, index) => (
          <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2">
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <Photo src={photo.src} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
