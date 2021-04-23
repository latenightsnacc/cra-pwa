import React from 'react'
import Badge from '../badge/Badge'
import Cart from '../cart/Cart'

export default function Navbar() {
    return (
        <nav>
            <div className="container border-b-4 border-b-gray-300 relative">
                <div className="flex flex-row justify-between py-3 ">
                    <a href="index.html">
                        <p>BEJAMAS</p>
                    </a>
                    <button className="relative">
                        <span className="material-icons-outlined">
                            shopping_cart
                            </span>
                            <Badge />
                            
                    </button>
                </div>
                <Cart />
            </div>
        </nav>
    )
}
