import React from 'react'
import classes from '../../../index.module.css';

const Wrapper = (props) => {
  return (
    <div  className={`text-white ${classes.container} mx-auto h-[600px]   object-fill py-5`}>{props.children}</div>
  )
}

export default Wrapper
