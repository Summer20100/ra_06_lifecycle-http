import s from './Card.module.css'
import { useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';


const Card = ({ id, content, onClose, userId }) => {
  return (
    <div className={ s.card  }>
      <textarea value= { content } />
      <div className={ s.close }>
        <CloseIcon className={ s.iconClose } onClick={(ev) => onClose(id, userId)}/>
      </div>
    </div>
  )
}

export default Card 