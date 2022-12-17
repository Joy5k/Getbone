import 'flowbite';
import { useContext } from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import { AuthContext } from '../../../context/Authprovider';
import { FaUserAlt,FaShoppingCart,FaRegHeart } from 'react-icons/fa';


const Navbar = () => {
  const { user,logOutUser } = useContext(AuthContext);
  const handleLogout = () => { 
    logOutUser()
  }
  return (

<nav  className="text-white bg-slate-700  px-2 sm:px-4 py-2.5 lg:w-10/12 md:w-10/12 sm:w-full mx-auto ">
  <div  className="container flex flex-wrap items-center justify-between mx-auto">
  <Link to="/"  className="flex items-center">
      <img src="https://flowbite.com/docs/images/logo.svg"  className="h-6 mr-3 sm:h-9" alt="Flowbite Logo" />
      <span  className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Getbone</span>
        </Link>
     

        <button data-collapse-toggle="mobile-menu-2" type="button"  className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
            <span  className="sr-only">Open main menu</span>
            <svg  className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path  fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"  clipRule="evenodd"></path></svg>
        </button>
  <div  className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="mobile-menu-2">
    <ul  className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg lg:bg-transparent md:flex-row md:space-x-8 text-white md:mt-0 md:text-sm md:font-medium md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
      <li>
        <Link to="/"  className=" block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:p-0 md:hover:text-blue-700" aria-current="page">Home</Link>
      </li>
      <li>
        <Link to="/"  className="block py-2 pl-3 pr-4  rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 text-white md:dark:hover:bg-transparent dark:border-gray-700 ">About</Link>
      </li>
      <li>
      <Link to="/products" className="block py-2 pl-3 pr-4  rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 text-white md:dark:hover:bg-transparent dark:border-gray-700">Products</Link>                     
      </li>
      <li>
         <Link to="/contact" className="block py-2 pl-3 pr-4  rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 
        md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</Link>
      </li>
            {
              !user?.uid &&  <li>
              <Link to="/signin" className="block rounded bg-blue-700  
             text-white  lg:px-3 lg:py-2 ">Sign In</Link>
           </li>
            }
<li>
      <Link to="/wishlist" className="block py-2 pl-3 pr-4  rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 text-white md:dark:hover:bg-transparent dark:border-gray-700"> <FaRegHeart className='-mr-3 '></FaRegHeart></Link>                     
      </li>
            <li>
      <Link to="/products" className="block py-2 pl-3 pr-4  rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 text-white md:dark:hover:bg-transparent dark:border-gray-700"> <FaShoppingCart className='mb-3'></FaShoppingCart></Link>                     
      </li>
            
            <div  className="flex items-center md:order-2 ">
          <button type="button"  className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
                <span className="sr-only">Open user menu</span>
                {
                  user?.photoURL ? <img className="w-8 h-8 rounded-full" src={user?.photoURL} alt='' /> :<FaUserAlt></FaUserAlt>
                }
           
          </button>
    
          <div className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600" id="user-dropdown">
            
            <div  className="px-4 py-3">
                  <span className="block text-sm text-gray-900 dark:text-white">{user?.displayName}</span>
                  <span className="block text-sm font-medium text-gray-500 truncate dark:text-gray-400">{user?.email}</span>
            </div>
            <ul  className="py-1" aria-labelledby="user-menu-button">
              <li>
                <Link to="/"  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Dashboard</Link>
              </li>
              <li>
                <Link to="/"  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Settings</Link>
              </li>
           
                  <li>
                    <button onClick={handleLogout}>
                    <Link to='/' className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</Link>
                    </button>
               
              </li>
            </ul>
          </div>
        
            </div>
    </ul>
  </div>
  </div>
</nav>

  )
}

export default Navbar