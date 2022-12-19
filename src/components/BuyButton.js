import React from 'react'
import importScript from '../api/publisher'
import { useState } from 'react';
const BuyButton = (props) => {

    const [buy, setBuy] = useState(false);
    return (
        <div>
            <button onClick={() => {
                setBuy(true);
            }} className={`bg-indigo-100  h-8  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full ${buy ? "hidden" : "block"}`} >
                Buy
            </button>
            <button className={`bg-indigo-100 mt-2  h-8 m-auto justify-center hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full ${buy ? "block" : "hidden"}`}
                onClick={() => {
                    importScript()
                    setBuy(true);
                }}
                data-kite={props.data_kite}
                data-exchange={props.data_exchange}
                data-tradingsymbol={props.data_tradingsymbol}
                data-transaction_type={props.data_transaction_type}
                data-quantity={props.data_quantity}
                data-order_type={props.data_order_type}
                data-price={props.data_price}
            >
                Buy RELIANCE
            </button>
            <button
                className={`bg-indigo-100 mt-2  h-8 m-auto justify-center hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full ${buy ? "block" : "hidden"}`}
            >
                Buy Crpto
            </button>

            <button onClick={() => {
                setBuy(false);
            }} className={`bg-red-200 mt-2 h-8 m-auto justify-center hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full ${buy ? "block" : "hidden"}`} >
                Go Back
            </button>
        </div>

    )
}

export default BuyButton