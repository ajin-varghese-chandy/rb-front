import React from 'react'
import { Link } from 'react-router-dom'



function Home() {
  return (
    <>
      {/* landing  */}

      <div style={{ height: '100vh ', backgroundImage: 'url("/landing.png")', backgroundSize: 'cover', backgroundAttachment: 'fixed' }} className='d-flex justify-content-center align-items-center'>
        <div style={{ backgroundColor: 'rgba(0,0,0,0.39)', height: '220px', paddingTop: '20px' }} className='w-50 p-20 rounded text-light text-center'>
          <h1  >Designed To Get Hired. Your Skills, Your Story, Your Next Job - All In One.</h1>
          <Link to={'/steps'} style={{ backgroundColor: '#755846' }} className='btn btn-light mt-3'>Make Your Resume  With AI</Link>

        </div>


      </div>
      {/* about */}

      <div className='container my-5'>
        <h1 className='text-center mb-5 '>What's AI rBuilder</h1>
        <div className='row align-items-center'>
          <div className='col-lg-1'></div>
          <div className='col-lg-5'>
            <p style={{ textAlign: 'justify' }}>An AI rBuilder is a web application that helps users create professional resumes quickly and efficiently using artificial intelligence. Traditional resume creation can be time-consuming and difficult, especially for freshers who may not know the correct format or keywords required for modern recruitment systems.</p>

            <p style={{ textAlign: 'justify' }}> The system can suggest job-specific keywords, professional summaries, and skill recommendations to make the resume more effective and ATS (Applicant Tracking System) friendly. </p>
            <p style={{ textAlign: 'justify' }}>The main goal of the AI rBuilder is to simplify the resume creation process and help job seekers build professional, well-structured resumes in a few minutes. Users can edit content, preview their resume, and download it in formats such as PDF.</p>

            <p style={{ textAlign: 'justify' }}>This type of system is especially useful for students & fresh graduates, who want to create high-quality resumes that increase their chances of getting shortlisted for job interviews.</p>

          </div>

          <div className='col-lg-1'></div>
          <div className='col-lg-5'>
            <img src="/resume.png" alt="" width={'100%'} height={'550px'} />
          </div>

        </div>
      </div>

      {/* banner */}

      <div style={{ height: '80vh', backgroundImage: 'url("/team.png")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}></div>

      {/* testimony */}

      <div className='container my-5'>
        <h1 className='text-center mb-5 '>Testimony</h1>
        <div className='row align-items-center'>
          <div className='col-lg-1'></div>
          <div className='col-lg-5'>
            <h5>Trusted by professionals worldwide</h5>
            <p style={{ textAlign: 'justify' }}>
              At rBuilder, we don't just help you create résumés — we help you land the job. Whether you're a seasoned professional or just starting out, our tools are designed to get results.
            </p>

            <p style={{ textAlign: 'justify' }}> In fact, users who used rBuilder reported getting hired an average of 48 days faster.
            </p>
            <p style={{ textAlign: 'justify' }}>Join thousands of job-seekers who’ve fast-tracked their careers with a résumé that truly stands out</p>


          </div>

          <div className='col-lg-1'></div>
          <div className='col-lg-5'>
            <div className="row">
              <div className="col-md-3">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy_yBRGNL3iAAxpIvDZFoxP8OOrRJll_P92mhuGU1OcOI7NPWr8Gvt_L5_&s=10" alt="user" className='img-fluid' p-2 />
              </div>
              <div className="col-md-3">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLHTJS6QjQpChPKtFyemrdjSrPsHhfVhF5L8wd3ikmc7LJuXWTr9IAZhXo&s=10" alt="user" className='img-fluid' p-2 />
              </div>
              <div className="col-md-3">
                <img src="https://img.magnific.com/free-photo/artist-white_1368-6282.jpg?semt=ais_hybrid&w=740&q=80" alt="user" className='img-fluid' p-2 />
              </div>
              <div className="col-md-3">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi_4Tjkwnaeyf1uaEwfPQQBFOAdcc0yT54UffkoWr6IIxVzxcHYQAFop4&s=10" alt="user" className='img-fluid' p-2 />
              </div>
              <div className="col-md-3">
                <img src="https://images.squarespace-cdn.com/content/v1/590cc57ebe659408c68d77fd/1539111100345-873MNDZSI8DNBCMXS8MQ/Header.jpg" alt="user" className='img-fluid' p-2 />
              </div>
              <div className="col-md-3">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReUN4WJItt2BTF9hu1KP4XLYweKnXxd2cF3AFdazqrkHMYS12EE_IqV9w&s=10" alt="user" className='img-fluid' p-2 />
              </div>
              <div className="col-md-3">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSVjU9BKmKy6P4146YbQb05dWqJDmyMqa-xxr4lU91YVnnF1FW_eCmQnE&s=10" alt="user" className='img-fluid' p-2 />
              </div>
              <div className="col-md-3">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEdiFQUnE0VYIKjWiDDhftIlKNHTWfsCAHJa0owQB8EVkiTYEBCgqtkJc&s=10" alt="user" className='img-fluid' p-2 />
              </div>
              <div className="col-md-3">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCt_Aym74EUU0pNYr7i-pxzG8Ew02djOxRcu19whw7x2mYtA4Bde5BLQM&s=10" alt="user" className='img-fluid' p-2 />
              </div>
              <div className="col-md-3">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBGYdVfaWH59vVeGYCOQgJi7h-y84I7g1gLDWCTaMOeeElBPgUC_Fu-X7q&s=10" alt="user" className='img-fluid' p-2 />
              </div>
              <div className="col-md-3">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEYmvMBmaQUwn5fKhmRDBxxPDZT54OtVT2HJOR64jSCjhNXb_4VVeEgwA&s=10" alt="user" className='img-fluid' p-2 />
              </div>
              <div className="col-md-3">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlqK_gQce-HjF7RK_BYopQaaRlU-aZkuAv8Bai1xYzlA&s=10" alt="user" className='img-fluid' p-2 />
              </div>
            </div>
            
          </div>

        </div>
      </div>

    </>
  )
}

export default Home
