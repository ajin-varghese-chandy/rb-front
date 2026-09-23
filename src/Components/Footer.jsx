import React from 'react'

function Footer() {
  return (
    <>
      <footer className='footer bg-dark text-white'>

        <div className="container py-5">

          <div className="row">

            {/* about */}

            <div className="col-md-6 mb-4">
              <h3 className="fw-bold">Resume Builder</h3>

              <p className="text-secondary">
                Make your own Resume
              </p>

            </div>

            {/* Quick links */}

            <div className="col-md-3 mb-4">
              <h5 className="fw-bold">Quick Links</h5>

              <ul className="list-unstyled">
                <li>
                  <a href="/" className="footer-link">Home</a>
                </li>
                <li>
                  <a href="/" className="footer-link">All Resume</a>
                </li>
                <li>
                  <a href="/download" className="footer-link">All downlod</a>
                </li>
                <li>
                  <a href="/" className="footer-link">About Us</a>
                </li>
              </ul>
            </div>

            {/* social media  */}
            <div className="col-md-3 col-lg-4 mb-4">

              <h5 className="fw-bold">Follow Us</h5>

              <div className="d-flex gap-3">

                <a href="#" className="footer-link">Instagram</a>

                <a href="#" className="footer-link">GitHub</a>

                <a href="#" className="footer-link">LinkedIn</a>

              </div>

            </div>

            {/* bottum */}

            <div className="footer-bottom text-center py-3">

              <p className="mb-0 text-secondary"> © 2026 MyWebsite. All Rights Reserved. </p>
              
            </div>


          </div>
        </div>

      </footer>

    </>
  )
}

export default Footer
