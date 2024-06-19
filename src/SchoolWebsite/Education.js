// EducationAndDevelopmentProgram.js
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const cardsData = [
  {
    image: "./EducationImags/valuedbased.jpg",
    title: "Value Based Education",
    description: "Emphasizing moral and ethical values in the curriculum to instill integrity, empathy, and a sense of responsibility in students."
  },
  
  {
    image: "./EducationImags/Healthcare.jpeg",
    title: "Healthcare Facilities",
    description: "Providing dedicated healthcare facilities for students to ensure their physical well-being and address any health concerns promptly."
  },
  {
    image: "./EducationImags/ComprehensiveKnowledge.jpg",
    title: "Comprehensive Knowledge",
    description: "Providing a balanced education that includes both theoretical foundations and practical applications across various subjects."
  },
  {
    image: "./EducationImags/HistoricalEducation.jpg",
    title: "Cultural and Historical Education",
    description: "Providing engaging lessons from the Ramayana, Mahabharata, Vedas, and Puranas fosters a deeper understanding of cultural heritage and moral values through life-changing lessons from these ancient texts."
  },
  {
    image: "./EducationImags/personaldevelpment.jpg",
    title: "Personal Development",
    description: "Nurturing essential qualities such as self-discipline, self-confidence, communication skills, and respect for elders. Identifying and fostering the inner qualities of each student alongside their academic studies."
  },
  {
    image: "./EducationImags/Skilldevelpment.jpg",
    title: "Skill Development",
    description: "Providing extracurricular opportunities that complement academic learning. Equipping students with skills that enhance their creativity, teamwork, and leadership abilities."
  },
];

function Education() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const firstHalf = cardsData.slice(0, 3);
  const secondHalf = cardsData.slice(3, 6);

  return (
    <div className="container mx-auto max-w-full px-8 py-6 bg-gray-100 shadow-lg rounded-lg" data-aos="fade-up">
      <h1 className="text-3xl font-semibold font-serif text-black mb-6 text-center">Education and Development Program</h1>

      {/* First Row of Cards */}
      <div className="flex flex-wrap justify-center">
        {firstHalf.map((card, index) => (
          <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2">
            <div className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col h-full" data-aos="zoom-in">
              <img src={require(`${card.image}`)} alt={card.title} className="w-full h-48 object-cover" />
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

      {/* Separator */}
      <hr className="border-t-2 border-gray-300 my-6" />

      {/* Second Row of Cards */}
      <div className="flex flex-wrap justify-center">
        {secondHalf.map((card, index) => (
          <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2">
            <div className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col h-full" data-aos="zoom-in">
              <img src={require(`${card.image}`)} alt={card.title} className="w-full h-48 object-cover" />
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
    </div>
  );
}

export default Education;
