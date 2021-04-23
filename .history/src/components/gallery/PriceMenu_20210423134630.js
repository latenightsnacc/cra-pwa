import React, { Component } from 'react'

export default class PriceMenu extends Component {

    
      state = {
        checkBox: "check_box_outline_blank"
      }
      handleClick = () => { 
        console.log("Button clicked...")
        let checkBox = this.state.checkBox === "check_box_outline_blank" ? "check_box" : "check_box_outline_blank"
        this.setState({checkBox: checkBox})
      }
  
      render(){
        return (
            <div className="hidden md:block pt-3 w-full">
                <ul className="pl-0 pb-3">
                    <div className="text-black font-bold text-xl capitalize mb-3">price range</div>
                    <li className="flex flex-row items-center space-around  text-2xl text-black mb-4">
                    <span className="material-icons-outlined mr-3" key='1' onClick={this.handleClick}>{this.state.checkBox}</span> 
                        Lower than <span className="ml-1 font-light text-sm"><i className="fas fa-dollar-sign"></i></span>20
                    </li>
                    <li className="flex flex-row items-center space-around   text-black mb-4">
                        <span className="material-icons-outlined mr-3" key='2'  onClick={this.handleClick}>{this.state.checkBox}</span> 
                        <span className="ml-1 font-light text-xs"><i className="fas fa-dollar-sign"></i></span>
                        <span className="text-2xl">20 -</span> 
                        <span className="ml-1 font-light text-xs"><i className="fas fa-dollar-sign"></i></span>
                        <span className="text-2xl">100</span>
                    </li>
                    <li className="flex flex-row items-center space-around  text-2xl text-black mb-4">
                        <span className="material-icons-outlined mr-3" key={3}  onClick={this.handleClick}>{this.state.checkBox}</span> 
                        <span className="ml-1 font-light text-xs"><i className="fas fa-dollar-sign"></i></span>100 - <span className="ml-1 font-light text-xs"><i className="fas fa-dollar-sign"></i></span>200
                    </li>
                    <li className="flex flex-row items-center space-around  text-2xl text-black mb-4">
                        <span className="material-icons-outlined mr-3" key={4}  onClick={this.handleClick}>{this.state.checkBox}</span> 
                        More than <span className="ml-1 font-light text-xs"><i className="fas fa-dollar-sign"></i></span>200
                    </li>
                    
                </ul>
            </div>   
        )
      }

}

