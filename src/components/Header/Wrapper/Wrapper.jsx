import React from 'react'
const Wrapper = (props) => {
  return (
    <div style = {{background: `url("assets/Poster(3).png")`}} className={`text-white container mx-auto h-[600px]   object-fill py-5`}>{props.children}</div>
  )
}

export default Wrapper
