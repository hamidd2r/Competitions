import Link from 'next/link'
import React from 'react'

const Topslider = () => {
  return (
    <div>
     <>
  <div className="container-fluid no-padding page-banner">
    {/* Container */}
    <div className="container">
      {/* Banner Heading */}
      <div className="banner-heading">
        <h3>About Us</h3>
        <ol className="breadcrumb">
          <li>
            <a href="#">Home</a>
          </li>
          <li className="active">About Us</li>
        </ol>
      </div>
      {/* Banner Heading /- */}
    </div>
    {/* Container /- */}
  </div>
  {/* Page Banner /- */}
</>

    </div>
  )
}

export default Topslider
