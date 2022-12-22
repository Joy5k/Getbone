
import React,{useState,useEffect} from "react";
import ShareButton from "../../components/ShareButton";
import { AuthContext } from "../../context/Authprovider";
import { useContext } from "react";
import Spinner from "../../components/Spinner";
import { useQuery } from "@tanstack/react-query";

const Booking = () => {
    const {user}=useContext(AuthContext)
    const [quantity, setQuantity] = useState(1)
    const [price, setPrice] = useState(500)
    // const [loader, setLoader] = useState(false);
  
    const { data: booked = [] ,refetch,isLoading} = useQuery({
        queryKey: ["booked"],
        queryFn: async () => {
          const res = await fetch(`http://localhost:5000/addData?email=${user?.email}`, {
            headers: {
              authorization:`bearer ${localStorage.getItem('accessToken')}`
            }
          });
            const data = await res.json();
            console.log(data,'got this data')
          return data;
        },
      });

      const handleRemove = (id) => {
        fetch(`http://localhost:5000/addData/${id}`,
     {
       method: 'DELETE',
       headers: {
         authorization: `bearer ${localStorage.getItem('accessToken')}`
       }
     })
     .then(res => res.json())
     .then(data => {
       console.log('ok',id);
       refetch()
     })
    }

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
    if (isLoading) {
        <Spinner></Spinner>
    }
  
   
    return (
        <div className='lg:w-10/12 md:w-10/12 sm:w-full mx-auto '>
               {
                        isLoading && <div className="h-screen w-11/12 mx-auto mt-20">
                             <Spinner></Spinner>
                </div>
                    }
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
                        {
                            booked.map(data=><tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <td className="p-4 w-32">
                                <img src={data.img} alt="Apple Watch" />
                            </td>
                            <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white">
                               {data.title}
                            </td>
                            <td className="py-4 px-6">
                                <div className="flex items-center space-x-3">
                              
                                    <div>
                                        <input type="number" id="first_product" className="bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={data.quantity} readOnly />
                                    </div>
                               
                                </div>
                            </td>
                            <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white">
                             <input type="number" className="border-none" value={price} />
                            </td>
                            <td className="py-4 px-6">
                                <button onClick={()=>handleRemove(data._id)} className="font-medium btn bg-red-700  text-white p-2 rounded-md">Remove</button>
                            </td>
                            <td className="py-4 px-6">
                                <button className="font-medium text-blue-600 btn hover:underline"><ShareButton>Buy Now</ShareButton></button>
                            </td>
                        </tr>)
            }
          
        </tbody>
    </table>
</div>

    </div>
  )
}

export default Booking