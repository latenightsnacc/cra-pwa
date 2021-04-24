import React from 'react'
import LoadingRelatedImage from './LoadingRelatedImage'

export default function LoadingRelatedPosts() {
    return (
        <>
            <div className="bg-gray-100 w-32 h-8"></div>
            {/* <!--Related Images--> */}
            <div className="flex flex-row py-2 md:mt-5">
                        
                <LoadingRelatedImage />
                <LoadingRelatedImage />
                <LoadingRelatedImage />
                
                
            </div>
        </>
    )
}
