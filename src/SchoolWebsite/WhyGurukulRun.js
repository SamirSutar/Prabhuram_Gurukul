import React from 'react';
import GurukulDetails from './WhyGurukul';

const GurukulData = [
  {
    id: 1,
    name: 'Study Hall',
   paragraph: 'Prabhuram Gurukuls study hall promotes a culture of continuous improvement and academic excellence through regular assessments and goal-setting sessions. The curriculum is designed to be dynamic, integrating real-world applications and current research to enrich students learning experiences. Interactive whiteboards and multimedia resources enhance classroom engagement, making learning both interactive and enjoyable The halls dedicated faculty members provide mentorship and academic counseling, guiding students towards achieving their full potential.',
   imagePath: './study hall in school.jpg'
  },
  {
    id: 2,
    name: 'Outdoor Sport',
    paragraph:'Prabhuram Gurukuls outdoor sports facilities provide children with ample opportunities for physical development and teamwork. The spacious grounds include fields for soccer, cricket, and athletics. Theres a basketball court and areas for traditional games. Expert coaches guide the students, emphasizing fitness, discipline, and sportsmanship. Regular inter-house competitions foster a healthy competitive spirit. Outdoor sports are integral to the curriculum, promoting physical health, strategic thinking, and collaboration among students.',
    imagePath: './outdoor.jpeg'
  },
  {
    id: 3,
    name: 'Indoor Sport',
    paragraph:'Prabhuram Gurukuls indoor sports facilities offer a variety of activities for children to enjoy and excel in. The well-equipped gymnasium includes badminton and table tennis courts, a yoga area, and space for martial arts. Students are guided by skilled instructors who emphasize fitness, discipline, and skill development. Regular practice sessions and friendly matches foster a sense of achievement and teamwork. Indoor sports are a vital part of the curriculum, promoting physical health, mental agility, and camaraderie among students.',
    imagePath: './Indoor.jpg'
  },
  {
    id: 4,
    name: 'Food Section ',
    paragraph:"Prabhuram Gurukul's food section is dedicated to providing nutritious and delicious meals for children. The spacious dining hall is clean and inviting, with a friendly atmosphere. Meals are prepared using fresh, locally-sourced ingredients, ensuring a balanced diet that includes a variety of fruits, vegetables, grains, and proteins. Special attention is given to dietary requirements and preferences. The menu includes traditional and contemporary dishes, promoting healthy eating habits. Hygienic practices are strictly followed, and students are encouraged to appreciate the value of wholesome food. ",
    imagePath: './foodSection.jpeg'
  },
  {
    id: 5,
    name: 'Prayer Hall',
    paragraph:"Prabhuram Gurukul's prayer hall is a serene and sacred space designed for reflection and spiritual growth. It is adorned with beautiful idols and symbols from various religions, promoting a sense of unity and respect for all faiths. The hall is spacious, with comfortable seating and a tranquil ambiance. Daily prayers and meditation sessions are held, fostering inner peace and mindfulness. The prayer hall also hosts spiritual discourses and cultural programs, enriching the students' moral and ethical values. It is a place where students can connect with their inner selves, find solace, and develop a deep sense of spirituality and gratitude.",
    imagePath: './prayer hall.jpeg'
  },
  {
    id: 6,
    name: 'Yoga and Meditation Hall',
    paragraph:"Prabhuram Gurukul's Yoga and Meditation Hall is a peaceful sanctuary dedicated to the physical, mental, and spiritual well-being of students. The hall is spacious, well-ventilated, and designed to create a tranquil ambiance. It is equipped with yoga mats and cushions, providing a comfortable space for practice. Skilled instructors lead daily yoga sessions, focusing on flexibility, strength, and relaxation techniques. Meditation sessions help students develop mindfulness, concentration, and emotional balance. The hall also hosts workshops on stress management and holistic health practices. ",
    imagePath: './meditation.jpg'
  },
  {
    id: 7,
    name: 'Kids Gym',
    paragraph:"Prabhuram Gurukul's Kids Gym is a vibrant and energetic space designed to promote physical fitness and fun for children. The gym is equipped with child-friendly exercise machines, soft mats, and a variety of fitness equipment tailored for young users. Trained instructors guide the children through age-appropriate workouts, emphasizing strength, flexibility, and coordination. The gym also offers fun activities like obstacle courses, aerobic exercises, and dance classes, making fitness enjoyable. Safety is a top priority, with all equipment regularly checked and sessions supervised. The Kids Gym helps children build healthy habits, boost their confidence, and develop a love for physical activity.",
    imagePath: './gym.jpg'
  },
  {
    id: 8,
    name: 'Library Section ',
    paragraph:"Prabhuram Gurukul's library section is a treasure trove of knowledge and imagination, catering to the intellectual curiosity of its students. The library is spacious and well-organized, with shelves lined with a diverse collection of books, ranging from academic textbooks to fiction and non-fiction literature. It offers a quiet and conducive environment for reading and research, encouraging students to explore various subjects and expand their horizons. The library is equipped with comfortable seating areas and study desks, ideal for both individual study and group discussions. ",
    imagePath: './library.jpeg'
  },
  {
    id: 9,
    name: 'Music Section ',
    paragraph:"  Prabhuram Gurukul's Music Section resonates with creativity and harmony, offering a vibrant space where students can explore their musical talents and appreciation. The section is equipped with a variety of musical instruments including keyboards, guitars, drums, and traditional Indian instruments like tabla and harmonium. Qualified music teachers provide expert guidance in both classical and contemporary music genres, fostering technical proficiency and artistic expression among students.Regular music classes cover music theory, composition, and practical skills, ensuring a well-rounded education in music. The section also hosts choir practices, ensemble performances, and solo recitals, promoting teamwork and stage confidence.    ",
    imagePath: './MusicSection.jpeg'
  },
  {
    id: 10,
    name: 'Computer Section',
    paragraph:"Prabhuram Gurukul's Computer Section is a dynamic hub where technology meets education, designed to equip students with essential digital skills and knowledge. The section is equipped with state-of-the-art computers, high-speed internet connectivity, and modern software applications that support a wide range of educational pursuits.Qualified instructors guide students through comprehensive computer literacy programs, covering topics such as coding, digital literacy, software applications, and internet safety. Practical sessions are structured to enhance problem-solving abilities and critical thinking, preparing students for the digital age.",
    imagePath: './computerSection.jpeg'
  },
];

function WhyGurukulRun() {
  return (
    <div>
      {GurukulData.map((GurukulData) => (
        <GurukulDetails key={GurukulData.id} GurukulData={GurukulData} />
      ))}
    </div>
  );
}

export default WhyGurukulRun;
