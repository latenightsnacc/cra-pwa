import React from 'react'
import image from './image.jpg'

export default function relatedPosts() {
    return (
        <>
            <h4 className="text-left md:text-right text-black font-bold text-xl">People also buy</h4>
            {/* <!--Related Images--> */}
            <div className="flex flex-row py-2 md:py-24">
                        
                <div className="w-full w-1/3">
                    <img className="float-left md:float-right  w-24 md:w-28  h-28 md:h-36 md:px-0 " src={image} alt=""  / >
                </div>
                <div className="w-full w-1/3">
                    <a href="#" >
                        <img className="float-left md:float-right  w-24 md:w-28  h-28 md:h-36 md:px-0" src={image} alt=""  / >
                    </a>
                </div>
                <div className="w-full w-1/3">
                    <a href="#" >
                        <img className="float-left md:float-right w-24 md:w-28  h-28 md:h-36 md:px-0" src={image} alt=""  / >
                    </a>
                </div>
            </div>
        </>
    )
}
