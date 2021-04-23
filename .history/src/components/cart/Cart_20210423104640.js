import React from 'react'

export default function Cart() {
    return (
        <div className="absolute z-50 -bottom-30 right-0 ">
                    {/* <!--CART MODAL--> */}
            <div id="cart-modal" className="opacity-100 h-auto bg-white w-full border-4 border-gray-100 p-3">
                        {/* <!--CLOSE BUTTON--> */}
                <div className="flex flex-row justify-end items-center">
                    <span className="material-icons-outlined">close</span>
                </div>
                        {/* <!--CART ITEM--> */}
                <div className="flex flex-row h-24 items-center mb-2">
                            {/* <!--ITEM DETAILS--> */}
                    <div className="w-2/3">
                        <div className="text-lg font-bold capitalize text-black">samurai king resting </div>
                        <div className="flex flex-row items-center text-gray-600 text-2xl"><span className="material-icons-outlined">attach_money</span>10000.00</div>
                    </div>
                            {/* <!--ITEM IMAGE--> */}
                    <div className="w-1/3">
                        <img src="/potd.jpg" alt="" className="w-32" />
                    </div>
                </div>
                        {/* <!--CONTROL BUTTONS--> */}
                <div className="bg-white w-full h-28 z-50 flex flex-row items-center justify-center border-t-4 border-t-gray-300 p-1">
                    <button className="w-80 h-16 bg-white border-2 border-black text-2xl font-medium text-black uppercase">clear</button>        
                </div>
                {/* <!--END OF CART ITEM--> */}
                        
            </div>
        </div>
    )
}
