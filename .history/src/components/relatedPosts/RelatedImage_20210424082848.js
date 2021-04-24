import React from 'react'
import image from './image.jpg'
export default function RelatedImage() {
    return (
        <a>
                <div className="w-24 h-28 md:h-36">
                    <img className="float-left w-full md:float-right" src={image} alt=""  / >
                </div>
                
            </a>
    )
}
