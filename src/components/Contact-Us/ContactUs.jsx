import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import '../../styles/contact-us/contact-us.css';
function ContactUs() {
  const { t, i18n } = useTranslation();
  return (
    <>
      <section className='contact-us'>
        <div className='lamar-container'>
          <form>
            <h2>Contact Us</h2>

            <div className='email'>
              <h5>{t('byemail.label')}</h5>
              <i className='far fa-envelope icon'></i>

              <a href='mailto:winnersacademy.pte@gmail.com' target='_blank' rel='noreferrer'>
                winnersacademy.pte@gmail.com
              </a>
            </div>
            <div className='email'>
              <h5>{t('bywhatsapp.label')}</h5>
              <i className='fab fa-whatsapp fa-fw icon'></i>
              <a href='http://wa.me/+962786305843' target='_blank' rel='noreferrer'>
                +962786305843
              </a>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default ContactUs;
