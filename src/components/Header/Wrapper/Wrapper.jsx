import React from 'react'
const Wrapper = (props) => {
  return (
    <div  className={`text-white container mx-auto h-[600px]   object-fill py-5`}>{props.children}</div>
  )
}

export default Wrapper
