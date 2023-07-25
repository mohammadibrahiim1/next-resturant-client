"use client";

import { Text } from "@mantine/core";
import Image from "next/image";
// import { Image } from "@mantine/core";
import React, { useContext, useState } from "react";
import { FaTrash } from "react-icons/fa";
import { ApiContext } from "../../Context/DataContext";

const CartItem = ({ item, getCartTotal, removeFromCart, increaseQuantity, decreaseQuantity }) => {
  // const [productQuantity, setProductQuantity] = useState(1);

  // const increaseQuantity = () => {
  //   setProductQuantity(productQuantity + 1);
  // };

  // const decreaseQuantity = () => {
  //   if (productQuantity > 1) {
  //     setProductQuantity(productQuantity - 1);
  //   }
  // };
  // let total = 0;
  // let quantity = 0;
  const { cover, name, convert_price, _id, quantity = 0 } = item;
  // const itemTotalPrice = price * productQuantity;

  // localStorage.setItem("Price", newPrice);

  return (
    <div>
      <div class="justify-between mb-4 mt-4 rounded-lg bg-white p-3  shadow-md sm:flex sm:justify-start">
        <img src={cover} alt="image" srcset="" className="h-12 w-12 rounded" />
        <div class="sm:ml-4 sm:flex sm:w-full sm:justify-between">
          <div class="mt-5 sm:mt-0">
            <h2 class="text-sm font-semibold text-primary">{name}</h2>
            <p class="mt-1 text-sm font-semibold text-error">
              Total : <span className="text-error">{convert_price}</span> $
            </p>
            <p class="mt-1 text-sm font-semibold text-error">
              Total : <span className="text-error">{getCartTotal()}</span> $
            </p>
          </div>
          <div class="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
            <div class="flex justify-between items-center   border-gray-100">
              {/* <div className="mr-5"> */}
              <span
                onClick={() => decreaseQuantity(item)}
                class="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"
              >
                {" "}
                -{" "}
              </span>

              <input
                class="h-8 w-8 border bg-white text-center text-xs outline-none"
                type="text"
                value={quantity}
                // min="1"
              />
              <span
                onClick={() => increaseQuantity(item)}
                class="cursor-pointer rounded-r bg-gray-100 py-1 px-3 mr-5 duration-100 hover:bg-blue-500 hover:text-blue-50"
              >
                {" "}
                +{" "}
              </span>
              {/* </div> */}
              <span onClick={() => removeFromCart(item)}>
                <FaTrash className="text-error cursor-pointer" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
