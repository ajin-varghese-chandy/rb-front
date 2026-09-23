import {useState , useEffect} from 'react'
import { Link } from 'react-router-dom'
import  { getAllDownloadsResumeAPI } from '../services/allAPI'

function Downloads() {

  const [allDownloads, setAllDownloads] = useState([])
   
  
    useEffect(() => {
      getAllDownlaods()
    }, [])
  
    const getAllDownlaods = async () => {
      const resp = await getAllDownloadsResumeAPI()
      if (resp.status == 200) {
        setAllDownloads(resp.data)
        console.log(resp.data);
        
      }
      
    }

    
  return (
    <div>
      <div className="container my-5">
        <div className="d-flex justify-content-between align-items center">
          <h2>All Downloaded Resume Details</h2>
          <button style={{backgroundColor : '#714a2f'}} className='btn text-light'>View in chart</button>

        </div>
        <p className="my-5 fw-bolder">Total Download Resumes from our site is <span className='text-danger fs-4'>{allDownloads.length ? allDownloads.length : 0}</span></p>

        <div className="row my-5">

          {/* duplicate according to download count  */}

         {
          allDownloads.map((el)=>(
             <div key={el.id} className="col-lg-4 mb-3">
            <div style={{height:'400px'}} className='shadow p-3 rounded'>
              <h6>Review at : {el.timeStamp}</h6>
              <div className="mt-3 text-center">
                <Link to={`/resume/${el.resumeId}/view`}><img className='w-100' height={'300px'} src={el.resumeIMG} alt='download cv' /></Link>
              </div>
            </div>
          </div>
          ))
         }

        </div>
      </div>
    </div>
  )
}

export default Downloads
