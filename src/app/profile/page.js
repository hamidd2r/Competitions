"use client"
import { postApiData, postWithToken } from '@/Helper/common';
import Topslider3 from '@/components/TopSlider3';
import Topslider from '@/components/Topslider'
import Link from 'next/link';

import React, { useEffect, useState } from 'react'

const Page = () => {

    const [profile, setprofile] = useState([]);
    const [loading, setLoading] = useState(true);
  
    const userprofile = async () => {
      try {
        const data = await postWithToken("user-details");
        console.log(data)
        setprofile(data.success);
      } catch (error) {
        console.error("Error fetching profile:", error);
      }
    };

    console.log(profile)
  
    useEffect(() => {
      userprofile();
    }, []);

  return (
    <div>
      <Topslider3/>
      {/* <Topslider/> */}
      <section className="my__account--section section--padding">
          <div className="container col-span-8">
            <div className="my__account--section__inner border-radius-10 d-flex">
           
              <div className="account__wrapper">
                <div className="account__content">
               <Link href="/addpet">
               <button 
                      className="new__address--btn  mb-25"
                    >
                      Add New Pet
                    </button>
               </Link>
                  <h3 className="account__content--title mb-20">Profile</h3>

                  <div className="account__details two">

                    <p className="account__details--desc">
                    <span style={{ fontWeight:"bold" , paddingRight:"30px",gap:"100px"  }}>User Name</span>  {profile.name} 
                    </p>
                  

                    <p className="account__details--desc">
                    <span style={{ fontWeight:"bold", paddingRight:"45px"  }}>Email Id</span> {profile.email}
                    </p>
                   <p className="account__details--desc">
                     <span style={{ fontWeight:"bold", paddingRight:"30px"  }}>User Role</span> {profile.role} 
                    </p>
                  </div>
                 
                </div>
              </div>
              {/* new profile add */}

              <img
                className="notdata"
                style={{ height: "300px", width: "auto" }}
                src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_640.png"
                alt="Empty Cart Image"
              />
            </div>
          </div>
        </section>
    </div>
  )
}

export default Page
