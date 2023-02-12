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
    <div className="projectCard">
      <img className="projectPicture" src={props.picture} alt="" />
      <h2>{props.projectName}</h2>
      <div className="projectLinks">
        <a style={style} href={props.github}>
          <FaGithub />
        </a>
        <a style={style} href={props.website}>
          <CgWebsite />
        </a>
      </div>
    </div>
  );
};

export default Project;
