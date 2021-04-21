import React from 'react'
import Button from '../button/Button'
import POTDTitle from './POTDTitle'

export default function PhotoOfTheDay() {
    return (
        <>
          <div className="container">
              <div className="w-100 d-flex flex-row justify-content-between">
                  <POTDTitle potdTitle = "Samurai King Resting"/>
                  <Button btnTitle="add to cart" />
              </div>
            </div>  
        </>
    )
}
