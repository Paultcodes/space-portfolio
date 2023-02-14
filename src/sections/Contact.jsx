import { useEffect, useState } from 'react';
import '../mainPage/mainPage.css';
import { useContext } from 'react';
import { ThemeContext } from '../mainPage/MainPage';
import { FaRocket } from 'react-icons/fa';

const Contact = () => {
  //Using use effect to apply a fade in effect to the component
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  //State for the form
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const { name, email, message } = formData;

  const darkTheme = useContext(ThemeContext);

  const darkThemeStyle = {
    border: '1px solid black',
  };

  //Logic for handling form submission
  const [emailError, setEmailError] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);

  const validateEmail = (email) => {
    const re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !message) {
      setError(true);
      return;
    } else if (!validateEmail(email)) {
      setEmailError(true);
      return;
    } else if (validateEmail(email)) {
      setEmailError(false);
    }

    if (email && name && message && validateEmail(email)) {
      setSuccessMessage(true);
    }
  };

  //Logic for for when inputs lose focus
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState(``);

  const handleBlur = (e) => {
    if (!e.target.value) {
      setErrorMessage(`${e.target.name} is required`);
      setError(true);
    } else {
      setError(false);
    }
  };

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className={`fade-in ${fadeIn ? 'visible' : ''}`}>
      <h1 style={{ textAlign: 'center' }}>Contact</h1>
      <form className="form" action="">
        <label htmlFor="name">Name</label>
        <input
          style={darkTheme ? darkThemeStyle : null}
          className="formInput"
          onBlur={handleBlur}
          name="name"
          onChange={onChange}
          value={name}
          type="text"
          htmlFor="name"
        />
        <label htmlFor="email">Email address</label>
        <input
          style={darkTheme ? darkThemeStyle : null}
          className="formInput"
          onBlur={handleBlur}
          value={email}
          onChange={onChange}
          name="email"
          type="email"
          htmlFor="email"
        />
        <label htmlFor="message">Message</label>
        <textarea
          className="textArea"
          onBlur={handleBlur}
          value={message}
          onChange={onChange}
          name="message"
          id=""
          cols="30"
          rows="10"
        ></textarea>
        <button className="submitButton" type="submit" onClick={handleSubmit}>
          Submit <FaRocket />
        </button>
        {error ? (
          <p style={{ color: darkTheme ? 'black' : 'white' }}>{errorMessage}</p>
        ) : (
          ''
        )}
        {emailError ? <p>Invalid email address</p> : ''}
        {successMessage ? <p>Thank you for your message!</p> : ''}
      </form>
    </div>
  );
};

export default Contact;
