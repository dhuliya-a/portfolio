import React, { useState, useEffect } from 'react';

import styles from '../styles/Home.module.css'
import { BsChevronCompactDown } from 'react-icons/bs';
import { IconContext } from "react-icons";

export default function Landing() {

  const [cursorPos, setCursorPos] = useState({x:1,y:2});
  useEffect(() => {

  });


  return (
    <>
    <div className={styles.container}>
      {/* <canvas id="c"></canvas> */}
      <main className={styles.main}>
        <div className={styles.bgshape}></div>
      <span className={styles.pretitle}>Hello, I am</span>
        <span className={styles.title}>ANUBHAV DHULIYA</span>
        <div className={styles.subtext}>
        {/* <span>engineer</span> */}
        <span>A full-stack software engineer driven to create the next generation of multimedia.</span>
        {/* <span>creator</span> */}
        </div>
        <IconContext.Provider value={{ color: "white", className: "global-class-name", size: "2em" }}>
        <h3 className={styles.enterbutton}><BsChevronCompactDown/></h3>
        <h3 className={styles.enterbutton2}><BsChevronCompactDown/></h3>
        </IconContext.Provider>
      </main>
  </div>
  </>
  )
}

/*
  const circles = document.querySelectorAll('.circle');
    circles.forEach((x: Element) => { 
      if (x instanceof HTMLElement) {
        x.style.left = 0 + "px";
        x.style.top = 0 + "px";
      }
   });

    window.addEventListener('mousemove', function(e){
      setCursorPos({x:e.clientX,y:e.clientY});
      circles.forEach((x: Element) => { 
        if (x instanceof HTMLElement) {
          x.style.left = cursorPos.x - 12 + "px";
          x.style.top = cursorPos.y - 12 + "px";
        }
     });
    });*/