import React, { useContext } from 'react';
import './TestFooter.css';
import { QuesContext } from '../App';
import { Link } from 'react-router-dom';

export default function TestFooter() {
    const {ques,setQues} = useContext(QuesContext);
    const handleNext=()=>{
        if(ques==17){
            setQues(0);
        }else{
            setQues((p)=>p+1);
        }
    }
  return (
    <div className='test_foot'>
      <div className="left">
        <button className='btn-danger'><Link to={"/testEnd"} style={{textDecoration:"none",color:"white"}}>Finish</Link></button>
        <button className='btn-warning'>Clear</button>
      </div>
      <div className="right">
        <button className='btn-primary' onClick={handleNext}>Next</button>
      </div>
    </div>
  )
}
