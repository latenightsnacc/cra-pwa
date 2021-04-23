import React from 'react'
import Button from '../button/Button'

export default function NoCartItem() {
    return (
        <div className="flex flex-row h-24 items-center mb-2">
            {/* <!--ITEM DETAILS--> */}
            <div className="w-full">
                <div className="text-lg font-light capitalize mr-2">Nothing in cart</div>
                    <Button />
                </div>
            </div>

    )
}
