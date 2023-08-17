import s from './Navbar.module.css'
import { NavLink } from 'react-router-dom'
import { name } from './../../../package.json'

const Navbar = () => {
  return (
    <div className={ s.navbar }>
      <div className={ s.exersize }  >
        LESSON:<br/> { name }
      </div>
      <NavLink to='/watches'>
        <input type='button' className={ s.button } value='WATCHES' />
      </NavLink>
      
      <NavLink to='/crud'>
        <input type='button' className={ s.button } value='CRUD' />
      </NavLink>
      
      <NavLink to='/chat'>
        <input type='button' className={ s.button } value='CHAT' />
      </NavLink>    
    </div>
  )
}

export default Navbar 