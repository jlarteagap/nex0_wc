import React from 'react'

export const BurgerMenu = ({ onClick, isActive }) => {
  return (
    <div
      role="button"
      onClick={onClick}
      className={`header__menu-burger navbar-burger ${isActive && 'is-active'}`}
    >
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </div>
  )
}
