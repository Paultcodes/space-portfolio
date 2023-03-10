import { useEffect, useState } from 'react';
import Project from './Project';
import '../mainPage/mainPage.css';
import noteTaker from '../sections/assets/images/noteTaker.png';
import mvcTechBlog from '../sections/assets/images/MVC.jpg';
import codeNet from '../sections/assets/images/codnet.jpg'
import jate from '../sections/assets/images/jate.jpg'
import workday from '../sections/assets/images/workday.png'
import devSync from '../sections/assets/images/devsync.png'
import areYouNotEntertained from '../sections/assets/images/areYouNotEntertained.jpg'

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
          picture={jate}
          projectName="JATE"
          github={'https://github.com/Paultcodes/PWA-Text-Editor'}
          website={'https://limitless-sea-11692.herokuapp.com/'}
        />
         <Project
          picture={workday}
          projectName="Work Day Scheduler"
          github={'https://github.com/Paultcodes/Work-Day-Scheduler-'}
          website={'https://paultcodes.github.io/Work-Day-Scheduler-/'}
        />
         <Project
          picture={areYouNotEntertained}
          projectName="Are You Not Entertained"
          github={'https://github.com/Paultcodes/Are-You-Not-Entertained'}
          website={'https://paultcodes.github.io/Are-You-Not-Entertained/'}
        />
         <Project
          picture={devSync}
          projectName="DevSync"
          github={'https://github.com/Paultcodes/DevSync'}
          website={'https://aqueous-island-09635.herokuapp.com/#/'}
        />
      </div>
    </div>
  );
};

export default Portfolio;
