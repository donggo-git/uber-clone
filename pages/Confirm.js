import tw from 'tailwind-styled-components'
import React from 'react'
import Map from './component/Map'

function Confirm() {
    return (
        <Wrapper>
            <Map />
            <RideContainer>
                {/*Ride Selector */}
                {/*Confirm btn */}
            </RideContainer>
        </Wrapper>
    )
}

export default Confirm

const Wrapper = tw.div`
flex h-screen flex-col
`
const RideContainer = tw.div`
flex-1
`