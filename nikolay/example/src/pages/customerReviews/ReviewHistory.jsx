import React from 'react'
import { motion } from "framer-motion"
import Avatar from '@mui/material/Avatar'

import Title from '../../components/title/Title'
import { styles } from '../../styles'
import { textVariant } from "../../utils/motion"
import { profile } from '../../assets'
import PurpleButton from '../../components/button/PurpleButton'
import { GoArrowUpRight } from 'react-icons/go'


const ReviewHistory = () => {


  return (
    <div className='bg-info p-10'>
      <Title darkText1='Lorem ipsum dolor sit amet' purpleText='Lorem ipsum dolor sit' />
      <motion.div variants={textVariant()} className="flex flex-wrap">
        <div className='md:w-[30%] sm:w-[100%] p-5 flex gap-3'>
          <Avatar alt="Remy Sharp" src={profile} sx={{ width: 100, height: 100 }} />
          <div className='py-3'>
            <div className={styles.text6}>Wacilli Petrob</div>
            <div className={styles.text6}>Channel</div>
            <div className={styles.text6}>Subscribe</div>
          </div>
        </div>
        <PurpleButton title='Lorem ipsum' icon={<GoArrowUpRight />} />
      </motion.div>
    </div>
  )
}

export default ReviewHistory