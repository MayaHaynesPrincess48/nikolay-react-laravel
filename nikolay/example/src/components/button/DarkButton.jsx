import React from 'react'
import { styles } from '../../styles'


const DarkButton = (props) => {

  const { index, title, icon } = props

  return (
    <button key={index} className={`${styles.darkButton} flex items-center`}>
      {title}&nbsp;{icon}
    </button>
  )

}

export default DarkButton