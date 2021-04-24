import React from 'react';
import "react-responsive-modal/styles.css";
import '../menu/mobileMenu.css'
import { Modal } from "react-responsive-modal";
import filterIcon from './filterIcon-.png'

// include styles
import 'rodal/lib/rodal.css';
import MobileMenu from '../menu/MobileMenu';

export default class TopNav extends React.Component {
    state = {
        open: false
      };
    
      onOpenModal = () => {
        this.setState({ open: true });
      };
    
      onCloseModal = () => {
        this.setState({ open: false });
    };

  render() {
    const { open } = this.state;
    return (
        <nav className="w-full flex flex-row justify-between py-5">
            <div className="text-xl md:text-2xl xl:text-3xl text-black font-bold">Photography/<span className="text-gray-300 text-xl md:text-2xl xl:text-3xl font-normal"> Premium Photos</span></div>
            <div className="flex">
                {/* ASCENDING ORDER BUTTON */}
                <button className="hidden md:block">
                    <i className="fas fa-arrow-up"></i>
                </button>
                {/* DESCENDING ORDER BUTTON */}
                <button className="hidden md:block">
                    <i className="fas fa-arrow-down"></i>
                </button>
               
                <select name="sort" className="hidden md:block flex  items-center text-lg  md:mr-3 text-gray-400" >
                    <option selected={true} >    
                    Sort by</option>
                    <option>Option 1</option>
                    <option>Option 1</option>
                </select>
                
                 {/* PRICE SELEECT OPTIONS */}
                <select name="price" className="hidden md:block flex  items-center text-lg  md:mr-3 text-black active:no-outline active:border-0">
                    
                    <option selected={true} className="text-right">Price</option>
                    <option>Option 1</option>
                    <option>Option 1</option>
                </select>
                <button className=" md:hidden flex flex-row items-center w-12">
                    <img src={filterIcon} alt="filter icon" onClick={this.onOpenModal} />
                    
                </button>
            </div>
            <div className="md:hidden">
                <Modal open={open} onClose={this.onCloseModal} >
                    <MobileMenu />
                </Modal>
            </div> 
        </nav>  
      
    );
  }
}

