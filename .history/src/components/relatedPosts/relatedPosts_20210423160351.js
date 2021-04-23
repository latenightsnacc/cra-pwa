import React from 'react'
import RelatedImage from './RelatedImage'

export default function RelatedPosts() {
    return (
        <>
            <h4 className="text-left md:text-right text-black font-bold text-xl">People also buy</h4>
            {/* <!--Related Images--> */}
            <div className="flex flex-row py-2 md:py-24">
                        
                <RelatedImage />
                <RelatedImage />
                <RelatedImage />
                
            </div>
        </>
    )
}
