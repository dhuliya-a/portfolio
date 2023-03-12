import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Landing from './(landing)'
import About from './about';
import Logo from './(logo)'
import Menu from './(menu)'
import Projects from './projects';
import Cta from './cta';

export default function Home() {
  return (
  <>
      <div className={styles.container}>
        <Menu></Menu>  
        {/* <Logo></Logo> */}
        <Landing></Landing>
        <About></About>
        <Projects></Projects>
        <Cta></Cta>
      </div>
  </>
  )
}
