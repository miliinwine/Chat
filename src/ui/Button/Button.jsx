import React from 'react'

export const Button = ({className, handler, children}) => {
  return (
    <button onClick={handler} className={className}>{children}</button>
  )
}
