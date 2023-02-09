import { FaPencilAlt } from 'react-icons/fa';
import './assets/sectionStyle.css';
import { useState, useEffect } from 'react';
import '../mainPage/mainPage.css'
const AboutMe = () => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);
  }, []);
  return (
    <div className={`fade-in ${fadeIn ? 'visible' : ''}`}>
      <div className="aboutMeSection">
        <h1 className="aboutMeHeader">About Me</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
          veniam architecto vitae asperiores veritatis nostrum, optio assumenda
          ad, ab, obcaecati dolore voluptates? Debitis, vitae. Autem, nihil
          deleniti. Sint, iste dolore.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
