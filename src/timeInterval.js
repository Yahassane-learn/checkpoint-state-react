import React , {Component, useEffect,useState} from 'react';

function TimeInterval() {
    const [seconds,setSeconds] = useState(1) ;
    useEffect(() => {
        const interval = setInterval(() => {
          setSeconds(seconds => seconds + 1);
        }, 1000);
         
      }, []);

      return (
        <div>
            <h1>Time Interval :</h1>
            <div style = {{fontSize : '30px'}}>
                {seconds}
             </div>
        </div>
      )
     
  }
export default TimeInterval ;
