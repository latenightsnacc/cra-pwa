import React from 'react'

export default function LoadingNavBar() {
    return (
        <nav>
            <div className="container border-b-4 border-b-gray-300 relative">
                <div className="flex flex-row justify-between py-3 ">
                    <a href="index.html" className="h-8">
                        <img className="h-full" src={logo} alt="" />
                    </a>
                    <button className="relative text-gray-100">
                        <span className="material-icons-outlined">
                            shopping_cart
                            </span>
                    </button>
                </div>
                {/* <Cart /> */}
            </div>
        </nav>
    )
}
