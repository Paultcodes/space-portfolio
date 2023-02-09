import { useEffect, useState } from 'react';
import '../mainPage/mainPage.css';

const Contact = () => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);
  }, []);
  return (
    <div className={`fade-in ${fadeIn ? 'visible' : ''}`}>
      <h1>Contact</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur veniam
        architecto vitae asperiores veritatis nostrum, optio assumenda ad, ab,
        obcaecati dolore voluptates? Debitis, vitae. Autem, nihil deleniti.
        Sint, iste dolore.
      </p>
    </div>
  );
};

export default Contact;
