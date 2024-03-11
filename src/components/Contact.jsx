import React from 'react'
import Service from '../assets/7.png'
import Form from './Form'

function Contact() {
  return (
    <>
<div className="bg-cover">
  <div className="text-center text-light">
    <h1 className='pt-5' >Contact</h1>
    <p>Home <i class="fa fa-arrow-right ms-3 me-3"></i> Contact</p>
  </div>
</div>

<div className="container">
<div className="row">
<div className="col-md-6 mt-5" data-aos="fade-up">
  <p className='fw-bold' >Kindly call us or join our support group on WhatsApp.</p>
  <div className="">


              <div className="mb-3"> 
                <a href="tel:09137029216" className='text-decoration-none text-dark'>
                  <span className="me-3">
                    <i className="fa fa-phone"></i>
                  </span>
                  +234 9072211222
                </a>
              </div>

              <div className="mt-3">
                <a href="https://wa.me/+2349137029216" className='text-decoration-none text-dark'>
                  <span className="me-3">
                  <i className="fab fa-whatsapp"></i>
                  </span>
                  +234 8167000077
                </a>
              </div>
              <div className="mt-3">
                <a href="mailto:info@crystalshipment.com" className='text-decoration-none text-dark'>
                  <span className="me-3">
                    <i className="fa fa-envelope"></i>
                  </span>
                  info@crystalshipment.com
                </a>
              </div>
            </div>
            </div>

<div className="col-md-6 mt-5" data-aos="fade-up">
<Form/>
</div>

</div>
</div>


    </>
  )
}

export default Contact