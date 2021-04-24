import React from 'react'
import TopNav from './TopNav'
import SideMenu from '../menu/SideMenu'
import GalleryImage from './GalleryImage'
import LoadingImage from './LoadingImage'

export default function Gallery() {
    return (
        <>
           <section className="container relative">
                {/* Top Navigation */}
                <TopNav />
                <div className="flex flex-row" >
                    <SideMenu />
                    {/* <!--GALLERY IMAGES--> */}
                    <div className="w-full flex flex-col items-center md:block md:w-3/4">
                        {/* <!--ROW ONE--> */}
                        <div className="w-full gap-1 grid grid-rows-2 grid-flow-col">
                            <LoadingImage />
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
