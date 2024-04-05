import React, { useEffect, useRef, useState } from 'react'
import '../styles/Countdown.css'


const formatTime = (time)=>{
    let minutes = Math.floor(time/60);
    let seconds = Math.floor(time - minutes * 60);
    
    if(minutes < 10) minutes = '0' + minutes;
    if(seconds < 10) seconds = '0' + seconds;
    return minutes + ':' + seconds;
}


const Countdown = ({seconds , onCountdownEnd}) => {
    const[countdown,setCountdown] = useState(seconds);
    
    const timedId = useRef();

    useEffect(()=>{
        timedId.current = setInterval(()=>{
            setCountdown(prev => prev - 1)
        },1000);
        return ()=> clearInterval(timedId.current);
    },[])

    useEffect(()=>{
        if(countdown < 0){
            clearInterval(timedId.current)
            onCountdownEnd();
        }
    },[countdown,onCountdownEnd])

  return (
    <div className={countdown <= 20 ? "countdown red" : "countdown"}>
        <label>Remaining Time</label><br/>
        {formatTime(countdown)}
        </div>
  )
}

export default Countdown    