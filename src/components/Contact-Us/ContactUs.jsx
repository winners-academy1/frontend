import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import emailjs from 'emailjs-com';
import '../../styles/contact-us/contact-us.css';

function ContactUs() {
  const { t, i18n } = useTranslation();
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [formError, setFormError] = useState(false);
  useEffect(()=>{
    emailjs.init('lfKA0gW1tKysD8byq');
  }, [])
  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (formData.name === '' || formData.email === '' || formData.subject === '' || formData.message === '') {
      setFormError(true);
      return;
    }
    setFormError(false);

    emailjs.send('service_ixcurmm', 'template_w05ktuf', formData)
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });

    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleInputChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return (
    <>
      <section className='contact-us'>
        <div className='lamar-container'>
          <form onSubmit={handleFormSubmit}>
            <h2>Contact Us</h2>

            {/* <div className='form-group'>
              <label htmlFor='name'>Name</label>
            </div> */}

            <div className='form-group flex'>
              {/* <label htmlFor='email'>Email address</label> */}
              <input type='text' className='form-control' id='name' name='name' value={formData.name} onChange={handleInputChange} placeholder='Name' required />
              <input type='email' className='form-control' id='email' name='email' value={formData.email} onChange={handleInputChange} placeholder='Email Address' required />
            </div>

            <div className='form-group'>
              {/* <label htmlFor='subject'>Subject</label> */}
              <input type='text' className='form-control' id='subject' name='subject' value={formData.subject} onChange={handleInputChange} placeholder='Subject' required />
            </div>

            <div className='form-group'>
              {/* <label htmlFor='message'>Message</label> */}
              <textarea className='form-control' id='message' name='message' rows='5' value={formData.message} onChange={handleInputChange} placeholder='Message' required></textarea>
            </div>

            {formError && (
              <div className='alert alert-danger' role='alert'>
                Please fill in all fields.
              </div>
            )}
            <div className='form-group'>
              <button type='submit' className='btn btn-primary'>
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default ContactUs;
