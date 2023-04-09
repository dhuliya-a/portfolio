import React from 'react'
import style from './../styles/Menu.module.css';

export default function Menu() {
  return (
    <>
    <div className={style.container}>
      <div className={style.button}>MENU</div>
      <div className={style.menu}>
        <a className={style.menuLink} href="/">Landing</a>
        <a className={style.menuLink} href="#about">About</a>
        <a className={style.menuLink} href="#projects">Projects</a>
        <a className={style.menuLink} href="#contact">Contact</a>
      </div>
    </div>
    </>
  )
}
