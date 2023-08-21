import s from './NewNote.module.css'
import SendIcon from '@mui/icons-material/Send';


const NewNote = ({ getApi, onNewText, newText, handleSubmit, onClick }) => {
  return (
    <div className={ s.newnotes }>
      <span>NewNote</span>
      <form action='#' className={ s.form } onSubmit={(ev) => handleSubmit(ev) }>
        <textarea 
          className={ s.newText } 
          value={ newText } 
          onChange={(ev) => onNewText(ev) } 
      // onKeyPress={(ev) => ev.key === 'Enter' ? handleSubmit(ev) : onNewText(ev) }
        />
        <div className={ s.button }>
          <button type='submit' className={ s.btnSend } onChange={(ev) => onNewText(ev)} onClick={(ev) => onClick(new Date().getTime())}>
            <SendIcon />
          </button>
        </div>
      </form>
    </div>
  )
}

export default NewNote 