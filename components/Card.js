import React from 'react'

const Card = ({children, nopadding}) => {
  let classes = 'bg-white shadow-md shadow-gray-300 rounded-md mb-5'
  if(!nopadding) {
    classes += ' p-4'
  }
  return (
    <div className={classes}>
      {children}
    </div>
  )
}

export default Card
