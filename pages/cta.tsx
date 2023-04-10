import React, { useState, useEffect } from 'react';

import styles from '../styles/Cta.module.css'
import Link from 'next/link';
import {sendContactForm} from './../lib/api';

interface FormData {
  subject: string;
  email: string;
  message: string;
}

export default function Cta() {
  
  const [formData, setFormData] = useState<FormData>({
    subject: "",
    email: "",
    message: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await sendContactForm(formData);
  };

  return (
    <>
    <div className={styles.container} id="contact">
      <div className={styles.cta}>
          <div className={styles.row1}>
            <div className={styles.title}>LET&apos;S CONNECT</div>
            <hr className={styles.line2}/>
          </div>
          <div className={styles.row2}>Feel free to drop a message if you have any questions or would like to collaborate on a project!</div>
          <div className={styles.row3}>
            <div className={styles.socials}>
              <p className={styles.socialsTitle}>SOCIALS</p>
              <Link  href="https://github.com/dhuliya-a" target="_blank"><p className={styles.socialsLink}>GitHub</p></Link >
              <Link  href="https://www.linkedin.com/in/adhuliya" target="_blank"><p className={styles.socialsLink}>LinkedIn</p></Link >
              {/* <p className={styles.socialsLink}>Instagram</p> */}
            </div>
            <p className={styles.socialsTitle2}>DROP A MESSAGE</p>
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.formEmail}>
                <label>Email</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} ></input>
              </div>
              <div className={styles.formSubject}>
                <label>Subject</label>
                <input name="subject" value={formData.subject} onChange={handleChange} ></input>
              </div>
              <div className={styles.formMessage}>
                <label>Message</label>
                <textarea placeholder='Your message' name="message" value={formData.message} onChange={handleChange}></textarea>
              </div>
              <button type ="submit" className={styles.formSubmit}>SEND</button>
            </form>
          </div>
          {/* <div className={styles.submit}></div> */}
      </div>
    </div>
  </>
  )
}