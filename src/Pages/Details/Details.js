import React,{useContext, useState} from "react";
import { FaCheck, FaRegHeart, FaSmileBeam } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useLoaderData } from "react-router-dom";
import swal from "sweetalert";
import { AuthContext } from "../../context/Authprovider";
import Navbar from "../shared/Navbar/Navbar";

const Details = () => {
    const {user}=useContext(AuthContext)
    const data = useLoaderData();
    const { url, title,id } = data;
    const [quantity, setQuantity] = useState(1);
    const productDetails = {
        img:url,
        email:user.email,
        title,
        id,
        quantity,
    }
    const handleAddData = () => {
        fetch(`http://localhost:5000/addData/:${id}`, {
            method: 'POST',
            headers: {
                'content-type':'application/json',
            },
            body: JSON.stringify(productDetails)
        
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged===true) {
                    swal(
                        'Successfully Added',
                        "check your cart",
                        "success"
                      );
                }    
             
            
            })
     console.log('clicked')
    }

    // add to wishlist

    const handleAddWishlist = () => {
        fetch(`http://localhost:5000/addwishlist/:${id}`, {
            method: 'POST',
            headers: {
                'content-type':'application/json',
            },
            body: JSON.stringify(productDetails)
        
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged===true) {
                    swal(
                        'Successfully Added',
                        "check your wishlist",
                        "success"
                      );
                }    
             
            
            })
     console.log('clicked')
    }
    const [price, setPrice] = useState(500)
    const addQuantity = () => {
        setQuantity(quantity + 1)
        const totalPrice = quantity *500 ;
        setPrice(totalPrice)
        console.log(totalPrice)
    }
    const removeQuentity = () => {
        setQuantity(quantity - 1)
        const totalPrice = quantity *500 ;
        setPrice(totalPrice)
        console.log(totalPrice)
    }
    return (
        <div className="lg:w-10/12 md:w-10/12 sm:w-full mx-auto">
      <div className="grid lg:grid-cols-2 sm:grid-cols-1 my-5">
        <img
          class="w-96 h-96 mx-auto"
          src={url}
          alt="image description"
              />
              <div className=" lg:w-full sm:w-6/12 mx-auto sm:mt-4 ">
                    <h3 className="text-3xl font-bold">{title}</h3>
                    <p className="text-2xl font-bold text-gray-900 my-4">$599</p>
    
                    {/* tick itemst                */}
<ul class="mb-8 space-y-4 text-left text-gray-500 dark:text-gray-400">
    <li class="flex items-center space-x-3">
        <FaCheck class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"></FaCheck>
                            <span>In stack </span>
    </li>
    <li class="flex items-center space-x-3">
     
    <FaCheck class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"></FaCheck>
        <span>Free delivery available </span>
    </li>
    <li class="flex items-center space-x-3">
      
    <FaCheck class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"></FaCheck>
        <span>Replacement Guarantee: <span class="font-semibold text-gray-900 dark:text-white">6 months</span></span>
    </li>
    <li class="flex items-center space-x-3">
    
    <FaCheck class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"></FaCheck>
        <span>warranty: <span class="font-semibold text-gray-900 dark:text-white">1 year</span></span>
    </li>
    <li class="flex items-center space-x-3">
     
    <FaCheck class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"></FaCheck>
        <span>Available : <span class="font-semibold text-gray-900 dark:text-white">13 </span></span>
    </li>
                    </ul>
                    
                    {/* stars */}
                    

                  <div className="flex items-center mt-2.5 mb-5">
            <svg aria-hidden="true" className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
            <svg aria-hidden="true" className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Second star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
            <svg aria-hidden="true" className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Third star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
            <svg aria-hidden="true" className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fourth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
            <svg aria-hidden="true" className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fifth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">5.0 reviews</span>
                     
                    
                             
                    </div>
                    <div className="flex items-center space-x-3">
                        <button onClick={removeQuentity} className="inline-flex items-center p-1 text-sm font-medium text-gray-500 bg-white rounded-full border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                            <span className="sr-only">Quantity button</span>
                            <svg className="w-4 h-4" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                        </button>
                        <div>
                            <input type="number" id="first_product" className="bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={quantity} required />
                        </div>
                        <button onClick={addQuantity} className="inline-flex items-center p-1 text-sm font-medium text-gray-500 bg-white rounded-full border border-gray-300 focus:outline-none " type="button">
                            <span className="sr-only">Quantity button</span>
                            <svg className="w-4 h-4" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd"></path></svg>
                        </button>
                        <button onClick={handleAddData} type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-sm text-sm px-5 py-2.5 ml-4 mr-4 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 ">Add to cart</button>
                     
                        <button onClick={handleAddWishlist}>
                            <Link to="" className="block py-2 pl-3 pr-4 mb-1 rounded text-black hover:md:text-blue-700 hover:text-xl md:p-0 "> <FaRegHeart className='ml-4 '></FaRegHeart></Link>
                        </button>
                    </div>
                    <p className="text-xl font-bold text-blue-600 mt-6">Description</p>
                    <p className="w-72 my-12 text-justify"><span className="font-bold ">Description</span> <br /> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur, similique molestiae, minus minima voluptates, necessitatibus error quibusdam impedit quidem laborum excepturi mollitia provident nobis. Quia modi esse molestias quis expedita!</p>
              </div>
      </div>
    </div>
  );
};

export default Details;
