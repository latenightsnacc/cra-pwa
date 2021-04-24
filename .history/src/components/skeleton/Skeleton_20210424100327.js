import React from 'react'
import LoadingNavBar from '../navbar/LoadingNavBar'
import LoadingHero from '../hero/LoadingHero'

export default function Skeleton() {
    return (
        <>
           <LoadingNavBar />
           <LoadingHero /> 
        </>
    )
}
