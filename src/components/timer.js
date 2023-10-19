import React,{useState,useEffect} from 'react'

function Timer() {
   
     
    const [seconds, setSeconds] = useState(10);
    const [minutes, setMinutes] = useState(10);
    
    useEffect(() => {
     var timer=setInterval(() => {
        setSeconds(seconds-1);

        if(seconds===0){
            setMinutes(minutes-1);
            setSeconds(59);
        }
     }, 1000);
     return()=>clearInterval(timer)
    },[minutes,seconds])
    
  return (
    <div>
        {minutes+":"+seconds}
    </div>
  )
}
export default Timer
