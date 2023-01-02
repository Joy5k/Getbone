
import React,{useState} from "react";
import { AuthContext } from "../../context/Authprovider";
import { useContext } from "react";
import Spinner from "../../components/Spinner";
import { useQuery } from "@tanstack/react-query";


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
          return data;
        },
      });
  console.log(booked,'see the result')
      const handleRemove = (_id:string) => {
        fetch(`http://localhost:5000/addData/${_id}`,
     {
       method: 'DELETE',
       headers: {
         authorization: `bearer ${localStorage.getItem('accessToken')}`
       }
     })
     .then(res => res.json())
     .then(data => {
       refetch()
     })
        fetch(`http://localhost:5000/deleteData/${_id}`,
     {
       method: 'DELETE',
       headers: {
         authorization: `bearer ${localStorage.getItem('accessToken')}`
       }
     })
     .then(res => res.json())
     .then(data => {
       refetch()
     })
    }

    if (isLoading) {
        <Spinner></Spinner>
    }
  const Items=  
      booked.map(({ _id,title, image,price,guarantee,warranty,description,quantity}: userProps) => <tr
        key={_id}  
        className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
    <td className="p-4 w-32">
        <img src={image} alt="Apple Watch" />
    </td>
    <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white">
       {title}
    </td>
    <td className="py-4 px-6">
        <div className="flex items-center space-x-3">
      
            <div>
                <input type="number" id="first_product" className="bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={quantity} disabled />
            </div>
       
        </div>
    </td>
    <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white">
     <input type="number" className="border-none" value={price} disabled />
    </td>
    <td className="py-4 px-6">
        <button onClick={()=>handleRemove(_id)} className="font-medium btn bg-red-700  text-white p-2 rounded-md">Remove</button>
    </td>
    <td className="">
        <button className="btn text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-md  p-2 text-sm">Buy Now</button>
    </td>
</tr>)

   
    return (
        <div className='lg:w-10/12 md:w-10/12 sm:w-full mx-auto '>
        {
          isLoading ? <><Spinner></Spinner></> :<><div className="overflow-x-auto relative shadow-md sm:rounded-lg ">
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
                              {Items }
              </tbody>
          </table>
      </div></>
}

    </div>
  )
}

export default Booking