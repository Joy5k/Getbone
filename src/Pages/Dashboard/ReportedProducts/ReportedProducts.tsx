import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState, useEffect } from "react";
import swal from "sweetalert";

type productsProps = {
    image:string;
    title: string;
    quantity: number;
    _id: string;
    price: any;
    email: string;
    message: any;
    reportedItem: any;
}
const ReportedProducts = () => {
 
    const { data: items = [] ,refetch,isLoading} = useQuery({
        queryKey: ["booked"],
        queryFn: async () => {
          const res = await fetch(`http://localhost:5000/reported`, {
            headers: {
              authorization:`bearer ${localStorage.getItem('accessToken')}`
            }
          });
            const data = await res.json();
          return data;
        },
    });
    const handleRemove = (_id:string) => {
        fetch(`http://localhost:5000/reported/${_id}`,
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
                        "Delete the product for permanently",
                        "success",
                      );
                } 
       refetch()
     })
    }
console.log(items)

    const products = items.map(({ image, title, _id, price,email,message,reportedItem }: productsProps)  => 
        <div className="flex flex-col items-center h-72 w-full bg-white border rounded-lg shadow-md md:flex-row  hover:bg-gray-100 my-6 ">
                
        <img  className="object-cover w-5/12  h-72 " src={image} alt=""/>
        <div className=" p-4 w-8/12 h-full relative ">
                <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">{reportedItem.title}</h5>
         <p className="mb-3 font-medium text-gray-700 dark:text-gray-400">Reporter Email: {email }</p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"><span className="font-bold">Objection:</span> {message?.slice(0,180)  }...</p>
              
                        <div className="absolute bottom-1 ">
                        <button onClick={()=>handleRemove(_id)} className="a btn bg-red-600 p-2 rounded-md w-32 text-white ">Remove</button>
                        <button className="btn bg-blue-600 p-2 rounded-md w-32 text-white ml-4">Keep</button>
                       </div>
                    </div>
                   
    </div>
    )
    return ( 
      <div className="lg:w-10/12 md:w-10/12 sm:w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-3 ">
     {products}
     
      </div>
  )
}

export default ReportedProducts