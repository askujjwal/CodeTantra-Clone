import { Route, Routes } from 'react-router';
import './App.css';
import Code from './Code';
import Code2 from './Code2';
import Footer from './Footer';
import Test from './Test';
import { createContext, useState } from 'react';
import EndScreen from './Component/EndScreen';
export const QuesContext = createContext();

function App() {
  const [ques,setQues] = useState(0);
  return (
   <>
   <QuesContext.Provider value={{ques,setQues}}>
  <Routes>
    <Route path='/' element={<Code/>}></Route>
    <Route path='test' element={<Test/>}></Route>
    <Route path='testEnd' element={<EndScreen/>}></Route>
  </Routes>
   <Footer/>
   </QuesContext.Provider>
   </>
  );
}

export default App;
