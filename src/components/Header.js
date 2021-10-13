import React, { useState } from 'react'
import { selectCars } from './Car'
import { useSelector } from 'react-redux'
import { Link } from 'react-scroll'

import styled from 'styled-components'
import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close'

function Header () {
  const [burgerStatus, setBurgerStatus] = useState(false)
  const cars = useSelector(selectCars)

  return (
    <Container>
      <div className='logo-container'>
        <a href='/'>
          <img src='./images/logo.png' alt='Subaru' />
        </a>
      </div>
      <Menu>
        {cars && cars.map((car, index) => (

          <li key={car} style={{ color: 'white' }}>
            <Link to={car} spy smooth>{car}</Link>
          </li>
        ))}
      </Menu>
      <RightMenu>
        <li style={{ color: 'white' }}><a href='https://www.subaru.com/build-your-own.html'>Build & Price</a></li>
        <li style={{ color: 'white' }}><a href='https://www.subaru.com/find-retailer/index.html'>Find Retailer</a></li>
        <MenuButton onClick={() => setBurgerStatus(true)} />
      </RightMenu>
      <BurgerNavMenu show={burgerStatus}>
        <CloseContainer>
          <CloseButton onClick={() => setBurgerStatus(false)} />
        </CloseContainer>
        <h1>PDF Brochures</h1>
        <li><a href='https://www.subaru.com/guides/lifebook-flipbook/my20/?utm_source=com&utm_medium=view-button&utm_term=lifebook&utm_campaign=RAB&utm_content=MY20'>Model Line</a></li>
        <li><a href='https://www.subaru.com/content/dam/subaru/downloads/pdf/brochures/2022/brz/2022_BRZ_Brochure_Final.pdf'>Subaru BRZ</a></li>
        <li><a href='https://www.subaru.com/content/dam/subaru/downloads/pdf/brochures/2021/wrx/2021_WRX_Brochure.pdf'>Subaru WRX</a></li>
        <li><a href='https://www.subaru.com/content/dam/subaru/downloads/pdf/brochures/2022/impreza/2022_Impreza_Brochure_Final.pdf'>Subaru Impreza</a></li>
        <li><a href='https://www.subaru.com/content/dam/subaru/downloads/pdf/brochures/2022/legacy/2022_Legacy_Brochure.pdf'>Subaru Legacy</a></li>
        <li><a href='https://www.subaru.com/content/dam/subaru/downloads/pdf/brochures/2021/Crosstrek/2021_Crosstrek_Brochure.pdf'>Subaru Crosstrek</a></li>
        <li><a href='https://www.subaru.com/content/dam/subaru/downloads/pdf/brochures/2021/forester/2021_Subaru_Forester_Brochure.pdf'>Subaru Forester</a></li>
        <li><a href='https://www.subaru.com/content/dam/subaru/downloads/pdf/brochures/2022/outback/2022_Outback_Brochure.pdf'>Subaru Outback</a></li>
        <li><a href='https://www.subaru.com/content/dam/subaru/downloads/pdf/brochures/2022/ascent/2022_Ascent_Brochure_Final.pdf'>Subaru Ascent</a></li>
      </BurgerNavMenu>
    </Container>
  )
}

export default Header

const Container = styled.div`
padding: 0 20px;
min-height: 60px;
inset: 0 0 auto 0;
position: fixed;
display: flex;
justify-content: space-between;
align-items: center;
z-index: 1;

.logo-container, .logo-container a {
  width: 200px;
}
`

const Menu = styled.div`
display: none;

li {
  padding: 0 10px;
  font-weight: 600;
  text-transform: uppercase;
  flex-wrap: no-wrap;
  cursor: pointer;
  transition: .2s ease;

  :hover {
    color: #009EFC;
  }
}

@media (min-width: 768px) {
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
}
`

const RightMenu = styled.div`
width: 200px;
display: flex;
align-items: center;
justify-content: flex-end;
cursor: pointer;
color: #FFFFFF;

li {
  font-weight: 600;
  text-transform: uppercase;
  flex-wrap: no-wrap;
  transition: .2s ease;

  :hover {
    color: #009EFC;
  }
}
`

const MenuButton = styled(MenuIcon)`
cursor: pointer;
`

const BurgerNavMenu = styled.div`
padding: 20px;
position: fixed;
inset: 0 0 0 auto;
width: 300px;
z-index: 2;
background: #0E4BEF;
color: #FFFFFF;
list-style: none;
display: flex;
flex-direction: column;
text-align:
justify-content: flex-start;

transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
transition: transform .2s ease-in;

li {
  font - weight: 600;
  padding: 15px 0;
  border-bottom: 1px solid rgba(0, 0, 0, .1);
  cursor: pointer;
  transition: .2s ease;

  :hover {
    color: #009EFC;
  }
}
`

const CloseContainer = styled.div`
display: flex;
justify-content: flex-end;
`

const CloseButton = styled(CloseIcon)`
cursor: pointer;
`
