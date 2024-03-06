const OrderSummary = () => {
  return (
    <div>
      <div className="bg-gray-100 py-10 px-6 w-full">
        <h3 className=" text-2xl font-semibold text-left bg-[#E9E9E9] p-2 mb-5">
          Order Summary
        </h3>
        <div className="flex justify-between ">
          <p className="font-semibold">Sub-Total</p>
          <p>{"amount"}</p>
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
          <p className="font-bold text-xl">120</p>
        </div>
        <button className="text-md text center w-full mt-3 bg-black hover:bg-slate-500 p-2 text-white">
          PROCEED TO CHECKOUT
        </button>
      </div>
    </div>
  );
};

export default OrderSummary;
