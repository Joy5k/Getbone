import React,{useContext, useState} from "react";
import { FaCheck, FaExchangeAlt, FaExclamationTriangle, FaRegHeart, FaSmileBeam } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useLoaderData } from "react-router-dom";
import swal from "sweetalert";
import { AuthContext } from "../../context/Authprovider";
import { type } from "@testing-library/user-event/dist/type";
type data = {
    url: string; 
    title: string;
    id: string;
}
const Details = () => {
    const {user}=useContext(AuthContext)
    const data = useLoaderData();
    const { url, title,id } = data;
    const [quantity, setQuantity] = useState(1);
    const productDetails = {
        img:url,
        email:user.email,
        title,
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
           className="w-96 h-96 mx-auto"
          src={url}
          alt="image description"
              />
              <div className=" lg:w-full sm:w-6/12 mx-auto sm:mt-4 ">
                    <h3 className="text-3xl font-bold">{title}</h3>
                    <p className="text-2xl font-bold text-gray-900 my-4">$599</p>
    
                    {/* tick itemst                */}
<ul  className="mb-8 space-y-4 text-left text-gray-500 dark:text-gray-400">
    <li  className="flex items-center space-x-3">
        <FaCheck  className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"></FaCheck>
                            <span>In stack </span>
    </li>
    <li  className="flex items-center space-x-3">
     
    <FaCheck  className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"></FaCheck>
        <span>Free delivery available </span>
    </li>
    <li  className="flex items-center space-x-3">
      
    <FaCheck  className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"></FaCheck>
        <span>Replacement Guarantee: <span  className="font-semibold text-gray-900 dark:text-white">6 months</span></span>
    </li>
    <li  className="flex items-center space-x-3">
    
    <FaCheck  className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"></FaCheck>
        <span>warranty: <span  className="font-semibold text-gray-900 dark:text-white">1 year</span></span>
    </li>
    <li  className="flex items-center space-x-3">
     
    <FaCheck  className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"></FaCheck>
        <span>Available : <span  className="font-semibold text-gray-900 dark:text-white">13 </span></span>
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
                            <svg className="w-4 h-4" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                        </button>
                        <div>
                            <input type="number" id="first_product" className="bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={quantity} required />
                        </div>
                        <button onClick={addQuantity} className="inline-flex items-center p-1 text-sm font-medium text-gray-500 bg-white rounded-full border border-gray-300 focus:outline-none " type="button">
                            <span className="sr-only">Quantity button</span>
                            <svg className="w-4 h-4" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd"></path></svg>
                        </button>
                        <button onClick={handleAddData} type="button"  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-sm text-sm px-5 py-2.5 ml-4 mr-4 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 ">Add to cart</button>
                     
                        <button onClick={handleAddWishlist}>
                            <Link to="" className="block py-2 pl-3 pr-4 mb-1 rounded text-black hover:md:text-blue-700 hover:text-xl md:p-0 "> <FaRegHeart className='ml-4 '></FaRegHeart></Link>
                        </button>
                    </div>
                    </div>
            </div>
            <p className="text-xl font-bold text-blue-600 mt-6">Description</p>
                    <p className="w-11/12 lg:w-[800px] my-12 text-justify"><span className="font-bold  ">Description</span> <br /> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur, similique molestiae, minus minima voluptates, necessitatibus error quibusdam impedit quidem laborum excepturi mollitia provident nobis. Quia modi esse molestias quis expedita!</p>
             <p className="text-md font-bold mb-2">Report the Product</p>
         <Link to={`/report/${id}`}>   <button className="w-32 bg-red-600 text-white  flex items-center justify-center p-2 rounded-md mb-12"><span>Report</span><FaExclamationTriangle className="ml-1"></FaExclamationTriangle></button></Link>
   
<button  className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button" data-modal-toggle="popup-modal">
  Toggle modal
</button>

<div id="popup-modal" tabIndex={-1} className="fixed top-0 left-0 right-0 z-50 hidden p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full">
    <div  className="relative w-full h-full max-w-md md:h-auto">
        <div  className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <button type="button"  className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-toggle="popup-modal">
                <svg aria-hidden="true"  className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                <span  className="sr-only">Close modal</span>
            </button>
            <div  className="p-6 text-center">
                <svg aria-hidden="true"  className="mx-auto mb-4 text-gray-400 w-14 h-14 dark:text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                <h3  className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Are you sure you want to delete this product?</h3>
                <button data-modal-toggle="popup-modal" type="button"  className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2">
                    Yes, I'm sure
                </button>
                <button data-modal-toggle="popup-modal" type="button"  className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">No, cancel</button>
            </div>
        </div>
    </div>
            </div>
            

        </div>
  );
};

export default Details;
