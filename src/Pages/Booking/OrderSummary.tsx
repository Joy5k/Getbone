import {useState } from "react";

const OrderSummary = ({ price, payload }: any) => {
  const [backendCoupon,setBackendCoupon] =useState<number>(0)
  const [coupon, setCoupon] = useState<string | number>()
  let totalPrice
    
  console.log(payload);
  const handleCoupon = async() => {
    const res = await fetch(`https://getbone-server-joy5k.vercel.app/coupon/${coupon}`)
    const data = await res.json()
    setBackendCoupon( data)
    if (coupon === backendCoupon) {
      console.log('hurry this is in if condition');
      // go to the checkout route and do it
     totalPrice=price-backendCoupon
    }
  }
  return (
    <div>
      <div className="bg-gray-100 py-10 px-6 w-full">
        <h3 className=" text-2xl font-semibold text-left bg-[#E9E9E9] p-2 mb-5">
          Order Summary
        </h3>
        <div className="flex justify-between ">
          <p className="font-semibold">Sub-Total</p>
          <p>{totalPrice}</p>
        </div>
        <div className="flex ">
          <input onChange={(e)=> setCoupon(e.target.value.toUpperCase())
} className="h-8 w-fit border-gray-300 rounded-l-md" type="text" placeholder="Coupon code" name="coupon" />
          <button onClick={handleCoupon} className="h-8 w-fit rounded-r-md pb-1 text-lg font-semibold text-center bg-blue-200  px-2 rounded-sm text-white hover:bg-blue-700 ">Apply</button>
        </div>
        <div className="flex justify-between ">
          <p className="font-semibold">Shipping Address</p>
          <p className="">patuakhali, Bangladesh"</p>
        </div>
        <div className="flex justify-between ">
          <p className="font-semibold">Shipping Cost</p>
          <p>120</p>
        </div>
        <div className="flex justify-between ">
          <p className="font-semibold">Total</p>
          <p className="font-bold text-xl">{totalPrice&&totalPrice+120}</p>
        </div>
        <button className="text-md text center w-full mt-3 bg-black hover:bg-slate-500 p-2 text-white">
          PROCEED TO CHECKOUT
        </button>
      </div>
    </div>
  );
};

export default OrderSummary;
