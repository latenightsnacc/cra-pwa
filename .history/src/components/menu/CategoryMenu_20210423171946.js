import React from 'react'

export default function CategoryMenu() {
    return (
        <div className="hidden md:block mr-10 border-b-2 border-b-gray-300">
            <ul className="flex flex-col pl-0 pb-5">
                <div className="text-black font-bold text-xl capitalize mb-3">category</div>
                <label className="checkbox relative flex flex-row items-center mb-4">
                    <input className="h-5 w-5 appearance-none border-2 cursor-pointer border-black outline-none font-bold bg-white" type="checkbox" />
                    <span className="text-2xl ml-3 text-black  capitalize">People</span>
                </label> 
                <label className="checkbox relative flex flex-row items-center mb-4">
                    <input className="h-5 w-5 appearance-none border-2 cursor-pointer border-black outline-none font-bold bg-white" type="checkbox" />
                    <span className="text-2xl ml-3 text-black  capitalize">premium</span>
                </label> 
                <label className="checkbox relative flex flex-row items-center mb-4">
                    <input className="h-5 w-5 appearance-none border-2 cursor-pointer border-black outline-none font-bold bg-white" type="checkbox" />
                    <span className="text-2xl ml-3 text-black  capitalize">pets</span>
                </label> 
                <label className="checkbox relative flex flex-row items-center mb-4">
                    <input className="h-5 w-5 appearance-none border-2 cursor-pointer border-black outline-none font-bold bg-white" type="checkbox" />
                    <span className="text-2xl ml-3 text-black capitalize">food</span>
                </label> 
                <label className="checkbox relative flex flex-row items-center mb-4">
                    <input className="h-5 w-5 appearance-none border-2 cursor-pointer border-black outline-none font-bold bg-white" type="checkbox" />
                    <span className="text-2xl ml-3 text-black capitalize">landmarks</span>
                </label> 
                <label className="checkbox relative flex flex-row items-center mb-4">
                    <input className="h-5 w-5 appearance-none border-2 cursor-pointer border-black outline-none font-bold bg-white" type="checkbox" />
                    <span className="text-2xl ml-3 text-black capitalize">cities</span>
                </label> 
                <label className="checkbox relative flex flex-row items-center mb-4">
                    <input className="h-5 w-5 appearance-none border-2 cursor-pointer border-black outline-none font-bold bg-white" type="checkbox" />
                    <span className="text-2xl ml-3 text-black capitalize">nature</span>
                </label> 
            </ul>
        </div>
    )
}
