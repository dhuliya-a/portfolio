import React, { useState, useEffect } from 'react';

import styles from '../styles/Cta.module.css'

export default function Cta() {

  const [cursorPos, setCursorPos] = useState({x:1,y:2});
  useEffect(() => {});

  return (
    <>
    <div className={styles.container}>
      <div className={styles.cta}>
          <div className={styles.row1}>
            <div className={styles.title}>LET'S CONNECT</div>
            <div className={styles.line}><hr className={styles.line2}/></div>
          </div>
          <div className={styles.row2}>Feel free to drop a message if you have any questions or would like to collaborate on a project!</div>
          <div className={styles.row3}>
            <div className={styles.socials}>
              <p className={styles.socialsTitle}>SOCIALS</p>
              <p className={styles.socialsLink}>GitHub</p>
              <p className={styles.socialsLink}>LinedIn</p>
              <p className={styles.socialsLink}>Gmail</p>
              <p className={styles.socialsLink}>Instagram</p>
            </div>
            <form className={styles.form}>
              <input placeholder='Enter email'></input>
              <input placeholder='Enter subject'></input>
              <textarea placeholder='Your message'></textarea>
              <button>Submit</button>
            </form>
          </div>
          {/* <div className={styles.submit}></div> */}
      </div>
    </div>
  </>
  )
}