import React from 'react'
import potd from './potd.jpg'
import cartImg from './image.jpg'
export default function CartItem() {
    return (
        <div className="flex flex-row h-auto max-h-36 items-center my-3">
            {/* <!--ITEM DETAILS--> */}
            <div className="w-2/3">
                <div className="text-lg font-bold capitalize text-black">samurai king resting </div>
                    <div className="flex flex-row items-center text-gray-600 text-2xl">
                        <span className="text-lg"> <i className="fas fa-dollar-sign"></i></span>10000.00</div>
                    </div>
                            {/* <!--ITEM IMAGE--> */}
                    <div className="w-1/3">
                        <div className="w-28 h-32">
                        <img src={potd} alt="" className="w-full" />
                        </div>
                        
                    </div>
                </div>
    )
}
