import React from 'react'
import { topicTitles } from '../../constants'
import ButtonCom from '../../components/button/PurpleButton';
import WhiteButton from '../../components/button/WhiteButton';


const SkillButtons = () => {

  return (
    <ul className="flex flex-wrap">
      {
        topicTitles.map((title, index) => {
          return (
            <li key={index} className='p-1'>
              <WhiteButton title={title} />
            </li>
          )
        })
      }
    </ul>
  )
}

export default SkillButtons