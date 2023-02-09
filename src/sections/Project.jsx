import '../mainPage/mainPage.css';
import { FaGithub } from 'react-icons/fa';
import { CgWebsite } from 'react-icons/cg';
const Project = (props) => {
  return (
    <a href={props.link}>
      <div className="projectCard">
        <img className="projectPicture" src={props.picture} alt="" />
        <h2>{props.projectName}</h2>
        <div className='projectLinks'>
          <a href="">
            <FaGithub />
          </a>
          <a href="">
            <CgWebsite />
          </a>
        </div>
      </div>
    </a>
  );
};

export default Project;
