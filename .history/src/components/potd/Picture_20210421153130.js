import React from 'react'
import potd from '../images/potd.jpg'

export default function Picture() {
    return (
        <>
            <div className="relative container">
                <img src={potd} alt=""/>
            </div>
        </>
    )
}
