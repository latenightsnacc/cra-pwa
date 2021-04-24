import React, { Component } from 'react'
import './checkbox.css'
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
            <div className="mt-3 w-full">
                <ul className="flex flex-col pl-0 pb-3">
                    <div className="text-black font-bold text-xl capitalize mb-3">price range</div>
                    <label className="checkbox relative flex flex-row items-center mb-4">
                        <input className="h-5 w-5 appearance-none border-2 cursor-pointer border-black outline-none font-bold bg-white" type="checkbox" />
                        <span className="text-xl font-semibold md:text-lg xl:text-2xl ml-3 text-black flex flex-row items-center">Lower than <span className="ml-1 font-light text-lg"><i className="fas fa-dollar-sign"></i></span>20</span>
                    </label>
                    <label className="checkbox relative flex flex-row items-center mb-4">
                        <input className="h-5 w-5 appearance-none border-2 cursor-pointer border-black outline-none font-bold bg-white" type="checkbox" />
                        <span className="text-xl font-semibold md:text-lg xl:text-2xl ml-3 text-black flex flex-row items-center"><span className="font-light text-lg"><i className="fas fa-dollar-sign"></i></span>20 - <span className="ml-1 font-light text-lg"><i className="fas fa-dollar-sign"></i></span>100</span>
                    </label>
                    <label className="checkbox relative flex flex-row items-center mb-4">
                        <input className="h-5 w-5 appearance-none border-2 cursor-pointer border-black outline-none font-bold bg-white" type="checkbox" />
                        <span className="text-xl font-semibold md:text-lg xl:text-2xl ml-3 text-black flex flex-row items-center"><span className="font-light text-lg"><i className="fas fa-dollar-sign"></i></span>100 - <span className="ml-1 font-light text-lg"><i className="fas fa-dollar-sign"></i></span>200</span>
                    </label>
                    <label className="checkbox relative flex flex-row items-center mb-4">
                        <input className="h-5 w-5 appearance-none border-2 cursor-pointer border-black outline-none font-bold bg-white" type="checkbox" />
                        <span className="text-xl font-semibold md:text-lg xl:text-2xl ml-3 text-black flex flex-row items-center">More than <span className="ml-1 font-light text-lg"><i className="fas fa-dollar-sign"></i></span>200</span>
                    </label>    
                </ul>
            </div>   
        )
      }

}

