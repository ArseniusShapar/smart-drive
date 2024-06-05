import { React,  useEffect } from 'react';
import { useStopwatch } from 'react-timer-hook';
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa";
import { BsArrowRepeat } from "react-icons/bs";
import './Timer.css';

export default function Timer({ isStop }) {
  const {
    seconds,
    minutes,
    start,
    pause,
    reset,
  } = useStopwatch({ autoStart: true });
  const addZero = (x) => {
    if (x < 10) return '0' + x;
    else return x;
  }

  const myStart = () => {
    document.getElementById('btn-start').disabled = true;
    document.getElementById('btn-pause').disabled = false;
    start()
  }

  const myPause = () => {
    document.getElementById('btn-pause').disabled = true;
    document.getElementById('btn-start').disabled = false;
    pause()
  }

  const myReset = () => {
    document.getElementById('btn-pause').disabled = false;
    document.getElementById('btn-start').disabled = true;
    reset()
  }

  useEffect(() => {if (isStop) myPause()}, [isStop])

  return (
    <div style={{textAlign: 'center'}} className='timer'>
      <div style={{fontSize: '40px'}} className='time'>
        {addZero(minutes)}:{addZero(seconds)}
      </div>
      <button onClick={myStart} id='btn-start'><FaPlay color='black' size={20} /></button>
      <button onClick={myPause} id='btn-pause'><FaPause color='black' size={20} /></button>
      <button onClick={myReset} id='btn-reset'><BsArrowRepeat color='black' size={24} /></button>
    </div>
  );
}