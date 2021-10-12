import React from 'react'
import styled from 'styled-components'
import Section from './Section'

function Home () {
  return (
    <Container>
      <Section
        id='BRZ'
        title='The 2022 Subaru BRZ'
        description='Sports car purity. Subaru DNA.'
        backgroundImg='brz.jpg'
        leftButtonText='Custom Order'
        rightButtonText='Local Inventory'
        textColor='inherit'
      />
      <Section
        id='WRX'
        title='The 2022 Subaru WRX'
        description='The best-handling, best-performing WRX. Ever.'
        backgroundImg='wrx.jpg'
        leftButtonText='Custom Order'
        rightButtonText='Local Inventory'
        textColor='#FFFFFF'
      />
      <Section
        id='Outback'
        title='Introducing the 2022 Subaru Outback'
        description='Go where love takes you.'
        backgroundImg='outback.jpg'
        leftButtonText='Custom Order'
        rightButtonText='Local Inventory'
        textColor='#FFFFFF'
      />
      <Section
        id='Ascent'
        title='The 2022 Subaru Ascent.'
        description='Love is now bigger than ever.'
        backgroundImg='ascent.jpg'
        leftButtonText='Custom Order'
        rightButtonText='Local Inventory'
        textColor='#FFFFFF'
      />
      <Section
        id='STI'
        title='Subaru Tecnica International'
        description='Subaru Tecnica International is the touchstone of all Subaru motorsport and performance vehicles. Since 1988, STI engineers have tuned, tested, and retuned from complete vehicles to hand-built engines to race-ready parts'
        backgroundImg='motorsports.jpg'
        leftButtonText='STI Vehicle Lineup'
        rightButtonText='Learn More'
        textColor='#FFFFFF'
      />
      {/* <ReactPlayer
      url="https://www.youtube.com/embed/KRrnrfgPa94"
      playing={true}
      width="100vw"
      height="100vh"
      /> */}
    </Container>
  )
}

export default Home

const Container = styled.div`
  height: 100vh;
  `
