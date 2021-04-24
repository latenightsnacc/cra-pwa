import React from 'react'
import LoadingRelatedImage from './LoadingRelatedImage'

export default function LoadingRelatedPosts() {
    return (
        <>
            <div className="flex justify-start  xl:justify-end">
                <div className="bg-gray-100 w-44 h-6 flex"></div>
            </div>
            <div className="bg-gray-100 w-32 h-6 flex my-3"></div>

            {/* <!--Related Images--> */}
            <div className="flex flex-row justify-center xl:justify-end py-2 md:mt-5">
                        
                <LoadingRelatedImage />
                <LoadingRelatedImage />
                <LoadingRelatedImage />
                
                
            </div>
        </>
    )
}
