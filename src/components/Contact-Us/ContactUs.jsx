import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import emailjs from 'emailjs-com';
import '../../styles/contact-us/contact-us.css';
import { Modal, Button } from 'react-bootstrap';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

function ContactUs() {
  const { t, i18n } = useTranslation();
  const [formData, setFormData] = useState({subject: 'New User Interested', name: '', mobileNumber: '', course: '' });
  const [formError, setFormError] = useState(false);
  const [invalidPhoneNumber, setInvalidPhoneNumber] = useState(false);
  const [isWhatsappChecked, setIsWhatsappChecked] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(()=>{
    emailjs.init(process.env.REACT_APP_EMAIL_JS_PUBLIC_KEY);
  }, []);

  useEffect(()=>{
    const inputElement = document.querySelector('.PhoneInputInput');
    inputElement.classList.add("form-control");
  });

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log('formData', formData);
    if (formData.name === '' || formData.mobileNumber === '' || formData.course === '') {
      setFormError(true);
      return;
    }

    const isValid = validatePhoneNumber(formData.mobileNumber);
    if (!isValid) {
      setInvalidPhoneNumber(true);
      return;
    }
    setFormError(false);
    
    emailjs.send(process.env.REACT_APP_EMAIL_JS_SERVICE_ID, process.env.REACT_APP_EMAIL_JS_TEMPLATE_ID, formData)
      .then((result) => {
        console.log(result.text);
        setShowModal(true);
      }, (error) => {
        console.log(error.text);
      });

    setFormData({subject: 'New User Interested', name: '', mobileNumber: '', course: '' });
  };

  const handlePhoneInputChange = (phone) => {
    setFormData({ ...formData, mobileNumber: phone });
  };

  const validatePhoneNumber = (phoneNumber) => {
    const phoneRegex = /^\+(?:[0-9] ?){6,14}[0-9]$/;
    if (phoneRegex.test(phoneNumber)) {
        return true;
    } else {
        return false;
    }
  };

  const handleInputChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleWhatsappChange = (event) => {
    setIsWhatsappChecked(event.target.checked);
  };
  const handleCloseModal = () => {
    setShowModal(false);
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
              {/* <input type='tel' className='form-control' id='mobileNumber' name='mobileNumber' value={formData.mobileNumber} onChange={handleInputChange} placeholder='Mobile Number' required /> */}
              <PhoneInput
                placeholder="Enter phone number"
                value={formData.mobileNumber}
                onChange={handlePhoneInputChange}
                defaultCountry="JO"
                style={{width: "100%"}}
                required
              />
            </div>
            {invalidPhoneNumber && (
              <div className='alert alert-danger' role='alert'>
                Please enter valid phone number.
              </div>
            )}

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
                <option value='PTE Academic Course Fully Explained in English'>PTE Academic Course Fully Explained in English</option>
                <option value='PTE Academic Course For Arabic Speakers'>PTE Academic Course For Arabic Speakers</option>
                <option value='PTE Core Course For Arabic Speakers'>PTE Core Course For Arabic Speakers</option>
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
          <Modal show={showModal} onHide={handleCloseModal}>
            <Modal.Header closeButton>
              <Modal.Title>Winners Academy</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>Thank you for contacting us! We'll be in touch soon.</p>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleCloseModal}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </section>
    </>
  );
}

export default ContactUs;
