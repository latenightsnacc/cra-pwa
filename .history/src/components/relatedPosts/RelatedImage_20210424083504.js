import React from 'react'
import image from './image.jpg'
export default function RelatedImage() {
    return (
        <div className="w-full w-1/3">
            <a>
                <div className="w-24 h-28 md:w-44 md:h-36 xl:w-32 xl:h-36">
                    <img className="float-left w-full xl:float-right" src={image} alt=""  / >
                </div>
                
            </a>
        </div>
    )
}
