import React, { useContext, useEffect, useState } from 'react'
import './TestNav.css';
import { ImUser } from "react-icons/im";
import { FaInfoCircle } from "react-icons/fa";
import { IoChatbubblesSharp } from "react-icons/io5";
import { FaCircleMinus } from "react-icons/fa6";
import { FaCirclePlus } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import TestQuestion from './TestQuestion';
import { QuesContext } from '../App';
export default function TestNav() {
    const [minutes, setMinutes] = useState(3);
  const [seconds, setSeconds] = useState(0);
  const [minutest, setMinutest] = useState(45);
  const [secondst, setSecondst] = useState(0);
  const {ques} = useContext(QuesContext);
  useEffect(()=>{
    setSeconds(59);
    setMinutes(2);
  },[ques])
  useEffect(() => {
    const timer = setInterval(() => {
        if(minutes==0){
            setMinutes(2);
        }
      if (seconds > 0) {
        setSeconds(seconds - 1);
      } else if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(timer);
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [minutes, seconds]);

  useEffect(() => {
    const timer = setInterval(() => {
      if (secondst > 0) {
        setSecondst(secondst - 1);
      } else if (secondst === 0) {
        if (minutest === 0) {
          clearInterval(timer);
        } else {
          setMinutest(minutest - 1);
          setSecondst(59);
        }
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [minutest, secondst]);
  return (
    <>
      <nav class="navbar navbar-expand-lg fixed-top navbar-dark bg-dark d-block d-print-none p-1 p-md-2" id="cssmenu">
       
        <div className='TestNav' style={{marginBottom:"0.15rem"}}>

        <div className='top_left'>
        <ul className='testNav__ul'>
            <li className='testNav_li' style={{textAlign:'center'}}><ImUser fontSize={19}/> 12212836</li>
            <li className='testNav_li'>Section 1 [Section 1 0f 2]</li>
            <li className='testNav_li'>Q{ques+1} of 18</li>
            <li className='testNav_li'>Marks 1</li>
        </ul>

        </div>
        <div className='top_right'>
        <ul className='testNav__ul'>
            <li className='testNav_li'><FaInfoCircle/> &nbsp;General Instructions </li>
            <li className='testNav_li_last' style={{backgroundColor: "none",listStyle:"none"}}>
                <span style={{color:'white',fontWeight:'700'}}><IoChatbubblesSharp/> </span>
                <span style={{color:'white',fontWeight:'700'}}><FaCircleMinus/> </span>
                <span style={{color:'white',fontSize:'14px',fontWeight:'700'}}> 150% </span>
                <span style={{color:'white'}}><FaCirclePlus/> </span>
                <span style={{color:'white',background:'#8c2d2d',paddingLeft:'0.9px',paddingRight:'0.9px',paddingTop:'0.01px'}}> <IoClose/> </span>
            </li>
           
        </ul>
        </div>
        </div>
        <div className='TestNav' style={{height:'0.7rem'}}>

        <div className='top_left'>
        <ul className='testNav__ul'>
            <li className='testNav_li'>Negative Marks: -25% on wrong answer</li>
           
        </ul>

        </div>
        <div className='top_right'>
        <ul className='testNav__ul'>
            <li className='testNav_li'>Test time left: {minutest}:{secondst<10?'0'+secondst:secondst}</li>
            <li className='testNav_li'>Question time left: 0{minutes}:{secondst<10?'0'+secondst:secondst}</li>
           
           
        </ul>
        </div>
        </div>
</nav>
<TestQuestion/>
    </>
  )
}
