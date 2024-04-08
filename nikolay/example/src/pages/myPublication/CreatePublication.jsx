import React from 'react'
import { publications } from '../../constants'
import PublicationCard from '../../components/card/PublicationCard'
import Title from '../../components/title/Title'

const CreatePublication = () => {

  return (
    <>
      <Title
        darkText1='Lorem ipsum dolor sit amet lrem '
        purpleText='Lorem ipsum dolor sit am'
        darkText2=' lorem ipsu Lorem ipsum dolor sit amet lorem'
      />

      <div className='my-20 flex flex-wrap gap-10'>
        {publications.map((item, index) => (
          <PublicationCard key={index} index={index} {...item} />
        ))}
      </div>
    </>
  )
}

export default CreatePublication