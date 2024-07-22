import { Routes, Route } from 'react-router'
import './App.css'
import {Header} from './components/Layouts/Header/Header'
import { Active } from './components/Pages/Active/Active'
import { Counter } from './components/Pages/Counter/Counter'
import { Timer } from './components/Pages/Timer/Timer'
import { DigitalClock } from './components/Pages/DigitalClock/DigitalClock'

function App() {
  

  return (
    <>
     <Header/>
     <Routes>
      <Route path="/" element={<Counter/>}/>
      <Route path="/timer" element={<Timer/>}/>
      <Route path="/digitalClock" element={<DigitalClock/>}/>
      <Route path="/active" element={<Active/>}/>
     </Routes>
    </>
  )
}

export default App
