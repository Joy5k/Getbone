import { useQuery } from '@tanstack/react-query';
import React,{useState,useContext} from "react";
import { AuthContext } from '../../../context/Authprovider';
import swal from 'sweetalert';
import { FaTrashAlt } from 'react-icons/fa';
import Spinner from '../../../components/Spinner';


type userProps = {
  image:string;
  title: string;
  quantity: number;
  _id: string;
  price: any;
}
const MyProducts = () => {
  const { user } = useContext(AuthContext);
  // const [quantity, setQuantity] = useState(1)
  const [productDetail,setProductDetail] = useState([])

  

  const { data: wishlistItems = [] ,refetch,isLoading} = useQuery({
    queryKey: ["wislist"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/myproducts?email=${user?.email}`, {
        headers: {
          authorization:`bearer ${localStorage.getItem('accessToken')}`
        }
      });
        const data = await res.json();     
      return data;
    },
  })
  if (isLoading) {
    return <Spinner></Spinner>
  }
  const handleDelete = (_id: string) => {
    fetch(`http://localhost:5000/wishlist/${_id}`,
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
   console.log('ok');
   refetch()
 })
}

const handleAdvertisement = (_id: string) => {
    fetch(`http://localhost:5000/wishlist/${_id}`)
        .then(res => res.json())
        .then(data => {
            setProductDetail(data)
            console.log(data.img)
            fetch(`http://localhost:5000/addToCart`, {
                method: 'POST',
                headers: {
                    'content-type':'application/json',
                },
                body: JSON.stringify(data)
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
                    }    
                })
        })
    console.log('click');
}


  const Items = wishlistItems.map(({image, title,quantity,_id,price}: userProps)=>
  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
  <td className="p-4 w-32">
        
          <img src={image} alt="Apple Watch" />
  </td>
  <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white">
     {title}
  </td>
  <td className="py-4 px-6">
      <div className="flex items-center space-x-3">
       
          <div>
              <input type="number" id="first_product" className="bg-gray-50 w-20 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={quantity} disabled />
          </div>
      </div>
  </td>
  <td className="py-4 w-24 px-6 font-semibold text-gray-900 dark:text-white">
   <input type="number" className="border-none" value={price} disabled />
 
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
          <button onClick={()=>handleAdvertisement(_id)} 
              className="btn text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-md  p-2 text-sm">Advertise</button>
  </td>
  </tr>)
  return (
    <div className='lg:w-10/12 md:w-10/12 sm:w-full mx-auto'>
      MyProducts
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

    </div>
  )
}

export default MyProducts