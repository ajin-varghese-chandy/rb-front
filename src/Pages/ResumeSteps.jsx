import React from 'react'
import { Link } from 'react-router-dom'
import { IoDocumentTextSharp } from "react-icons/io5";
import { FaDownload } from "react-icons/fa";
function ResumeSteps() {
  return (
    <>
      <div style={{ minHeight: '90vh' }} className='mt-5'>
        <h1 className='text-center'>Create an ATS Friendly Resume in Minutes with AI</h1>
        <div className="container mt-5">
          <div className='row'>
            <div className="col-md-1"></div>
            <div className="col-md-4 rounded p-5 shadow text-center">
              <IoDocumentTextSharp />
              <h4>Add your Details</h4>
              <p>Our AI will add skills and summery</p>
              <h5>Step 1</h5>


            </div>
            <div className="col-md-2"></div>
            <div className="col-md-4 rounded p-5 shadow text-center">
              <FaDownload />
              <h4>Download Your Resume </h4>
              <p>Download CV as PDF and start applaying</p>
              <h5>Step 2</h5>

            </div>
            <div className="col-md-1"></div>
          </div>
        </div>

        <div className="mt-5 text-center">
          <Link to={'/form'} style={{ backgroundColor: '#714a2f' }} className='btn text-light'>LET'S START</Link>
        </div>
      </div>

    </>
  )
}

export default ResumeSteps
