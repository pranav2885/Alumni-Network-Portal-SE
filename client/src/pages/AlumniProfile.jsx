import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import user from '../assets/user.png'
import { StudentData } from "../constants/StudentData"

export default function AlumniProfile() {
  const { id } = useParams()
  const [alumni, setAlumni] = useState(null)

  useEffect(() => {
    const found = StudentData.find((a) => String(a.id) === id)
    setAlumni(found)
  }, [id])

  if (!alumni) {
    return <div className="p-4 text-center">Alumni not found.</div>
  }

  return (
    <div className="max-w-4xl mx-auto mt-10 bg-white p-8 rounded-lg shadow-lg">
      <div className="flex flex-col md:flex-row items-center gap-8">
        <img
          src={alumni.imageURL || user}
          alt={alumni.name}
          className="w-32 h-32 rounded-full object-cover"
        />
        <div>
          <h2 className="text-3xl font-bold">{alumni.name}</h2>
          <p className="text-gray-600">{alumni.PresentStatus}</p>
          <p className="text-sm text-gray-500">ID: {alumni.id}</p>
          <p className="text-sm text-gray-500">Graduated: {alumni.PassedOut}</p>
        </div>
      </div>

      <div className="mt-6 space-y-3">
        <div><strong>Program:</strong> {alumni.Program}</div>
        <div><strong>Branch:</strong> {alumni.Branch}</div>
        <div><strong>School:</strong> {alumni.School}</div>
        <div><strong>CGPA:</strong> {alumni.CGPA}</div>
        <div><strong>Gender:</strong> {alumni.gender}</div>
        <div><strong>Date of Birth:</strong> {alumni.dob}</div>
        <div><strong>Mobile:</strong> {alumni.mobile}</div>
        <div><strong>Email (SRM):</strong> {alumni.email}</div>
        <div><strong>Personal Email:</strong> {alumni.personelEmail}</div>
        <div><strong>Present Location:</strong> {alumni.PresentLocation}</div>
        <div><strong>Current Job:</strong> {alumni.job}</div>
        <div><strong>Path Chosen:</strong> {alumni.PathChosen}</div>
        <div><strong>Masters Program:</strong> {alumni.MastersProgram || "N/A"}</div>
        <div><strong>Masters College:</strong> {alumni.MastersCollege || "N/A"}</div>
        <div><strong>Alumni Portal Registered:</strong> {alumni.AlumniPortalRegistered}</div>
        <div><strong>Section:</strong> {alumni.Section}</div>
        <div><strong>Salary (LPA):</strong> {alumni.Salary}</div>
        {alumni.LinkedIn && (
          <div>
            <strong>LinkedIn:</strong>{" "}
            <a href={`https://${alumni.LinkedIn}`} target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">
              {alumni.LinkedIn}
            </a>
          </div>
        )}
      </div>
    </div>
  )
}
