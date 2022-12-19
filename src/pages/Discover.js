import { Link } from "react-router-dom";
import Header from "../components/Header";
import FooterD from "../components/FooterD";
import importScript from "../api/publisher";
import { useState } from "react";
import BuyButton from "../components/BuyButton";
import data from "../data/data.json"


const Discover = () => {
  const arr = data.buybutton
  return (
    <div className="grid justify-center ">
      <Header />

      <div className="flex mt-24 flex-col md:flex-row md:w-[80em] rounded-lg bg-white shadow-lg">
        <img className=" p-4 w-full h-60 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg" src="https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.jpg" alt="" />
        <div className=" flex flex-col justify-start w-[40em] ">
          <h5 className="text-gray-900 text-xl font-medium mb-2">Balanced Box</h5>
          <p className="text-gray-700 text-base mb-4">
            It’s a perfect blend of different asset classe to give you a stable and balanced returns in any market condition.    </p>
          <img className=" p-6 w-40 h-24 md:h-32 object-cover md:w-56 rounded-t-lg md:rounded-none md:rounded-l-lg" src="../meter.svg" alt="" />
        </div>
        <div className="m-auto justify-center">

          <BuyButton
            onClick={importScript()}
            data_kite={arr[0]["data_kite"]}
            data_exchange={arr[0]["data_exchange"]}
            data_tradingsymbol={arr[0]["data_tradingsymbol"]}
            data_transaction_type={arr[0]["data_transaction_type"]}
            data_quantity={arr[0]["data_quantity"]}
            data_order_type={arr[0]["data_order_type"]}
            data_price={arr[0]["data_price"]}
          />

        </div>
      </div>
      <div className="flex mt-24 flex-col md:flex-row md:w-[80em] rounded-lg bg-white shadow-lg">
        <img className=" p-4 w-full h-60 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg" src="https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.jpg" alt="" />
        <div className=" flex flex-col justify-start  w-[40em]">
          <h5 className="text-gray-900 text-xl font-medium mb-2">Passive Income</h5>
          <p className="text-gray-700 text-base mb-4">

            This Finbox consist of stocks and asset classes that provide consistent dividends.          </p>
          <img className=" p-6 w-40 h-24 md:h-32 object-cover md:w-56 rounded-t-lg md:rounded-none md:rounded-l-lg" src="../meter.svg" alt="" />

        </div>
        <div className="m-auto justify-center">

          <BuyButton
            onClick={importScript()}
            data_kite={arr[0]["data_kite"]}
            data_exchange={arr[0]["data_exchange"]}
            data_tradingsymbol={arr[0]["data_tradingsymbol"]}
            data_transaction_type={arr[0]["data_transaction_type"]}
            data_quantity={arr[0]["data_quantity"]}
            data_order_type={arr[0]["data_order_type"]}
            data_price={arr[0]["data_price"]}
          />

        </div>
      </div>
      <div className="flex mt-24 flex-col md:flex-row md:w-[80em] rounded-lg bg-white shadow-lg">
        <img className=" p-4 w-full h-60 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg" src="https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.jpg" alt="" />
        <div className=" flex flex-col justify-start  w-[40em]">
          <h5 className="text-gray-900 text-xl font-medium mb-2">Real Estate is the king</h5>
          <p className="text-gray-700 text-base mb-4">
            It will be consisting of all the top REITs and InvITs in the market.          </p>
          <img className=" p-6 w-40 h-24 md:h-32 object-cover md:w-56 rounded-t-lg md:rounded-none md:rounded-l-lg" src="../meter.svg" alt="" />

        </div>

      </div>
      <div className="flex mt-24 flex-col md:flex-row md:w-[80em] rounded-lg bg-white shadow-lg">
        <img className=" p-4 w-full h-60 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg" src="https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.jpg" alt="" />
        <div className=" flex flex-col justify-start  w-[40em]">
          <h5 className="text-gray-900 text-xl font-medium mb-2">Coins of the future</h5>
          <p className="text-gray-700 text-base mb-4">
            In this box will be investing in most stable cryptocurrency and project catering the future          </p>
          <img className=" p-6 w-40 h-24 md:h-32 object-cover md:w-56 rounded-t-lg md:rounded-none md:rounded-l-lg" src="../meter.svg" alt="" />

        </div>
        <div className="m-auto justify-center">

          <BuyButton
            onClick={importScript()}
            data_kite={arr[0]["data_kite"]}
            data_exchange={arr[0]["data_exchange"]}
            data_tradingsymbol={arr[0]["data_tradingsymbol"]}
            data_transaction_type={arr[0]["data_transaction_type"]}
            data_quantity={arr[0]["data_quantity"]}
            data_order_type={arr[0]["data_order_type"]}
            data_price={arr[0]["data_price"]}
          />

        </div>
      </div>
      <div className="flex mt-24 flex-col md:flex-row md:w-[80em] rounded-lg bg-white shadow-lg">
        <img className=" p-4 w-full h-60 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg" src="https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.jpg" alt="" />
        <div className=" flex flex-col justify-start  w-[40em]">
          <h5 className="text-gray-900 text-xl font-medium mb-2">Bond Rules</h5>
          <p className="text-gray-700 text-base mb-4">
            It will perfect blend for those who like sability like FD and returns similar to stocks          </p>
          <img className=" p-6 w-40 h-24 md:h-32 object-cover md:w-56 rounded-t-lg md:rounded-none md:rounded-l-lg" src="../meter.svg" alt="" />

        </div>
        <div className="m-auto justify-center">

          <BuyButton
            onClick={importScript()}
            data_kite={arr[0]["data_kite"]}
            data_exchange={arr[0]["data_exchange"]}
            data_tradingsymbol={arr[0]["data_tradingsymbol"]}
            data_transaction_type={arr[0]["data_transaction_type"]}
            data_quantity={arr[0]["data_quantity"]}
            data_order_type={arr[0]["data_order_type"]}
            data_price={arr[0]["data_price"]}
          />

        </div>
      </div>
      <div className="flex mt-24 flex-col md:flex-row md:w-[80em] rounded-lg bg-white shadow-lg">
        <img className=" p-4 w-full h-60 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg" src="https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.jpg" alt="" />
        <div className=" flex flex-col justify-start  w-[40em]">
          <h5 className="text-gray-900 text-xl font-medium mb-2">Momentum</h5>
          <p className="text-gray-700 text-base mb-4">
            This Finbox consist asset that performed very good in the past and will perform good in the future as well        </p>
          <img className=" p-6 w-40 h-24 md:h-32 object-cover md:w-56 rounded-t-lg md:rounded-none md:rounded-l-lg" src="../meter.svg" alt="" />

        </div>
        <div className="m-auto justify-center">

          <BuyButton
            onClick={importScript()}
            data_kite={arr[0]["data_kite"]}
            data_exchange={arr[0]["data_exchange"]}
            data_tradingsymbol={arr[0]["data_tradingsymbol"]}
            data_transaction_type={arr[0]["data_transaction_type"]}
            data_quantity={arr[0]["data_quantity"]}
            data_order_type={arr[0]["data_order_type"]}
            data_price={arr[0]["data_price"]}
          />

        </div>
      </div>
      <FooterD />
    </div >
  );
};

export default Discover;
