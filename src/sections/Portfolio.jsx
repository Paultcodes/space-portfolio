import { useEffect, useState } from 'react';
import Project from './Project';
import '../mainPage/mainPage.css';
import noteTaker from '../sections/assets/images/noteTaker.png';
import mvcTechBlog from '../sections/assets/images/MVC.jpg';
import codeNet from '../sections/assets/images/codnet.jpg'

const Portfolio = () => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);
  }, []);
  return (
    <div className={`fade-in ${fadeIn ? 'visible' : ''}`}>
      <h1 style={{ textAlign: 'center' }}>Portfolio</h1>
      <div className="projectSection">
        <Project
          picture={noteTaker}
          projectName="Note Taker"
          github={'https://github.com/Paultcodes/Express.Js-Note-Taker'}
          website={'https://obscure-stream-88846.herokuapp.com/'}
        />
        <Project
          picture={mvcTechBlog}
          projectName="MVC Tech Blog"
          github={'https://github.com/Paultcodes/MVC-Tech-Blog'}
          website={'https://protected-woodland-61514.herokuapp.com/api/login'}
        />
        <Project
          picture={codeNet}
          projectName="Code Net"
          github={'https://github.com/Paultcodes/Code-Net'}
          website={'https://protected-wave-25502.herokuapp.com/signup/user'}
        />
         <Project
          picture={codeNet}
          projectName="Code Net"
          github={'https://github.com/Paultcodes/Code-Net'}
          website={'https://protected-wave-25502.herokuapp.com/signup/user'}
        />
         <Project
          picture={codeNet}
          projectName="Code Net"
          github={'https://github.com/Paultcodes/Code-Net'}
          website={'https://protected-wave-25502.herokuapp.com/signup/user'}
        />
         <Project
          picture={codeNet}
          projectName="Code Net"
          github={'https://github.com/Paultcodes/Code-Net'}
          website={'https://protected-wave-25502.herokuapp.com/signup/user'}
        />
      </div>
    </div>
  );
};

export default Portfolio;
