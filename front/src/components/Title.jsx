
import React from 'react'

const Title = ({text1, text2}) => {
  return (
    <div className="relative inline-block text-center">
    <span className="text-gray-800 font-semibold text-3xl md:text-4xl uppercase">
      {text1}
      <span
        className="absolute left-1/2 -bottom-2 w-20 h-1 bg-indigo-600 transform -translate-x-1/2"
      ></span>
    </span>
  </div>
  )
}

export default Title