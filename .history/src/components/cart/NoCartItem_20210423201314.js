import React from 'react'
import Button from '../button/Button'

export default function NoCartItem() {
    return (
        <div className="flex flex-row h-24  items-center mb-2">
            {/* <!--ITEM DETAILS--> */}
            <div className="w-full flex flex-col items-center justify-center ">
                <div className="text-lg font-semibold text-gray-300 capitalize mt-2 mr-2">Nothing in cart</div>
                    <Button label="add to cart" />
                </div>
            </div>

    )
}
