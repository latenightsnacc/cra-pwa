import React from 'react'
import potd from './potd.jpg'
import relatedPosts from '../relatedPosts/RelatedPosts'

export default function Hero() {
    return (
        <>
            <div className="container">
            <div className="flex flex-row justify-between py-4">
                
                <h3 className="capitalize text-2xl md:text-3xl font-bold">samurai king resting</h3>
                
                <button className="hidden md:block bg-black text-white uppercase h-12 w-64 text-2xl">add to cart</button>
            </div>
            
            <div className="relative py-3 ">
                <img className="z-20" src={potd}  alt="" />
                <div className="absolute bottom-0 left-0">
                    <div className="bg-white font-semibold text-sm text-black w-64 h-16 text-center py-3">Photo of the day</div>
                </div>
            </div>
            
            <button className="mt-2 md:hidden bg-black text-white uppercase h-12 w-full text-2xl">add to cart</button>
            </div>
            <div className="container border-b-4 border-b-gray-300">
            <div className="flex flex-col md:flex-row py-3">
                {/* <!--About Photo of the Day--> */}
                <div className="w-full md:w-1/2">
                    <h4 className="text-black font-bold text-lg md:text-xl">About the Samurai King Resting</h4>
                    <span className="py-5-5 text-gray-700 text-lg md:text-xl font-bold">Pets</span>
                    {/* <!--Text--> */}
                    <p className="text-lg md:text-xl text-gray-600">So how did the classical Latin become so incoherent? According to McClintock, a 15th century typesetter likely scrambled part of Cicero's De Finibus in order to provide placeholder text
                     to mockup various fonts for a type specimen book.So how did the classical Latin become so incoherent? According to McClintock, a 15th century typesetter likely scrambled part of Cicero's De Finibus in order to provide placeholder 

                        text <br/> <br/>to mockup various fonts for a type specimen book.So how did the classical Latin become so incoherent? According to McClintock.</p>
                </div>
                
                <div className="w-full md:w-1/2">
                    {/* <!--Related Posts--> */}
                    <relatedPosts />
                   {/* { PHOTO OF THE DAY DETAILS} */}
                    <ul className="text-left md:text-right pl-0 md:mt-16">
                        <div className=" text-black font-bold text-xl capitalize pb-3">details</div>
                        <li className=" font-normal text-base text-gray-600">Size: 1020 x 1020 pixel</li>
                        <li className=" font-normal text-base text-gray-600">Size: 15 mb</li>
                    </ul>
                </div>
            </div>
        </div>
        </>
        
    )
}
