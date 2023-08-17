import s from './Watch.module.css'
import { useState, useEffect } from 'react'
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

const Watch = ({city, timeZone, id, onDelite }) => {
  // Initialize the current time to the current date and time
  const [time, setTime] = useState(new Date());
  
  const changeTimezone = (time) => {
    // let date = new Date();
    // console.log('Date in India: ' + time);
    // let formatter = new Intl.DateTimeFormat('en-US', { timeZone: "America/Denver" });

    // let formatter = new Intl.DateTimeFormat('en-GB', { dateStyle: 'full', timeStyle: 'long', timeZone: 'Australia/Sydney' }).format(time)

    return new Intl.DateTimeFormat('en-GB', {timeStyle: 'medium',  timeZone: timeZone }).format(time)
    // let usDate = formatter.format(time);
    // console.log('Date in Australia: ' + formatter);
  }

  let newtime = changeTimezone(time).split(':')
  
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const hours = newtime[0];
  const minutes = newtime[1];
  const seconds = newtime[2];

  const timeString = `${hours}:${minutes}:${seconds}`;
  

  // const hours = time.getHours();
  // const minutes = time.getMinutes();
  // const seconds = time.getSeconds();
  // // Format the time as a string
  // const timeString = `${hours <= 9 ? '0' + hours : hours}:${minutes <= 9 ? '0' + minutes : minutes}:${seconds <= 9 ? '0' + seconds : seconds}`;

  return (
    <div>
      <div className={ s.city }>{ city }</div>
      <div className={ s.watches }>
        {timeString}
        <HighlightOffIcon className={ s.close } onClick={() => onDelite(id)}/>
      </div>
    </div>
   
  )
}

export default Watch


