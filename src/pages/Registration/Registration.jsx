import React from 'react'
import { Header } from '../../layout/Header/Header'
import { Main } from '../../layout/Main/Main'
import { Link } from 'react-router-dom'
import { Button } from '../../ui/Button/Button'
import style from "../../layout/Main/Main.module.css"

export const Registration = () => {
  return (
    <>
      <Header />
      <main>
        <div className={style.titles}>
          <h2 className={style.title}>Регистрация</h2>
          <Link to="/"><Button className={style.link} children="Вход" /></Link>
        </div>
        <Main buttonText="Зарегистрироваться" />
      </main>
    </>
  )
}
