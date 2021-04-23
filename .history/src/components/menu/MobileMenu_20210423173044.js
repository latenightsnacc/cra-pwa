import React from 'react'

export default function MobileMenu() {
    return (
        <div className="bg-white w-96 relative block md:hidden">
                    {/* <!--Category Menu--> */}
                <ul className="pl-0 pb-5">
                        
                    <div className="text-black font-bold text-xl capitalize mb-3">filter</div>
                                        
                    <li className="flex flex-row items-center space-around capitalize text-2xl text-black mb-4">
                        <span className="material-icons-outlined mr-3">check_box_outline_blank</span> 
                        People
                    </li>
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
                    
                <div className="mr-10 ml-10 border-b-2 border-b-gray-300"></div>
                            {/* <!--Price Filter--> */}
                    <div className="pt-3 pl-0">
                        <ul className="pl-0 pb-3">
                                    <div className="text-black font-bold text-xl capitalize mb-3">price range</div>
    
                                    <li className="flex flex-row items-center space-around  text-2xl text-black mb-4">
                                        <span className="material-icons-outlined mr-3">
                                        check_box_outline_blank
                                        </span> 
                                        Lower than <span className="ml-1 font-semibold text-sm material-icons-outlined">attach_money</span>20
                                    </li>
                                    <li className="flex flex-row items-center space-around  text-2xl text-black mb-4">
                                        <span className="material-icons-outlined mr-3">
                                        check_box_outline_blank
                                        </span> 
                                        <span className="ml-1 font-semibold text-sm material-icons-outlined">attach_money</span>20 - <span className="ml-1 font-semibold text-sm material-icons-outlined">attach_money</span>100
                                    </li>
                                    <li className="flex flex-row items-center space-around  text-2xl text-black mb-4">
                                        <span className="material-icons-outlined mr-3">
                                        check_box_outline_blank
                                        </span> 
                                        <span className="ml-1 font-semibold text-sm material-icons-outlined">attach_money</span>100 - <span className="ml-1 font-semibold text-sm material-icons-outlined">attach_money</span>200
                                    </li>
                                    <li className="flex flex-row items-center space-around  text-2xl text-black mb-4">
                                        <span className="material-icons-outlined mr-3">
                                        check_box_outline_blank
                                        </span> 
                                        More than <span className="ml-1 font-semibold text-sm material-icons-outlined">attach_money</span>200
                                    </li>
                                </ul>
                            </div>
                            {/* <!--CONTROL BUTTONS--> */}
                            <div className="bg-white  w-96 h-28 z-50 flex flex-row items-center justify-between border-t-4 border-t-gray-300 px-5">
                                <button className="w-44 h-16 bg-white border-2 border-black text-2xl font-medium text-black uppercase">clear</button>
                                <button className="w-44 h-16 bg-black border-2 border-black text-2xl font-medium text-white uppercase ml-5">save</button>
                                
                            </div>
                        </div>
    )
}
