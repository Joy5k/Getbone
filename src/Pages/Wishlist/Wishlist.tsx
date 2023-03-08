
import React,{useState,useContext} from "react";
import { FaTrashAlt } from "react-icons/fa";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../../context/Authprovider";
import { type } from "os";
import swal from "sweetalert";
import Spinner from "../../components/Spinner";
import { ProductStatus } from "../../components/ProductStatus";

type userProps = {
    url: string; 
    title: string;
    _id: string;
    image: string;
    price: number;
    guarantee:any,
    warranty: any,
    quantity: number,
    description: any;
}
interface MyObject {
    [k: string]: any;
  }

const Wishlist = () => {
    const { user } = useContext(AuthContext);


    const [productDetail,setProductDetail] = React.useState<MyObject>({});
    const { data: wishlistItems = [] ,refetch,isLoading} = useQuery({
        queryKey: ["wislist"],
        queryFn: async () => {
          const res = await fetch(`https://getbone-server-joy5k.vercel.app/wishlist?email=${user?.email}`, {
            headers: {
              authorization:`bearer ${localStorage.getItem('accessToken')}`
            }
          });
            const data = await res.json();
          
          return data;
        },
    })
    console.log(wishlistItems);
    const handleDelete = (_id: string) => {
        fetch(`https://getbone-server-joy5k.vercel.app/wishlist/${_id}`,
     {
       method: 'DELETE',
       headers: {
         authorization: `bearer ${localStorage.getItem('accessToken')}`
       }
     })
     .then(res => res.json())
            .then(data => {
                if (data.acknowledged===true) {
                    swal(
                        'Successfully Delete',
                        " ",
                        "success"
                      );
                }  
       console.log('ok',_id);
       refetch()
     })
    }

    const handleAddToCart = (_id: string) => {
  // Fetch the product details from the wishlist using the _id
  fetch(`https://getbone-server-joy5k.vercel.app/wishlist/${_id}`)
    .then(res => res.json())
    .then(data => {
      // Create a new object with the required product details
      const productDetails = {
        title: data.title,
        image: data.image,
        price: data.price,
        quantity: data.quantity,
        email: user.email, // Assuming you have the user's email
      }

      // Send the object to the server to add it to the cart
      fetch('https://getbone-server-joy5k.vercel.app/addToCart', {
        method: 'POST',
        headers: {
          'content-type':'application/json',
        },
        body: JSON.stringify(productDetails),
      })
      .then(res => res.json())
      .then(data => {
        console.log(data,'add booking');
        if (data.acknowledged===true) {
          swal(
            'Successfully Added',
            "check your cart",
            "success"
            );
            fetch(`https://getbone-server-joy5k.vercel.app/wishlist/${_id}`,
            {
              method: 'DELETE',
              headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
              }
            })
            .then(res => res.json())
                   .then(data => {
            //            if (data.acknowledged===true) {
            //                swal(
            //                    "Added to Cart",
            //                    " ",
            //                    "success"
            //                  );
            //            }  
            //   console.log('ok',_id);
              refetch()
            })
        }
      })
    })
    .catch(error => console.log(error,'when I try to add to card'))
}


    
    if (isLoading) {
        return <div className="h-full">
        <Spinner></Spinner>
    </div>
    }
  
    const Items = wishlistItems.map(({_id,title, image,price,guarantee,warranty,description,quantity}: userProps)=>
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <td className="p-4 w-32">
                <img src={image} alt="Apple Watch" />
        </td>
        <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white">
           {title}
        </td>
        <td className="py-4 px-6">
            <div className="flex items-center space-x-3">
                {/* <button onClick={()=>removeQuentity()} className="inline-flex items-center p-1 text-sm font-medium text-gray-500 bg-white rounded-full border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                    <span className="sr-only">Quantity button</span>
                    <svg className="w-4 h-4" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                </button> */}
                <div>
                    <input type="number" id="first_product" className="bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={quantity} disabled />
                </div>
                {/* <button onClick={addQuantity} className="inline-flex items-center p-1 text-sm font-medium text-gray-500 bg-white rounded-full border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                    <span className="sr-only">Quantity button</span>
                    <svg className="w-4 h-4" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd"></path></svg>
                </button> */}
            </div>
        </td>
        <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white">
         <input type="number" className="border-none" value={price*quantity} disabled />
       
        </td>
        <td className="py-4 px-6">
            <button className="font-medium btn text-red-700   p-2 rounded-md"></button>

            <button onClick={()=>handleDelete(_id)} data-tooltip-target="tooltip-default" type="button" className=" font-medium btn text-red-700   p-2 rounded-md  focus:ring-4 focus:outline-none focus:ring-blue-300  text-lg px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mb-4"><FaTrashAlt></FaTrashAlt></button>
            <div id="tooltip-default" role="tooltip" className="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip dark:bg-gray-700">
                  Delete Item
            <div className="tooltip-arrow" data-popper-arrow></div>
            </div>

       </td>
        <td className="py-0 px-0">
                <button onClick={()=>handleAddToCart(_id)} 
                    className="btn text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-md  p-2 text-sm">Add to cart</button>
        </td>
        </tr>)
    
    return (
        <div className='lg:w-10/12 md:w-10/12 sm:w-full mx-auto max-h-full '>
        {wishlistItems.length > 0 ? 
       <div className="overflow-x-auto relative shadow-md sm:rounded-lg ">
       <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
           <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
               <tr>
                   <th scope="col" className="py-3 px-6">
                       <span className="sr-only">Image</span>
                   </th>
                   <th scope="col" className="py-3 px-6">
                       Product
                   </th>
                   <th scope="col" className="py-3 px-6">
                       Qty
                   </th>
                   <th scope="col" className="py-3 px-6">
                       Price
                   </th>
                   <th scope="col" className="py-3 px-6">
                       Delete
                   </th>
                   <th scope="col" className="py-3 px-6">
                       Add to Cart
                   </th>
               </tr>
           </thead>
                       <tbody>
                
             {Items}
           </tbody>
       </table>
   </div>
       : <ProductStatus></ProductStatus>}    


    </div>
  )
}

export default Wishlist

