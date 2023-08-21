import { Route, Routes } from 'react-router-dom'
import { useState, useEffect } from 'react'
import SendIcon from '@mui/icons-material/Send';
import s from './Chat.module.css'

const Chat = () => {
  const [message, setMessage] = useState([])
  const [text, setText] = useState()
  const [list, setList] = useState()

  const handleSubmit = (ev) => {
    ev.preventDefault()
    postApi()
    setList('')
    setText('')
  }

  const onText = (ev) => {
    setList((list) => ({
      ...list,
      userId: new Date().getTime(),
      content: ev.target.value
    }))
    setText(ev.target.value)
  }

  let url = 'https://chat-server.summer20100.repl.co/messages/'

  const getApi = () => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Error occurred!')
        }
        return response.json()
      })
      .then((data) => {
        setMessage(data)
      })
      .catch((err) => {
        throw new Error('Какая то фигня с сервером')
      })
  }
  useEffect(() => {
    getApi()
    return
  }, [])

  console.log(message)


  const postApi = () => {
    fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        userId: list.userId,
        content: list.content
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((data) => setDataPostApi(data))
      .catch((err) => {
        console.log(err)
      })
    getApi()
  }


  return (
    <Routes>
      <Route path='/chat' element={
        <div className={s.container}>
          <div className={ s.messages }>
            <div className={ s.myMessage }>
              sdvsd
            </div>
            <div className={ s.otherMessage }>
              QWERT
            </div>          
          </div>
          <form className={s.form} onSubmit={handleSubmit} action='#'>
            <textarea className={s.inputText} onChange={ onText } value={ text }/>
            {/* <input type='submit' className={s.inputBtn} onChange={ onText }/> */}
            <button type='submit' className={s.btnSend} onChange={ onText }>
              <SendIcon />
            </button>
          </form>
        </div>
      } />
    </Routes>
  )
}

export default Chat 