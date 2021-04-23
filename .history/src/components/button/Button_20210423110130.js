import React from 'react'

export default function Button(props) {
    return (
        <>
            {/* <button className="hidden md:block bg-black text-white uppercase h-12 w-64 text-2xl">{props.label}</button> */}
            <button className="opacity-0 w-full  h-11  bg-black text-white uppercase group-hover:opacity-100">add to cart</button>
        </>
    )
}
