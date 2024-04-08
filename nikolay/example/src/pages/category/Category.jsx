import React from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from '@mui/material'

import { projects } from "../../constants"
import { fadeIn } from "../../utils/motion"
import Title from "../../components/title/Title"
import CategoryHeader from "./CategoryHeader"
import CategoryBody from "./CategoryBody"
import CategoryFooter from "./CategoryFooter"
import { StyledDarkButton } from "../../components/button/LinkBtn"

const CategoryCard = (props) => {

  const { index, date, siteName, title, content, imgUrl, count } = props

  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      className='p-5 rounded-2xl lg:w-[48%] sm:w-[100%]'
    >
      <Card>
        <CardContent>
          <CategoryHeader date={date} siteName={siteName} />
          <CategoryBody title={title} content={content} imgUrl={imgUrl} />
          <CategoryFooter siteName={siteName} {...count} />
        </CardContent>
      </Card>
    </motion.div >
  )
}

const Category = () => {
  return (
    <>
      <Title
        darkText1='Lorem'
        purpleText='ipsum dolor sit amet'
        darkText2='consectetuer'
      />

      <div className='mt-20 flex flex-wrap justify-between gap-5'>
        {projects.map((project, index) => (
          <CategoryCard key={index} index={index} {...project} />
        ))}
      </div>

      <div className="flex justify-center p-20">
        <StyledDarkButton>Add</StyledDarkButton>
      </div>
    </>
  )
}

export default Category
