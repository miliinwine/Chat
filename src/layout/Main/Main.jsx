import React, { useState } from 'react'
import { Input } from '../../ui/Input/Input'
import { Link } from 'react-router-dom'
import { Button } from '../../ui/Button/Button'
import style from './Main.module.css'

export const Main = ({ buttonText }) => {
  const { USERNAME, PASSWORD } = {
    USERNAME: "username",
    PASSWORD: "password"
  } // Объект с именем и паролем
  const [values, setValue] = useState({ [USERNAME]: "", [PASSWORD]: "" }) // Введенные данные из Input
  // Обработчик изменений Input
  const handlerInput = ({ target: { value, name } }) => {
    setValue({ ...values, [name]: value.trim().toLowerCase() })
  }
  // Функция по отмене маршрутизации без ввода значений в Input
  const handlerButton = (evt) => {
    const isDisabled = Object.values(values).some(value => !value)
    if(isDisabled) evt.preventDefault()
  }
console.log(values);
  return (
    <>
      <div className={style.forms}>
        <form className={style.form}>
          <label className={style.text}>Никнейм</label>
          <Input onChange={handlerInput} value={values[USERNAME]} name="username" className={style.input} placeholder="милый кошакевич" />
        </form>
        <form className={style.form}>
          <label className={style.text}>Пароль</label>
          <Input onChange={handlerInput} value={values[PASSWORD]} name="password" className={style.input} placeholder="мяу мяу 69" />
        </form>
        <Link onClick={handlerButton} to={`/room?username=${values[USERNAME]}`}>
          <Button
            className={style.button}
            children={buttonText}
          />
        </Link>
      </div>
    </>
  )
}
