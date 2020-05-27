import React from 'react'
import logo from '../../img/logo.svg'
import styled from 'styled-components'

const LogoImg = styled.img ` 
  width: 200px;
  padding: 10px 20px;
`

function Logo() {
  return (
    <div>
      <LogoImg src={logo} alt="Fylo Logo"></LogoImg>
    </div>
  )
}

export default Logo
