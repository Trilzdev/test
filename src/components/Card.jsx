import React from 'react'

const Card = ({title,writeup}) => {
  return (
    <>
    <div className='h-[600px] relative bg-classic'>
            <div className='absolute top-0 left-0 backdrop-brightness-75 w-full h-full flex flex-col gap-3 justify-center items-center text-neutral-50 '>
              <div className='w-[800px] bg-[#000000b0] p-8 text-center flex flex-col gap-3'>
                <p className='font-bebas text-4xl'>{title}</p>
                <p className='text-2xl text-neutral-400'>
                  {writeup}
                </p>
              </div>
              <div>
                <button className='text-xl bg-neutral-950 py-4 text-neutral-200 hover:bg-[#72727269] px-6 duration-200 ease-in-out'>Read More</button>
              </div>
            </div>
          </div>
    </>
  )
}

export default Card