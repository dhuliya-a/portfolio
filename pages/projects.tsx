import React, { useState, useEffect } from 'react';

import styles from '../styles/Projects.module.css'

export default function Projects() {

  const [cursorPos, setCursorPos] = useState({x:1,y:2});
  useEffect(() => {});

  return (
    <>
    <div className={styles.container}>
      <div className={styles.projects}>
        <div className={styles.row1}></div>
        <div className={styles.row2}></div>
        <div className={styles.row3}>
          <div className={styles.col1}></div>
          <div className={styles.col2}></div>
        </div>
      </div>
    </div>
  </>
  )
}