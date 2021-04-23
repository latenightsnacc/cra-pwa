import React from 'react'
import image from './image.jpg'

export default function GalleryImage() {
    return (
        <div className="w-full md:w-1/3 md:mx-3 mb-5">
            <div className=" flex flex-col justify-center">
                <div className="group relative w-80">
                    <img className="w-80 h-96" src={image} alt="" />
                    {/* <!--Feature Tag--> */}
                    <div className="absolute top-0 bottom-0">
                        <div className="bg-white text-black font-semibold px-3 py-1 border-0 text-sm">Best seller</div>
                    </div>
                    {/* <!--Add to cart Button--> */}
                    <div className="absolute bottom-0 left-0 right-0">
                        <button className="opacity-0 w-full  h-11  bg-black text-white uppercase group-hover:opacity-100">add to cart</button>
                    </div>
                </div>
                {/* <!--Image Category Tag--> */}
            <div className="text-sm text-gray-600 capitalize pt-2 font-semibold">people</div>
            {/* <!--Image Title--> */}
            <div className="font-bold text-black text-2xl capitalize">red bench</div>
            {/* <!--Image Price--> */}
            <div className="text-gray-600  flex flex-row items-center"> <span className="text-sm material-icons-outlined">attach_money</span><span className="text-xl">3.98</span></div> 
            </div>
            {/* <!--Image Category Tag--> */}
            <div className="text-sm text-gray-600 capitalize pt-2 font-semibold">people</div>
            {/* <!--Image Title--> */}
            <div className="font-bold text-black text-2xl capitalize">red bench</div>
            {/* <!--Image Price--> */}
            <div className="text-gray-600  flex flex-row items-center"> <span className="text-sm material-icons-outlined">attach_money</span><span className="text-xl">3.98</span></div>
        </div>
    )
}
