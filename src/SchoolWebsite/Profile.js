import React from 'react';

function ProfileDetails({ profile }) {
  const isOdd = profile.id % 2 !== 0;
  const imagePath = require(`${profile.imagePath}`);

  return (
    <div className="bg-[#FFF6E7] flex justify-center lg:h-[70vh]">
      <div className="w-[95%] flex flex-col md:flex-row">
        {isOdd ? (
          <>
            <div className="md:w-1/2 h-64 md:h-auto">
              <img src={imagePath} className="object-cover w-full h-full" alt="Profile" />
            </div>
            <div className="w-full md:w-1/2 flex flex-col lg:mt-14 md:pl-16">
              <div>
                <h1 className="text-sm uppercase text-left">About me</h1>
                <h1 className="font-serif text-3xl mt-4 text-left">{profile.name}</h1>
                <h1 className='text-left'>{profile.title}</h1>
                <h1 className="lg:flex text-left">{profile.additionalInfo}</h1>
              </div>
              <div className="mt-4 md:mt-10">
                <p className="text-md text-balance text-left ">
                  Hi! I'm {profile.name}. I completed my {profile.education} at{' '}
                  <span className="font-bold">{profile.institution}</span>. {profile.additionalEducation && `I also hold a ${profile.additionalEducation} from the same institution.`}
                </p>
                <p className="text-md mt-4 md:mt-10 text-left">
                  Besides my current role, I am also involved in {profile.researchField} and have authored works in the field of {profile.authorField}.
                </p>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="order-2 md:order-1 w-full md:w-1/2 flex flex-col lg:mt-14 md:pl-16">
              <div>
                <h1 className="text-sm uppercase text-left">About me</h1>
                <h1 className="font-serif text-3xl mt-4 text-left">{profile.name}</h1>
                <h1 className='text-left'>{profile.title}</h1>
                <h1 className="lg:flex text-left">{profile.additionalInfo}</h1>
              </div>
              <div className="mt-4 md:mt-10">
                <p className="text-md text-balance text-left">
                  Hi! I'm {profile.name}. I completed my {profile.education} at{' '}
                  <span className="font-bold">{profile.institution}</span>. {profile.additionalEducation && `I also hold a ${profile.additionalEducation} from the same institution.`}
                </p>
                <p className="text-md mt-4 md:mt-10 text-left">
                  Besides my current role, I am also involved in {profile.researchField} and have authored works in the field of {profile.authorField}.
                </p>
              </div>
            </div>
            <div className="order-1 md:order-2 md:w-1/2 h-64 md:h-auto">
              <img src={imagePath} className="object-cover w-full h-full" alt="Profile" />
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default ProfileDetails;



