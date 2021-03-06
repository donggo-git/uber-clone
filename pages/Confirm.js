import tw from 'tailwind-styled-components'
import React from 'react'
import Map from './component/Map'
import RideSelector from './component/RideSelector'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

function Confirm() {
    const router = useRouter()
    const { PickUp, DropOff } = router.query
    console.log(PickUp, DropOff)
    const [pickUpCoord, setPickUpCoord] = useState([])
    const [dropOffCoord, setDropOffCoord] = useState([])
    useEffect(() => {
        getPickUpCoordinates(PickUp)
        getDropOffCoordinate(DropOff)
    }, [PickUp, DropOff])


    const getPickUpCoordinates = (pickup) => {
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?` +
            new URLSearchParams({
                access_token: "pk.eyJ1IjoiZG9uZ2duZ3V5ZW4xMiIsImEiOiJja3p0ZWVraHIzOGp0MndueGpqcm9iZThjIn0.nUt3nLOHdVyUgv6CiAhgRw",
                limit: 1
            })
        )
            .then(response => response.json())
            .then(data => {
                setPickUpCoord(data.features[0].center)
            })
    }

    const getDropOffCoordinate = (dropoff) => {
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${dropoff}.json?` +
            new URLSearchParams({
                access_token: "pk.eyJ1IjoiZG9uZ2duZ3V5ZW4xMiIsImEiOiJja3p0ZWVraHIzOGp0MndueGpqcm9iZThjIn0.nUt3nLOHdVyUgv6CiAhgRw",
                limit: 1
            })
        )
            .then(response => response.json())
            .then(data => {
                setDropOffCoord(data.features[0].center)
            })

    }
    return (
        <Wrapper>
            <Map pickUpCoord={pickUpCoord} dropOffCoord={dropOffCoord} />
            <RideContainer>
                {/*Ride Selector */}
                <RideSelector />
                {/*Confirm btn */}
                <ConfirmButtonContainer>
                    Confirm UberX
                </ConfirmButtonContainer>
            </RideContainer>
        </Wrapper>
    )
}

export default Confirm

const Wrapper = tw.div`
flex h-screen flex-col
`
const RideContainer = tw.div`
flex flex-1 flex-col
`
const ConfirmButtonContainer = tw.div`
bg-black text-white`