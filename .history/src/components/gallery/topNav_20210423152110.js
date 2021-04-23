import React from 'react';
import Rodal from 'rodal';
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";

// include styles
import 'rodal/lib/rodal.css';
import MobileMenu from '../menu/MobileMenu';

export default class TopNav extends React.Component {
    state = {
        open: false,
        display: 'hidden'
      };
    
      onClickButton = () => {
          this.setState({display: 'block'})
      }
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
            <div className="text-xl md:text-3xl text-black font-bold">Photography/<span className="text-gray-300 text-base md:text-3xl font-normal"> Premium Photos</span></div>
            <div className="flex">
                <select name="sort" className={this.state.display}>
                    <option>Option 1</option>
                    <option>Option 1</option>
                    <option>Option 1</option>
                </select>
                <button for="sort" className="hidden md:block flex  items-center text-lg  md:mr-3 text-gray-400" onClick={this.onClickButton}>
                    <i className="fas fa-arrow-up"></i>
                    <i className="fas fa-arrow-down"></i>
                    <span className="px-1">Sort by</span>
                </button>
                <button className="hidden md:block flex justify-center items-center text-lg text-black">
                    <span>Price</span>
                    <i className="fas fa-chevron-down"></i>
                </button>
                <button className=" md:hidden flex flex-row items-center text-xl text-black">
                    <span className="material-icons-outlined" onClick={this.onOpenModal}>filter_alt</span>
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

