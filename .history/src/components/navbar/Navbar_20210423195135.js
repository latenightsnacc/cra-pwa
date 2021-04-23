import React from 'react'
import Badge from '../badge/Badge'
import Cart from '../cart/Cart'
import logo from './logo.png'

export default function Navbar() {
    return (
        <nav>
            <div className="container border-b-4 border-b-gray-300 relative">
                <div className="flex flex-row justify-between py-3 ">
                    <a href="index.html">
                        <img src={logo} alt="" />
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
