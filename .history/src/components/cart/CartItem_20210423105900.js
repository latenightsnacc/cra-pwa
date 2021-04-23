import React from 'react'

export default function CartItem() {
    return (
        <div className="flex flex-row h-24 items-center mb-2">
            {/* <!--ITEM DETAILS--> */}
            <div className="w-2/3">
                <div className="text-lg font-bold capitalize text-black">samurai king resting </div>
                    <div className="flex flex-row items-center text-gray-600 text-2xl"><span className="material-icons-outlined">attach_money</span>10000.00</div>
                    </div>
                            {/* <!--ITEM IMAGE--> */}
                    <div className="w-1/3">
                        <img src={potd} alt="" className="w-32" />
                    </div>
                </div>
    )
}
