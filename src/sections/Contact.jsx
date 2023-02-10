import { useEffect, useState } from 'react';
import '../mainPage/mainPage.css';

const Contact = () => {
  const [fadeIn, setFadeIn] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [error, setError] = useState(false);

  const handleBlur = (e) => {
    if (!formData[e.target.value]) {
      setError(true)
    }
  };

  const { name, email, message } = formData;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
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
          onBlur={handleBlur}
          name="name"
          onChange={onChange}
          value={name}
          type="text"
          htmlFor="name"
        />
        <label htmlFor="email">Email address</label>
        <input
          onBlur={handleBlur}
          value={email}
          onChange={onChange}
          name="email"
          type="email"
          htmlFor="email"
        />
        <label htmlFor="message">Message</label>
        <textarea
          onBlur={handleBlur}
          value={message}
          onChange={onChange}
          name="message"
          id=""
          cols="30"
          rows="10"
        ></textarea>
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
        {error && <p style={{ color: 'white' }}>All fields are required</p>}
      </form>
    </div>
  );
};

export default Contact;
