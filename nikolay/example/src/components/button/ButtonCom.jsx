import React from 'react'


const ButtonCom = (props) => {

  const { index, title, bgColor, color, } = props
  const bg = 'bg-' + bgColor
  const FontC = 'text-' + color
  console.log('font : ', FontC)
  console.log('bg : ', bg)

  return (
    <button className={bg}>
      sdfg
    </button>
  )

}

export default ButtonCom