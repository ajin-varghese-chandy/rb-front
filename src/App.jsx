import { useState } from 'react'

import './App.css'
import Home from './Pages/Home'
import ResumeSteps from './Pages/ResumeSteps'
import Downloads from './Pages/Downloads'
import Pnf from './Pages/Pnf'
import Header from './Components/Header'
import { Route, Routes } from 'react-router-dom'
import Footer from './Components/Footer'
import ViewResume from './Pages/ViewResume'
import UserForm from './Pages/UserForm'
import Allresumes from './Pages/Allresumes'



function App() {


  return (
    <>
      <Header />
      
      <Routes>
        <Route path='' element={<Home />} />
        <Route path='steps' element={<ResumeSteps />} />
        <Route path='form' element={<UserForm />} />
        <Route path='download' element={<Downloads />} />
        <Route path='resume/:id/view' element={<ViewResume />} />
        <Route path='all-resumes' element={<Allresumes />} />

        {/* redirect to page not found */}
        <Route path='/*' element={<Pnf />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
