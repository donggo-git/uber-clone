import React from 'react'
import tw from 'tailwind-styled-components'

function RideSelector() {
    return (
        <Wrapper>
            <Tittle>Choose a ride, or swipe up for more</Tittle>
            <CarList>
                <Car></Car>
            </CarList>
        </Wrapper>
    )
}
const Wrapper = tw.div`
flex-1
`
const Tittle = tw.div`
text-gray-500 text-center text-xs py-2 border-b
`
const Car = tw.img``
const CarList = tw.div``
export default RideSelector