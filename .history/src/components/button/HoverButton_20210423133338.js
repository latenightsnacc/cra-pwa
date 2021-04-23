import React from 'react'
import Cart from '../cart/Cart';

export default function HoverButton() {
    
    const handleClick = () => { 
        console.log("Button clicked...");
      }
    return (
        <>
            <button className="opacity-0 w-full h-11  bg-black text-white uppercase group-hover:opacity-100" onClick={handleClick()}>add to cart</button> 
        </>
    )
}
