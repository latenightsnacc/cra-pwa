import React, { Component } from 'react'

export default class HoverButton extends Component() {
    state = {
        display: false
      }
      handleClick = () => { 
        console.log("Button clicked...")
        let checkBox = this.state.checkBox === "check_box_outline_blank" ? "check_box" : "check_box_outline_blank"
        this.setState({checkBox: checkBox})
      }
      render(){
        return (
            <>
                <button className="opacity-0 w-full h-11  bg-black text-white uppercase group-hover:opacity-100">add to cart</button> 
            </>
        )
      }
}
