import React from 'react'
import HoverButton from '../button/HoverButton'
import FeatureTag from '../featureTag/FeatureTag'
import image from './image.jpg'

export default function GalleryImage() {
    return (
        <div className="w-full md:w-1/3 md:mx-3 mb-5">
            <div className=" flex mx-auto">
                <div className="group relative w-80">
                    <img className="w-80 h-96" src={image} alt="" />
                    {/* <!--Feature Tag--> */}
                    <div className="absolute top-0 bottom-0">
                        <FeatureTag tag="best seller" />
                    </div>
                    {/* <!--Add to cart Button--> */}
                    <div className="absolute bottom-0 left-0 right-0">
                        <HoverButton />
                    </div>
                </div>
            </div>
            {/* <!--Image Category Tag--> */}
            <div className="text-sm text-left text-gray-600 capitalize pt-2 font-semibold">people</div>
            {/* <!--Image Title--> */}
            <div className="font-bold text-black text-2xl capitalize">red bench</div>
            {/* <!--Image Price--> */}
            <div className="text-gray-600  flex flex-row items-center"> <span className="text-sm"><i className="fas fa-dollar-sign"></i></span><span className="text-xl">3.98</span></div>     
        </div>
    )
}
