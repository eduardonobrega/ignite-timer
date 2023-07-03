import { HeaderContainer } from './styles'

import logoIgnite from '../../assets/logo-ignite.svg'
import { NavLink } from 'react-router-dom'
import { Scroll, Timer } from '@phosphor-icons/react'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logoIgnite} alt="" />
      <nav>
        <NavLink title="Timer" to="/">
          <Timer />
        </NavLink>
        <NavLink title="Histórico" to="/history">
          <Scroll />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
