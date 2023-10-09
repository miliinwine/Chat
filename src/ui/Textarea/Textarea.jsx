import React from 'react'
import style from './Textarea.module.css'

export const Textarea = ({handler, value, type, placeholder}) => {
  return (
    <textarea onChange={handler} value={value} className={style.textarea} type={type} placeholder={placeholder}></textarea>
    )
}
