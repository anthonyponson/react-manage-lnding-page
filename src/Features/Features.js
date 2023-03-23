import React from "react"
import "../index.css"



export default function Features(){
    return(
        <>
        {/* features section starting */}
        <section className='py-12' id='features'>
          {/* flex container*/}
          <div className='container flex flex-col mx-auto space-y-12 px-6 md:space-y-0 md:flex-row'>
            {/* what's difference */}
            <div className='flex flex-col space-y-6 md:w-1/2'>
              <h1 className='max-w-sm text-black text-xxxl font-bold text-center md:text-left'>
                What's difference about us
              </h1>
              <p className='text-textgray font-bold text-lg max-w-sm text-center md:text-left'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro
                asperiores eveniet nam beatae non, repudiandae, quos impedit
                saepe fugit cupiditate ab, quo veritatis blanditiis minus.
              </p>
            </div>
            {/* flex items */}
            <div className='flex flex-col space-y-2 md:w-1/2'>
              {/* list item 1 */}
              <div className='flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row'>
                {/* heading */}
                <div className='rounded-l-full bg-brightredsublight md:bg-transparent'>
                  <div className='flex items-center space-x-2'>
                    <div className='px-4 py-2 text-white font-bold rounded-full md:py-1 bg-brightred'>
                      01
                    </div>
                    <h3 className='text-base font-bold md:mb-4 md:hidden'>
                      Advanced built-in reports
                    </h3>
                  </div>
                </div>
                <h3 className='hidden text-lg font-bold md:mb-4 md:block'>
                  Advanced built-in reports
                </h3>
              </div>
              <p className='text-textgray font-bold text-lg max-w-sm md:ml-paddingLeft pb-6'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro
                asperiores eveniet nam beatae non, repudiandae, quos impedit
                saepe fugit cupiditate ab, quo veritatis blanditiis minus.
              </p>
              {/* list item 2 */}
              <div className='flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row'>
                {/* heading */}
                <div className='rounded-l-full bg-brightredsublight md:bg-transparent'>
                  <div className='flex items-center space-x-2'>
                    <div className='px-4 py-2 text-white font-bold rounded-full md:py-1 bg-brightred'>
                      02
                    </div>
                    <h3 className='text-base font-bold md:mb-4 md:hidden'>
                      Advanced built-in reports
                    </h3>
                  </div>
                </div>
                <h3 className='hidden text-lg font-bold md:mb-4 md:block'>
                  Advanced built-in reports
                </h3>
              </div>
              <p className='text-textgray font-bold text-lg max-w-sm md:ml-paddingLeft pb-6'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro
                asperiores eveniet nam beatae non, repudiandae, quos impedit
                saepe fugit cupiditate ab, quo veritatis blanditiis minus.
              </p>
              {/* list item 3 */}
              <div className='flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row'>
                {/* heading */}
                <div className='rounded-l-full bg-brightredsublight md:bg-transparent'>
                  <div className='flex items-center space-x-2'>
                    <div className='px-4 py-2 text-white font-bold rounded-full md:py-1 bg-brightred'>
                      03
                    </div>
                    <h3 className='text-base font-bold md:mb-4 md:hidden'>
                      Advanced built-in reports
                    </h3>
                  </div>
                </div>
                <h3 className='hidden text-lg font-bold md:mb-4 md:block'>
                  Advanced built-in reports
                </h3>
              </div>
              <p className='text-textgray font-bold text-lg max-w-sm md:ml-paddingLeft pb-6'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro
                asperiores eveniet nam beatae non, repudiandae, quos impedit
                saepe fugit cupiditate ab, quo veritatis blanditiis minus.
              </p>
            </div>
          </div>
        </section>
        {/* features section ending here */}
        </>
    )
}