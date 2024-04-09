import React from 'react'
import { motion } from "framer-motion"

import { slideIn } from "../../utils/motion"
import { man1 } from "../../assets"
import UserSkillDescription from "./UserSkillDescription"
import { GoArrowUpRight } from "react-icons/go";
import UserDescriptionAvatar from './UserDescriptionAvatar';
import SkillButtons from '../welcome/SkillButtons';
import DarkButton from '../../components/button/DarkButton';


const UserDescriptionTitle = () => (
  <h2>
    <span style={{ color: 'var(--purple)' }}>Lorem Ipsum </span> Dolor Amet
  </h2>
)


const UserDescriptionData = () => {


  return (
    <div className="pt-10 flex flex-wrap gap-10">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='md:w-[35%] sm:w-[100%]'
      >
        <div className="flex justify-center ">
          <img src={man1} className=" sm:w-[80%] max-w[400px]" />
        </div>
      </motion.div>

      <div className="md:w-[60%] sm:w-[100%] flex flex-col justify-between">

        <UserDescriptionAvatar />
        <div>
          <UserDescriptionTitle />
          <UserSkillDescription />
          <SkillButtons />
          <DarkButton title='Donec vitae sapien ut liber' icon={<GoArrowUpRight />} />
        </div>
      </div>

    </div>
  )
}

export default UserDescriptionData