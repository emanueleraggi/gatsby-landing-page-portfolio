import React from "react"

// Title will accept a title prop
const Title = ({title}) => {
  return ( 
    <div className="section-title">
      <h2>{title || "default-title"}</h2>
      <div className="underline"></div>
    </div>
  )
}

export default Title
