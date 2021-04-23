import React from 'react'

export default function NoCartItem() {
    return (
        <div className="flex flex-row h-24 items-center mb-2">
            {/* <!--ITEM DETAILS--> */}
            <div className="w-2/3">
                <div className="text-lg font-bold capitalize mr-2">Nothing in cart</div>
                    <div className="flex flex-row items-center mt-2 h-4 w-56 mr-2 bg-gray-100 text-2xl">
                        <span className="material-icons-outlined"></span>
                        
                    </div>
                </div>
                    {/* <!--ITEM IMAGE--> */}
                <div className="w-1/3">
                    <div className="mr-5">
                        <div  className="bg-gray-100 w-28 h-20 pr-5" />
                    </div>
                    
                </div>
            </div>

    )
}
