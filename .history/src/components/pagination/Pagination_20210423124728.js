import React from 'react'

export default function Pagination() {
    return (
        <div className="flex flex-row w-full justify-center">
            <nav>
                <ul className="flex flex-row items-center h-16 justify-center">
                    <li>
                        <a className="text-black text-lg md:text-xl no-underline hover:text-black hover:no-underline text-base" aria-label="Previous">
                        <i className="fas fa-chevron-left"></i>
                        </a>
                    </li>
                    <li>
                        <a className="text-gray-400 text-lg md:text-xl no-underline hover:text-black hover:no-underline px-1">1</a>
                    </li>
                    <li>
                        <a className="text-gray-400 text-lg md:text-xl no-underline hover:text-black hover:no-underline px-1">2</a>
                    </li>
                    <li>
                        <a className="text-black text-lg md:text-xl font-bold no-underline hover:text-black hover:no-underline px-1">3</a>
                    </li>
                    <li>
                        <a className="text-gray-400 text-lg md:text-xl no-underline hover:text-black hover:no-underline px-1">4</a>
                    </li>
                    <li>
                        <a className="text-black text-lg md:text-xl no-underline hover:text-black hover:no-underline" aria-label="Previous">
                        <i className="fas fa-chevron-right"></i>                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
