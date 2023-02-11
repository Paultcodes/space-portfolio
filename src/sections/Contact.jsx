import { useEffect, useState } from 'react';
import '../mainPage/mainPage.css';
import { useContext } from 'react';
import { ThemeContext } from '../mainPage/MainPage';
import { FaRocket } from 'react-icons/fa';

const Contact = () => {
  const [fadeIn, setFadeIn] = useState(false);

  const darkTheme = useContext(ThemeContext);

  const darkThemeStyle = {
    border: '1px solid black',
  };

  const validateEmail = (email) => {
    const re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [error, setError] = useState(false);
  const [emailError, setEmailError] = useState(false);

  const handleBlur = (e) => {
    if (!e.target.value) {
      setError(true);
    } else {
      setError(false);
    }
  };

  const { name, email, message } = formData;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !message) {
      setError(true);
    } else if (!validateEmail(email)) {
      setEmailError(true)
    }
  };

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  useEffect(() => {
    setFadeIn(true);
  }, []);
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
          <p style={{ color: darkTheme ? 'black' : 'white' }}>
            All fields are required
          </p>
        ) : (
          ''
        )}
        {emailError ? <p>Invalid email address</p> : ''}
      </form>
    </div>
  );
};

export default Contact;
