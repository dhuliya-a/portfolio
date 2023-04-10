import React, { useState, useEffect } from 'react';

import styles from '../styles/Landing.module.css'
import { BsChevronCompactDown } from 'react-icons/bs';
import { IconContext } from "react-icons";

export default function Landing() {

  const [cursorPos, setCursorPos] = useState({x:1,y:2});
  useEffect(() => {});
  const [interacting, setInteracting] = useState(false);

  const handleHover = (event: React.MouseEvent<HTMLDivElement>) => {
    setInteracting(true);
  };

  useEffect(() => {
    console.log("interacting : ", interacting);
    const trailer = document.getElementById("Index_trailer__r5bSq");  
    if(trailer!=null){
      if(interacting){
        trailer.style.height="7rem";
        trailer.style.width="7rem";
        trailer.innerHTML = '<h2>yes!</h2>';
        trailer.style.background="rgba(255, 0, 0, 1)";
      }
      else{
        trailer.style.height="5rem";
        trailer.style.width="5rem";
        trailer.innerHTML = '';
        trailer.style.background="rgba(255, 0, 0, 0)";
      }
    }  
  }, [interacting])
  
  const handleExit = (event: React.MouseEvent<HTMLDivElement>) =>{
    setInteracting(false);
  }

  const handleClick = () =>{
    console.log(document.getElementById("contact"));
    document.getElementById("contact")?.scrollIntoView({behavior:"smooth"});
  }

  return (
    <>
    <div className={styles.container}>
      <div className={styles.banner}>
        <div className={styles.row1}>
          <p>ANUBHAV</p><p> DHULIYA</p></div>
        <div className={styles.row2}>
          <div className={styles.col1}>can we change the world<span style={{"color":"red", fontWeight:"bold", cursor:"pointer"}} onMouseOver={handleHover} onMouseLeave={handleExit} onClick={handleClick}>?</span></div>
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