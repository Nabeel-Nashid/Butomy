import React from 'react'
import { FaShoppingCart } from 'react-icons/fa';


function Header() {
  return (
    <>
      <div className="w-full h-[80px] flex justify-between items-center px-4 bg-[#ffffff] text-gray-900">
        <div className="">
          <h1 className='font-extrabold text-4xl'>Butomy</h1>
          <h1></h1>
        </div>
        <div className="flex justify-center items-center  ">
          <h1 className="mx-2 font-semibold text-lg">MyOrder</h1>

          <FaShoppingCart size={22} color='gray'/>
          <span className="bg-red-600 text-white rounded-full text-[10px] px-1 ml-[-10px] mb-[15px]">
            0
          </span>
          {/* <div class="border-b-2 border-blue-500 hover:border-red-500"></div> */}
        </div>
      </div>
    </>
  )
}

export default Header
