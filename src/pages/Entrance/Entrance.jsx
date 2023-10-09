import React from 'react'
import { Header } from '../../layout/Header/Header'
import { Main } from '../../layout/Main/Main';
import { Link } from 'react-router-dom';
import { Button } from '../../ui/Button/Button';
import style from "../../layout/Main/Main.module.css"


export const Entrance = () => {
  return (
    <>
      <Header />
      <main>
        <div className={style.titles}>
          <h2 className={style.title}>Вход</h2>
          <Link 
          // to="/registration"
          >
            <Button className={style.link} children="Регистрация" /></Link>
        </div>
        <Main buttonText="Войти" />
      </main>
    </>
  )
}
