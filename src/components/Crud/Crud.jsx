import s from './Crud.module.css'
import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import SyncIcon from '@mui/icons-material/Sync';
import CloseIcon from '@mui/icons-material/Close';
import Card from './Card/Card'
import NewNote from './NewNote/NewNote'


const Crud = () => {
  const [list, setList] = useState([])

  const [dataPostApi, setDataPostApi] = useState([])

  const onAdd = () => {
    getApi()
  }

  const [newText, setNewText] = useState()

  const onNewText = (ev) => {
    setList((list) => ({
      ...list,
      
      userId: new Date().getTime(), 
      content: ev.target.value 
    })    )
    setNewText(ev.target.value)
  }

  const handleSubmit = (ev) => {
    ev.preventDefault()
    postApi()
    setNewText('')
  }

  useEffect(() => {
    getApi()
  }, [dataPostApi])

  const onUpDate = (ev) => {
    getApi()
  }

  const baseUrl = 'http://localhost:7070'

  // GET API
  const getApi =  () => {
     fetch(baseUrl + '/notes')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Error occurred!')
        }
        return response.json()
      })
      .then((data) => setDataPostApi(data))
      .catch((err) => {
        throw new Error('Какая то фигня с сервером')
      })
  }


  // POST API
  const postApi = () => {
    fetch(baseUrl + '/notes', {
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
      .then((data) => { setDataPostApi(data) }
            )
      .catch((err) => {
        console.log(err)
      })
  }

  
  // DELETE API
  const onClose = (id, userId) => {
    fetch(baseUrl + '/notes/' + id, {
      method: 'DELETE'
      })
    .catch((err) => {
      console.log(err)
    })
  }

  return (
    <Routes>
      <Route path='/crud' element={
        <div className={s.container}>
          <div className={s.crud}>
            <div className={s.notes}>
              <span>Notes</span>
              <div style={{ position: 'relative', marginLeft: '20px' }}>
                <div className={s.circle}>
                  <SyncIcon className={s.icon} onClick={onUpDate} />
                </div>
              </div>
            </div>
          </div>
          <div className={s.cards}>
            {dataPostApi.map((itm) => <Card content={itm.content} userId={itm.userId} id={itm.id} onClose={onClose} />)}
          </div>
          <NewNote getApi={getApi} onNewText={onNewText} newText={newText} handleSubmit={ handleSubmit }/>
        </div>
      } />
    </Routes>
  )
}

export default Crud 