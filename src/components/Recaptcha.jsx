import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

const Recaptcha = () => {
  const [captchaValue, setCaptchaValue] = useState(null);

  const onSubmit = async (e) => {
    e.preventDefault();
    
    // Verify the captchaValue
    if (!captchaValue) {
      alert('Please complete the RECAPTCHA');
      return;
    }

    // Send captchaValue to your backend for verification
    const res = await fetch('http://localhost:3000/api/user/recaptcha', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ captcha: captchaValue }),
    });

    const data = await res.json();
    if (data.success) {
      alert('Form submitted successfully!');
      // Handle successful form submission
    } else {
      alert('Captcha verification failed. Please try again.');
    }
  };

  return (
    <form onSubmit={onSubmit}>
      {/* Your form fields go here */}
      <ReCAPTCHA
        sitekey="6Lc9vlEqAAAAABFw7M9ffAh4M9AaeEUUSsYQz4O6"
        onChange={setCaptchaValue}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Recaptcha;
