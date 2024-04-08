import React, { useEffect, useState } from 'react'
import { Switch } from '@mui/material'
import { LightMode, DarkMode } from '@mui/icons-material'

import { styles } from '../../styles'
import ThemeBtn from '../button/ThemeBtn.jsx'

import NavLogo from './NavLogo'
import MenuImg from '../image/MenuImg'
import NavDropMenu from './NavDropMenu'
import NavMenus from './NavMenus'

const Navbar = () => {

  const [active, setActive] = useState("")
  const [toggle, setToggle] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      if (scrollTop > 100) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 
                     ${scrolled ? "bg-primary" : "bg-transparent"}`}
    >
      <div className='w-full flex justify-between items-center max-w-8xl mx-auto'>
        <NavLogo
          setActive={setActive}
        />
        <NavMenus />

        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <MenuImg
            toggle={toggle}
            setToggle={setToggle} />
          <NavDropMenu
            active={active}
            setActive={setActive}
            toggle={toggle}
            setToggle={setToggle}
          />
        </div>

        <div style={{ color: 'var(--dark-gray)', fontSize: 'var(--fz-xl)' }} className='pl-5'>
          <div className='sm:hidden'><ThemeBtn /></div>
          <div className='hidden sm:flex items-center'>
            <LightMode />
            <Switch />
            <DarkMode />
          </div>
        </div>

      </div>
    </nav >
  )
}

export default Navbar
