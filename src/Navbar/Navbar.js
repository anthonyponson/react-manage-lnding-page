// import React from 'react'
// import '../index.css'
// import Logo from '../img/logo.svg'
// import Favicon from '../img/favicon.png'

// export default function Navbar() {
//   return (
//     <>
//       <div>

//
//         <nav className='container mx-auto p-6 bg-dark'>
//           <div className='flex items-center justify-between'>
//             <div className='logo-bg pt-2'>
//               <a href='#' className='text-xxl font-bold'>
//                 <img className='Navbr-logo' src={Logo} alt="" />
//               </a>
//             </div>
//             <div className='hidden space-x-6 items-center md:flex'>
//               <a className='hover:text-brightred text-base font-bold' href>
//                 About
//               </a>
//               <a className='hover:text-brightred text-base font-semibold' href>
//                 Pricing
//               </a>
//               <a className='hover:text-brightred text-base font-semibold' href>
//                 Contact
//               </a>
//             </div>
//
//             <a href
//             className='text-base font-semibold md:block py-2 px-6 text-white bg-brightred rounded-full baseline hidden'>Sign In </a>
//
//             <button
//               id='menu-btn'
//               className='block hamburger md:hidden focus:outline-none'
//             >
//               <span className='hamburger-top' />
//               <span className='hamburger-middle' />
//               <span className='hamburger-bottom' />
//             </button>
//           </div>
//

//           <div className='md:hidden'>
//             <div
//               id='menu-items'
//               className='absolute flex flex-col hidden items-center self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md'
//             >
//               <a href>About</a>
//               <a href>Pricing</a>
//               <a href>Contact</a>
//             </div>
//           </div>
//         </nav>
//       </div>
//     </>
//   )
// }

import React, { useState, useEffect } from 'react'
import Logo from '../img/logo.svg'
import '../index.css'

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  useEffect(() => {
    const handleResize = () => {
      
      if (window.innerWidth >= 768 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false)
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
                href='index.js'
              >
                About
              </a>
              <a
                className='hover:text-brightred text-base font-semibold'
                href='index.js'
              >
                Pricing
              </a>
              <a
                className='hover:text-brightred text-base font-semibold'
                href='index.js'
              >
                Contact
              </a>
            </div>
            {/* nav button */}
            <a
              href='index.js'
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

          <div className='md:hidden'>
            <div
              id='menu-items'
              className={`absolute flex-col items-center self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md ${
                isMobileMenuOpen ? 'flex' : 'hidden'
              }`}
            >
              <a href='index.js' onClick={toggleMobileMenu}>
                About
              </a>
              <a href='index.js' onClick={toggleMobileMenu}>
                Pricing
              </a>
              <a href='index.js' onClick={toggleMobileMenu}>
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