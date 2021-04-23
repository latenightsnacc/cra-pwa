import React from 'react';
import Rodal from 'rodal';

// include styles
import 'rodal/lib/rodal.css';

export default class TopNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = { visible: false };
  }

  show() {
    this.setState({ visible: true });
  }

  hide() {
    this.setState({ visible: false });
  }

  render() {
    return (
        <nav className="flex flex-row justify-between py-5">
            <div className="text-base md:text-3xl text-black font-bold">Photography/<span className="text-gray-300 text-base md:text-3xl font-normal"> Premium Photos</span></div>
            <ul className="flex flex-row">
                <li className="hidden md:block flex flex-row items-center  h-8 text-lg md:mr-3 text-gray-400">
                    <span className="material-icons-outlined">import_export</span>
                    <span>Sort by</span>
                </li>
                <li className="hidden md:block flex flex-row items-center  h-8 text-lg text-black">
                    <span>Price</span>
                    <span className="material-icons-outlined">keyboard_arrow_down</span>
                </li>
                <li className=" md:hidden flex flex-row items-center text-black">
                    <span className="material-icons-outlined" onClick={this.show.bind(this)}>filter_alt</span>
                </li>
            </ul>
            <Rodal visible={this.state.visible} onClose={this.hide.bind(this)} height='100%' width='100%'>
                <div className="bg-white overflow-scroll">
                    {/* <!--Category Menu--> */}
                    <ul className="pl-0 pb-5">
                                    <div className="flex flex-row justify-between">
                                        <div className="text-black font-bold text-xl capitalize mb-3">filter</div>
                                        
                                    </div>
                                    
    
                                    <li className="flex flex-row items-center space-around capitalize text-2xl text-black mb-4">
                                        <span className="material-icons-outlined mr-3">
                                        check_box_outline_blank
                                        </span> 
                                        People
                                    </li>
                                    <li className="flex flex-row items-center space-around capitalize text-2xl text-black mb-4">
                                        <span className="material-icons-outlined mr-3">
                                        check_box_outline_blank
                                        </span> 
                                        Premium
                                    </li>
                                    <li className="flex flex-row items-center space-around capitalize text-2xl text-black mb-4">
                                        <span className="material-icons-outlined mr-3">check_box</span>
                                        pets
                                    </li>
                                    <li className="flex flex-row items-center space-around capitalize text-2xl text-black mb-4">
                                        <span className="material-icons-outlined mr-3">check_box</span>
                                        food
                                    </li>
                                    <li className="flex flex-row items-center space-around capitalize text-2xl text-black mb-4">
                                        <span className="material-icons-outlined mr-3">check_box</span>
                                        landmarks
                                    </li>
                                    <li className="flex flex-row items-center space-around capitalize text-2xl text-black mb-4">
                                        <span className="material-icons-outlined mr-3">
                                        check_box_outline_blank
                                        </span> 
                                        cities
                                    </li>
                                    <li className="flex flex-row items-center space-around capitalize text-2xl text-black mb-3">
                                        <span className="material-icons-outlined mr-3">
                                        check_box_outline_blank
                                        </span> 
                                        nature
                                    </li>
                                </ul>
                    
                    <div className="mr-10 ml-10 border-b-2 border-b-gray-300">
                                
                                
                            </div>
                            {/* <!--Price Filter--> */}
                            <div className="pt-3 pl-10">
                                <ul className="pl-0 pb-3">
                                    <div className="text-black font-bold text-xl capitalize mb-3">price range</div>
    
                                    <li className="flex flex-row items-center space-around  text-2xl text-black mb-4">
                                        <span className="material-icons-outlined mr-3">
                                        check_box_outline_blank
                                        </span> 
                                        Lower than <span className="ml-1 font-semibold text-sm">&dollar;</span>20
                                    </li>
                                    <li className="flex flex-row items-center space-around  text-2xl text-black mb-4">
                                        <span className="material-icons-outlined mr-3">
                                        check_box_outline_blank
                                        </span> 
                                        <span className="ml-1 font-semibold text-sm">&dollar;</span>20 - <span className="ml-1 font-semibold text-sm">&dollar;</span>100
                                    </li>
                                    <li className="flex flex-row items-center space-around  text-2xl text-black mb-4">
                                        <span className="material-icons-outlined mr-3">
                                        check_box_outline_blank
                                        </span> 
                                        <span className="ml-1 font-semibold text-sm">&dollar;</span>100 - <span className="ml-1 font-semibold text-sm">&dollar;</span>200
                                    </li>
                                    <li className="flex flex-row items-center space-around  text-2xl text-black mb-4">
                                        <span className="material-icons-outlined mr-3">
                                        check_box_outline_blank
                                        </span> 
                                        More than <span className="ml-1 font-semibold text-sm">&dollar;</span>200
                                    </li>
                                </ul>
                            </div>
                            {/* <!--CONTROL BUTTONS--> */}
                            <div className="bg-white w-96 h-28 z-50 flex flex-row items-center justify-between border-t-4 border-t-gray-300 px-5">
                                <button className="w-44 h-16 bg-white border-2 border-black text-2xl font-medium text-black uppercase">clear</button>
                                <button className="w-44 h-16 bg-black border-2 border-black text-2xl font-medium text-white uppercase ml-5">save</button>
                                
                            </div>
                        </div>
            </Rodal>
        </nav>  
      
    );
  }
}

