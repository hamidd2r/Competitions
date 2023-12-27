"use client"
import { postApiData } from '@/Helper/common'
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {

    const [email , setEmail] = useState("")
    const [password , setPassword] = useState("")
    const [c_password , setcPassword] = useState("")
    const [name , setName] = useState("")
    const [role , setRole] = useState("")
    const router = useRouter()

    const userRegister = async (event) => {
        const apiData = JSON.stringify({email, password,c_password,name,role})
        event.preventDefault();
        try {
          const data = await postApiData('register', apiData);
          console.log(data.success.token)
            setEmail("");
            setName("");
            setPassword("");
            setcPassword("");
            setRole("");
            setPassword("");
            toast.success("register successfully")
            router.push("/")


            if (typeof window !== 'undefined') {
                localStorage.setItem("token", data.success.token);
              }
           
        
        } catch (errorData) {
           console.log("errpr")
        }
    
      }
    

  return (
    <div>
         <form onSubmit={userRegister} className="new-user-registeration">
            <div className="form-group">
              <label className="col-md-4 col-sm-4 col-xs-12">Your Name</label>
              <div className="col-md-8 col-sm-8 col-xs-12">
                <input type="text"
                value={name}
                onChange={(e)=>setName(e.target.value)}
                 className="form-control"
                  id="new-user-id" />
              </div>
            </div>
            <div className="form-group">
              <label className="col-md-4 col-sm-4 col-xs-12">Email</label>
              <div className="col-md-8 col-sm-8 col-xs-12">
                <input
                 value={email}
                 onChange={(e)=>setEmail(e.target.value)}
                  type="email"
                  className="form-control"
                  id="new-user-email"
                />
              </div>
            </div>
            <div className="form-group">
              <label className="col-md-4 col-sm-4 col-xs-12">Password</label>
              <div className="col-md-8 col-sm-8 col-xs-12">
                <input type="password"
                 value={password}
                 onChange={(e)=>setPassword(e.target.value)}
                 className="form-control"
                  id="new-user-pwd" />
              </div>
            </div>
            
            <div className="form-group">
              <label className="col-md-4 col-sm-4 col-xs-12">
                Re - Type Password
              </label>
              <div className="col-md-8 col-sm-8 col-xs-12">
                <input
                  type="password"
                  value={c_password}
                  onChange={(e)=>setcPassword(e.target.value)}
                  className="form-control"
                  id="new-user-re-pwd"
                />
              </div>
            </div>
            <div className="form-group">
              <label className="col-md-4 col-sm-4 col-xs-12">Your Role</label>
              <div className="col-md-8 col-sm-8 col-xs-12">
                <input type="text"
                value={role}
                onChange={(e)=>setRole(e.target.value)}
                 className="form-control"
                  id="new-user-id" />
              </div>
            </div>

            <div className="col-md-8 pull-right">
              <button type="submit" className="btn-register">
                Register
              </button>
            </div>
          </form>
    </div>
  )
}

export default Register
