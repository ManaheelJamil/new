import React from 'react'
// import { PlusIcon } from '@heroicons/react/solid';
import { Outlet } from "react-router-dom";
import { useState } from "react";
import { Link } from 'react-router-dom';
const Additem = () => {
    const [item, setItem] = useState("");
    const [quantity, setQuantity] = useState(1);
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`Added ${quantity} ${item} to cart`);
        // You can also perform other actions here, such as adding the item to a database or displaying a success message
    };

    // Handle changing the item input field
    const handleItemChange = (event) => {
        setItem(event.target.value);
    };

    // Handle changing the quantity input field
    const handleQuantityChange = (event) => {
        setQuantity(event.target.value);
    };
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (

        <>
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
                        <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0zm0 6h20v2H0zm0 6h20v2H0z" /></svg>
                    </button>
                </div>
                <div
                    className={`${isOpen ? 'block' : 'hidden'
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
                        <a href="/Additem">
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
                <Outlet />
            </nav>
       <div className='text-center bg-gray-100 '>
        <h1 className='text-2xl text-lime-600 font-bold'>Add New Item</h1><br/>
        <label className=' text-xl ml-5'>Name</label>
        <input type="text" placeholder='name' className='border-2 bg-gray-200 pl-5 rounded-md ml-5'/>
        <label  className=' text-xl ml-5'>Quantity</label>
        <input type="text" placeholder='Quantity' className='border-2 bg-gray-200 pl-5 rounded-md ml-5'/><br/><br/>
        <label className='text-xl ml-5'>Description</label>
        <input type="text" placeholder='Description' className='border-2 bg-gray-200 pl-5 rounded-md ml-5'/>
        <label className=' text-xl ml-5'>Price</label>
        <input type="text" placeholder='price' className='border-2 bg-gray-200 pl-5 rounded-md ml-5'/>
        <button className='border-2 mx-96 w-64 h-12 rounded-lg text-xl shadow-2xl text-white font-bold bg-lime-600 mt-20'><Link to="/Setting">Submit</Link></button>
       </div>
        </>
    )
}

export default Additem
