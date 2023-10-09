import React from 'react'
import style from './Header.module.css'

export const Header = () => {
  return (
    <>
      <h1 className={style.title}>Le' Chat 🐈</h1>
      <p className={style.text}>Привет, заходи к нам в чат и мы научим тебя
        программировать на html, css и javascript.</p>
    </>
  )
}
