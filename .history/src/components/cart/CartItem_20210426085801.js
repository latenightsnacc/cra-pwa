import React from 'react'
import potd from './potd.jpg'
import cartImg from './image.jpg'
export default function CartItem() {
    return (
        <div className="flex flex-row h-auto items-center mb-2">
            {/* <!--ITEM DETAILS--> */}
            <div className="w-2/3">
                <div className="text-lg font-bold capitalize text-black">samurai king resting </div>
                    <div className="flex flex-row items-center text-gray-600 text-2xl">
                        <span className="text-lg"> <i className="fas fa-dollar-sign"></i></span>10000.00</div>
                    </div>
                            {/* <!--ITEM IMAGE--> */}
                    <div className="w-1/3">
                        <div className="w-full">
                        <img src={cartImg} alt="" className="w-full" />
                        </div>
                        
                    </div>
                </div>
    )
}
