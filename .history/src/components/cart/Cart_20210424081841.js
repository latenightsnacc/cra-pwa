import React from 'react'
import CartItem from './CartItem'
import NoCartItem from './NoCartItem'
import LoadingCartItem from './LoadingCartItem'


export default function Cart() {

    return (
        <div className="absolute z-50 -bottom-30 right-0 ">
                    {/* <!--CART MODAL--> */}
            <div id="cart-modal" className="opacity-100 h-auto bg-white w-96 border-4 border-gray-100 p-3">
                        {/* <!--CLOSE BUTTON--> */}
                <div className="flex flex-row justify-end items-center">
                    <button className="material-icons-outlined">close</button>
                </div>
                        {/* <!--CART ITEM--> */}
                        <NoCartItem />
                        <LoadingCartItem />
                        <CartItem />
                        {/* <!--CONTROL BUTTONS--> */}
                <div className="bg-white w-full h-28 z-50 flex flex-row items-center justify-center border-t-4 border-t-gray-300 p-1">
                    <button className="w-80 h-16 bg-white border-2 border-black text-2xl font-medium text-black uppercase">clear</button>        
                </div>
                {/* <!--END OF CART ITEM--> */}
                        
            </div>
        </div>
    )
}
