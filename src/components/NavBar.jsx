import './compCss.css';


const NavBar = (props) => {
  return (
    <div className="navDiv">
      <button
        style={{
          borderColor: props.currentSection === 'aboutMe' ? 'grey' : 'white',
          color: 'white' ,
          backgroundColor: props.currentSection === 'aboutMe' ? 'black' : '',
          borderRadius: '10px',
          padding: '7px'
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
          color: 'white' ,
          backgroundColor: props.currentSection === 'portfolio' ? 'black' : '',
          borderRadius: '10px',
          padding: '7px'
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
          color: 'white' ,
          backgroundColor: props.currentSection === 'contact' ? 'black' : '',
          borderRadius: '10px',
          padding: '7px'
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
          color: 'white' ,
          backgroundColor: props.currentSection === 'resume' ? 'black' : '',
          borderRadius: '10px',
          padding: '7px'
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
