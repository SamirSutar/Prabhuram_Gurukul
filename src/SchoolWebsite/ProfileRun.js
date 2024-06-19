
import React from 'react';
import ProfileDetails from './Profile';
 
const profileData = [
  {
    id: 1,
    name: 'Mr.Ram',
    title: 'Founder and Managing Head of Prabhuram Gurukul ',
    additionalInfo: 'MS in Ayureda',
    education: 'Bachelor\'s degree in Computer Science',
    institution: 'University of Tech',
    additionalEducation: 'Diploma in Software Development',
    researchField: 'Artificial Intelligence',
    authorField: 'Software Engineering',
    imagePath: './WhatsApp Image 2024-06-10 at 12.52.40_940e58b4.jpg'
  },
  {
    id: 2,
    name: 'Dr. Shubham Shete',
    title: 'Founder and Chief Advisor of Prabhuram Gurukul ',
    additionalInfo: 'PhD in Ayurveda',
    education: 'Master\'s degree in Data Science',
    institution: 'Institute of Data',
    additionalEducation: null,
    researchField: 'Machine Learning',
    authorField: 'Data Analytics',
    imagePath: './WhatsApp Image 2024-06-10 at 12.52.40_940e58b4.jpg'
  }
];
 
function ProfileRun() {
  return (
    <div>
      {profileData.map((profile) => (
        <ProfileDetails key={profile.id} profile={profile} />
      ))}
    </div>
  );
}
 
export default ProfileRun;
 