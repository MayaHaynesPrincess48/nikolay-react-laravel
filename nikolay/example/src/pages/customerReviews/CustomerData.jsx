import React from 'react'
import { customerCardDatas } from '../../constants'
import CustomerImageCard from './CustomerImageCard'
import CustomerVideoCard from './CustomerVideoCard'


const CustomerData = () => {

  return (
    <div className='flex justify-between flex-wrap py-10'>
      {
        customerCardDatas.map((item, index) => {
          return (
            <div key={index}>
              {
                item.type === 'image' ?
                  (<CustomerImageCard index={index} {...item} />) :
                  (<CustomerVideoCard index={index} {...item} />)
              }
            </div>
          )
        })
      }
    </div>
  )
}

export default CustomerData