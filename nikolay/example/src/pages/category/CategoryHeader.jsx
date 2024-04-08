import React from 'react'


const CategoryHeader = (props) => {

  const { date, siteName } = props

  return (

    <div className="text-dark flex justify-between items-center">
      <h6 style={{ color: 'var(--dark-gray)' }}>{date}</h6>
      {siteName}
    </div>

  )
}

export default CategoryHeader