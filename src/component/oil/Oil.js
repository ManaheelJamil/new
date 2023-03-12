import React from 'react'
import { Outlet} from "react-router-dom";
import { useState } from "react";
import { Link } from 'react-router-dom';
const Oil = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
       <nav className="flex items-center justify-between flex-wrap font-serif  p-2 mb-3">
      <div className="flex items-end flex-shrink-0 text-black mr-6 bg-gray-50">
        <a href="https://cdn.imgbin.com/15/25/4/imgbin-shopify-e-commerce-logo-web-design-design-qXjMADSvFauX9EM7aNwbpi2UK.jpg">
        <h1 className='text-xl text-lime-600 font-bold'>Saylani Welfare</h1>
                    <h1 className='text-xs text-sky-900 font-bold'>Online Market Place</h1>
          {/* <p className="font-semibold text-xl tracking-tight">My Logo</p> */}
        </a>
      </div>
      <div className="block lg:hidden">
        <button
          className="flex items-center px-3 py-2 border rounded text-black border-black hover:text-white hover:border-white"
          onClick={toggleMenu}
        >
          <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0zm0 6h20v2H0zm0 6h20v2H0z"/></svg>
        </button>
      </div>
      <div
        className={`${
          isOpen ? 'block' : 'hidden'
        } w-full block flex-grow lg:flex lg:items-center lg:w-auto`}
      >
        <div className="text-md lg:flex-grow text-end justify-around">
          <a href="/">
            <p
              className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-gray-200 mr-4"
              onClick={toggleMenu}
            >
              Home
            </p>
          </a>
          <a href="./about">
            <p
              className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-gray-200 mr-4"
              onClick={toggleMenu}
            >
            Add Items
            </p>
          </a>
          <a href="/">
            <p
              className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-gray-200 mr-20"
              onClick={toggleMenu}
            >
          Account
            </p>
          </a>
          
        </div>
        
      </div>
<Outlet/>
    </nav>
    </div>
  )
}

export default Oil
