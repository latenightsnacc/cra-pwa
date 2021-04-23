import React, { Component } from 'react'

export default class HoverButton extends Component {
    
      render(){
        return (
            <>
                <button className="opacity-0 w-full h-11  bg-black text-white uppercase group-hover:opacity-100">add to cart</button> 
            </>
        )
      }
}
