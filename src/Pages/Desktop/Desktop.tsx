import { type } from '@testing-library/user-event/dist/type'
import React, { useEffect, useState } from 'react'
import DesktopCard from './DesktopCard'

// https://jsonplaceholder.typicode.com/photos
type childrenType = {
    children:React.ReactNode
}
type item = {
    id: number,
    img:string,
}
type DesktopCard =
    { item: any; }
  

const Desktop = () => {
    const [data,setData]=useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/photos')
            .then(res => res.json())
           .then(data => {
               setData(data.slice(0,6))
            })
    }, [])
const Desktop= 
    data.map(item => <DesktopCard item={item}></DesktopCard>)

  return (
      <div className='lg:w-10/12 md:w-10/12 sm:w-full mx-auto '>
          <h3 className='text-4xl font-bold text-blue-600 my-4'>Desktop</h3>
          <div className='grid grid-cols-3 gap-4'>
             
        {Desktop}
          </div>
      </div>
  )
}

export default Desktop