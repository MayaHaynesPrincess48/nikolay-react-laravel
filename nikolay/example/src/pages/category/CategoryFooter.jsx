import React from 'react'
import { GoArrowUpRight } from 'react-icons/go'
import { VisibilityOutlined, FavoriteBorderOutlined, MarkChatUnreadOutlined, BookmarkBorderOutlined } from '@mui/icons-material'
import PurpleButton from '../../components/button/PurpleButton'

const CategoryFooter = (props) => {

  const { siteName, view, favourite, message, pin, } = props

  return (
    <div className='flex justify-between pt-5'>
      <div className='flex items-center'>
        <PurpleButton title={`Читать на ${siteName}`} icon={<GoArrowUpRight />} />
      </div>
      <div className='flex items-center gap-2 '>
        <button style={{ color: 'var(--dark-gray)' }}><VisibilityOutlined /> {view}</button>
        <button style={{ color: 'var(--dark-gray)' }}><FavoriteBorderOutlined /> {favourite}</button>
        <button style={{ color: 'var(--dark-gray)' }}><MarkChatUnreadOutlined /> {message}</button>
        <button style={{ color: 'var(--dark-gray)' }}><BookmarkBorderOutlined /> {pin}</button>
      </div>
    </div>
  )
}

export default CategoryFooter