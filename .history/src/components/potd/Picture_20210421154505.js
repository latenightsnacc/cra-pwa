import React from 'react'
import potd from '../images/potd.jpg'
import './potd.scss'
export default function Picture() {
    return (
        <>
            <div className="position relative container my-5">
                <img className="picture" src={potd} alt=""/>
                <div className='position-absolute bottom-0 start-0'>
                Photo of the day
                    
                </div>
            </div>
        </>
    )
}
