import React from 'react'

const PhotoSlide = () => {
  return (
    <div>
      <>
  <div id="photo-slider" className="photo-slider container-fluid no-padding">
    {/* Main Carousel */}
    <div
      id="main-slider"
      className="carousel slide carousel-fade col-offset-2"
      data-ride="carousel"
    >
      <div className="carousel-inner" role="listbox">
        <div className="item active">
          <img src="images/slider-image/slider-1.jpg" alt="slider-1" />
          <div className="slider-content">
            <div className="container">
              <div className="slide-content slide-content-1">
                <h2>Dog cat pat care</h2>
                <h3>
                  We Take Good Care For<span>Your Lovely Pet</span>
                </h3>
                <p>
                  Those were the days. And we know Flipper lives in a world full
                  of wonder{" "}
                  <span>
                    flying there-under under the sea. The Love Boat soon will be
                    making
                  </span>
                </p>
                <a href="#" className="btn btn-default" title="Purchase">
                  Purchase
                </a>
                <a href="#" className="btn btn-default bg" title="Learn More">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Main Carousel /-  */}
  </div>
  {/* Photo Slider /- */}
</>

    </div>
  )
}

export default PhotoSlide
