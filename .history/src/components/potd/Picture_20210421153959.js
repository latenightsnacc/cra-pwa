import React from 'react'
import potd from '../images/potd.jpg'

export default function Picture() {
    return (
        <>
            <div className="position relative container my-5">
                <img src={potd} alt=""/>
                <div className='absolute'>
                    <div className="bg-white text-dark">Photo of the day</div>
                </div>
            </div>
        </>
    )
}
