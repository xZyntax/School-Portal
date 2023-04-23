import StudentData from './Pages/StudentData'
import StudentGrades from './Pages/StudentGrades'
import Home from './Pages/Home'
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
    <Router>
      <Routes>

        <Route path='/' element={<Home/>} />
        <Route path="/student-grades" element={<StudentGrades />} />
        <Route path="/student-data" element={<StudentData />} />
      </Routes>
    </Router>
    </>
  )
}

export default App