import { Route, Routes } from 'react-router-dom'
import { useState, useEffect } from 'react'
import s from './Chat.module.css'

const Chat = () => {
  return (
    <Routes>
      <Route path='/chat' element={
        <div className={s.container}>
          Chat
        </div>
      } />
    </Routes>
  )
}

export default Chat 