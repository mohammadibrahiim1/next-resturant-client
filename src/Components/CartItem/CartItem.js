"use client";
import { Text } from "@mantine/core";
import Image from "next/image";
// import { Image } from "@mantine/core";
import React, { useContext, useState } from "react";
import { FaTrash } from "react-icons/fa";
// import { ApiContext } from "../../Context/DataContext";
import { useDispatch } from "react-redux";

import { removeFromCart } from "../../redux/action/action";

const CartItem = ({ item, handleIncrement, handleDecrement }) => {
  const { cover, name, convert_price, _id, quantity } = item;

  const updatedPrice = convert_price * quantity;

  const dispatch = useDispatch();

  return (
    <div>
      <div className="justify-between mb-4 mt-4 rounded-lg bg-white p-3  shadow-md sm:flex sm:justify-start">
        {/* <Image src={cover} alt="Landscape picture" width={800} height={500} /> */}
        <img src={cover} alt="image" srcSet="food image" className="h-12 w-12 rounded" />
        <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
          <div className="mt-5 sm:mt-0">
            <h2 className="text-sm font-semibold text-primary">{name}</h2>
            <p className="mt-1 text-sm font-semibold text-error">
              Total : <span className="text-error">{updatedPrice}</span> $
            </p>
            {/* <p className="mt-1 text-sm font-semibold text-error">
              Total : <span className="text-error">{getCartTotal()}</span> $
            </p> */}
          </div>
          <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
            <div className="flex justify-between items-center   border-gray-100">
              {/* <div className="mr-5"> */}
              <span
                onClick={() => handleDecrement(_id)}
                className="cursor-pointer rounded-l bg-[#FFA8A8] py-1 px-3.5 duration-700 hover:bg-[#FF6B6B] hover:text-[#FFFFFF"
              >
                {" "}
                -{" "}
              </span>

              <input
                className="h-8 w-8 border bg-white text-center text-xs outline-none"
                type="text"
                value={quantity}
                // min="1"
              />
              <span
                onClick={() => handleIncrement(_id)}
                className="cursor-pointer rounded-r bg-[#FFA8A8] py-1 px-3 mr-5 duration-700 hover:bg-[#FF6B6B] hover:text-[#FFFFFF]"
              >
                {" "}
                +{" "}
              </span>
              {/* </div> */}
              <span onClick={() => dispatch(removeFromCart(item))}>
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
