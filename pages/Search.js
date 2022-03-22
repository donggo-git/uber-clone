import React from 'react'
import tw from "tailwind-styled-components"

const Search = () => {
    return (
        <Wrapper>
            {/*button container*/}
            <ButtonContainer>
                <BackButton src='https://img.icons8.com/ios-filled/50/000000/left.png' />
            </ButtonContainer>
            { /*Input container */}
            <InputContainer>

            </InputContainer>
            {/*Saved places */}
            {/*Confirm location */}
        </Wrapper>
    )
}
const Wrapper = tw.div`
bg-gray-200 h-screen
`;
const ButtonContainer = tw.div`
bg-white px-4
`
const BackButton = tw.img`
h-12
`

export default Search