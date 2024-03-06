import React, { useState } from "react";
import { AuthContext } from "../../context/Authprovider";
import { useContext } from "react";
import Spinner from "../../components/Spinner";
import { useQuery } from "@tanstack/react-query";
import { ProductStatus } from "../../components/ProductStatus";
import { Link } from "react-router-dom";
import OrderSummary from "./OrderSummary";

type userProps = {
  url: string;
  title: string;
  _id: string;
  image: string;
  price: number;
  guarantee: any;
  warranty: any;
  quantity: number;
  description: any;
  paid: boolean;
  productId: string;
};

const Booking = () => {
  const { user } = useContext(AuthContext);
  // const [quantity, setQuantity] = useState(1)
  // const [price, setPrice] = useState(500)
  // const [loader, setLoader] = useState(false);
  const {
    data: booked = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["booked"],
    queryFn: async () => {
      const res = await fetch(
        `https://getbone-server-joy5k.vercel.app/addData?email=${user?.email}`,
        {
          headers: {
            authorization: `bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );
      const data = await res.json();
      return data;
    },
  });
  const { data: booke = [] } = useQuery({
    queryKey: ["booked"],
    queryFn: async () => {
      const res = await fetch(
        `https://getbone-server-joy5k.vercel.app/addData?email=${user?.email}`,
        {
          headers: {
            authorization: `bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );
      const data = await res.json();
      return data;
    },
  });

  const handleRemove = (_id: string) => {
    fetch(`https://getbone-server-joy5k.vercel.app/addData/${_id}`, {
      method: "DELETE",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        refetch();
      });
    fetch(`https://getbone-server-joy5k.vercel.app/deleteData/${_id}`, {
      method: "DELETE",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        refetch();
      });
  };
  if (isLoading) {
    <Spinner></Spinner>;
  }
  const Items = booked.map(
    ({
      _id,
      title,
      image,
      price,
      paid,
      productId,
      description,
      quantity,
    }: userProps) => (
      <tr
        key={_id}
        className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
      >
        <td className="p-4 w-32">
          <img src={image} alt="Product" />
        </td>
        <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white">
          {title}
        </td>
        <td className="py-4 px-6">
          <div className="flex items-center space-x-3">
            <div>
              <input
                type="number"
                id="first_product"
                className="bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                value={quantity}
                disabled
              />
            </div>
          </div>
        </td>
        <td className="font-semibold text-gray-900 dark:text-white w-20">
          <input
            type="number"
            className="border-none -mr-24"
            value={price * quantity}
            disabled
          />
        </td>
        <td className="py-4 ">
          <button
            onClick={() => handleRemove(_id)}
            className="font-medium btn
            bg-gradient-to-l from-orange-500 via-rose-600 to-red-500 text-white p-2 rounded-md"
          >
            Remove
          </button>
        </td>
        <td className="">
          {paid ? (
            <>
              {/* <Link to='/' className="text-md font-bold">Paid</Link> */}
              <Link
                className="underline hover:no-underline w-full"
                to={`/review/${productId}`}
              >
                <button
                  className="
               bg-gradient-to-bl from-lime-400 via-green-600 to-teal-700
               text-center text-white font-semibold  p-2 rounded-md"
                >
                  Comment
                </button>
              </Link>
            </>
          ) : (
            <Link to={`/dashboard/payment/${_id}`}>
              <button
                className=" text-white 
              bg-gradient-to-bl from-slate-900 via-purple-900 to-slate-900
              hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-md  p-2 text-sm"
              >
                Buy Now
              </button>
            </Link>
          )}
        </td>
      </tr>
    )
  );
  return (
    <div className=" flex  flex-col lg:flex-row justify-center gap-0 lg:w-[1160px] md:bg-[1000px] sm:w-full mx-auto">
      <div className="lg:w-fit md:w-fit sm:w-fit min-h-screen mx-auto mt-10 ">
        {isLoading ? (
          <>
            <Spinner></Spinner>
          </>
        ) : (
          <>
            {booked.length > 0 ? (
              <div className="">
                <div className="overflow-x-auto relative shadow-md  ">
                  <table className="w-fit text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead
                      className="text-xs
                    bg-gradient-to-bl from-rose-100 to-teal-100
                    text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
                    >
                      <tr>
                        <th scope="col" className="py-3 px-6">
                          <span>Image</span>
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
                          Buy-Now
                        </th>
                      </tr>
                    </thead>

                    <tbody>{Items}</tbody>
                  </table>
                </div>
              </div>
            ) : (
              <ProductStatus></ProductStatus>
            )}
          </>
        )}
      </div>
      <div className="mx-auto mt-10 lg:w-96 md:full sm:w-full">
        <OrderSummary></OrderSummary>
      </div>
    </div>
  );
};

export default Booking;
