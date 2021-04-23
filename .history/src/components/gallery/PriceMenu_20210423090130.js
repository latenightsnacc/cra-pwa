import React, { Component } from 'react'

export default class PriceMenu extends Component {

    constructor(props){
        super(props)
        this.state = {
          buttonText: "Start"
        }
      }
  
      handleClick = () => {
        console.log("Button clicked...")
        let buttonText = this.state.buttonText == "Start" ? "Stop" : "Start"
        this.setState({buttonText: buttonText})
      }
  
      render(){
        return (
            <div className="hidden md:block pt-3 w-full">
                <ul className="pl-0 pb-3">
                    <div className="text-black font-bold text-xl capitalize mb-3">price range</div>
                    <li className="flex flex-row items-center space-around  text-2xl text-black mb-4">
                    <Button onClick={this.handleClick}><span className="material-icons-outlined mr-3">{this.state.buttonText}</span> </Button>
                        Lower than <span className="ml-1 font-semibold text-sm material-icons-outlined">attach_money</span>20
                    </li>
                    <li className="flex flex-row items-center space-around  text-2xl text-black mb-4">
                        <span className="material-icons-outlined mr-3">check_box_outline_blank</span> 
                        <span className="ml-1 font-semibold text-sm material-icons-outlined">attach_money</span>20 - <span className="ml-1 font-semibold text-sm material-icons-outlined">attach_money</span>100
                    </li>
                    <li className="flex flex-row items-center space-around  text-2xl text-black mb-4">
                        <span className="material-icons-outlined mr-3">check_box_outline_blank</span> 
                        <span className="ml-1 font-semibold text-sm material-icons-outlined">attach_money</span>100 - <span className="ml-1 font-semibold text-sm material-icons-outlined">attach_money</span>200
                    </li>
                    <li className="flex flex-row items-center space-around  text-2xl text-black mb-4">
                        <span className="material-icons-outlined mr-3">check_box_outline_blank</span> 
                        More than <span className="ml-1 font-semibold text-sm material-icons-outlined">attach_money</span>200
                    </li>
                    
                </ul>
            </div>   
        )
      }

}
export default function PriceMenu() {
    function handleClick(e) {
        e.preventDefault();
        // alert('The link was clicked.');
      }
    
    return (
            <div className="hidden md:block pt-3 w-full">
                <ul className="pl-0 pb-3">
                    <div className="text-black font-bold text-xl capitalize mb-3">price range</div>
                    <li className="flex flex-row items-center space-around  text-2xl text-black mb-4">
                        <span className="material-icons-outlined mr-3" onClick={handleClick}>check_box_outline_blank</span> 
                        Lower than <span className="ml-1 font-semibold text-sm material-icons-outlined">attach_money</span>20
                    </li>
                    <li className="flex flex-row items-center space-around  text-2xl text-black mb-4">
                        <span className="material-icons-outlined mr-3">check_box_outline_blank</span> 
                        <span className="ml-1 font-semibold text-sm material-icons-outlined">attach_money</span>20 - <span className="ml-1 font-semibold text-sm material-icons-outlined">attach_money</span>100
                    </li>
                    <li className="flex flex-row items-center space-around  text-2xl text-black mb-4">
                        <span className="material-icons-outlined mr-3">check_box_outline_blank</span> 
                        <span className="ml-1 font-semibold text-sm material-icons-outlined">attach_money</span>100 - <span className="ml-1 font-semibold text-sm material-icons-outlined">attach_money</span>200
                    </li>
                    <li className="flex flex-row items-center space-around  text-2xl text-black mb-4">
                        <span className="material-icons-outlined mr-3">check_box_outline_blank</span> 
                        More than <span className="ml-1 font-semibold text-sm material-icons-outlined">attach_money</span>200
                    </li>
                    
                </ul>
            </div>   
        
    )
}
