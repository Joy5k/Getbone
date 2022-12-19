import React from 'react';
import { FaLaptop,FaMobileAlt,FaDesktop } from 'react-icons/fa';

import { HashRouter as Router, Route, Link, Outlet } from 'react-router-dom'

const CatergoryLayout = () => {
  return (
      <div className='grid grid-cols-2 w-full h-screen ml-2 mb-96 '>
        <div className='w-8/12'>
        <h3 className='text-4xl font-bold  text-blue-600 my-5'>Category</h3>
<aside className="w-64  " aria-label="Sidebar">
   <div className=" overflow-y-auto py-4 px-3 bg-gray-50 rounded  sm:px-4 sticky top-44 z-50 ">
      <ul className="space-y-2 ">
         <li className=''>
            <Link to="/" className="flex items-center p-2 font-normal text-gray-900 rounded-lg hover:text-white  hover:bg-blue-500">
               <svg aria-hidden="true" className="w-6 h-6 text-gray-500 transition duration-75  group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg>
               <span className="ml-3 ">Dashboard</span>
            </Link >
         </li>
         <li>
            <Link to="/" className="flex items-center p-2 font-normal text-gray-900 rounded-lg hover:text-white  hover:bg-blue-500">
        <FaDesktop></FaDesktop>
               <span className="flex-1 ml-3 whitespace-nowrap">Desktop</span>
               <span className="inline-flex justify-center items-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300">Pro</span>
            </Link >
         </li>
         <li>
            <Link to="/" className="flex items-center p-2 font-normal text-gray-900 rounded-lg hover:text-white  hover:bg-blue-500">
        <FaLaptop></FaLaptop>
               <span className="flex-1 ml-3 whitespace-nowrap">Laptop</span>
               <span className="inline-flex justify-center items-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300">Pro</span>
            </Link >
         </li>
         <li>
            <Link to="/"className="flex items-center p-2 font-normal text-gray-900 rounded-lg hover:text-white  hover:bg-blue-500">
             <FaMobileAlt></FaMobileAlt>
               <span className="flex-1 ml-3 whitespace-nowrap">Inbox</span>
               <span className="inline-flex justify-center items-center p-3 ml-3 w-3 h-3 text-sm font-medium text-blue-600 bg-blue-200 rounded-full dark:bg-blue-900 dark:text-blue-200">3</span>
            </Link >
         </li>
        
         <li>
            <Link to="/" className="flex items-center p-2 font-normal text-gray-900 rounded-lg hover:text-white  hover:bg-blue-500">
               <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clip-rule="evenodd"></path></svg>
               <span className="flex-1 ml-3 whitespace-nowrap">Products</span>
            </Link >
         </li>
         <li>
            <Link to="/signin" className="flex items-center p-2 font-normal text-gray-900 rounded-lg hover:text-white  hover:bg-blue-500">
               <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clip-rule="evenodd"></path></svg>
               <span className="flex-1 ml-3 whitespace-nowrap">Sign In</span>
            </Link >
         </li>
         <li>
            <Link to="/signup" className="flex items-center p-2 font-normal text-gray-900 rounded-lg hover:text-white  hover:bg-blue-500">
               <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z" clip-rule="evenodd"></path></svg>
               <span className="flex-1 ml-3 whitespace-nowrap">Sign Up</span>
            </Link >
         </li>
      </ul>
           </div>
</aside>
         </div>
        <Outlet></Outlet>

    </div>
  )
}

export default CatergoryLayout