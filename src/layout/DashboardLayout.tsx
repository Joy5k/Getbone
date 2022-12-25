import React, { useContext } from 'react'
import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom'
import UseAdmin from '../Hooks/useAdmin'
import { AuthContext } from '../context/Authprovider'
import UseSeller from '../Hooks/UseSeller'
import Navbar from '../Pages/shared/Navbar/Navbar'

const DashboardLayout = () => {
  const {user}=useContext(AuthContext)
  const [isAdmin] = UseAdmin(user?.email)
  const [isSeller] = UseSeller(user?.email)
  const admin=isAdmin&&  <> <li>
 <Link to="/dashboard" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">All users</Link>
</li>
<li>
 <Link to="/dashboard" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">All sellers</Link>
</li>
<li>
 <Link to="/dashboard/reported" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Reported Items</Link>
    </li></>
  
// check seller
  const seller = isSeller && <>
      <li>
       <Link to="/dashboard/addproduct" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Add Product</Link>
      </li>
      <li>
       <Link to="/dashboard" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">My Products</Link>
    </li>
    <li>
       <Link to="/dashboard" className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">My Orders</Link>
      </li>
  </>


  return (
    <div>
  
<nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded lg:w-10/12 md:w-10/12 sm:w-full mx-auto text-center shadow-xl lg:mb-10 md:mb-8 sm:mb-4">
  <div className="container flex flex-wrap items-center justify-center mx-auto">

  <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
    <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
      <li>
       <Link to="/dashboard" className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">My Orders</Link>
      </li>
              { seller}
     
              {admin}
              
    </ul>
  </div>
  </div>
</nav>
<Outlet></Outlet>
    </div>
  )
}

export default DashboardLayout