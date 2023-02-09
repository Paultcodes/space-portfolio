import Header from '../components/Header';
import NavBar from '../components/NavBar';
import AboutMe from '../sections/AboutMe';
import Portfolio from '../sections/Portfolio';
import Contact from '../sections/Contact';
import Resume from '../sections/Resume';
import { FaMoon } from 'react-icons/fa';
import { FaLightbulb } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import './mainPage.css';

const MainPage = () => {
  const [currentSection, setCurrentSection] = useState('aboutMe');

 

  const handleCurrentSection = (section) => {
    setCurrentSection(section);
  };

  const [darkMode, setDarkMode] = useState(false);
  const handleDarkMode = () => {
    setDarkMode((v) => {
      return !v;
    });

    if (darkMode) {
      document.body.style.backgroundColor = 'black';
    } else {
      document.body.style.backgroundColor = 'white';
    }
  };

  return (
    <div>
      <div className="mainDiv">
        <Header />
        <div className="darkModeSection">
          <button
            style={{ color: darkMode ? 'black' : 'white' }}
            className="darkModeButton"
            onClick={handleDarkMode}
          >
            {darkMode ? <FaMoon /> : <FaLightbulb />}
          </button>
          <h3>{darkMode ? `Dark Mode` : `Light Mode`}</h3>
        </div>
        <NavBar
          currentSection={currentSection}
          handleCurrentSection={handleCurrentSection}
        />
      </div>
      <div style={{ color: darkMode ? 'black' : 'white' }}>
        {currentSection === 'aboutMe' ? (
          <AboutMe />
        ) : currentSection === 'portfolio' ? (
          <Portfolio />
        ) : currentSection === 'contact' ? (
          <Contact />
        ) : (
          <Resume />
        )}
      </div>
    </div>
  );
};

export default MainPage;
