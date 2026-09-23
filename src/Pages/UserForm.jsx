import React, { useState } from 'react'
import UserInputs from '../Components/UserInputs'
import Preview from '../Components/Preview'

function UserForm() {
const [resumeData,setResumeData] = useState({
  fullName:"",
  location:"",
  job:"",
  email:"",
  phone:"",
  github:"",
  linkedin:"",
  degree:"",
  college:"",
  year:"",
  skills:[],
  summary:""
})


  return (
    <>

    <div className='container my-5'>
      <div className="row ">
        <div className="col-lg-6">
          <UserInputs setResumeData={setResumeData} resumeData={resumeData}/>
        </div>
        <div className="col-lg-6">
          <Preview resumeData={resumeData}/>
        </div>
      </div>
    </div>
        
      
    </>
  )
}

export default UserForm
