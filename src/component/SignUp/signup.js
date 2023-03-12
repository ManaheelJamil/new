import { Link,Redirect,useNavigate } from "react-router-dom";
import React, { useState } from 'react';
import Sale from '../sale/Sale' 
import Purchase from '../purchase/Purchase';

export default function Login() {
    const [selectedOption, setSelectedOption] = useState(null);
let navigate = useNavigate()
    const handleOptionChange = (option) => {
      setSelectedOption(option);
    }
    const renderPage = () => {
      if (selectedOption === 'sales') {
   navigate('/Sale')
      } else {
        navigate('/Purchase')
      }
    }
    return (
        <>
            <div className='flex justify-around mt-10 md:flex-wrap '>
            <div className='text-center mt-10'>
                <div >
                    <h1 className='text-5xl text-lime-600 font-bold'>SAYLANI WELFARE</h1>
                    <h1 className='text-2xl text-sky-900 font-bold'>ONLINE MARKET PLACE</h1>
                    <input type="email" placeholder='UserName' className='w-64 h-10 rounded-md pl-5' /><br />
                    <input type="email" placeholder='Contact' className='w-64 h-10 rounded-md pl-5' /><br />
                    <input type="email" placeholder='Email' className='w-64 h-10 rounded-md pl-5' /><br />
                    <input type="password" placeholder='password' className=' w-64 h-10 rounded-md pl-5' /><br /><br />
              <input type={"radio"} name="option" value="sales" onChange={() => handleOptionChange('sales')}/> Sales
                        <input type={"radio"} name="option" value="purchase" onChange={() => handleOptionChange('purchase')} className="ml-12"/> Purchase
                 
                    <br />
                    <button disabled={!selectedOption}onClick={()=>{renderPage()}} className='border-black w-64 h-10 mt-10 ring-2 ring-black rounded-md shadow-black' >  <Link to={"/login"} className='  text-xs'>SignUp</Link></button>
                 

                </div>
            </div>
            </div>
        </>
    )
}