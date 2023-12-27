
"use client"
import Topslider7 from "@/components/TopSlide7";
import { Col } from "antd";
import React, { useState } from "react";

const Page = () => {

    const [message , setMessage] = useState()
    const [type , setType] = useState()
    const [image , setImage] = useState()
    const [pet_name , setPet_name] = useState()

  return (
  <>
  <Topslider7/>
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-6">
        <form  className="new-user-registeration">
        <div className="form-group">
              <label className="col-md-10 col-sm-4 col-xs-12">enter Name</label>
              <div className="col-md-10 col-sm-8 col-xs-12">
                <input type="text"
                placeholder="enter name"
                 className="form-control"
                 value={pet_name}
                 onChange={(e)=>setPet_name(e.target.value)}
                  id="new-user-id" />
              </div>
            </div>
            <div className="form-group">
              <label className="col-md-10 col-sm-4 col-xs-12">enter message</label>
              <div className="col-md-10 col-sm-8 col-xs-12">
                <input type="text"
                placeholder="enter message"
                 className="form-control"
                 value={message}
                 onChange={(e)=>setMessage(e.target.value)}
                  id="new-user-id" />
              </div>
            </div>
            <div className="form-group">
              <label className="col-md-10 col-sm-4 col-xs-12">Enter Type</label>
              <div className="col-md-10 col-sm-8 col-xs-12">
                <input
                
                  type="text"
                  value={type}
                  onChange={(e)=>setType(e.target.value)}
                  className="form-control"
                  placeholder="enter type"
                  id="new-user-email"
                />
              </div>
            </div>
            <div className="form-group">
              <label className="col-md-10 col-sm-4 col-xs-12">Enter Image</label>
              <div className="col-md-10 col-sm-8 col-xs-12">
                <input type="file"
                placeholder="enter image"
                 className="form-control"
                  id="new-user-pwd" />
              </div>
            </div>
           <div className="col-md-8 pull-right">
              <button type="submit" className="btn-register">
                Add New Pets
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </>
  );
};

export default Page;
