import React from 'react'
import PicA from '../assets/A.png'
import PicB from '../assets/B.png'
import PicC from '../assets/C.png'

function Card() {
    const cardData =[
        {Image:PicA,title: 'Air Freight',content:'As a leader in global air freight forwarding, OIA Global excels in providing tailored transportation....'},
        {Image:PicA,title: 'Land Freight',content:'Sea Freight plays perhaps the most vital role in most transportation and supply chain a solutions....'},
        {Image:PicA,title: 'Sea Freight',content:'Cargo are transported at some stage of their journey along the world’s roads where we give.....'},
    ]
  return (
    <>
<div className= "row">
{cardData.map((Card,index)=> {

})}
    
    <div className="col-md-4 mb-5" data-aos="fade-up">
    <div className="card" style={{width: '18rem'}}>
  <img src={PicA} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h4 className="card-title">Air Freight</h4>
    <p className="card-text">As a leader in global air freight forwarding, OIA Global excels in providing tailored transportation.... <a href="" className="text-danger text-decoration.none.none" style={{textDecoration:'none'}}>Read more.</a> </p>
    
  </div>
</div>
    </div>

    <div className="col-md-4 mb-5">
    <div className="row" style={{width: '18rem'}}>
  <img src={PicB} className="card-img-top" alt="..."/> 
  <div className="card-body"> 
    <h4 className="card-title"> <br /> Sea Freight</h4>
    <p className="card-text">Sea Freight plays perhaps the most vital role in most transportation and supply chain a solutions..... <a href="" className="text-danger text-decoration.none" style={{textDecoration:'none'}}>Read more.</a> </p>
    
  </div>
</div>
    </div>

    <div className="col-md-4 mb-5">
    <div className="card" style={{width: '18rem'}}>
  <img src={PicC} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h4 className="card-title">Land Freight</h4>
    <p className="card-text">Cargo are transported at some stage of their journey along the world’s roads where we give..... <a href="" className="text-danger text-decoration.none" style={{textDecoration:'none'}}>Read more.</a> </p>
    
  </div>
</div>
    </div>

    </div>

    </>
  )
}

export default Card

