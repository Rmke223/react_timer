import React, {useState} from 'react';
import "./App.css"
import Display from "./Display"
import BTN from "./BTN"

function App() {
  const [time, setTime] = useState({ms:0, s:0, m:0, h:0});
  const [interv, setInterv] = useState();
  const [status, setStatus] = useState(0);
  const start = () => {
    run();
    setStatus(1);
    setInterv(setInterval(run, 10));
  }
  
  var updatedMs = time.ms, updatedS = time.s, updatedM = time.m, updatedH = time.h;
  const run = () =>{
    if(updatedM === 60){
      updatedH++;
      updatedM = 0;
    }
    if(updatedS === 60){
      updatedM++;
      updatedS = 0;
    }
    if(updatedMs === 100){
      updatedS++;
      updatedMs = 0;
    }
    updatedMs++;
    return setTime({ms:updatedMs, s:updatedS, m:updatedM, h:updatedH});
  };
  const stop = () => {
    clearInterval(interv);
    setStatus(2);
  }
  const resume = () => start();

  const reset = () => {
    clearInterval(interv);
    setStatus(0);
    setTime({ms:0, s:0, m:0, h:0});
  }
  return (
      <div className="wrapper">
      <div className="display">
        <div id="time"> 
        <Display 
          time={time}
        />
        <BTN 
          start={start}
          status={status}
          stop={stop}
          reset={reset}
          resume={resume}
        />
        </div>
      </div>
      <span></span>
      <span></span>
    </div> 
  )
}

export default App
