import React, { useContext, useState } from 'react';
import './TestQuestion.css';
import { QuesContext } from '../App';

export default function TestQuestion() {
    const q = [ {
        question: "If among 200 students, 105 like pizza and 134 like burger, then the nuumber of students who like only burger can possibly be?",
        ans: [23, 26, 96, 93]
    },
    {
        question: "In a race, John finished 3rd, Mike finished 1st, and Sarah finished 5th. If Tom finished 2nd, and Rachel finished between John and Sarah, what is Rachel's position?",
        ans: ["11", "13", "15", "12"]
    },
    {
        question: "In a class ranking, David is 5th from the top, Emma is 7th from the bottom, and there are 15 students in total. How many students are ranked between David and Emma?",
        ans: ["10th", "9th", "15th", "13th"]
    },
    {
        question: "The length of a rectangle is twice its width. If the perimeter of the rectangle is 48 cm, what are the length and width of the rectangle?",
        ans: ["20 cm", "14cm", "28cm", "12cm"]
    },
    {
        question: "A square pyramid has a base with an area of 64 cm² and a height of 15 cm. Find its slant height and total surface area.",
        ans: ["14 cm", "20 cm", "16 cm", "10 cm"]
    },
    {
        question: "What was the day of the week on 15th August, 1947?",
        ans: ["Monday", "Wednesday", "Friday", "Thursday"]
    },
    {
        question: "If today is 24th October 2024, what will be the day of the week on 24th October 2025?",
        ans: ["Saturday", "Sunday", "Friday", "Monday"]
    },
    {
        question: "At what time between 2:00 and 3:00 will the minute hand and hour hand form a right angle?",
        ans: ["2:14", "2:16", "2:30", "2:20"]
    },
    {
        question: "A watch gains 4 minutes every 2 hours. If the watch is set correctly at noon, what will be the correct time when the watch shows 4:24 PM?",
        ans: ["4:06 PM", "4:12 PM", "4:26 PM", "4:28 PM"]
    },
    {
        question: "What will be the day of the week on 1st January 2100?",
        ans: ["Sunday", "Friday", "Monday", "Saturday"]
    },
    {
        question: "Find the number of leap years between 1600 and 2000.",
        ans: ["97", "98", "96", "99"]
    },
    {
        question: "A clock strikes once at 1 o'clock, twice at 2 o'clock, and so on. How many times will it strike in a day?",
        ans: ["78", "156", "136", "144"]
    },
    {
        question: "In a class of 40 students, Sam ranks 15th from the top. What is his rank from the bottom?",
        ans: ["25", "26", "27", "28"]
    },
    {
        question: "A solid metal cylinder of radius 10 cm and height 15 cm is melted and recast into 6 smaller cylinders, each of radius 5 cm. Find the height of each smaller cylinder",
        ans: ["12.5 cm", "15 cm", "17.5 cm", "17 cm"]
    },
    {
        question: "In a class of 50 students, Alice ranks 13th from the top, and Mark ranks 21st from the bottom. How many students are between Alice and Mark?",
        ans: ["15", "17", "20", "22"]
    },
    {
        question: "In a class of 40 students, Sam ranks 15th from the top. What is his rank from the bottom?",
        ans: ["25th", "26th", "27th", "28th"]
    },
    {
        question: "At what time between 4:00 and 5:00 will the hour hand and the minute hand be exactly opposite each other (form a 180° angle)?",
        ans: ["4:32", "4:26", "4:36", "4:45"]
    },
    {
        question: "How many odd days are there in 300 years?",
        ans: ["1", "2", "3", "5"]
    }

]
    const {ques} = useContext(QuesContext);
   
  return (
    <div className='test_box'>
      <div className="test_question">
        <div className="qt_top">Select the correct answer</div>
        <div className="qt_text">{q[ques].question}</div>
      </div>
      <div className="test_option">
        <div className="op_top">Options</div>
        <div className="op_text">
            {q[ques].ans.map((i)=>{
               return(
            <div key={i.question}>
            <input type="radio" name="op" id="op" />
            <label htmlFor="op">{i}</label>
            </div>
               )
            })}
           
           
           
        </div>
      </div>
    </div>
  )
}
