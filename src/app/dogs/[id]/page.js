"use client"
import { postApiData } from '@/Helper/common'
import Topslider from '@/components/Topslider'
import { Button } from 'antd'
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const Page = () => {


  const params = useParams()
  console.log(params)

  const [petsDetails, setPetsDetails] = useState([]);

  // @ products Details API call
  const petLists = async () => {
    const pet_id = params.id
    const apiData = JSON.stringify({pet_id})
    try {
      const data = await postApiData("pets-details",apiData);
      setPetsDetails(data.success);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  console.log(petsDetails.message)


  useEffect(() => {
    petLists();
  }, []);

  return (
    <div>
      <>
      <Topslider/>
  <div className="container-fluid no-padding blog-list">
    <div className="section-padding" />
    {/* Container */}
    <div className="container">
      <div className="row">
        {/* Blog Area */}
        <div className="col-md-12 col-sm-9 col-xs-12 blog-area">
          <div className="section-title">
            <h3>Pets details</h3>
            {/* <p>
              In a freak mishap ranger and its pilot captain william buck rogers
              are blown
            </p> */}
          </div>
          <article>
            <div >
              <a href="/">
                <img style={{height:"300px", width:"100%"}} src={petsDetails.image} alt="blog-1" />
              </a>
              
            </div>
            {/* Post Content */}
            <div className="post-content">
              <div className="post-meta">
               
                {/* <div className="post-comment">
                  <i>
                    <img style={{height:"100px"}} src={petsDetails.image} alt="Comment" />
                  </i>
                  <a href="#">{petsDetails.pet_name}</a>
                </div>
                <div className="post-like">
                  <i>
                    <img style={{height:"100px"}} src={petsDetails.image} alt="Comment" />
                  </i>
                  <a href="#">{petsDetails.pet_name}</a>
                </div>
                <div className="post-comment">
                  <i>
                    <img style={{height:"100px"}} src={petsDetails.image} alt="Comment" />
                  </i>
                  <a href="#">{petsDetails.pet_id}</a>
                </div> */}
               
               
              </div>
              
             <div>
             <h3 className="entry-title">
                <p>
                {petsDetails.message}
                </p>
              </h3>
              <Button style={{color:"white",marginLeft:"200px"}} className=' bg-black'>Adopt {petsDetails.pet_name}</Button>
             </div>
             
            
            </div>
            {/* Post Content /- */}
          </article>
       
         
       
         
       
          {/* Pagination */}
        
          {/* Pagination /- */}
        </div>
        {/* Blog Area/- */}
        {/* Widget Area */}
       
        {/* Widget Area /- */}
      </div>
    </div>
   
  </div>
  <>
 
  {/* End blog details section */}
</>

  {/* Blog List /- */}
</>

    </div>
  )
}

export default Page
