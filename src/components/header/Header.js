import React, { useState } from 'react'
import useData from '../../hooks/useData'

import { Menu } from './Menu'
import { BurgerMenu } from './BurgerMenu'

const Header = () => {
  const { empresa } = useData()
  const [isActive, setIsActive] = useState(false)

  return (
    <div className="header">
      <nav className={`header__navbar navbar is-fixed-top`} role="navigation">
        <div className="container is-widescreen">
          <div className="header__brand navbar-brand">
            <a className="header__item navbar-item" href={empresa.url}>
              <img src={empresa.logo} alt={empresa.npmbre} />
            </a>
            <BurgerMenu
              isActive={isActive}
              onClick={() => {
                setIsActive(!isActive)
              }}
            />
          </div>
          <Menu
            isActive={isActive}
            onClick={() => {
              setIsActive(!isActive)
            }}
          />
        </div>
      </nav>
    </div>
  )
}

export default Header
