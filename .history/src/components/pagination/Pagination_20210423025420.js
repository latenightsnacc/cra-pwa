import React from 'react'

export default function Pagination() {
    return (
        <div className="flex flex-row w-full justify-center">
            <nav>
                <ul className="flex flex-row items-center h-16 justify-center">
                    <li>
                        <a href="#" className="text-black text-2xl md:text-3xl no-underline hover:text-black hover:no-underline text-base" aria-label="Previous">
                            <span className="material-icons-outlined">keyboard_arrow_left</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-gray-400 text-2xl md:text-3xl no-underline hover:text-black hover:no-underline px-1">1</a>
                    </li>
                    <li>
                        <a href="#" className="text-gray-400 text-2xl md:text-3xl no-underline hover:text-black hover:no-underline px-1">2</a>
                    </li>
                    <li>
                        <a href="#" className="text-black text-2xl md:text-3xl font-bold no-underline hover:text-black hover:no-underline px-1">3</a>
                    </li>
                    <li>
                        <a href="#" className="text-gray-400 text-2xl md:text-3xl no-underline hover:text-black hover:no-underline px-1">4</a>
                    </li>
                    <li>
                        <a href="#" className="text-black text-2xl md:text-3xl no-underline hover:text-black hover:no-underline" aria-label="Previous">
                            <span className="material-icons-outlined">keyboard_arrow_right</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
