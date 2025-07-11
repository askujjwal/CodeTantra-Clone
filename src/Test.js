import React, { useEffect } from 'react'
import TestNav from './Component/TestNav'
import './Component/TestQuestion.css'
import TestFooter from './Component/TestFooter';
export default function Test() {
    useEffect(() => {
        const elements = document.querySelectorAll('.watermarked');
        elements.forEach(el => {
          el.dataset.watermark = (el.dataset.watermark + ' ').repeat(3000);
        });
      }, []);
  return (
    <>
      <div className='watermarked' data-watermark='12212836' ></div>
      <TestNav/>
      <TestFooter/>
    </>
  )
}
