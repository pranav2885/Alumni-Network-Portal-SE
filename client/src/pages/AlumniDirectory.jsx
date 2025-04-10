import React, { useState } from 'react'
import { StudentData } from '../constants/StudentData'
import AlumniCard from '../components/Cards/AlumniCard'
import { Paginator } from 'primereact/paginator'
import 'primereact/resources/themes/lara-light-blue/theme.css' // Ensure theme is imported
import 'primereact/resources/primereact.min.css'

export default function AlumniDirectory() {
  const [first, setFirst] = useState(0)
  const [rows, setRows] = useState(8) // number of cards per page

  const onPageChange = (event) => {
    setFirst(event.first)
    setRows(event.rows)
  }

  // Slice the student data based on pagination
  const paginatedData = StudentData.slice(first, first + rows)

  return (
    <div className="min-h-screen py-10 px-4 sm:px-6 lg:px-20">

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {paginatedData.map((alumni, index) => (
          <AlumniCard alumni={alumni} key={index} />
        ))}
      </div>

      <div className="flex justify-center mt-10">
        <Paginator
          first={first}
          rows={rows}
          totalRecords={StudentData.length}
          rowsPerPageOptions={[4, 8, 12, 16 , 32]}
          onPageChange={onPageChange}
        />
      </div>
    </div>
  )
}
