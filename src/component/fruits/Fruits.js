import React from 'react'
import { Outlet } from "react-router-dom";
import { useState } from "react";
import { Link } from 'react-router-dom';
const Fruits = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (<>
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
    </div><hr/>
    <h1 className='text-4xl text-lime-600 font-bold'>Categories</h1>
    <h1 className='text-xl text-sky-900 font-bold'>Fruits</h1><br/>
    <div className='grid grid-rows-4 grid-flow-col gap-5 w-96 text-center '>
<div><img className="w-20 h-20"src="https://www.frozenfruitlife.com/wp-content/themes/fuze-2.7/tmp/cache/resized-images/fb669f9bb828b4cfb4ff96d628979833.jpg"/><button className='border-2 w-32 h-12 rounded-lg shadow-2xl hover:bg-lime-600 hover:text-white'>Strawberry</button></div><br/>
<div><img className="w-20 h-20" src="https://www.nicepng.com/png/detail/90-900340_pineapple-png-background-individual-fruits-and-vegetables.png"/><button className='border-2 w-32 h-12 rounded-lg shadow-2xl hover:bg-lime-600 hover:text-white'>Pineapple</button></div><br/>
<div><img className="w-20 h-20" src="https://toppng.com/uploads/preview/melonsandia-individual-fruits-and-vegetables-11563421626ja6tsji90w.png"/><button className='border-2 w-32 h-12 rounded-lg shadow-2xl hover:bg-lime-600 hover:text-white'>WaterMelon</button></div><br/>
<div><img className="w-20 h-20" src="https://www.pngitem.com/pimgs/m/112-1122103_mango-png-free-download-individual-fruits-and-vegetables.png"/><button className='border-2 w-32 h-12 rounded-lg shadow-2xl hover:bg-lime-600 hover:text-white'>Mango</button></div><br/>
<div><img className="w-20 h-20"src="https://s30386.pcdn.co/wp-content/uploads/2019/08/Grapes_HNL1.jpg"/><button className='border-2 w-32 h-12 rounded-lg shadow-2xl hover:bg-lime-600 hover:text-white'>Grapes</button></div><br/>
<div><img className="w-20 h-20" src="https://us.123rf.com/450wm/cepn/cepn2009/cepn200900020/155940267-fresh-banana-isolated-bunch-of-ripe-organic-bananas-on-white-background.jpg?ver=6"/><button className='border-2 w-32 h-12 rounded-lg shadow-2xl hover:bg-lime-600 hover:text-white'>Banana</button></div><br/>
<div><img className="w-20 h-20"src="https://images.squarespace-cdn.com/content/v1/5a3586f70abd0420bf56d644/1514348081423-XCVDP1DNSZS87E3DW7PI/fruitcrown+images+individual.003.jpeg"/><button className='border-2 w-32 h-12 rounded-lg shadow-2xl hover:bg-lime-600 hover:text-white'>RusBerry</button></div><br/>
<div><img className="w-20 h-20" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaO8ncSRvpi3kOOMfxSVPzDCuWFQFuJ7xiLA&usqp=CAU"/><button className='border-2 w-32 h-12 rounded-lg shadow-2xl hover:bg-lime-600 hover:text-white'>Papaya</button></div><br/>
<div><img className="w-20 h-20" src="https://images.squarespace-cdn.com/content/v1/5a3586f70abd0420bf56d644/1514348080691-WWRQ7Q4VEEP3JT164N6K/fruitcrown+images+individual.004.jpeg?format=1000w"/><button className='border-2 w-32 h-12 rounded-lg shadow-2xl hover:bg-lime-600 hover:text-white'>Peach</button></div><br/>
<div><img className="w-20 h-20" src="https://us.123rf.com/450wm/katerynabibro/katerynabibro1801/katerynabibro180103112/92666020-dragon-fruit-pitaya-pitahaya-isolated-on-white-background-one-whole-two-sliced-halves.jpg?ver=6"/><button className='border-2 w-32 h-12 rounded-lg shadow-2xl hover:bg-lime-600 hover:text-white'>Dragon Fruits</button></div><br/>
<div><img className="w-20 h-20"src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4U81ksFEEQKVc2lDNIXTEd9dSfuA30xOiIQ&usqp=CAU"/><button className='border-2 w-32 h-12 rounded-lg shadow-2xl hover:bg-lime-600 hover:text-white'>Pomegranate</button></div><br/>
<div><img className="w-20 h-20" src="https://images.pexels.com/photos/161559/background-bitter-breakfast-bright-161559.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/><button className='border-2 w-32 h-12 rounded-lg shadow-2xl hover:bg-lime-600 hover:text-white'>Orange</button></div><br/>
</div>
  </>
  )
}

export default Fruits
