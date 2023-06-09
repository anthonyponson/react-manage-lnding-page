import React from "react"
import FooterImg from '../img/logo-white.svg'
import { UilInstagram } from '@iconscout/react-unicons'
import { UilTwitterAlt } from '@iconscout/react-unicons'
import { UilLinkedinAlt } from '@iconscout/react-unicons'
import '../index.css'

export default function Footer() {
    return (
        <footer id='footer' className='bg-varydarkblue space-y-10 py-10 mt-16'>
          <div className='container flex flex-col justify-between px-6 py-10 mx-auto md:flex-row'>
            {/* logo and social link container */}
            <div className='flex flex-col items-center justify-between space-y-6 md:flex-col md:space-y-6 md:items-start'>
              <div>
                <img src={FooterImg} alt='' />
              </div>
              {/* social links */}
              <div className='flex justify-center space-x-4'>
                {/* link 1 */}
                
                {/* link 2 */}
                <a href>
                <UilInstagram size = "25" color ="#fff" className='instagram'/>
                </a>
                {/* link 3 */}
                <a href>
                <UilTwitterAlt size= "25"  color ="#fff" className='twitter' />
                </a>
                {/* link 4 */}
                <a href>
                  <UilLinkedinAlt size= "25"  color ="#fff" className='link' />
                </a>
              </div>
            </div>
            {/* list conatiner */}
            <div className='flex justify-center space-x-32'>
              {/* item 1 */}
              <div className='flex flex-col text-white space-y-3'>
                <a
                  className='hover:text-brightred text-sm font-semibold text-white mt-8 md:mt-0'
                  href
                >
                  About
                </a>
                <a
                  className='hover:text-brightred text-sm font-semibold text-white'
                  href
                >
                  Pricing
                </a>
                <a
                  className='hover:text-brightred text-sm font-semibold text-white'
                  href
                >
                  Contact
                </a>
              </div>

              {/* item 2 */}
              {/* <div className='flex flex-col text-white space-y-3'>
                <a
                  className='hover:text-brightred text-md font-semibold text-white mt-8 md:mt-0'
                  href
                >
                  About
                </a>
                <a
                  className='hover:text-brightred text-md font-semibold text-white'
                  href
                >
                  Pricing
                </a>
                <a
                  className='hover:text-brightred text-md font-semibold text-white'
                  href
                >
                  Contact
                </a>
              </div> */}

            </div>
            {/* list container 3 */}
            <div className='flex flex-col place-items-center mt-16 md:mt-0'>
              <form>
                <div className='flex space-x-2'>
                  <input
                    type='text'
                    placeholder='Type Something'
                    className='w-full px-4 rounded-full focus:outline-none'
                  />
                  <button className='px-6 py-2 text-sm text-white font-bold rounded-full bg-brightred hover:bg-lightred focus:outline-none'>
                    Go
                  </button>
                </div>
              </form>
            </div>
          </div>
        </footer>
    )
}