import React from 'react'
import About from '../assets/about img.png'
import Card from './Card'
import Icon1 from '../assets/Icon1.png'
import Icon2 from '../assets/Icon2.png'
import Icon3 from '../assets/Icon3.png'
import Form from './Form'


function Homepage() {
  return (
<>

    <div className='hero'>
        <div className="container text-light text-center pt-5">
        <h1 className='pt-5'>Easy & Quick <br />
        Shipping Services
        </h1>
        <p style={{fontSize:'24px'}}> 
        Book low cost sea freight shipping services.Get an instant quote.</p>
        <a href="" className="btn btn-danger text-light">Track Goods Here</a>
        </div>
    </div> 
    

<div className="container">
    <div className="text-center" data-aos="fade-up">
        <h2>WELCOME CRYSTAL SHIPMENT</h2>
        <div className="bg-red  mx-auto"></div>
        <p>
        Crystal Shipment is more than logistics. We can also optimize your packaging, manage your materials sourcing, and so much more.
        </p>
    </div>
    <div className="row">
        <div className="col-md-6" data-aos="fade-up">
            <img src={About} className='img-fluid rounded' alt="" />
        </div>
        <div className="col-md-6">
            <div className="text-danger">TRANSPORTATION COMPANY</div>
            <h2>We Provide Full Range Logistics Solution</h2>
            <p>
            We strongly believe that pursuing all of these goals is in our interest and in the interest of all of our stakeholders are us customers, employees, investors and the planet as a whole. We add value to cargo people’s interaction with us, with excellent services or products. Engaging our employees and nurture investment on the stock holds market we show concern , by engaging our employees and nurture investment on the stock holds market we show concern. <br />
            <a href="" className="btn btn-danger">Learn More</a>
            </p>
        </div>
    </div>
</div>
   <div className="container pt-5">
    <div className="text-center" data-aos="fade-up">
        <p className="text-danger">TYPES OF LOGISTICS</p>
        <h2>Covering All Logistics Fields</h2>
        </div>
  <Card/>

<div className="text-center" data-aos="fade-up">
<a href="" className="btn btn-danger">Load More</a>
</div>
</div>

<div className="bg-warning mt-5 mt-5" style={{ minHeight: '200px', padding: '20px 0' }}>
        <div className="container">
          <div className="row pt-5 d-flex justify-content-center">
            <div className='col-md-8' data-aos="fade-up">
            <h2>Delivering your world one package at a time</h2>
            <p>Crystal Shipment is more than logistics.</p>
            </div>
            <div className="col-md-4 text-md-end text-sm-start" data-aos="fade-up">
               <a href='/contact' className="btn btn-danger">Request a Quote</a> 
            </div>
          </div>
        </div>
        </div>
       
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-6" data-aos="fade-up">
              <h2>WHY CHOOSE US?</h2>
              <div className="d-flex mt-3">
                <div className="flex-grow-1 me-2">
                  <img src={Icon1} alt="" />
                  </div>
                  <div className="flex-grow-1 ms-2">
              <h4>Global supply Chain Solutions</h4>
            <p>Efficiently unleash cross-media information without cross-media value.</p>
              </div>
              </div>
            <div className="d-flex">
              <div className="flex-grow-1 me-2">
                  <img src={Icon2} alt="" />
                  </div>
                  <div className="flex-grow-1 ms-2">
              <h4>Mobile Shipment Tracking</h4>
            <p>We Offers intelligent concepts for road and tail and well as complex special transport services</p>
              </div>
            </div>
            <div className="d-flex">
              <div className="flex-grow-1 me-2">
                  <img src={Icon3} alt="" />
              </div>
              <div className="flex-grow-1 ms-2">
              <h4>Careful Handling of Valuable Goods</h4>
            <p>Cargo HUB are transported at some stage of their journey along the world’s roads</p>
              </div>
              </div>
              </div>
            <div className="col-md-6" data-aos="fade-up">
              <h2>REQUEST A QUOTE</h2>
          <Form/>
            </div>
          </div>

        
      </div>                

</>

  )
}

export default Homepage