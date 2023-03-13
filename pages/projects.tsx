import React, { useState, useEffect } from 'react';

import styles from '../styles/Projects.module.css'

export default function Projects() {

  const [cursorPos, setCursorPos] = useState({x:1,y:2});
  useEffect(() => {});

  return (
    <>
    <div className={styles.container}>
      <div className={styles.projects}>
        <div className={styles.row1}>
        <div className={styles.title}>SELECTED PROJECTS</div>
          <div className={styles.line}><hr className={styles.line2}/></div>
        </div>
        <div className={styles.row2}>Take a look at some of the projects I've built.</div>
        <div className={styles.row3}>
          <div className={styles.col1}>
            <div className={styles.project}>
              <div className={styles.projectTitle}>Layermint</div>
              <div className={styles.projectBody}>Project @ The Untitled Collective<br/>
                                                  Full-Stack Developer<br/>
                                                  An image generation & NFT-minting tool using layer assets to create your own collection.
              </div>
            </div>
            <div className={styles.project}>
              <div className={styles.projectTitle}>Layermint</div>
              <div className={styles.projectBody}>Project @ The Untitled Collective<br/>
                                                  Full-Stack Developer<br/>
                                                  An image generation & NFT-minting tool using layer assets to create your own collection.
              </div>
            </div>
            <div className={styles.project}>
              <div className={styles.projectTitle}>Layermint</div>
              <div className={styles.projectBody}>Project @ The Untitled Collective<br/>
                                                  Full-Stack Developer<br/>
                                                  An image generation & NFT-minting tool using layer assets to create your own collection.
              </div>
            </div>
            <div className={styles.project}>
              <div className={styles.projectTitle}>Layermint</div>
              <div className={styles.projectBody}>Project @ The Untitled Collective<br/>
                                                  Full-Stack Developer<br/>
                                                  An image generation & NFT-minting tool using layer assets to create your own collection.
              </div>
            </div>
          </div>
          <div className={styles.col2}></div>
        </div>
      </div>
    </div>
  </>
  )
}