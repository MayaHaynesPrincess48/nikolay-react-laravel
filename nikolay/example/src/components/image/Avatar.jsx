import React from 'react'

const Avatar = (props) => {

  const { url, title } = props

  return (
    <div className="text-center">
      <div className="lg:w-[100px] sm:w-[80px] p-[1px] rounded-full border" style={{ borderColor: 'var(--purple)', borderWidth: '2px' }} >
        <img src={url} />
      </div>
      <div className='pt-3'>{title}</div>
    </div>
  )
}

export default Avatar