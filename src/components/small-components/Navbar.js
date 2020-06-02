import React from 'react'
import styled from 'styled-components'

const NavbarWrapper = styled.nav ` 
  @media screen and (max-width: 520px){
    margin-top: 20px;
  }
`

const NavItem = styled.a ` 
  padding: 10px 20px;
  :hover{
    text-decoration: underline;
  }
`

function Navbar() {
  return (
    <NavbarWrapper>
      <NavItem href="#">Features</NavItem>
      <NavItem href="#">Team</NavItem>
      <NavItem href="#">Sign In</NavItem>
    </NavbarWrapper>
  )
}

export default Navbar
