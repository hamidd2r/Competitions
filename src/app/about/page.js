"use client"
import Topslider2 from '@/components/TopSlider2'
import Topslider from '@/components/Topslider'
import React, { useEffect, useState } from 'react'

const page = () => {

  const [pets, setPets] = useState([]);

  // @ products Details API call
  const petLists = async () => {
    try {
      const data = await postApiData("latest-list");
      setPets(data.success);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    petLists();
  }, []);
  return (
    <>
   <Topslider2/>

  {/* End banner section */}
  {/* Start banner section */}
  <section className="banner__section section--padding color-scheme-2 pt-0">
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="banner__section--inner d-flex align-items-center">
            <div className="banner__discount--content">
             
              <h2 className="banner__discount--content__title">
                Top Rescue Pets 
              </h2>
              {/* <p className="banner__discount--content__desc">
                Lorem ipsum dolor sit amet, consecteturiuyr icing elit,sed do
                eiusmod ut labore et. Lorem ipsum dolor sit amet, consecteturop.
              </p> */}
              <a
                className=" primary__btn btn__style2"
                href="shop.html"
                rel="nofollow"
              >
                Discover More
              </a>
            </div>
            <div className="banner2__right--sidebar position__relative d-flex">
              <div className="banner2__sidebar--items one position__relative">
                <a
                  className="banner__items--thumbnail "
                  href="shop.html"
                  rel="nofollow"
                >
                  <img
                    className="banner__items--thumbnail__img"
                    src="https://cdn.shopify.com/s/files/1/1708/4041/files/custom_resized_lab_480x480.jpg?v=1668581125"
                    alt="banner-img"
                  />
                </a>
             
              </div>
              <div className="banner2__sidebar--items two position__relative">
                <a
                  className="banner__items--thumbnail "
                  href="shop.html"
                  rel="nofollow"
                >
                  <img
                    className="banner__items--thumbnail__img"
                    src="https://cdn.shopify.com/s/files/1/1708/4041/files/custom_resized_lab_480x480.jpg?v=1668581125"
                    alt="banner-img"
                  />
                </a>
              </div>
              <div className="banner2__sidebar--items three position__relative">
                <a
                  className="banner__items--thumbnail "
                  href="shop.html"
                  rel="nofollow"
                >
                  <img
                    className="banner__items--thumbnail__img"
                    src="https://cdn.shopify.com/s/files/1/1708/4041/files/custom_resized_lab_480x480.jpg?v=1668581125"
                    alt="banner-img"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* End banner section */}


    </>
  )
}

export default page
