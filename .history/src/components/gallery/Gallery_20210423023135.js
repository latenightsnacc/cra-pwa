import React from 'react'
import TopNav from './TopNav'
import SideMenu from './SideMenu'

export default function Gallery() {
    return (
        <>
           <section className="container relative">
                {/* Top Navigation */}
                <TopNav />
                <div className="flex flex-row">
                    <SideMenu />
                </div>
            </section> 
        </>
    )
}
