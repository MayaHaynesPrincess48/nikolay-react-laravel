import React from 'react'
import { navLinks } from '../../constants'
import { StyledWhiteButton } from '../button/LinkBtn'


const NavMenus = (props) => {

  const { active, setActive } = props

  return (
    <ul className='list-none hidden sm:flex flex-row md:gap-5 xm:gap-2 '>
      {
        navLinks.map((nav) => (
          <li
            key={nav.id}
            className={`${active === nav.title ? "text-white" : "text-secondary"} hover:text-white text-[18px] font-medium cursor-pointer`}
            onClick={() => setActive(nav.title)}
          >
            <a href={`#${nav.id}`}>
              <StyledWhiteButton shape="round">{nav.title}</StyledWhiteButton>
            </a>
          </li>
        ))
      }
    </ul>
  )
}

export default NavMenus