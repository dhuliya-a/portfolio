import React, { useState, useEffect } from 'react';

import styles from '../styles/About.module.css'
import Link from 'next/link';
// import pdfFile from '/resume.pdf';

export default function About() {

  const [cursorPos, setCursorPos] = useState({x:1,y:2});
  useEffect(() => {});
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
        trailer.innerHTML = '<h2>open</h2>';
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

  return (
    <>
    <div className={styles.container} id="about">
      <div className={styles.about}>
        <div className={styles.col1}></div>
        <div className={styles.col2}>
          <div className={styles.row1}>
            <div className={styles.title}>ABOUT</div> 
            <hr className={styles.line}/>
          </div>
          <div className={styles.row2}>
            <p  className={styles.p1}>Hi there! My name is Anubhav Dhuliya and I&apos;m a software engineer and creator based in New Delhi, India. My passion lies in using technology to tackle societal issues and crafting innovative solutions for the web.</p>
            <p  className={styles.p1}>Currently working as a Senior Software Engineer at Optum, I did my Bachelor&apos;s in Computer Science & Engineering from Shiv Nadar University, Delhi-NCR. In the past, I have gained valuable work experience in various positions such as a Research Trainee at Defence R&D Organization of India where I utilized a Super-Resolution Generative Adversarial Network (SRGAN) to address the challenge of super-resolution and refining jointly. My product-based experiences include my work as a Full-Stack Software Engineer at FloBiz where I developed tools for Indian businesses and as a front-end engineer at Troopr.ai, where I created custom UI components and features.</p>
            <p  className={styles.p1}>My product-based experiences include my work as a Full-Stack Software Engineer at FloBiz where I developed tools for Indian businesses and as a front-end engineer at Troopr.ai, where I created custom UI components and features.</p>
            <p  className={styles.p1}>During my free time, I enjoy playing football, pursuing personal projects such as developing applications, creating films, and writing poems, and going for a run.</p>
            {/* <Link href={pdfFile} target = "_blank"> */}
              <div className={styles.row3}
              //  onMouseOver={handleHover} onMouseLeave={handleExit}
                >RESUME</div>
              {/* </Link> */}
          </div>
        </div>
      </div>
    </div>
  </>
  )
}