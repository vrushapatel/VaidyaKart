import React, { useState } from 'react'
import "./Contact.css";

function Contact() {

  const [result, setResult] = useState("");

  const onSubmit = async (event) => {

    event.preventDefault();

    setResult("Sending....");

    const formData = new FormData(event.target);

    formData.append(
      "access_key",
      "f04a7473-23ef-4b58-90b6-9553f06da914"
    );

    const response = await fetch(
      "https://api.web3forms.com/submit",
      {
        method: "POST",
        body: formData
      }
    );

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    }
    else {
      setResult("Error");
    }
  };

  return (

    <section className='contact' id='contact'>

      <div className="contact-content">
         <h2>Contact Us</h2>

    <p className="contact-subtitle">
      Have questions, feedback, or business inquiries?
      We'd love to hear from you.
    </p>
      <form className='contact-form' onSubmit={onSubmit}>

        <input
          type='text'
          name='name'
          placeholder='Enter Your Name'
          required
        />

        <input
          type='email'
          name='email'
          placeholder='Enter Your Email'
          required
        />

        <textarea
          name='message'
          rows='5'
          placeholder='Enter Your Message'
          required
        ></textarea>

        <button type='submit'>
          Send Message
        </button>

        <span>{result}</span>

      </form>
</div>
    </section>
  )
}

export default Contact