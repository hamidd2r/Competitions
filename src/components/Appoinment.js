import React from 'react'

const Appoinment = () => {
  return (
    <div>
      <>
  {/* Appointment */}
  <div id="appointment" className="appointment container-fluid no-padding">
    <div className="section-padding" />
    {/* Container */}
    <div className="container">
      <div className="row">
        <form className="appointment-form">
          {/* Section Header */}
          <div className="section-header">
            <h3>Get An Appointment</h3>
            <p>They will have to make the best of things its an uphill climb</p>
          </div>
          {/* Section Header /- */}
          <div className="col-md-3 col-sm-3">
            <input
              type="text"
              className="form-control"
              placeholder="First Name"
              required=""
            />
          </div>
          <div className="col-md-3 col-sm-3">
            <input
              type="text"
              className="form-control"
              placeholder="Last Name"
              required=""
            />
          </div>
          <div className="col-md-3 col-sm-3">
            <input
              type="text"
              className="form-control"
              placeholder="Email"
              required=""
            />
          </div>
          <div className="col-md-3 col-sm-3">
            <input
              type="text"
              className="form-control"
              placeholder="Phone Number"
              required=""
            />
          </div>
          <div className="form-group col-md-3 col-sm-3">
            <select>
              <option>Pet Category</option>
              <option>Pet Category</option>
              <option>Pet Category</option>
              <option>Pet Category</option>
            </select>
          </div>
          <div className="form-group col-md-3 col-sm-3">
            <select>
              <option>Service Type</option>
              <option>Service Type</option>
              <option>Service Type</option>
              <option>Service Type</option>
            </select>
          </div>
          <div className="form-group col-md-3 col-sm-3">
            <select>
              <option>Service Type</option>
              <option>Service Type</option>
              <option>Service Type</option>
              <option>Service Type</option>
            </select>
          </div>
          <div className="form-group col-md-3 col-sm-3">
            <select>
              <option>Service Type</option>
              <option>Service Type</option>
              <option>Service Type</option>
              <option>Service Type</option>
            </select>
          </div>
          <div className="col-md-12 col-sm-12 col-xs-12">
            <textarea
              className="form-control"
              rows={7}
              cols={20}
              placeholder="Anything we should know about your pet?"
              required=""
              defaultValue={""}
            />
          </div>
          <button className="btn btn-default">Get An Appoinment</button>
        </form>
      </div>
    </div>
    {/* Container /- */}
    <div className="section-padding" />
  </div>
  {/* Appointment /- */}
</>

    </div>
  )
}

export default Appoinment
