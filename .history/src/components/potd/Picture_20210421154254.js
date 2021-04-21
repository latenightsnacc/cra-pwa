import React from 'react'
import potd from '../images/potd.jpg'

export default function Picture() {
    return (
        <>
            <div className="position relative container my-5">
                <img src={potd} alt=""/>
                <div className='position-absolute bottom-0 start-0'>
                Photo of the day
                    
                </div>
            </div>
        </>
    )
}
