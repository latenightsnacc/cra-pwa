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
                {/* <!--GALLERY IMAGES--> */}
                <div className="w-full flex flex-col md:w-3/4"></div>
            </section> 
        </>
    )
}
