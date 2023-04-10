import styles from '../styles/Index.module.css'
import Landing from './(landing)'
import About from './about';
import Logo from './(logo)'
import Cta from './cta';
import React, { useState, useEffect } from 'react';

export default function Home() {

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0, interacting: false });
  
  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = event; 
    const interactionBoolean = event.currentTarget.classList.contains("Cta_socialsLink__fTIdR")? true: false;
    setMousePosition({ x: clientX, y: clientY, interacting: interactionBoolean });
  };

  useEffect(() => {
    const trailer = document.getElementById("Index_trailer__r5bSq");  
    if(trailer!=null){
      const keyframe = {
        transform : `translate(${mousePosition.x - trailer.offsetWidth/3}px, ${mousePosition.y- trailer.offsetHeight/2}px)`
      }
      trailer.animate(keyframe, {duration: 800, fill: "forwards"});
    }
  }, [mousePosition])
  

  return (
  <>
       {/* <Menu></Menu>   */}
      <div className={styles.mainContainer} onMouseMove={handleMouseMove}>
   
        <div id={styles.trailer}>
        {/* Mouse position: {mousePosition.x}, {mousePosition.y} */}
        </div>
        <Logo></Logo>
        <Landing></Landing>
        <About></About>
        {/* <Projects></Projects> */}
        <Cta></Cta>
      </div>
  </>
  )
}
