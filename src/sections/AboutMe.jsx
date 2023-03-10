import { FaPencilAlt } from 'react-icons/fa';
import profilePicture from './assets/images/profilepicture.jpg'
import './assets/sectionStyle.css';
import { useState, useEffect } from 'react';
import '../mainPage/mainPage.css';

const AboutMe = () => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);
  }, []);
  return (
    <div className={`fade-in ${fadeIn ? 'visible' : ''}`}>
      <div className="aboutMeSection">
        <h1 className="aboutMeHeader">About Me</h1>
        <img className='profile-picture' src={profilePicture} alt="" />
        <p className='aboutMeText'>
          Hello, my name is Paul Taylor and I am a 27-year-old junior software
          developer. I grew up in Kansas and have always had a passion for
          coding and technology. I believe that technology is the key to shaping
          the future, and I am excited to be a part of that change. <br />
          <br />
          Throughout my life, I have always been a hard worker and dedicated my
          time to the things I love and want most. My passion for coding and
          technology has led me to pursue a career in software development.{' '}
          <br />
          <br />
          I am a people-person and I enjoy working with others. I believe that
          teamwork and collaboration are essential for achieving great results.
          I am always looking for opportunities to learn and grow, and I am
          excited to be a part of a dynamic and innovative industry. <br />
          <br />I am committed to delivering high-quality work and I am always
          striving to improve my skills and knowledge. I am excited to share my
          portfolio with you and I hope that it gives you a sense of my
          capabilities as a developer. Thank you for taking the time to visit my
          portfolio and I look forward to connecting with you.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
