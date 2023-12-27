"use client"
import { postApiData } from '@/Helper/common'
import { Col, Input } from 'antd'
import React, { useEffect, useState } from 'react'

const PetList = () => {
  const [pets , setPets] = useState([])
  // @ products Details API call
  const petLists = async () => {
    try {
      const data = await postApiData("pets-list");
      setPets(data.success);
    } catch (error) {
      console.error("Error fetching products:", error);
     
    }
  };
console.log(pets)

  useEffect(()=>{
    petLists()
  },[])
  return (
    <div>
      <>
  {/* Shop */}
  <div className="shop container-fluid no-padding">
    <div className="section-padding" />
    {/* Container */}
    <div className="container">
      <div className="row">
        <div className="section-header">
          <h3>Updates From Our Shop</h3>
          <p>
            In a freak mishap ranger and its pilot captain william buck rogers
            are blown
          </p>
        </div>
      
        {pets && pets.length > 0 ? (
    pets.map((item, index) => (
       
        <div className="col-md-4 col-sm-6 col-xs-12">
          <div className="product-box">
            <div className="product-image">
              <img src={item.image} alt="Shop" />
             
             
            </div>
            <div className="product-content">
              <h2>{item.message}</h2>
              <h3>
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star-half-o" />
                <span>{item.type}</span>
              </h3>
            </div>
          </div>
        </div>
            ))
            ) : null}
      </div>
    </div>
    {/* Container / */}
    <div className="section-padding" />
  </div>
 
  {/* Shop / */}
</>

    </div>
  )
}

export default PetList
