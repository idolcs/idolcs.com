import { useState } from 'react'
import { BrowserRouter, createBrowserRouter, Route, RouterProvider, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element=<Header /> />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
