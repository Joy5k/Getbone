import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react'
import { FaTrashAlt, FaUserAlt } from 'react-icons/fa';
import swal from 'sweetalert';
import { AuthContext } from '../../../context/Authprovider';


type userProps = {
  email: string; 
  name: string;
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

const AllSellers = () => {
  const [productDetail,setProductDetail] = React.useState<MyObject>({});
  const { user } = useContext(AuthContext);

  const { data: users = [] ,isLoading,refetch} = useQuery({
      queryKey: ["users"],
      queryFn: async () => {
        const res = await fetch(`http://localhost:5000/allusers/Seller`, {
          headers: {
          authorization:`bearer ${localStorage.getItem('accessToken')}`
        }
        });
        const data = await res.json();
        return data;
      },
  });
  const handleDelete = (_id: string) => {
      fetch(`http://localhost:5000/allusers/${_id}`,
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
  const Items = users.map(({_id,email,name, image}: userProps)=>
  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
  <td className="p-4 w-32">
              {/* <img src={image} alt="Apple Watch" /> */}
              <FaUserAlt className='w-8 h-8'></FaUserAlt>
  </td>
  <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white">
     {name}
  </td>
  <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white">
     {email}
  </td>

  <td className="py-4 px-6">
      <button className="font-medium btn text-red-700   p-2 rounded-md"></button>

      <button onClick={()=>handleDelete(_id)} data-tooltip-target="tooltip-default" type="button" className=" font-medium btn text-red-700   p-2 rounded-md  focus:ring-4 focus:outline-none focus:ring-blue-300  text-lg px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mb-4"><FaTrashAlt></FaTrashAlt></button>
      <div id="tooltip-default" role="tooltip" className="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip dark:bg-gray-700">
            Delete Item
      <div className="tooltip-arrow" data-popper-arrow></div>
      </div>

 </td>

  </tr>)
return (
  <div className='lg:w-10/12 md:w-10/12 sm:w-full mx-auto '>
        
  <div className="overflow-x-auto relative shadow-md sm:rounded-lg ">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                  <th scope="col" className="py-3 px-6">
                            <span className="sr-only">Image</span>
                            Image
                  </th>
                  <th scope="col" className="py-3 px-6">
                      User Name
                  </th>
                  <th scope="col" className="py-3 px-6">
                     Email
                  </th>
                  <th scope="col" className="py-3 px-6">
                      Manage
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
export default AllSellers