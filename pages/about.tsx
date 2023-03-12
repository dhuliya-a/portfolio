import React, { useState, useEffect } from 'react';

import styles from '../styles/About.module.css'

export default function About() {

  const [cursorPos, setCursorPos] = useState({x:1,y:2});
  useEffect(() => {});

  return (
    <>
    <div className={styles.container}>
      <div className={styles.about}>
        <div className={styles.col1}></div>
        <div className={styles.col2}>
          <div className={styles.row1}></div>
          <div className={styles.row2}></div>
          <div className={styles.row3}></div>
        </div>
      </div>
    </div>
  </>
  )
}