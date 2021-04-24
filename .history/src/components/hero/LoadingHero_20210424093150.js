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
                
                <button className="mt-2 md:hidden bg-gray-100 h-12 w-full "></button>
                </div>
                <div className="container border-b-4 border-b-gray-300">
                <div className="flex flex-col xl:flex-row py-3">
                    {/* <!--About Photo of the Day--> */}
                    <div className="w-full  xl:w-2/3">
                        <div className="bg-gray-100 w-48 h-6 flex"></div>
                        <div className="bg-gray-100 w-32 h-6 flex my-3"></div>
                        {/* <!--Text--> */}
                        <div className="flex flex-col items-start mr-10">
                            <div className="bg-gray-100 w-full mr-3 h-6 flex"></div>
                            <div className="bg-gray-100 w-96 h-6 flex my-3"></div>
                            <div className="bg-gray-100 w-full mr-3 h-6 flex"></div>
                            <div className="bg-gray-100 w-80 h-6 flex my-3"></div>
                            <div className="bg-gray-100 w-96 h-6 flex my-3"></div>
                            <div className="bg-gray-100 w-full mr-3 h-6 flex"></div>
                        </div>
        
                    </div>
                    
                    <div className="w-full xl:w-1/3">
                        {/* <!--Related Posts--> */}
                        <div className="grid grid-rows-1 justify-start xl:justify-end xl:pl-10">
                            <LoadingRelatedPosts />
                        </div>
                        
                    {/* { PHOTO OF THE DAY DETAILS} */}
                    <div className="flex flex-col items-start xl:items-end mt-5">
                            <div className="bg-gray-100 w-44  h-6 flex"></div>
                            <div className="bg-gray-100 w-32 h-6 flex my-3"></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
