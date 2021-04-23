import React from 'react'
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
                            <div className="absolute bottom-0 top-7 left-4">
                                <span className=" opacity-100 w-1.5 h-1 text-xs p-1 bg-black text-white rounded-sm">0</span>
                            </div>
                            
                    </button>
                </div>
                <Cart />
            </div>
        </nav>
    )
}
