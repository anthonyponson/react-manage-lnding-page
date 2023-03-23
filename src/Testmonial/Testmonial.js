import React from "react";
import '../index.css'
import img1 from '../img/avatar-ali.png'
import img2 from '../img/avatar-anisha.png'
import img3 from '../img/avatar-richard.png'


export default function Testmonial() {
    return(
        <>
        {/* testmonial starts here */}
        <section id='testimonials'>
          {/* container to heading and testmonial block */}
          <div className='max-w-4xl mx-auto px-5 mt-12 text-center'>
            {/* heading */}
            <h1 className='font-bold text-xxxl text-black'>what's they say </h1>
            {/* testimonial conatiner */}
            <div className='flex flex-col mt-24 space-y-14 md:space-y-0 md:flex-row md:space-x-6'>
              {/* testomonial 1 */}
              <div className='flex flex-col items-center space-y-2 rounded-lg p-6 bg-verylightgray md:w-1/3'>
                <img className='w-16 -mt-14' src={img1} alt='' />
                <h2 className='tetx-black text-sm font-semibold'>Audrey</h2>
                <p className='text-sm font-bold text-darkgrayishblue'>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Reprehenderit non vero fugit illo nihil harum
                </p>
              </div>
              {/* testimonial 2 */}
              <div className='flex flex-col items-center space-y-2 rounded-lg p-6 bg-verylightgray md:w-1/3'>
                <img
                  className='w-16 -mt-14'
                  src={img2}
                  alt=''
                />
                <h2 className='tetx-black text-sm font-semibold'>Lisa</h2>
                <p className='text-sm font-bold text-darkgrayishblue'>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Reprehenderit non vero fugit illo nihil harum
                </p>
              </div>
              {/* testimonial 3 */}
              <div className='flex flex-col items-center space-y-2 rounded-lg p-6 bg-verylightgray md:w-1/3'>
                <img
                  className='w-16 -mt-14'
                  src={img3}
                  alt=''
                />
                <h2 className='tetx-black text-sm font-semibold'>Lana</h2>
                <p className='text-sm font-bold text-darkgrayishblue'>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Reprehenderit non vero fugit illo nihil harum
                </p>
              </div>
            </div>
            <div className='flex justify-center py-8'>
              <a
                href
                className='py-3 px-5 text-sm text-white bg-brightred rounded-full font-semibold hover:bg-lighred'
              >
                Get Started
              </a>
            </div>
          </div>
        </section>

        {/* testmonial ends here */}
        </>
    )
}