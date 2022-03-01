import { useEffect } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import tw from "tailwind-styled-components"
import Map from './api/components/Map'

export default function Home() {

  return (
    <Wrapper>
      <Map />
      <ActionItems>
        {/*Header */}
        <Header>
          <UberLogo src="https://i.ibb.co/84stgjq/uber-technologies-new-20218114.jpg" />
          <Profile>
            <Name>Dong Nguyen</Name>
            <UserImage src="./api/WIN_20220222_20_56_51_Pro.jpg" />
          </Profile>
        </Header>
        {/*ActionButtons */}
        <ActionButtons>
          <ActionButton>
            <ActionButtonImage src="https://i.ibb.co/cyvcpfF/uberx.png  " />
            Ride
          </ActionButton>
          <ActionButton>
            <ActionButtonImage src="https://i.ibb.co/n776JLm/bike.png" />
            Wheels
          </ActionButton>
          <ActionButton>
            <ActionButtonImage src="https://i.ibb.co/5RjchBg/uberschedule.png" />
            Reserve
          </ActionButton>
        </ActionButtons>
        {/*InputButton */}
      </ActionItems>
    </Wrapper>
  )
}

const Wrapper = tw.div`
  flex flex-col bg-red-300 h-screen
`

const ActionItems = tw.div`
  flex-1 p-4
`
const Header = tw.div`
flex justify-between items-center
`
const Profile = tw.div`
flex items-center
`
const Name = tw.div`
mr-4 w-20 text-small
`
const UserImage = tw.img`
h-12 w-12 rounded-full border-gray-200 p-px
`
const UberLogo = tw.img`
h-28
`

const ActionButtons = tw.div`
flex
`
const ActionButton = tw.div`
flex
bg-gray-200
flex-1
m-1
h-32
items-center justify-center
rounded-lg
flex-column
`
const ActionButtonImage = tw.img`
h-3/5
`