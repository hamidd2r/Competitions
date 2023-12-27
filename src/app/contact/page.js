import React from 'react'

const page = () => {
  return (
    <div>
     <>
  {/* Contact Form */}
  <div className="container-fluid no-padding contact-form">
    <div className="section-padding" />
    {/* Container */}
    <div className="container">
      <div className="section-title">
        <h3>Keep in Touch</h3>
        <p>They will have to make the best of things its an uphill climb</p>
      </div>
      <div className="row">
        <form id="contact-form" method="post">
          <div className="form-group col-md-4 col-sm-4 col-xs-12">
            <input
              type="text"
              id="first-name"
              name="contact-first-name"
              className="form-control"
              placeholder="First Name"
            />
          </div>
          <div className="form-group col-md-4 col-sm-4 col-xs-12">
            <input
              type="text"
              id="last-name"
              name="contact-last-name"
              className="form-control"
              placeholder="Last Name"
            />
          </div>
          <div className="form-group col-md-4 col-sm-4 col-xs-12">
            <input
              type="text"
              id="input_phone"
              name="contact-phone"
              className="form-control"
              placeholder="Phone Number"
            />
          </div>
          <div className="form-group col-md-6 col-sm-6 col-xs-12">
            <input
              type="email"
              id="input_email"
              name="contact-email"
              className="form-control"
              placeholder="E-Mail"
            />
          </div>
          <div className="form-group col-md-6 col-sm-6 col-xs-12">
            <input
              type="text"
              id="input_subject"
              name="contact-subject"
              className="form-control"
              placeholder="Subject"
            />
          </div>
          <div className="form-group col-md-12 col-sm-12 col-xs-12">
            <textarea
              rows={7}
              id="textarea_message"
              name="contact-message"
              className="form-control"
              placeholder="Message"
              defaultValue={""}
            />
          </div>
          <button type="submit" id="btn_submit" className="btn-submit">
            Submit
          </button>
          <div id="alert-msg" className="alert-msg" />
        </form>
        {/* /.contact-form */}
      </div>
    </div>
    <div className="section-padding" />
  </div>
  {/* Contact Form /- */}
</>
 
    </div>
  )
}

export default page
