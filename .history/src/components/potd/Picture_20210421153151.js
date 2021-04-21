import React from 'react'
import potd from '../images/potd.jpg'

export default function Picture() {
    return (
        <>
            <div className="relative container my-5">
                <img src={potd} alt=""/>
            </div>
        </>
    )
}
