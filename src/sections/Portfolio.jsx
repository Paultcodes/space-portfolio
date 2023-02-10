import { useEffect, useState } from 'react';
import Project from './Project';
import '../mainPage/mainPage.css';
import noteTaker from '../sections/assets/images/noteTaker.png';

const Portfolio = () => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);
  }, []);
  return (
    <div className={`fade-in ${fadeIn ? 'visible' : ''}`}>
      <h1 style={{textAlign: 'center'}}>Portfolio</h1>
      <div className='projectSection'>
        <Project picture={noteTaker} projectName="Note Taker" link={'https://github.com/Paultcodes'}/>
        <Project picture={noteTaker} projectName="Note Taker" />
        <Project picture={noteTaker} projectName="Note Taker" />
      </div>
    </div>
  );
};

export default Portfolio;
