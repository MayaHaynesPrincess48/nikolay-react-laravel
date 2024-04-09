import React from 'react'
import { styles } from '../../styles'


const WhiteButton = (props) => {

  const { index, title } = props

  return (
    <button key={index} className={styles.whiteButton}>
      {title}
    </button>
  )

}

export default WhiteButton