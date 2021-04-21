import React from 'react'

export default function Button(props) {
    return (
        <div>
            <button className="bg-dark text-white text-uppercase">{props.btnTitle}</button>
        </div>
    )
}
