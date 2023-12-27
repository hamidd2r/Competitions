import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer className="footer-main">
  {/* Container */}
  <div className="container">
    <div className="row">
      <div className="col-md-4 col-sm-6">
        <aside className="widget widget-about">
          <h3 className="widget-title">about Us</h3>
          <p>
            Hello we are Comre. We are here to provide you the best offers
            through our coupons. Hello we are company.
          </p>
          <ul>
            <li>
              <img src="images/icon/ftr-location.png" alt="Address" />
              Washington Square Park, <span>NY, United States</span>
            </li>
            <li>
              <img src="images/icon/ftr-customer.png" alt="Phone" /> Customer
              Support : <span>+ 124 45 76 678</span>
            </li>
            <li>
              <img src="images/icon/ftr-email.png" alt="Mail" />
              <span>Email :</span>
              <a href="mailto:mail@woodsman.com"> mail@woodsman.com</a>
            </li>
          </ul>
        </aside>
      </div>
      <div className="col-md-4 col-sm-6">
        <aside className="widget widget-links">
          <h3 className="widget-title">Working Time</h3>
          <ul>
            <li>
              Monday <span>08:00 am - 10:00 pm</span>
            </li>
            <li>
              tuesday <span>08:00 am - 10:00 pm</span>
            </li>
            <li>
              wednesday <span>08:00 am - 10:00 pm</span>
            </li>
            <li>
              thursday <span>08:00 am - 10:00 pm</span>
            </li>
            <li>
              friday <span>08:00 am - 10:00 pm</span>
            </li>
            <li>
              Week End <span>CloSed</span>
            </li>
            <li>
              Emergency Unit <span>Open Any Time</span>
            </li>
          </ul>
        </aside>
      </div>
      <div className="col-md-4 col-sm-6">
        <aside className="widget widget-subscribe">
          <div className="subscribe-box">
            <h4>Subscribe To Mail!</h4>
            <p>
              Get our Daily email newsletter with Special Services, Updates,
              Offers and more
            </p>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Email Address"
              />
              <span className="input-group-btn">
                <button className="btn btn-default" type="button">
                  SignUp
                </button>
              </span>
            </div>
            {/* /input-group */}
          </div>
          <ul>
            <li>
              <a href="#">
                <img src="images/icon/ftr-fb.png" alt="ftr" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src="images/icon/ftr-g%2b.png" alt="ftr" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src="images/icon/ftr-tumbler.png" alt="ftr" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src="images/icon/ftr-dribbble.png" alt="ftr" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src="images/icon/ftr-ln.png" alt="ftr" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src="images/icon/ftr-tw.png" alt="ftr" />
              </a>
            </li>
          </ul>
        </aside>
      </div>
    </div>
  </div>
  <div className="bottom-footer container-fluid no-padding">
    <div className="container">
      <div className="row">
        <ul className="col-md-5 pull-left">
          <li>
            <a href="#">Faq</a>
          </li>
          <li>
            <a href="#">News</a>
          </li>
          <li>
            <a href="#">Client Support</a>
          </li>
        </ul>
        <div className="col-md-7 pull-right">
          <p className="copyright">
            copyrights © 2015 Mice Cab. All rights reserved
          </p>
        </div>
      </div>
    </div>
  </div>
</footer>

    </div>
  )
}

export default Footer
