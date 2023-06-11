import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import emailjs from 'emailjs-com';
import '../../styles/contact-us/contact-us.css';

function ContactUs() {
  const { t, i18n } = useTranslation();
  const [formData, setFormData] = useState({subject: 'New User Interested', name: '', mobileNumber: '', course: '' });
  const [formError, setFormError] = useState(false);
  const [isWhatsappChecked, setIsWhatsappChecked] = useState(false);

  useEffect(()=>{
    emailjs.init('lfKA0gW1tKysD8byq');
  }, []);
  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (formData.name === '' || formData.mobileNumber === '' || formData.course === '') {
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

    setFormData({subject: 'New User Interested', name: '', mobileNumber: '', course: '' });
  };

  const handleInputChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleWhatsappChange = (event) => {
    setIsWhatsappChecked(event.target.checked);
  };

  return (
    <>
      <section className='contact-us'>
        <div className='lamar-container'>
          <h2>Contact Us</h2>
          <div className="switch-button">
            <input className="switch-button-checkbox" type="checkbox"  onChange={handleWhatsappChange}
        checked={isWhatsappChecked}></input>
            <label className="switch-button-label" htmlFor=""><span className="switch-button-label-span">Email</span></label>
          </div>
          {isWhatsappChecked && 
            <div className='whatsapp_contact'>
              <i className='fab fa-whatsapp fa-fw icon large_icon'></i>
              <div className='info'>
                <a href='http://wa.me/+962786305843' target='_blank' rel='noreferrer'>
                  +962786305843
                </a>
              </div>
            </div>
          }
          {!isWhatsappChecked && <form onSubmit={handleFormSubmit}>
            <div className='form-group flex'>
              <input type='text' className='form-control' id='name' name='name' value={formData.name} onChange={handleInputChange} placeholder='Name' required />
            </div>

            <div className='form-group'>
              <input type='tel' className='form-control' id='mobileNumber' name='mobileNumber' value={formData.mobileNumber} onChange={handleInputChange} placeholder='Mobile Number' required />
            </div>

            <div className='form-group'>
              <select
                className='form-control'
                id='course'
                name='course'
                value={formData.course}
                onChange={handleInputChange}
                required
              >
                <option value=''>Select Course</option>
                <option value='PTE Academic Course - Explained in English'>PTE Academic Course - Explained in English</option>
                <option value='كورس PTE شرح باللغة العربية'>كورس PTE شرح باللغة العربية</option>
              </select>
            </div>

            {formError && (
              <div className='alert alert-danger' role='alert'>
                Please fill in all fields.
              </div>
            )}
            <div className='form-group'>
              <button type='submit' className='btn btn-primary'>
                Send
              </button>
            </div>
          </form>}
        </div>
      </section>
    </>
  );
}

export default ContactUs;
