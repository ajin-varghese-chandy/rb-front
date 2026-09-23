import React, { useEffect, useRef, useState } from 'react'
import Preview from "../Components/Preview"
import Edit from '../Components/Edit'
import { Link, useParams } from 'react-router-dom'
import { FaFileDownload} from "react-icons/fa"
import { AiFillBackward } from "react-icons/ai"
import { downloadResumeAPI, getResumeByIdAPI } from '../services/allAPI'
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'

function ViewResume() {
  const { id } = useParams()
  const [resumeData, setResumeData] = useState({})
  const previewRef = useRef(null)

  useEffect(() => {
    getResumeByIdAPI(id).then((res) => {
      setResumeData(res.data)
    })
  }, [])

  const downloadCV = async () => {
    const previewTag = previewRef.current
    const canvas = await html2canvas(previewTag);
    const resumeIMG = canvas.toDataURL("image/png");
    generatePDF(resumeIMG)
  }

  const generatePDF =async (resumeIMG)=>{
    let today =  new Date();
    let timeStamp = today.toLocaleDateString() + " " + today.toLocaleTimeString();
    console.log(timeStamp);
    const pdf = new jsPDF();
    const imageWidth = pdf.internal.pageSize.getWidth()
    const imageHeight = pdf.internal.pageSize.getHeight()
    pdf.addImage(resumeIMG,"PNG",0,0,imageWidth,imageHeight)
    
    const downloadDetails = {
      timeStamp,resumeId:id,resumeIMG
    }

    const result = await downloadResumeAPI(downloadDetails)
    console.log(result);

    if(result.status == '201'){
      pdf.save(`${resumeData.fullName}-CV.pdf`)
    }
    
  }

  return (
    <>
      <div className="container my-5">
        <div className="row">
          <div className="col-lg-2"></div>
          <div className="col-lg-8">
            <div className="d-flex justify-content-center align-items-center">
              <button style={{ color: 'red' }} className="btn me-2" onClick={downloadCV}>
                <FaFileDownload className="fs-5" /> Dowload CV
              </button>
              <Edit resumeData={resumeData} setResumeData={setResumeData} />
              <Link to={'/form'} style={{ color: 'red' }} className="btn">
                <AiFillBackward className='fs-3' /> Home
              </Link>
            </div>
            <div ref={previewRef} className="p-5">
              <Preview resumeData={resumeData} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ViewResume
