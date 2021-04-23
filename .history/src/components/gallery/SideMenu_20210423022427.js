import React from 'react'

export default function SideMenu() {
    return (
        <>
           <div class="w-0 md:w-1/4 flex flex-col">
            {/* <!--Category Menu--> */}
            <div class="hidden md:block mr-10 border-b-2 border-b-gray-300">
                <ul class="pl-0 pb-5">
                    <div class="text-black font-bold text-xl capitalize mb-3">category</div>
                    <li class="flex flex-row items-center space-around capitalize text-2xl text-black mb-4">
                        <span class="material-icons-outlined mr-3">check_box_outline_blank
                                </span> 
                                People
                            </li>
                            
                            <li class="flex flex-row items-center space-around capitalize text-2xl text-black mb-4">
                                <span class="material-icons-outlined mr-3">
                                check_box_outline_blank
                                </span> 
                                Premium
                            </li>
                            <li class="flex flex-row items-center space-around capitalize text-2xl text-black mb-4">
                                <span class="material-icons-outlined mr-3">check_box</span>
                                pets
                            </li>
                            <li class="flex flex-row items-center space-around capitalize text-2xl text-black mb-4">
                                <span class="material-icons-outlined mr-3">check_box</span>
                                food
                            </li>
                            <li class="flex flex-row items-center space-around capitalize text-2xl text-black mb-4">
                                <span class="material-icons-outlined mr-3">check_box</span>
                                landmarks
                            </li>
                            <li class="flex flex-row items-center space-around capitalize text-2xl text-black mb-4">
                                <span class="material-icons-outlined mr-3">
                                check_box_outline_blank
                                </span> 
                                cities
                            </li>
                            <li class="flex flex-row items-center space-around capitalize text-2xl text-black mb-3">
                                <span class="material-icons-outlined mr-3">
                                check_box_outline_blank
                                </span> 
                                nature
                            </li>
                        </ul>
                    </div>

                    <!--Price Filter-->
                    <div class="hidden md:block pt-3">
                        <ul class="pl-0 pb-3">
                            <div class="text-black font-bold text-xl capitalize mb-3">price range</div>

                            <li class="flex flex-row items-center space-around  text-2xl text-black mb-4">
                                <span class="material-icons-outlined mr-3">
                                check_box_outline_blank
                                </span> 
                                Lower than <span class="ml-1 font-semibold text-sm">&dollar;</span>20
                            </li>
                            <li class="flex flex-row items-center space-around  text-2xl text-black mb-4">
                                <span class="material-icons-outlined mr-3">
                                check_box_outline_blank
                                </span> 
                                <span class="ml-1 font-semibold text-sm">&dollar;</span>20 - <span class="ml-1 font-semibold text-sm">&dollar;</span>100
                            </li>
                            <li class="flex flex-row items-center space-around  text-2xl text-black mb-4">
                                <span class="material-icons-outlined mr-3">
                                check_box_outline_blank
                                </span> 
                                <span class="ml-1 font-semibold text-sm">&dollar;</span>100 - <span class="ml-1 font-semibold text-sm">&dollar;</span>200
                            </li>
                            <li class="flex flex-row items-center space-around  text-2xl text-black mb-4">
                                <span class="material-icons-outlined mr-3">
                                check_box_outline_blank
                                </span> 
                                More than <span class="ml-1 font-semibold text-sm">&dollar;</span>200
                            </li>
                        </ul>
                    </div>
                </div> 
        </>
    )
}
