import React from 'react'
import { FormControlLabel } from '@mui/material';
import { topicTitles } from '../../constants'
import { StyledWhiteButton } from "../../components/button/LinkBtn";


const SkillButtons = () => {


  return (
    <ul className="flex flex-wrap">
      {
        topicTitles.map((title, index) => {
          return (
            <li key={index} className="p-1">
              <FormControlLabel control={<StyledWhiteButton>{title}</StyledWhiteButton>} />
            </li>
          )
        })
      }
    </ul>
  )
}

export default SkillButtons