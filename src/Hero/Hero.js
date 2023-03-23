import React from "react"
import "../index.css"
import HeroImg from "../img/illustration-intro.svg"

export default function Hero(){
    return(
        <>
         

        <section id='hero'>
          {/* flex conatainer */}
          <div className='container flex flex-col-reverse iteams-center px-6 mx-auto mt-10 sapce-y-0 md:space-y-0 md:flex-row'>
            {/* flex left items */}
            <div className='flex flex-col mb-32 space-y-4 pt-10 text-center md:text-left md:w-1/2'>
              {/* home heading */}
              <h1 className='max-w-md text-xxxl font-bold md:text-4xl md:text-left'>
                Bring Everyone together to build better
              </h1>
              {/* home para */}
              <p className='text-sm font-bold text-textgray'>
                Manage makes it simple for software teams to plan day-to-day
                tasks while keeping the larger team goals in view.
              </p>
              {/* home button */}
              <div className='flex justify-center md:justify-start'>
                <a
                  href
                  className='py-3 px-5 text-sm text-white bg-brightred rounded-full font-semibold hover:bg-lighred'
                >
                  Learn More
                </a>
              </div>
            </div>
            {/* image section */}
            <div className='md:w-1/2'>
              <img className='block' src={HeroImg} alt='' />
            </div>
          </div>
        </section>
        
        </>
    )
} 
