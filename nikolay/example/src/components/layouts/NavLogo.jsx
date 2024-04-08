import React from 'react'
import { Link } from "react-router-dom";

const NavLogo = (props) => {

  const { setActive } = props

  return (
    <>
      <Link
        to='/'
        className='flex items-center gap-2'
        onClick={() => {
          setActive("");
          window.scrollTo(0, 0);
        }}
      >
        <h6 className='lg:text-[18px] font-bold cursor-pointer md:text-[14px] xm:text-[12px]'>
          Василий Петров
        </h6>
      </Link>
    </>
  )
}

export default NavLogo