import React from "react";
import { motion } from "framer-motion";

import { fadeIn } from "../../utils/motion";
import { styles } from "../../styles";
import { StyledLinkUrl } from "../../components/button/LinkBtn";
import { GoArrowUpRight } from "react-icons/go";


const CustomerVideoCard = (props) => {

  const { index, name, job, content, url } = props

  const cardStyle = {
    boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.2)',
    transition: 'transform 0.3s, box-shadow 0.3s',
  }

  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      className={` ${styles.cardImageStyle} xs:w-[250px] w-full bg-none`}
      style={cardStyle}
    >
      <div
        options={{ max: 45, scale: 1, speed: 450, }}
        className='rounded-[10px] p-5 text-center'
      >
        <div className="flex justify-center">
          <img src={url} className="w-[80%]" />
        </div>
        <div className={`${styles.text5}`}>{name}</div>
        <div className={`${styles.textDefault}`}>{job}</div>
        <div className={`${styles.textDefault}`}>{content}</div>
        <StyledLinkUrl
          className={`${styles.urlBtn} text-white`}
          onClick={() => { console.log('sdfsd') }}
        >
          опишите задачу<GoArrowUpRight />
        </StyledLinkUrl>
      </div>
    </motion.div>
  )
}

export default CustomerVideoCard