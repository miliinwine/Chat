import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from 'react-router-dom'
import { addMessage } from "../../store/messageSlice";

import { Textarea } from '../../ui/Textarea/Textarea'
import { Button } from '../../ui/Button/Button'
import { Message } from '../../components/Message/Message'
import { List } from '../../components/List/List'
import style from "./Room.module.css"

export const Room = () => {
  const dispatch = useDispatch(); // Диспетчер Redux для добавления задачи
  const [text, setText] = useState(""); // Значения Textarea
  const messages = useSelector((state) => state.message.messages); // Данные из Redux хранилища
  const [params, setParams] = useState({ user: "", password: "" }) // Введенные данные из формы входа (Main)
  const { search } = useLocation() // Ссылка с именем и паролем пользователя

  // Обработчик изменений Textarea
  const handlerText = (evt) => {
    setText(evt.target.value)
  }
  // Функция по добавлению нового сообщения
  const addNewMessage = () => {
    if (text.trim())
    dispatch(addMessage({ text: text.trim() }));
    setText("")
  }
  // Отображение имени пользователя
  useEffect(() => {
    const searchParams = Object.fromEntries(new URLSearchParams(search))
    setParams(searchParams)
    console.log(searchParams);
  }, [search])

  return (
    <>
      <div className={style.items}>
        <h2 className={style.title}>Общая комната</h2>
        <Link to="/">
          <Button className={style.exit} children="Выйти" />
        </Link>
      </div>
      <div className={style.chat}>
        <List>
          {messages.map((message) =>
            (<Message username={params.username} key={message.id} {...message} />))}
        </List>
      </div>
      <Textarea
        handler={handlerText}
        value={text}
        type="text"
        placeholder="Ваше сообщение..." />
      <Button handler={addNewMessage} className={style.button} children='Отправить' />
    </>
  )
} 
