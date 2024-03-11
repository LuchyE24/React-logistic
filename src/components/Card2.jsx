import React from 'react'
import PicA from '../assets/A.png'
import PicB from '../assets/B.png'
import PicC from '../assets/C.png'
import Pic4 from '../assets/4.png'
import Pic5 from '../assets/5.png'
import Pic6 from '../assets/6.png'


function Card2() {
    const cardData =[

        {Image:PicA,title: 'Air Freight',content:'As a leader in global air freight forwarding, OIA Global excels in providing tailored transportation....'},
        {Image:PicB,title: 'Land Freight',content:'Sea Freight plays perhaps the most vital role in most transportation and supply chain a solutions....'},
        {Image:PicC,title: 'Sea Freight',content:'Cargo are transported at some stage of their journey along the world’s roads where we give.....'},
        {image: Pic4, title: 'Warehousing', content:'Package and store your things effectively and securely to make sure them in...'},
    {image: Pic5, title: 'Door to Door Delivery', content:'Our expertise in transport management and planning allows us to design ...'},
    {image: Pic6, title: 'Packaging & Storage', content:'Package and store your things effectively and securely to make sure them ...'},

    ]
  return (
    <>
<div className= "row">
{cardData.map((Card,index)=> {

})}
    
    <div className="col-md-4 mb-5">
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

    <div className="col-md-4 mb-5">
    <div className="row" style={{width: '18rem'}}>
  <img src={Pic4} className="card-img-top" alt="..."/> 
  <div className="card-body"> 
    <h4 className="card-title"> <br /> Warehousing</h4>
    <p className="card-text">Package and store your things effectively and securely to make sure them in...... <a href="" className="text-danger text-decoration.none" style={{textDecoration:'none'}}>Read more.</a> </p>
    
  </div>
</div>
    </div>


    <div className="col-md-4 mb-5">
    <div className="row" style={{width: '18rem'}}>
  <img src={Pic5} className="card-img-top" alt="..."/> 
  <div className="card-body"> 
    <h4 className="card-title"> <br /> Door to Door Delivery</h4>
    <p className="card-text">Our expertise in transport management and planning allows us to design ...... <a href="" className="text-danger text-decoration.none" style={{textDecoration:'none'}}>Read more.</a> </p>
    
  </div>
</div>
    </div>


    <div className="col-md-4 mb-5">
    <div className="row" style={{width: '18rem'}}>
  <img src={Pic6} className="card-img-top" alt="..."/> 
  <div className="card-body"> 
    <h4 className="card-title"> <br /> Packaging & Storage</h4>
    <p className="card-text">Package and store your things effectively and securely to make sure them ..... <a href="" className="text-danger text-decoration.none" style={{textDecoration:'none'}}>Read more.</a> </p>
    
  </div>
</div>
    </div>


    </div>

    </>
  )
}

export default Card2

