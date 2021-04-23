import React from 'react'

export default function SideMenu() {
    return (
        <>
           <div className="w-0 md:w-1/4 flex flex-col">
            {/* <!--Category Menu--> */}
            <div className="hidden md:block mr-10 border-b-2 border-b-gray-300">
                <ul className="pl-0 pb-5">
                    <div className="text-black font-bold text-xl capitalize mb-3">category</div>
                    <li className="flex flex-row items-center space-around capitalize text-2xl text-black mb-4">
                        <span className="material-icons-outlined mr-3">check_box_outline_blank
                                </span> 
                                People
                            </li>
                            
                            <li className="flex flex-row items-center space-around capitalize text-2xl text-black mb-4">
                                <span className="material-icons-outlined mr-3">
                                check_box_outline_blank
                                </span> 
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
                                <span className="material-icons-outlined mr-3">
                                check_box_outline_blank
                                </span> 
                                cities
                            </li>
                            <li className="flex flex-row items-center space-around capitalize text-2xl text-black mb-3">
                                <span className="material-icons-outlined mr-3">
                                check_box_outline_blank
                                </span> 
                                nature
                            </li>
                        </ul>
                    </div>

                    <!--Price Filter-->
                    <div className="hidden md:block pt-3">
                        <ul className="pl-0 pb-3">
                            <div className="text-black font-bold text-xl capitalize mb-3">price range</div>

                            <li className="flex flex-row items-center space-around  text-2xl text-black mb-4">
                                <span className="material-icons-outlined mr-3">
                                check_box_outline_blank
                                </span> 
                                Lower than <span className="ml-1 font-semibold text-sm">&dollar;</span>20
                            </li>
                            <li className="flex flex-row items-center space-around  text-2xl text-black mb-4">
                                <span className="material-icons-outlined mr-3">
                                check_box_outline_blank
                                </span> 
                                <span className="ml-1 font-semibold text-sm">&dollar;</span>20 - <span className="ml-1 font-semibold text-sm">&dollar;</span>100
                            </li>
                            <li className="flex flex-row items-center space-around  text-2xl text-black mb-4">
                                <span className="material-icons-outlined mr-3">
                                check_box_outline_blank
                                </span> 
                                <span className="ml-1 font-semibold text-sm">&dollar;</span>100 - <span className="ml-1 font-semibold text-sm">&dollar;</span>200
                            </li>
                            <li className="flex flex-row items-center space-around  text-2xl text-black mb-4">
                                <span className="material-icons-outlined mr-3">
                                check_box_outline_blank
                                </span> 
                                More than <span className="ml-1 font-semibold text-sm">&dollar;</span>200
                            </li>
                        </ul>
                    </div>
                </div> 
        </>
    )
}
