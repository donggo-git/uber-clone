import React, { useState } from 'react'
import tw from "tailwind-styled-components"
import Link from 'next/link'

const Search = () => {
    const [PickUp, setPickUp] = useState("")
    const [DropOff, setDropOff] = useState("")
    const handlePickUp = (e) => setPickUp(e)
    const handleDropOff = (e) => setDropOff(e)
    return (
        <Wrapper>
            {/*button container*/}
            <Link href="/">
                <ButtonContainer>
                    <BackButton src='https://img.icons8.com/ios-filled/50/000000/left.png' />
                </ButtonContainer>
            </Link>
            { /*Input container */}
            <InputContainer>
                <FromToIcon>
                    <Circle src="https://img.icons8.com/ios-filled/50/9CA3AF/filled-circle.png"></Circle>
                    <Line src="https://img.icons8.com/ios/50/9CA3AF/vertical-line.png"></Line>
                    <Square src="https://img.icons8.com/windows/50/000000/square-full.png"></Square>
                </FromToIcon>
                <InputBoxes>
                    <Input
                        placeholder='Enter pickup location'
                        value={PickUp}
                        onChange={(e) => handlePickUp(e.target.value)}
                    />
                    <Input
                        placeholder='Where to?'
                        value={DropOff}
                        onChange={(e) => handleDropOff(e.target.value)}
                    />
                </InputBoxes>
                <PLusIcon src="https://img.icons8.com/ios/50/000000/plus-math.png" />
            </InputContainer>
            {/*Saved places */}
            <SavePlace>
                <StarIcon src="https://img.icons8.com/ios-filled/50/ffffff/star--v1.png" />
                Saved places
            </SavePlace>
            {/*Confirm location */}
            <Link href={{
                pathname: "/Confirm",
                query: {
                    PickUp: PickUp,
                    DropOff: DropOff
                }

            }} >
                <ConfirmLocations>
                    Confirm Locations
                </ConfirmLocations>
            </Link>
        </Wrapper >
    )
}
const Wrapper = tw.div`
bg-gray-200 h-screen
`;
const ButtonContainer = tw.div`
bg-white px-4
`
const BackButton = tw.img`
h-12 cursor-pointer
`

const InputContainer = tw.div`
bg-white flex items-center px-4 mb-2
`
const FromToIcon = tw.div`
w-10 flex flex-col mr-2 items-center
`
const Circle = tw.img`
h-2.5
`
const Line = tw.img`
h-19
`
const Square = tw.img`
h-3
`

const InputBoxes = tw.div`
flex flex-col flex-1
`
const Input = tw.input`
h-10 bg-gray-200 my-2 rounded-2 p-2
outline-none border-none
`
const PLusIcon = tw.img`
w-10 h-10 bg-gray-200 rounded-full ml-3
`

const SavePlace = tw.div`
flex items-center bg-white px-4 py-2
`
const StarIcon = tw.img`
bg-gray-400 h-10 w-10 p-2 rounded-full mr-2
`
const ConfirmLocations = tw.div`
bg-black
text-white text-2xl text-center
 my-2 mx-4 p-2 
cursor-pointer
`

export default Search