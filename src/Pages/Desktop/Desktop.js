import { type } from '@testing-library/user-event/dist/type'
import React, { useEffect, useState } from 'react'
import DesktopCard from './DesktopCard'

// https://jsonplaceholder.typicode.com/photos


const Desktop = () => {
    const [data,setData]=useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/photos')
            .then(res => res.json())
           .then(data => {
               console.log(data)
               setData(data.slice(0,6))
            })
    }, [])
  return (
      <div className='lg:w-10/12 md:w-10/12 sm:w-full mx-auto '>
          <h3 className='text-4xl font-bold text-blue-600 my-4'>Desktop</h3>
          <div className='grid grid-cols-3 gap-4'>
          {
              data.map(item =>
            
                  <DesktopCard
                      key={item.id}
                      item={item}
                  >
            
                  </DesktopCard>)
          }

          </div>
      </div>
  )
}

export default Desktop