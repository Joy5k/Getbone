import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { AuthContext } from "../../../context/Authprovider";
import swal from "sweetalert";

const AddProduct = () => {
  const { user } = useContext(AuthContext);
  const [addproduct,setAddproduct] =useState({})
  
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const fieldName = event.target.name;
    setAddproduct({ ...addproduct, [fieldName]: event.target.value });
    

  };
  const handleOption = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const fieldName = event.target.name;
    setAddproduct({ ...addproduct, [fieldName]: event.target.value });
}
  
  const handleAddProduct = (event: React.MouseEvent<HTMLFormElement>) => {
    event.preventDefault();
    // const current = new Date();
    // const time = current.toLocaleDateString("en-BD");
    // setAddproduct({...addproduct,['publishDate']:time })
    setAddproduct({...addproduct,['email']:user.email })
    console.log(addproduct)
    fetch('https://getbone-server-joy5k.vercel.app/addProduct', {
      method:'PUT',
      headers: {
      'content-type':'application/json'
      },
      body:JSON.stringify(addproduct)
    
    })
      .then(response => response.json())
      .then(data => {
        if (data.acknowledged===true) {
          swal(
              'Successfully Added',
              "check your My product route",
              "success"
            );
      }    
      })
     
  
  }
  return (
    <div className="lg:w-10/12 md:w-10/12 sm:w-full mx-auto bg-white p-4">
 
<form onSubmit={handleAddProduct}>
        <div className="grid gap-6 mb-6 md:grid-cols-2 ">
        <div>
          <label htmlFor="visitors" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select Product Category</label>
          <select  onChange={handleOption} name='category' id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Doe" required >
  <option  >Select</option>
  <option   value="Desktop">Desktop</option>
            <option value="Laptop">Laptop</option>
            <option value="Phone">Phone</option>
            </select>
            </div>
        <div>
            <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product's Title</label>
            <input onChange={handleChange} type="text" id="first_name" name="title" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Product model/name" required />
        </div>
        <div>
            <label htmlFor="last_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Img field</label>
            <input onChange={handleChange} type="text" id="last_name" name="image" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="https://" required />
          </div>
        <div>
            <label htmlFor="last_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price</label>
            <input onChange={handleChange} type="number" id="last_name" name="price" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="5000" required />
          </div>
        
        <div>
            <label htmlFor="company" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Guarantee <span className="text-gray-500 text-sm">(months)</span></label>
            <input onChange={handleChange} type="text" id="company" name="guarantee" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="6 months" required />
        </div>  
        <div>
            <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Warranty <span className="text-gray-500 text-sm">(months)</span></label>
            <input onChange={handleChange} type="number" id="phone" name="warranty" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="6 months"  required />
        </div>
        <div>
            <label htmlFor="website" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Quantity</label>
            <input onChange={handleChange} type="number" id="website"  name="quantity" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="10" required />
        </div>
        <div>
            <label htmlFor="visitors" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
            <input onChange={handleChange} type="text" id="visitors" name="description" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="The product is ..." required />
          </div>
        
    </div>
    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add Product</button>
</form>

    </div>
  );
};

export default AddProduct;
