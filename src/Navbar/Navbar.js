import React, { useState, useEffect } from 'react'
import Logo from '../img/logo.svg'
import '../index.css'


export default function Navbar() {

  // const [isMobileMenuOpen, setIsMobileMenuOpen] = useState()

  // const toggleMobileMenu = () => {
  //   setIsMobileMenuOpen(!isMobileMenuOpen)
  // }

  // useEffect(() => {
  //   const handleResize = () => {
      
  //     if (window.innerWidth >= 768) {
  //       setIsMobileMenuOpen()
  //     }
  //   }
  //   window.addEventListener('resize', handleResize)
  //   return () => window.removeEventListener('resize', handleResize)
  // }, [isMobileMenuOpen])


  const [isMobileMenuOpen , setIsMobileMenuOpen] = useState()

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  useEffect( () =>{
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen()
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [isMobileMenuOpen])

  return (
    <>
      <div>
        {/* navbar starting  */}
        <nav className='container mx-auto p-6 bg-dark'>
          <div className='flex items-center justify-between'>
            <div className='logo-bg pt-2'>
              <img className='Navbr-logo' src={Logo} alt='' />
            </div>
            <div className='hidden space-x-6 items-center md:flex'>
              <a
                className='hover:text-brightred text-base font-bold'
                href='#features'
              >
                About
              </a>
              <a
                className='hover:text-brightred text-base font-semibold'
                href='#testimonials'
              >
                Testimonials
              </a>
              <a
                className='hover:text-brightred text-base font-semibold'
                href='#footer'
              >
                Contact
              </a>
            </div>
            {/* nav button */}
            <a
              href='*'
              className='text-sm font-semibold md:block py-2 px-6 text-white bg-brightred rounded-full baseline hidden'
            >
              Sign In{' '}
            </a>
            {/* hamburger icon */}
            <button
              id='menu-btn'
              className={`block hamburger md:hidden focus:outline-none ${
                isMobileMenuOpen ? 'open' : ''
              }`}
              onClick={toggleMobileMenu}
            >
              <span className='hamburger-top' />
              <span className='hamburger-middle' />
              <span className='hamburger-bottom' />
            </button>
          </div>
          {/* mobile menu */}

          <div className='md:hidden '>
            <div
              id='menu-items'
              className={`absolute flex-col items-center self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md ${
                isMobileMenuOpen ? 'flex' : 'hidden'
              }`}
            >
              <a className='hover:text-brightred' href='index.js' onClick={toggleMobileMenu}>
                About
              </a>
              <a className='hover:text-brightred' href='index.js' onClick={toggleMobileMenu}>
                Pricing
              </a>
              <a className='hover:text-brightred' href='index.js' onClick={toggleMobileMenu}>
                Contact
              </a>
              <a onClick={toggleMobileMenu}
                className=' text-white bg-brightred px-4 py-3 rounded-full text-base font-semibold'
                href='index.js'
              >
                Contact
              </a>
            </div>
          </div>
        </nav>

        {/* navbar ending */}
      </div>
    </>
  )
}
