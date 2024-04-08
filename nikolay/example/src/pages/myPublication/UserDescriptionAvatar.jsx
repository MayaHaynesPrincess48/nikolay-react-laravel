import React from 'react'
import { motion } from "framer-motion"
import Avatar from '../../components/image/Avatar'

import { publicationUsers } from '../../constants'
import { fadeIn } from "../../utils/motion"

const UserDescriptionAvatar = () => {


  return (
    <div className="flex gap-5">
      {
        publicationUsers.map((item, index) => {
          return (
            <motion.div
              key={index}
              variants={fadeIn("up", "spring", index * 0.5, 0.75)}
            >
              <Avatar url={item.url} title={item.title} />
            </motion.div>
          )
        })
      }
    </div>
  )
}

export default UserDescriptionAvatar