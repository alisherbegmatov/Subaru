import React, { useState } from 'react'
import { selectCars } from '../features/car/Car'
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
        <li style={{ color: 'white' }}>Build & Price</li>
        <li style={{ color: 'white' }}>Find Retailer</li>
        <MenuButton onClick={() => setBurgerStatus(true)} />
      </RightMenu>
      <BurgerNavMenu show={burgerStatus}>
        <CloseContainer>
          <CloseButton onClick={() => setBurgerStatus(false)} />
        </CloseContainer>
        <li>Subaru BRZ</li>
        <li>Subaru WRX</li>
        <li>Subaru Impreza</li>
        <li>Subaru Legacy</li>
        <li>Subaru Crosstrek</li>
        <li>Subaru Forester</li>
        <li>Subaru Outback</li>
        <li>Subaru Ascent</li>
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
background: #FFFFFF;
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
