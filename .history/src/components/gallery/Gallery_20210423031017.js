import React from 'react'
import TopNav from './TopNav'
import SideMenu from './SideMenu'
import GalleryImage from './GalleryImage'

export default function Gallery() {
    return (
        <>
           <section className="container relative">
                {/* Top Navigation */}
                <TopNav />
                <div className="flex flex-row" >
                    <div className= "w-0 md:w-1/4 flex flex-col">
                        <SideMenu />
                    </div>
                    {/* <!--GALLERY IMAGES--> */}
                    <div className="w-full flex flex-col md:w-3/4">
                        {/* <!--ROW ONE--> */}
                        <div className="flex flex-col items-center  md:flex-row  md:justify-center">
                            <GalleryImage />
                            <GalleryImage />
                            <GalleryImage />
                            
                        </div>
                        {/* <!--ROW TWO--> */}
                        <div className="flex flex-col items-center md:flex-row md:justify-center">
                            <GalleryImage />
                            <GalleryImage />
                            <GalleryImage />
                        </div>
                    </div>
                </div>
                
            </section> 
        </>
    )
}
