import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router'
import { Home } from './Pages/Home'
import { SinglePage } from './Pages/SinglePage'

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path='/:id' element={<SinglePage/>}/>
    </Routes>
    </>
  )
}

export default App
