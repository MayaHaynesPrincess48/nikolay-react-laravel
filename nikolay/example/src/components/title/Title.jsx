import React from 'react'
import { motion } from "framer-motion";

import { styles } from '../../styles';
import { textVariant } from "../../utils/motion"

const Title = (props) => {

  const { darkText1, purpleText, darkText2 } = props

  return (
    <motion.div variants={textVariant()} className="flex flex-wrap">
      <p className={`${styles.sectionSubText}  md:w-[30%] sm:w-[100%]`}>Lorem ipsum dolor</p>
      <h3 className={`${styles.sectionHeadText} md:w-[70%] sm:w-[100%]`}>
        {darkText1} <span style={{ color: 'var(--purple)' }}>{purpleText}</span> {darkText2}
      </h3>
    </motion.div>
  )
}

export default Title