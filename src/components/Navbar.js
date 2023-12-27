"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";


const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState("close");
  const [mobileSubMenu, setMobileSubMenu] = useState("active");
  const token = typeof window !== 'undefined' ? localStorage.getItem("token") : null;


  return (
    <>
      <div className={`offcanvas-header ${mobileMenu} `} tabIndex={-1}>
        <div className="offcanvas__inner">
          <div className="offcanvas__logo">
            <Link className="offcanvas__logo_link" href="/">
              <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0quvjfJLg3IP0aDlrM5B5qYGJy9TDmLNsmoJAtTPXl2hVrV89hRHLDRKJbSBOv0Oxi2Q&usqp=CAU" alt="Furea Logo" />
            </Link>
            <button
              onClick={(e) => setMobileMenu("close")}
              className="offcanvas__close--btn"
              aria-label="offcanvas close btn"
            >
              close
            </button>
          </div>
          <nav
            onClick={(e) => setMobileMenu("close")}
            className="offcanvas__menu"
          >
            <ul className="offcanvas__menu_ul">
              <li className="offcanvas__menu_li">
                <Link className="offcanvas__menu_item" href="/">
                  Home
                </Link>
              </li>
             
             

              <li className="offcanvas__menu_li">
                <Link className="offcanvas__menu_item" href="/about">
                  About
                </Link>
              </li>
              <li className="offcanvas__menu_li">
                <Link className="offcanvas__menu_item" href="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <header className="header__section header__transparent">
        <div className="main__header header__sticky">
          <div className="container-fluid">
            <div className="main__header--inner position__relative d-flex justify-content-between align-items-center">
              <div className="offcanvas__header--menu__open ">
                <button
                  onClick={(e) => setMobileMenu("open")}
                  className="offcanvas__header--menu__open--btn"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="ionicon offcanvas__header--menu__open--svg"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="currentColor"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeMiterlimit={10}
                      strokeWidth={32}
                      d="M80 160h352M80 256h352M80 352h352"
                    />
                  </svg>
                  <span className="visually-hidden">Offcanvas Menu Open</span>
                </button>
              </div>
              <div className="main__logo">
                <h1 className="main__logo--title">
                  <Link className="main__logo--link" href="/">
                    <img
                      className="main__logo--img"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0quvjfJLg3IP0aDlrM5B5qYGJy9TDmLNsmoJAtTPXl2hVrV89hRHLDRKJbSBOv0Oxi2Q&usqp=CAU" height={60} width={60}
                      alt="logo-img"
                    />
                  </Link>
                </h1>
              </div>
              <div className="header__menu d-none d-lg-block">
                <nav className="header__menu--navigation">
                  <ul className="d-flex">
                    <li className="header__menu--items">
                      <Link className="header__menu--link" href="/">
                        Home
                      </Link>
                    </li>

                    <li className="header__menu--items">
                      <Link className="header__menu--link" href="/about">
                        About US{" "}
                      </Link>
                    </li>

                    <li className="header__menu--items">
                      <Link className="header__menu--link" href="/blog">
                        Blog
                      </Link>
                    </li>
                   
                  </ul>
                </nav>
              </div>
              <div className="header__account">
                <ul className="d-flex">
                  {token ? (
   <li className="header__account--items">
   <Link className="header__account--btn" href="/profile">
     <svg
       xmlns="http://www.w3.org/2000/svg"
       width="26.51"
       height="23.443"
       viewBox="0 0 512 512"
     >
       <path
         d="M344 144c-3.92 52.87-44 96-88 96s-84.15-43.12-88-96c-4-55 35-96 88-96s92 42 88 96z"
         fill="none"
         stroke="currentColor"
         strokeLinecap="round"
         strokeLinejoin="round"
         strokeWidth={32}
       />
       <path
         d="M256 304c-87 0-175.3 48-191.64 138.6C62.39 453.52 68.57 464 80 464h352c11.44 0 17.62-10.48 15.65-21.4C431.3 352 343 304 256 304z"
         fill="none"
         stroke="currentColor"
         strokeMiterlimit={10}
         strokeWidth={32}
       />
     </svg>
     <span className="visually-hidden">My Account</span>
   </Link>
 </li>
                  ):(
                    <li className="header__account--items">
                    <Link className="header__account--btn" href="/login">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="26.51"
                        height="23.443"
                        viewBox="0 0 512 512"
                      >
                        <path
                          d="M344 144c-3.92 52.87-44 96-88 96s-84.15-43.12-88-96c-4-55 35-96 88-96s92 42 88 96z"
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={32}
                        />
                        <path
                          d="M256 304c-87 0-175.3 48-191.64 138.6C62.39 453.52 68.57 464 80 464h352c11.44 0 17.62-10.48 15.65-21.4C431.3 352 343 304 256 304z"
                          fill="none"
                          stroke="currentColor"
                          strokeMiterlimit={10}
                          strokeWidth={32}
                        />
                      </svg>
                      <span className="visually-hidden">My Account</span>
                    </Link>
                  </li>
                  )}
               

                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* End main header */}
        {/* Start Offcanvas header menu */}
        <div className="offcanvas-header" tabIndex={-1}>
          <div className="offcanvas__inner">
            <div className="offcanvas__logo">
              <Link className="offcanvas__logo_link" href="/">
                <img src="img/logo/nav-log.webp" alt="Furea Logo" />
              </Link>
              <button
                className="offcanvas__close--btn"
                aria-label="offcanvas close btn"
              >
                close
              </button>
            </div>
            <nav className="offcanvas__menu">
              <ul className="offcanvas__menu_ul">
                <li className="offcanvas__menu_li">
                  <Link className="offcanvas__menu_item" href="/">
                    Home
                  </Link>
                </li>
               
                <li className="offcanvas__menu_li">
                  <Link className="offcanvas__menu_item" href="/contact">
                    Contact
                  </Link>
                </li>
              </ul>

             
            </nav>
          </div>
        </div>
        {/* End Offcanvas header menu */}
        {/* Start Offcanvas stikcy toolbar */}
    
        {/* End Offcanvas stikcy toolbar */}
      </header>
    </>
  );
};

export default Navbar;
