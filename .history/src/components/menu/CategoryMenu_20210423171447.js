import React from 'react'

export default function CategoryMenu() {
    return (
        <div className="hidden md:block mr-10 border-b-2 border-b-gray-300">
            <ul className="pl-0 pb-5">
                <div className="text-black font-bold text-xl capitalize mb-3">category</div>
                <label className="checkbox relative flex flex-row items-center mb-4">
                        <input className="h-5 w-5 appearance-none border-2 cursor-pointer border-black outline-none font-bold bg-white" type="checkbox" />
                        <span className="text-2xl ml-3 text-black flex flex-row items-center">People <span className="ml-1 font-light text-lg"><i className="fas fa-dollar-sign"></i></span>200</span>
                    </label> 
                <li className="flex flex-row items-center space-around capitalize text-2xl text-black mb-4">
                    <span className="material-icons-outlined mr-3">check_box_outline_blank</span> 
                    Premium
                </li>
                <li className="flex flex-row items-center space-around capitalize text-2xl text-black mb-4">
                    <span className="material-icons-outlined mr-3">check_box</span>
                    pets
                </li>
                <li className="flex flex-row items-center space-around capitalize text-2xl text-black mb-4">
                    <span className="material-icons-outlined mr-3">check_box</span>
                    food
                </li>
                <li className="flex flex-row items-center space-around capitalize text-2xl text-black mb-4">
                    <span className="material-icons-outlined mr-3">check_box</span>
                    landmarks
                </li>
                <li className="flex flex-row items-center space-around capitalize text-2xl text-black mb-4">
                    <span className="material-icons-outlined mr-3">check_box_outline_blank</span> 
                    cities
                </li>
                <li className="flex flex-row items-center space-around capitalize text-2xl text-black mb-3">
                    <span className="material-icons-outlined mr-3">check_box_outline_blank</span> 
                    nature
                </li>
            </ul>
        </div>
    )
}
