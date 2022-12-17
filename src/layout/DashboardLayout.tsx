import React from 'react'
import { Link } from 'react-router-dom'
import { Outlet } from 'react-router-dom'


const DashboardLayout = () => {
  return (
      <div>
          <div className='lg:w-10/12 md:w-10/12 sm:w-full mx-auto'>
      <div className="drawer drawer-mobile drawer-end">
       
        <div className="drawer-content">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side ">
          <label htmlFor="dashboard-drawer" className="drawer-overlay "></label>
          <ul className="menu p-4 w-80 bg-gray-100 text-base-content">
            <li>
             <Link to="/dashboard/myorders">My Orders</Link>
            </li>
            {/* {isAdmin && ( */}
              <>
                <li>
                  <Link to='/dashboard/allbuyers'>All Buyers</Link>
                </li>
                <li>
                  <Link to='/dashboard/allsellers'> All Sellers</Link>
                </li>
                <li>
                  <Link to='/dashboard/reporteditems'>Reported Items</Link>
                </li>
              </>
            {/* )} */}
            {/* {isSeller && ( */}
              <>
                <li>
                  <Link to='/dashboard/addproduct'>Add A product</Link>
                </li>
                <li>
                  <Link to='/dashboard/myproduct'>My Products</Link>
                </li>
              </>
           {/* )} */}
          </ul>
        </div>
      </div>
    </div>
    </div>
  )
}

export default DashboardLayout;