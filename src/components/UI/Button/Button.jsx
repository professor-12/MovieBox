import React from 'react'

const Button = (props) => {
  return (
    <button className={`${props.color} ${props.px} flex space-x-4 ${props.py} rounded-lg text-sm font-semibold`}>{props.children}</button>
  )
}

export default Button