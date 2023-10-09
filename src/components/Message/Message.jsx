import React from 'react'
import style from './Message.module.css'

export const Message = ({text, username}) => {
  return (
    <div className={style.messages}>
    <div className={style.rectangle}></div>
    <div>
        <h2 className={style.name}>{username}</h2>
        <li className={style.message}>{text}</li>
    </div>
    </div>
  )
}
