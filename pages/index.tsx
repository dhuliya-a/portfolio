import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Landing from './(landing)'
import Logo from './(logo)'
import Menu from './(menu)'

export default function Home() {
  return (
  <>
      <Menu></Menu>  
      <Logo></Logo>
      <Landing></Landing>
  </>
  )
}
