import React from 'react'
import classes from '../../../index.module.css';

const Wrapper = (props) => {
  return (
    <div className={`text-white  mx-auto h-[600px]   object-fill py-5`} style={{background: 'Poster (3).png'}}> {props.children}</div>
  )
}

export default Wrapper