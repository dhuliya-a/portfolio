import React from 'react'
import style from './../styles/Menu.module.css';
import Link from 'next/link';

export default function Menu() {
  return (
    <>
    <div className={style.container}>
      <div className={style.button}>MENU</div>
      <div className={style.menu}>
        <Link className={style.menuLink} href="/">Landing</Link>
        <Link className={style.menuLink} href="#about">About</Link>
        <Link className={style.menuLink} href="#projects">Projects</Link>
        <Link className={style.menuLink} href="#contact">Contact</Link>
      </div>
    </div>
    </>
  )
}
