import React from 'react'


const LargeAvatar = (props) => {

  const { url } = props

  return (
    <div className="flex justify-center">
      <img src={url} className="lg:h-[300px] lg:w-[290px] md:h-[200px] md:w-[200px] xm:h-auto " />
    </div>
  )
}

export default LargeAvatar