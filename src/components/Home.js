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
        msrp='$ 27,995 Starting Price'
        backgroundImg='brz.jpg'
        leftButtonText='Custom Order'
        rightButtonText='Local Inventory'
        textColor='inherit'
      />
      <Section
        id='WRX'
        title='The 2022 Subaru WRX'
        description='The best-handling, best-performing WRX. Ever.'
        msrp='$ 27,495 Starting Price'
        backgroundImg='wrx.jpg'
        leftButtonText='Custom Order'
        rightButtonText='Local Inventory'
        textColor='#FFFFFF'
      />
      <Section
        id='Impreza'
        title='The 2022 Subaru Impreza'
        description='More than a car. It’s a Subaru.'
        msrp='$ 18,795 Starting Price'
        backgroundImg='impreza.jpg'
        leftButtonText='Custom Order'
        rightButtonText='Local Inventory'
        textColor='#FFFFFF'
      />
      <Section
        id='Legacy'
        title='The 2022 Subaru Legacy.'
        description='Love for all the right reasons.'
        msrp='$ 22,995 Starting Price'
        backgroundImg='legacy.jpg'
        leftButtonText='Custom Order'
        rightButtonText='Local Inventory'
        textColor='#FFFFFF'
      />
      <Section
        id='Crosstrek'
        title='Find it in the 2022 Crosstrek.'
        msrp='$ 22,245 Starting Price'
        description='Love is out there.'
        backgroundImg='crosstrek.jpg'
        leftButtonText='Custom Order'
        rightButtonText='Local Inventory'
        textColor='#FFFFFF'
      />
      <Section
        id='Outback'
        title='Introducing the 2022 Subaru Outback'
        msrp='$ 26,945 Starting Price'
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
        msrp='$ 32,295 Starting Price'
        backgroundImg='ascent.jpg'
        leftButtonText='Custom Order'
        rightButtonText='Local Inventory'
        textColor='#FFFFFF'
      />
      <Section
        id='STI'
        title='Subaru Tecnica International'
        description='Subaru Tecnica International is the touchstone of all Subaru motorsport and performance vehicles. Since 1988, STI engineers have tuned, tested, and retuned from complete vehicles to hand-built engines to race-ready parts'
        msrp=''
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
