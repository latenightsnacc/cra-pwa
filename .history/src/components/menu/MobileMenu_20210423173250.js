import React from 'react'
import CategoryMenu from './CategoryMenu'
import PriceMenu from './PriceMenu'

export default function MobileMenu() {
    return (
        <div className="bg-white w-96 relative block md:hidden">
            {/* <!--Category Menu--> */}
            <CategoryMenu />  
            <PriceMenu />
                            {/* <!--CONTROL BUTTONS--> */}
                            <div className="bg-white  w-96 h-28 z-50 flex flex-row items-center justify-between border-t-4 border-t-gray-300 px-5">
                                <button className="w-44 h-16 bg-white border-2 border-black text-2xl font-medium text-black uppercase">clear</button>
                                <button className="w-44 h-16 bg-black border-2 border-black text-2xl font-medium text-white uppercase ml-5">save</button>
                                
                            </div>
                        </div>
    )
}
