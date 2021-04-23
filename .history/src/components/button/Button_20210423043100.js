import React from 'react'

export default function Button(props) {
    return (
        <>
          <button className="opacity-0 w-full  h-11 bg-black text-white uppercase group-hover:opacity-100">{props.label}</button>  
        </>
    )
}
