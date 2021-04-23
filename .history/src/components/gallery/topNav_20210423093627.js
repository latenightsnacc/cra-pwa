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
            <Rodal visible={this.state.visible} onClose={this.hide.bind(this)}>
            <div>Content</div>
            </Rodal>
        </nav>  
      
    );
  }
}

