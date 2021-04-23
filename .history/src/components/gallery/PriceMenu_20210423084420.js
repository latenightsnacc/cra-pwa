import React from 'react'

export default function PriceMenu(props) {
    return (
            <div className="hidden md:block pt-3 w-full">
                <ul className="pl-0 pb-3">
                    <div className="text-black font-bold text-xl capitalize mb-3">price range</div>
                    <li className="flex flex-row items-center space-around  text-2xl text-black mb-4">
                        <span className="material-icons-outlined mr-3">check_box_outline_blank</span> 
                        Lower than <span className="ml-1 font-semibold text-sm material-icons-outlined">attach_money</span>20
                    </li>
                    <li className="flex flex-row items-center space-around  text-2xl text-black mb-4">
                        <span className="material-icons-outlined mr-3">check_box_outline_blank</span> 
                        <span className="ml-1 font-semibold text-sm material-icons-outlined">attach_money</span>20 - <span className="ml-1 font-semibold text-sm material-icons-outlined">attach_money</span>100
                    </li>
                    <li className="flex flex-row items-center space-around  text-2xl text-black mb-4">
                        <span className="material-icons-outlined mr-3">check_box_outline_blank</span> 
                        <span className="ml-1 font-semibold text-sm material-icons-outlined">attach_money</span>100 - <span className="ml-1 font-semibold text-sm material-icons-outlined">attach_money</span>200
                    </li>
                    <li className="flex flex-row items-center space-around  text-2xl text-black mb-4">
                        <span className="material-icons-outlined mr-3">check_box_outline_blank</span> 
                        More than <span className="ml-1 font-semibold text-sm material-icons-outlined">attach_money</span>200
                    </li>
                    
                </ul>
            </div>   
        
    )
}
