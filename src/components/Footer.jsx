import React from 'react'
import Galery1 from '../assets/gallery1.png'
import Galery2 from '../assets/gallery2.png'
import Galery3 from '../assets/gallery3.png'
import Galery4 from '../assets/gallery4.png'

function Footer() {
  return (
    <>
       <div className="bg-dark text-light mt-5 py-5">
        <div className="container">
<div className="row">
  <div className="col-md-3">
  <h4>CRYSTAL SHIPMENT</h4>
            <p>Crystal Shipment Services is a global supplier of transport and logistics solutions. We have offices in more than 20 countries and an international network of partners and agents.</p>
  </div>
  <div className="col-md-3">
  <h4>QUICK LINKS</h4>
            <ul className="list-unstyled">
              <li><a href="#" className='text-light text-decoration-none'>All Services</a></li>
              <li><a href="#" className='text-light text-decoration-none'>Land Freight</a></li>
              <li><a href="#" className='text-light text-decoration-none'>Sea Freight</a></li>
              <li><a href="#" className='text-light text-decoration-none'>Air Freight</a></li>
            </ul>
  </div>

  <div className="col-md-3">
  <h4>PHOTO GALLERY</h4>
            <div className="d-flex mt-3">
              <div className="flex-grow-1 me-2">
                <img src={Galery1} alt=""className='img-fluid ' />
 </div>
 <div className="flex-grow-1 ms-2">
                <img src={Galery2} alt="" className='img-fluid '/>
 </div>
 </div>
 <div className="d-flex mt-3">
 <div className="flex-grow-1 me-2">
                <img src={Galery3} alt=""className='img-fluid ' />
 </div>
 <div className="flex-grow-1 ms-2">
                <img src={Galery4} alt=""className='img-fluid ' />
 </div>
  </div>
  </div>

  <div className="col-md-3">
  <h4>OUR NEWSLETTER</h4>
            <p>Sign up today for tips and latest news and exclusive special offers.</p>
            <input type="email" placeholder='Enter your email' className="form-control mt-3 mb-3" />
            <button className="btn btn-danger">Submit</button>

  </div>
</div>
        </div>
        <div className="mt-5 text-center">
        <p> &copy; Copyright {new Date().getFullYear()} All Rights Reserved.</p>
      </div>
       </div>
    </>
  )
}

export default Footer