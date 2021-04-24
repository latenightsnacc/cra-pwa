import React from 'react'
import RelatedImage from './RelatedImage'
import LoadingRelatedImage from './LoadingRelatedImage'

export default function RelatedPosts() {
    return (
        <>
            <h4 className="text-left xl:text-right text-black font-bold text-xl pr-5">People also buy</h4>
            {/* <!--Related Images--> */}
            <div className="flex flex-row py-2 md:mt-5">
                        
                <LoadingRelatedImage />
                <RelatedImage />
                <RelatedImage />
                
            </div>
        </>
    )
}
