import React from 'react'
import { styles } from '../../styles'


const PurpleButton = (props) => {

  const { index, title } = props

  return (
    <button key={index} className={styles.purpleButton}>
      {title}
    </button>
  )

}

export default PurpleButton