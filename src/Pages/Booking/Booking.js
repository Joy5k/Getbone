
import React,{useState} from "react";
import ShareButton from "../../components/ShareButton";

const Wishlist = () => {
    const [quantity, setQuantity] = useState(1)
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
        <div className='lg:w-10/12 md:w-10/12 sm:w-full mx-auto '>
          
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
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="p-4 w-32">
                    <img src="/docs/images/products/apple-watch.png" alt="Apple Watch" />
                </td>
                <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white">
                    Apple Watch
                </td>
                <td className="py-4 px-6">
                    <div className="flex items-center space-x-3">
                        <button onClick={removeQuentity} className="inline-flex items-center p-1 text-sm font-medium text-gray-500 bg-white rounded-full border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                            <span className="sr-only">Quantity button</span>
                            <svg className="w-4 h-4" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                        </button>
                        <div>
                            <input type="number" id="first_product" className="bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={quantity} required />
                        </div>
                        <button onClick={addQuantity} className="inline-flex items-center p-1 text-sm font-medium text-gray-500 bg-white rounded-full border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                            <span className="sr-only">Quantity button</span>
                            <svg className="w-4 h-4" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
                        </button>
                    </div>
                </td>
                <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white">
                 <input type="number" className="border-none" value={price} />
                </td>
                <td className="py-4 px-6">
                    <button className="font-medium btn bg-red-700  text-white p-2 rounded-md">Remove</button>
                </td>
                <td className="py-4 px-6">
                    <button className="font-medium text-blue-600 btn hover:underline"><ShareButton>Add to cart</ShareButton></button>
                </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="p-4 w-32">
                    <img src="/docs/images/products/imac.png" alt="Apple Imac"/>
                </td>
                <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white">
                    Imac 27"
                </td>
                <td className="py-4 px-6">
                    <div className="flex items-center space-x-3">
                        <button className="inline-flex items-center p-1 text-sm font-medium text-gray-500 bg-white rounded-full border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                            <span className="sr-only">Quantity button</span>
                            <svg className="w-4 h-4" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                        </button>
                        <div>
                            <input type="number" id="second_product" className="bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="1" required />
                        </div>
                        <button className="inline-flex items-center p-1 text-sm font-medium text-gray-500 bg-white rounded-full border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                            <span className="sr-only">Quantity button</span>
                            <svg className="w-4 h-4" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
                        </button>
                    </div>
                </td>
                <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white">
                    $2499
                </td>
                <td className="py-4 px-6">
                    <a href="#" className="font-medium text-red-600 dark:text-red-500 hover:underline">Remove</a>
                </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="p-4 w-32">
                    <img src="/docs/images/products/iphone-12.png" alt="Iphone 12"/>
                </td>
                <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white">
                    Iphone 12 
                </td>
                <td className="py-4 px-6">
                    <div className="flex items-center space-x-3">
                        <button className="inline-flex items-center p-1 text-sm font-medium text-gray-500 bg-white rounded-full border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                            <span className="sr-only">Quantity button</span>
                            <svg className="w-4 h-4" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                        </button>
                        <div>
                            <input type="number" id="third_product" className="bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="1" required/>
                        </div>
                        <button className="inline-flex items-center p-1 text-sm font-medium text-gray-500 bg-white rounded-full border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                            <span className="sr-only">Quantity button</span>
                            <svg className="w-4 h-4" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
                        </button>
                    </div>
                </td>
                <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white">
                    $999
                </td>
                <td className="py-4 px-6">
                    <a href="#" className="font-medium text-red-600 dark:text-red-500 hover:underline">Remove</a>
                </td>
            </tr>
        </tbody>
    </table>
</div>

    </div>
  )
}

export default Wishlist