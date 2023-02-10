import '../mainPage/mainPage.css';
import { FaGithub } from 'react-icons/fa';
import { CgWebsite } from 'react-icons/cg';
import { ThemeContext } from '../mainPage/MainPage';
import { useContext } from 'react';

const Project = (props) => {
  const darkTheme = useContext(ThemeContext);
  const style = {
    color: darkTheme ? 'black' : 'white',
  };
  return (
    <a href={props.link}>
      <div className="projectCard">
        <img className="projectPicture" src={props.picture} alt="" />
        <h2>{props.projectName}</h2>
        <div className="projectLinks">
          <a style={style} href="">
            <FaGithub />
          </a>
          <a style={style} href="">
            <CgWebsite />
          </a>
        </div>
      </div>
    </a>
  );
};

export default Project;
