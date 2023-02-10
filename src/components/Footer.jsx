import { FaGithub } from 'react-icons/fa';
import { useContext } from 'react';
import { ThemeContext } from '../mainPage/MainPage';

const Footer = () => {
  const darkTheme = useContext(ThemeContext);
  const style = {
    color: darkTheme ? 'black' : 'white',
    fontSize: '20px',
  };
  return (
    <div className="footerSection">
      <a style={style} href="https://github.com/Paultcodes">
        <FaGithub />
      </a>
      <a style={style} href="https://github.com/Paultcodes">
        <FaGithub />
      </a>
      <a style={style} href="https://github.com/Paultcodes">
        <FaGithub />
      </a>
    </div>
  );
};

export default Footer;
