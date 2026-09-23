import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FaSearch, FaTrash } from 'react-icons/fa'
import { allResumeSAPI, deleteResumeAPI } from '../services/allAPI'

function Allresumes() {
  const [allResumes, setAllResumes] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    getAllResumes()
  }, [])

  const getAllResumes = async () => {
    const resp = await allResumeSAPI()
    if (resp.status == 200) {
      setAllResumes(resp.data)
    }
  }

  const handleDelete = async (id) => {
    const resp = await deleteResumeAPI(id)
    if (resp.status == 200) {
      getAllResumes()
    }
  }

  const filteredResumes = allResumes.filter((resume) =>
    resume.job?.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div>
      <div className="my-5 container d-flex justify-content-center align-items-center flex-column">
        <h1>All Saved Resumes</h1>
        <p style={{ textAlign: 'justify' }} className="my-5">
          All resumes submitted to the platform in one place, allowing administrators or recruiters to efficiently view, search, filter, and manage candidate profiles.
        </p>

        <div className="d-flex justify-content-center align-items-center w-50">
          <input
            type="text"
            placeholder="Search Candidates by their Job roles"
            className="form-control"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <FaSearch style={{ marginLeft: '-30px' }} />
        </div>

        <table className="my-5 table table-hover table-stripped">
          <thead>
            <tr className="table-dark">
              <th>#</th>
              <th>Name</th>
              <th>Job Role</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Location</th>
              <th>Skills</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredResumes.map((resume, index) => (
              <tr key={resume.id}>
                <td>{index + 1}</td>
                <td>
                  <Link to={`/resume/${resume.id}/view`}>{resume.fullName}</Link>
                </td>
                <td>{resume.job}</td>
                <td>{resume.email}</td>
                <td>{resume.phone}</td>
                <td>{resume.location}</td>
                <td>
                  {resume.skills?.map((skill, i) => (
                    <span key={i} className="badge bg-info me-1">{skill}</span>
                  ))}
                </td>
                <td>
                  <button className="btn text-danger" onClick={() => handleDelete(resume.id)}>
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Allresumes
