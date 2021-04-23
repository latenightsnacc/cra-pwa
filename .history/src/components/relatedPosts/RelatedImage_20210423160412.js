import React from 'react'
import image from './image.jpg'
export default function RelatedImage() {
    return (
        <div className="w-full w-1/3">
            <a>
                <img className="float-left md:float-right  w-24 md:w-28  h-28 md:h-36 md:px-0" src={image} alt=""  / >
            </a>
        </div>
    )
}
