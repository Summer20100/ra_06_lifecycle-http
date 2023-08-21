import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Watch from './Watch/Watch'
import timeZone from './timeZone.js'
import s from './Watches.module.css'

const Watches = () => {
  const [city, setCity] = useState('')
  const [list, setList] = useState([])
  const [valTimeZone, setValTimezone] = useState('Europe/Moscow')

  const onCity = (ev) => {
    setCity(ev.target.value)
  }

  const onList = () => {
    setList([...list, { id: new Date().getTime(), city: city, timeZone: valTimeZone }].filter(el => el.city !== ''))
    setCity('')
  }

  const onDelite = (id) => {
    setList([...list].filter((el) => {
      return el.id !== id
    }))
  }

  const onTimeZone = (el) => {
    setValTimezone(el)
    console.log(el)
  }

  let setWatch = list.map(el => <Watch city={el.city} timeZone={el.timeZone} id={el.id} key={el.id} onDelite={onDelite} />)

  return (
    <Routes>
      <Route path='/watches' element={
        <div className={s.container}>
          <div className={s.form}>
            <div className={s.city}>
              <label htmlFor='city' style={{fontSize: '13px', padding: '15px 0'}}> Город: </label>
              <input className={s.inputCity} id='city' value={city} placeholder='Введите город' onChange={onCity} required />
            </div>
            <div className={s.timeZone}>
              <label htmlFor='timeZone' style={{fontSize: '13px', padding: '15px 0'}}> Временная зона </label>
              <select className={s.inputTimeZone} id='timeZone' value={valTimeZone} onChange={(ev) => onTimeZone(ev.target.value)} >
                {timeZone.map((el) => <option key={(prev) => prev + 1} value={el}>{el}</option>)}
              </select>
            </div>
            <input className={s.inputBtn} type='button' value='Добавить' onClick={onList} />
          </div>
          <div className={ s.setWatch }>
            {setWatch}
          </div>
        </div>
      } />
    </Routes>
  )
}

export default Watches


