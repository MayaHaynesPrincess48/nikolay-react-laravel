import React from "react";
import { motion } from "framer-motion";
import { Box } from '@mui/material'

import { SectionWrapper } from "../../hoc";
import { slideIn } from "../../utils/motion";

import { profile } from "../../assets";
import ProfileCard from "../../components/card/ProfileCard";
import LargeAvatar from "../../components/image/LargeAvatar";
import LinkUrls from "./LinkUrls";

const Welcome = () => {

  return (
    <Box component="section" className='xl:pt-35 flex flex-wrap sm:pt-30 gap-5 flex justify-center' >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='md:w-[30%] sm:w-[100%]'
      >
        <LargeAvatar url={profile} />
        <LinkUrls />
      </motion.div>
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className=' md:w-[65%] sm:w-[100%]'
      >
        <ProfileCard />
      </motion.div>
    </Box>
  );
};

export default SectionWrapper(Welcome, "welcome");
