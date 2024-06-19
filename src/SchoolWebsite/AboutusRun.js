
import React from 'react';
import AboutD from './About';

 
const AboutData = [
  {
    id: 1,
    name: 'Our Core Philosophy',
    
    paragraph:"At Prabhuram Gurukul, we believe that education extends beyond textbooks. Our approach is rooted in the principles of value-based education, ensuring that our students not only excel academically but also grow into morally upright and socially responsible individuals. We strive to instill virtues such as self-discipline, self-confidence, respect for elders, and effective communication skills.",
    imagePath: './Philosophy.jpeg'
  },
  {
    id: 2,
    name: 'Wisdom from Ancient Texts',
    
    imagePath: './Wisdom.jpg',
    paragraph:"Our curriculum is enriched with fascinating stories and lessons from the Ramayana, Mahabharata, Vedas, and Puranas. These timeless epics and scriptures are not just tales of the past but are treasure troves of life-changing lessons. Through engaging narratives and thoughtful discussions, we help students uncover profound insights and apply them to their daily lives."
  },
  {
    id: 3,
    name: 'Comprehensive Student Development',
    
    imagePath: './japan-1432826_640 (1).jpg',
    paragraph:"Prabhuram Gurukul is dedicated to nurturing the multidimensional personalities of our students. We believe in the importance of a balanced education that includes physical fitness, mental clarity, emotional balance, and cultural and artistic expression"
  },
  {
    id: 4,
    name: 'Dedicated Healthcare Services',
    
    imagePath: './Healthcare.jpg',
    paragraph:"Understanding the importance of health in a student's life, we provide separate healthcare facilities within the Gurukul. Our dedicated health professionals ensure that every student receives the necessary medical attention and guidance to maintain their physical health"
  },
  {
    id: 5,
    name: 'Sanskrit',
    
    imagePath: './Sanskrit.jpeg',
    paragraph:"In today's globalized world, language skills are essential. At Prabhuram Gurukul, we offer comprehensive language education, focusing on Sanskrit, English, Marathi, and Hindi."
  },
  {
    id: 6,
    name: 'Spirital growth',
    
    imagePath: './sp.jpeg',
    paragraph:"Spiritual growth is a lifelong journey, and nurturing it from a young age can help students develop a strong sense of self, purpose, and connection to the world around them. By incorporating these practices and activities into the school environment, educators can support students in developing a rich inner life and a compassionate outlook on life.."
  },
  {
    id: 7,
    name: 'Financial Management',
    
    imagePath: './finacial.jpg',
    paragraph:"Financial management is an important skill for students to learn in school because it helps them make smart decisions about money. Teaching students how to budget, save, and spend wisely can be done through activities like creating simple budgets, running small business projects, or saving for class goals. By learning these skills early, students can be better prepared to handle money responsibly and confidently as they grow up."
  }
  
];
 
function AboutusRun() {
  return (
    <>
    <div>
      <div className="max-w-7xl mx-auto bg-gray-100">
          <h1 className="text-4xl font-bold font-serif text-center mb-8" data-aos="fade-up">
            PRABHURAM GURUKUL<br className='pt-10'/> Nurturing Excellence and Values
          </h1>
          <p className="text-xl text-center pb-12 mt font-serif" data-aos="fade-up" data-aos-delay="200">
            Welcome to Prabhuram Gurukul, a sanctuary of holistic learning where ancient wisdom meets modern education. Our mission is to cultivate well-rounded individuals through a unique blend of value-based education, theoretical and applied knowledge, and a deep connection to our cultural heritage.
          </p>
          </div>
    <div className='mt-1'></div>

      {AboutData.map((About) => (

        <AboutD key={About.id} About={About} />
      ))}
    </div>
    </>
  );
}
 
export default AboutusRun;
 