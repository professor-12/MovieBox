import React from 'react'
import classes from '../../../index.module.css';

const Wrapper = (props) => {
  return (
    <div style={{background: "assets/Poster(3).png}} className={`text-white ${classes.container} mx-auto h-[600px]   object-fill py-5`}>{props.children}</div>
  )
}

export default Wrapper
