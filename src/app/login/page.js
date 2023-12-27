"use client"
import { postApiData } from '@/Helper/common'
import Register from '@/components/Register'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

const Page = () => {

   const router = useRouter()
    const [email , setEmail] = useState("")
    const [Password , setPassword] = useState("")

    const userLogin = async (event) => {
        const apiData = JSON.stringify({email, Password})
        event.preventDefault();
        try {
          const data = await postApiData('login', apiData);
            setEmail("");
            setPassword("");
            router.push("/")
            
        } catch (errorData) {
        //   toast.error(errorData.message);
        }
    
      }
    
  return (
    <div>
    <>
  {/* Checkout Content */}
  <div className="container-fluid no-padding checkout-content">
    {/* Container */}
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="section-padding" />
          <div className="section-title">
            <h3>New User Registeration</h3>
          </div>
          {/* New User Registeration */}
           <Register/>
          {/* New User Registeration /- */}
        </div>
        {/* User Login */}
        <div className="col-md-6 user-login">
          <div className="section-padding" />
          <div className="section-title">
            <h3>Return User Login</h3>
          </div>
          <form onSubmit={userLogin} className="new-user-registeration">
            <div className="form-group">
              <label className="col-md-4 col-sm-4 col-xs-12">Your Email*</label>
              <div className="col-md-8 col-sm-8 col-xs-12">
                <input
                  type="email"
                  className="form-control"
                  id="user-email"
                  value={email}
                  onChange={(e)=>setEmail(e.target.value)}
                  required=""
                />
              </div>
            </div>
            <div className="form-group">
              <label className="col-md-4 col-sm-4 col-xs-12">Password*</label>
              <div className="col-md-8 col-sm-8 col-xs-12">
                <input
                  type="text"
                  className="form-control"
                  id="user-pwd"
                  required=""
                  value={Password}
                  onChange={(e)=>setPassword(e.target.value)}
                />
              </div>
            </div>
            <div className="col-md-12 pull-right">
            
              <button type="submit" className="btn-register btn-sign-in">
                Sign In
              </button>
            </div>
          </form>
          <p>
            <span>Or</span>
          </p>
          <a href="#">Purchase As Guest User</a>
        </div>
      
       
      </div>
    </div>
    {/* Container /- */}
  </div>
  {/* Checkout Content /- */}
</>

    </div>
  )
}

export default Page
