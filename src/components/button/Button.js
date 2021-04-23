import React from 'react'

export default function Button(props) {
    return (
        <>
            <button className="hidden md:block bg-black text-white uppercase h-12 w-64 text-2xl">{props.label}</button>
        </>
    )
}
