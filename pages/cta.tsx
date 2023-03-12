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
            <div className={styles.header}></div>
            <div className={styles.line}></div>
          </div>
          <div className={styles.row2}></div>
          <div className={styles.row3}>
            <div className={styles.socials}></div>
            <div className={styles.form}></div>
          </div>
          <div className={styles.submit}></div>
      </div>
    </div>
  </>
  )
}