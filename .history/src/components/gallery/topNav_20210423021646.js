import React from 'react'

export default function topNav() {
    return (
        <>
          <nav className="flex flex-row justify-between py-5">
                <div className="text-base md:text-3xl text-black font-bold">Photography/<span className="text-gray-300 text-base md:text-3xl font-normal"> Premium Photos</span></div>
                <ul className="flex flex-row">
                    <li className="hidden md:block flex flex-row items-center  h-8 text-lg md:mr-3 text-gray-400">
                        <span className="material-icons-outlined">
                        import_export
                        </span>
                         <span>Sort by</span>
                    </li>
                    <li className="hidden md:block flex flex-row items-center  h-8 text-lg text-black">
                        <span>Price</span>
                        <span className="material-icons-outlined">
                            keyboard_arrow_down
                            </span>
                        

                    </li>
                    <li className=" md:hidden flex flex-row items-center text-black">
                        <span className="material-icons-outlined">filter_alt</span>
                    </li>
                </ul>
            </nav>  
        </>
    )
}
