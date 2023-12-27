"use client"
import { postApiData } from '@/Helper/common';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

const Intro = () => {
  const [pets , setPets] = useState([])
    // @ products Details API call
    const petLists = async () => {
      try {
        const data = await postApiData("latest-list");
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
  <div id="intro" className="intro container-fluid no-padding">
    <div className="section-padding" />
    {/* Container */}
    <div className="container">
      {/* Section Header */}
      <div className="section-header">
        <h3>Latest Pets Rescue</h3>
        {/* <p>list</p> */}
      </div>
      {/* Section Header /- */}

      <div className="row">
  {pets && pets.length > 0 ? (
    pets.map((item, index) => (
      <div key={index} className="col-md-4 col-sm-6">
        <div className="pet-images bgcolor-default">
          <img style={{height:"300px"}} src={item.image} alt="intro-1" />
          <div className="content-box">
            <h3>
              {item.name} <span>{item.message}</span>
              <i>
                <img src={item.image} alt="Intro Icon" />
              </i>
            </h3>
            <p>
              To a deluxe apartment in the sky. And well do it our way, yes,
              our way. Make all our dreams come true for me and you. No phone,
              no lights, no motor.
            </p>
            <Link href={`/dogs/${item.pet_id}`} title="Read More">
              Read More <i className="fa fa-angle-double-right" />
            </Link>
          </div>
        </div>
      </div>
    ))
  ) : null}
</div>

    </div>
    {/* Container /- */}
    <div className="section-padding" />
  </div>
  {/* Intro /- */}
</>
  
    </div>
  )
}

export default Intro
