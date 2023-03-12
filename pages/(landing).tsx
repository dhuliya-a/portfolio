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
        <div className={styles.row1}></div>
        <div className={styles.row2}>
          <div className={styles.col1}></div>
          <div className={styles.col2}></div>
          <div className={styles.col3}></div>
        </div>
      </div>
    </div>
  </>
  )
}