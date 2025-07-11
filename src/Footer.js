import React from 'react';
import { RxReload } from "react-icons/rx";
import { HiWifi } from "react-icons/hi";
import { IoMdBatteryFull } from "react-icons/io";
import { FaPowerOff } from "react-icons/fa6";
import { HiOutlineDotsVertical } from "react-icons/hi";
export default function Footer() {
  return (
    <>
      <div className="main__cont">
        <ul>
            <li style={{color:'orange'}}><RxReload/></li>
            <li style={{color:'#0fba0f'}}><HiWifi/></li>
            <li style={{color:'#0fba0f'}}><IoMdBatteryFull/></li>
            <li><FaPowerOff/></li>
            <li ><HiOutlineDotsVertical/></li>
           
        </ul>
      </div>
    </>
  )
}
