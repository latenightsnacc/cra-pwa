import React from 'react'
import TopNav from './TopNav'
import SideMenu from '../menu/SideMenu'
import GalleryImage from './GalleryImage'

export default function Gallery() {
    return (
        <>
           <section className="container relative">
                {/* Top Navigation */}
                <TopNav />
                <div className="flex flex-row" >
                    <SideMenu />
                    {/* <!--GALLERY IMAGES--> */}
                    <div className="w-full flex flex-col items-center md:w-3/4">
                        {/* <!--ROW ONE--> */}
                        <div className="w-full gap-x-5 grid justify-center grid-rows-6 md:grid-rows-3 xl:grid-rows-2 grid-flow-col mx-auto">
                            <GalleryImage />
                            <GalleryImage />
                            <GalleryImage />
                            <GalleryImage />
                            <GalleryImage />
                            <GalleryImage />
                            
                            
                        </div>
                        {/* <!--ROW TWO--> */}
                        
                    </div>
                </div>
                
            </section> 
        </>
    )
}
