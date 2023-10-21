import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { dataApi } from "../Store/Slice/dataSlice";
import LipstickCard from "../Cards/LipstickCard";
import {
  addToCart,
  decrement,
  decrementCart,
  increment,
} from "../Store/Slice/counterSlice";

function Banner() {
  const dispatch = useDispatch();

  const { dataList } = useSelector((state) => state.data);
  console.log("datalist===", dataList);

  

    const handleIncrement=(cartItem)=>{
      dispatch(increment(cartItem));
    }

    const handleDecrement = (cartItem) => {
      dispatch(decrement(cartItem));
    };

  useEffect(() => {
    dispatch(dataApi());
  }, []);

  return (
    <>
      <div className="flex justify-center">
        <h1 className="font-extrabold text-2xl mb-7">Products</h1>
      </div>
      <div className="flex justify-around">
        <button className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
          Lipstic
        </button>
        <button className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
          Liqiud
        </button>
        <button className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
          Cream
        </button>
        <button className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
          Powder
        </button>
      </div>
      <div className="flex flex-wrap justify-center">
        {dataList.map((item) => (
          <div
            key={item.id}
            className="card m-2 p-4 w-1/5 shadow-2xl rounded-lg"
          >
            <img src={item.image_link} alt={item.name} className="w-36 h-36" />
            <div className="card-content mt-2">
              <div className="text-lg font-bold">{item.name}</div>
              <div>{item.category}</div>
              <div>ID: {item.id}</div>
              <div>
                <button
                    onClick={() => handleDecrement(item.menu_category)}
                //   onClick={decrementQuantity}
                  className="bg-blue-500 text-white p-1.5 mr-4 rounded-lg"
                >
                  -
                </button>
                0
                <button
                    onClick={() => handleIncrement(item.menu_category)}
                //   onClick={incrementQuantity}
                  className="bg-red-500 text-white p-1.5 ml-4 rounded-lg"
                >
                  +
                </button>
              </div>
              <button className="bg-green-700 text-white p-2 rounded-md mt-3">
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </div>
      {/* <LipstickCard/> */}
    </>
  );
}

export default Banner;
