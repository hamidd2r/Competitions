"use client"
import { postApiData } from '@/Helper/common';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';


const Listing = () => {
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
    <div>
      <>
        <section className="blog__section section--padding">
          <div className="container">
          <div className="blog__section--inner p-0">
              <div className="row row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-1 mb--n30">
                {pets && pets.length > 0 ? (
                  pets.map((item, index) => (
                    <div className="col mb-30" key={index}>
                      <div className="blog__items">
                        <div className="blog__thumbnail">
                          <a
                            className="blog__thumbnail--link display-block"
                            href={`/dogs/${item.pet_id}`}
                          >
                            <img  style={{height:"300px", width:"100%"}}
                              className="blog__thumbnail--img display-block"
                              src={item.image}
                              alt="blog-img"
                            />
                          </a>
                        </div>
                        <div className="blog__content">
                          <h3 className="blog__content--title h4">
                            <a href={`/dogs/${item.pet_id}`}>{item.title}</a>
                          </h3>
                          <p className="blog__content--desc">{item.message}</p>
                          <Link
                            className="blog__content--btn primary__btn"
                            href={`/dogs/${item.pet_id}`}
                          >
                            Read more
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))
                ) : null}
              </div>
            </div>
          </div>
        </section>
      </>
    </div>
  );
};

export default Listing;
