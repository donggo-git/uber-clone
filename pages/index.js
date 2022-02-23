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
            <Name>Dong</Name>
            <UserImage src="./WIN_20220222_20_56_51_Pro.jpg" />
          </Profile>
        </Header>
        {/*ActionButtons */}
        {/*InputButton */}
      </ActionItems>
    </Wrapper>
  )
}

const Wrapper = tw.div`
  flex flex-col bg-red-300 h-screen
`

const ActionItems = tw.div`
  flex-1
`
const Header = tw.div``
const Profile = tw.div``
const Name = tw.div``
const UserImage = tw.img``
const UberLogo = tw.img`
h-28
`