import React from 'react'

export default function featureTag(props) {
    return (
        <>
            <div className="bg-white text-black font-semibold px-3 py-1 border-0 text-sm">{props.tag}</div>    
        </>
    )
}
