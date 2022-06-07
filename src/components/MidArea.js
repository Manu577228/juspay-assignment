import React from 'react'
import './MidArea.css'
import { AiOutlineZoomIn } from 'react-icons/ai'
import { AiOutlineZoomOut } from 'react-icons/ai'
import { TbEqual } from 'react-icons/tb'
import CatSprite from './CatSprite'


function MidArea() {
  return (
    <div>
      <div className='cat'><CatSprite /></div>
      <div className='circle'> <AiOutlineZoomIn style={{ marginLeft: '0.7rem', marginTop: '0.5rem', fontSize: '1.5rem' }} /> </div>
      <div className='circle'> <AiOutlineZoomOut style={{ marginLeft: '0.7rem', marginTop: '0.5rem', fontSize: '1.5rem' }} /> </div>
      <div className='circle'> <TbEqual style={{ marginLeft: '0.7rem', marginTop: '0.5rem', fontSize: '1.5rem' }} /> </div>
    </div>
  )
}

export default MidArea