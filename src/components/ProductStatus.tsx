import React from 'react'
import { FaRegSadTear } from 'react-icons/fa'
import './ProductStatus.css';

export const ProductStatus = () => {
  return (
      <div className='loading w-full min-h-screen flex justify-center align-middle '>
          <p className='  my-auto align-middle text-center font-bold text-6xl text-gray-400 relative'>No Product Added Yet<FaRegSadTear className=' text-center loading-circle mx-auto text-8xl text-yellow-300 my-4'></FaRegSadTear></p>
    </div>
  )
}
