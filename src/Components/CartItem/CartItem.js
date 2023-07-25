"use client";

import { Text } from "@mantine/core";
import Image from "next/image";
// import { Image } from "@mantine/core";
import React, { useContext, useState } from "react";
import { FaTrash } from "react-icons/fa";
import { ApiContext } from "../../Context/DataContext";

const CartItem = ({ item, removeFromCart, handleIncrement, handleDecrement }) => {
  const { cover, name, convert_price, _id, quantity } = item;

  const updatedPrice = convert_price * quantity;

  return (
    <div>
      <div class="justify-between mb-4 mt-4 rounded-lg bg-white p-3  shadow-md sm:flex sm:justify-start">
        {/* <Image src={cover} alt="Landscape picture" width={800} height={500} /> */}
        <img src={cover} alt={"image"} srcset="food image" className="h-12 w-12 rounded" />
        <div class="sm:ml-4 sm:flex sm:w-full sm:justify-between">
          <div class="mt-5 sm:mt-0">
            <h2 class="text-sm font-semibold text-primary">{name}</h2>
            <p class="mt-1 text-sm font-semibold text-error">
              Total : <span className="text-error">{updatedPrice}</span> $
            </p>
            {/* <p class="mt-1 text-sm font-semibold text-error">
              Total : <span className="text-error">{getCartTotal()}</span> $
            </p> */}
          </div>
          <div class="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
            <div class="flex justify-between items-center   border-gray-100">
              {/* <div className="mr-5"> */}
              <span
                onClick={() => handleDecrement(_id)}
                class="cursor-pointer rounded-l bg-[#FFA8A8] py-1 px-3.5 duration-700 hover:bg-[#FF6B6B] hover:text-[#FFFFFF"
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
                onClick={() => handleIncrement(_id)}
                class="cursor-pointer rounded-r bg-[#FFA8A8] py-1 px-3 mr-5 duration-700 hover:bg-[#FF6B6B] hover:text-[#FFFFFF]"
              >
                {" "}
                +{" "}
              </span>
              {/* </div> */}
              <span onClick={() => removeFromCart(item)}>
                <FaTrash className="text-[#FFA8A8] hover:text-[#FF6B6B] transition duration-700 cursor-pointer" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
