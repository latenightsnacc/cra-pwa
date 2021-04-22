import React from 'react'
import potd from './potd.jpg'

export default function Hero() {
    return (
        <div className="container">
            <div className="flex flex-row justify-between py-4">
                
                <h3 className="capitalize text-2xl md:text-3xl font-bold">samurai king resting</h3>
                
                <button className="hidden md:block bg-black text-white uppercase h-12 w-64 text-2xl">add to cart</button>
            </div>
            
            <div className="relative py-3 ">
                <img className="z-20" src={potd}  alt="" />
                <div className="absolute bottom-0 left-0">
                    <div className="bg-white font-semibold text-sm text-black w-64 h-16 text-center py-3">Photo of the day</div>
                </div>
            </div>
            
            <button className="mt-2 md:hidden bg-black text-white uppercase h-12 w-full text-2xl">add to cart</button>
        </div>
    )
}
