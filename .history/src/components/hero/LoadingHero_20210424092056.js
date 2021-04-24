import React from 'react'
import LoadingRelatedPosts from '../relatedPosts/LoadingRelatedPosts'

export default function LoadingHero() {
    return (
        <>
            <div className="container">
                <div className="flex flex-row justify-between py-4">
                    
                    <div className="w-32 bg-gray-100 h-4">samurai king resting</div>
                    
                    <div className="hidden md:block"></div>
                    
                </div>
            
                <div className="relative py-3 ">
                    <div className="w-96 bg-gray-100 h-96"></div>
                    <div className="absolute bottom-0 left-0">
                        <div className="bg-white font-semibold text-sm text-black w-64 h-16 text-center py-3">Photo of the day</div>
                    </div>
                </div>
                
                <button className="mt-2 md:hidden bg-black text-white uppercase h-12 w-full text-2xl">add to cart</button>
                </div>
                <div className="container border-b-4 border-b-gray-300">
                <div className="flex flex-col xl:flex-row py-3">
                    {/* <!--About Photo of the Day--> */}
                    <div className="w-full  xl:w-2/3">
                        <div className="bg-gray-100 w-48 h-6 flex"></div>
                        <div className="bg-gray-100 w-44 h-6 flex my-3"></div>
                        {/* <!--Text--> */}
                        <p className="text-lg xl:text-xl text-gray-600">So how did the classical Latin become so incoherent? According to McClintock, a 15th century typesetter likely scrambled part of Cicero's De Finibus in order to provide placeholder text
                        to mockup various fonts for a type specimen book.So how did the classical Latin become so incoherent? According to McClintock, a 15th century typesetter likely scrambled part of Cicero's De Finibus in order to provide placeholder 

                            text <br/> <br/>to mockup various fonts for a type specimen book.So how did the classical Latin become so incoherent? According to McClintock.</p>
                    </div>
                    
                    <div className="w-full xl:w-1/3">
                        {/* <!--Related Posts--> */}
                        <div className="grid grid-rows-1 justify-start xl:justify-end">
                            <LoadingRelatedPosts />
                        </div>
                        
                    {/* { PHOTO OF THE DAY DETAILS} */}
                        <ul className="text-left md:text-right md:mt-7 p-0">
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
