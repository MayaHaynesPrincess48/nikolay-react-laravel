import React from 'react'

const CategoryBody = (props) => {

  const { title, content, imgUrl } = props

  return (
    <>
      <div className="py-5">
        <h3>{title}</h3>
        <h5>{content}</h5>
      </div>
      <img src={imgUrl} alt={imgUrl} />
    </>
  )
}

export default CategoryBody