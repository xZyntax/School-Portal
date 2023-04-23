import React from 'react'
import Nav from '../Components/Nav'
import Table from '../Components/Table'
import '../Components/style.student.data.css'
export default function StudentData() {
  return (
   <div className="student-container">
    <div className="trueNav">
    <Nav />
    </div>
    

    
    <div className="table-container">
      <Table />
    </div>
   </div>
  )
}
