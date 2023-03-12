import React, { useState, useEffect } from 'react';

import styles from '../styles/Landing.module.css'
import { BsChevronCompactDown } from 'react-icons/bs';
import { IconContext } from "react-icons";

export default function Landing() {

  const [cursorPos, setCursorPos] = useState({x:1,y:2});
  useEffect(() => {});

  return (
    <>
    <div className={styles.container}>
      <div className={styles.banner}>
        <div className={styles.row1}>ANUBHAV DHULIYA</div>
        <div className={styles.row2}>
          <div className={styles.col1}>can we change the world?</div>
          <div className={styles.col2}><hr className={styles.line}/></div>
          <div className={styles.col3}>
            <div className={styles.creatortag}>creator</div>
            <div className={styles.engineertag}>engineer</div>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}