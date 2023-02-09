import './compCss.css';


const NavBar = (props) => {
  return (
    <div className="navDiv">
      <button
        style={{
          borderColor: props.currentSection === 'aboutMe' ? 'grey' : 'white',
        }}
        onClick={() => {
          props.handleCurrentSection('aboutMe');
        }}
        className="navButton"
      >
        ABOUT ME
      </button>
      <button
        style={{
          borderColor: props.currentSection === 'portfolio' ? 'grey' : 'white',
        }}
        onClick={() => {
          props.handleCurrentSection('portfolio');
        }}
        className="navButton"
      >
        PORTFOLIO
      </button>
      <button
        style={{
          borderColor: props.currentSection === 'contact' ? 'grey' : 'white',
        }}
        onClick={() => {
          props.handleCurrentSection('contact');
        }}
        className="navButton"
      >
        CONTACT
      </button>
      <button
        style={{
          borderColor: props.currentSection === 'resume' ? 'grey' : 'white',
        }}
        onClick={() => {
          props.handleCurrentSection('resume');
        }}
        className="navButton"
      >
        RESUME
      </button>
    </div>
  );
};

export default NavBar;
