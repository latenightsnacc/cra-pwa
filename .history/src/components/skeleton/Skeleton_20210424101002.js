import React from 'react'
import LoadingNavBar from '../navbar/LoadingNavBar'
import LoadingHero from '../hero/LoadingHero'
import LoadingGallery from '../gallery/LoadingGallery'

export default function Skeleton() {
    return (
        <>
           <LoadingNavBar />
           <LoadingHero />
           <LoadingGallery /> 
        </>
    )
}
