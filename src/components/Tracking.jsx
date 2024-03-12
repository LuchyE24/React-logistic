import React from 'react'
import Service from '../assets/7.png'
import Form2 from './Form2'

function Tracking() {
  return (
    <>
<div className="cover">
  <div className="text-center text-light">
    <h1 className='pt-5' >Tracking</h1>
    <p>Home <i class="fa fa-arrow-right ms-3 me-3"></i> Tracking</p>
  </div>
</div>


<div className="row">
<div className="col-md-6 mt-5 ms-5" data-aos="fade-up"> 
    <h2>TRACK YOUR SHIPMENT</h2>
    <div className="bg-red">
    </div>
      <p className='mt-3'>If you require maximum visibility to your Freight transactions, contact our logistic customer team or you can track your cargo by using below tracking system.</p>
  </div>

 <Form2/>
</div>


    </>
  )
}

export default Tracking