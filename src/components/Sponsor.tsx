import React from 'react'
import Button from './Button'

export default function Sponsor() {
    return (
        <section className='bg-new-light-500 w-full'>
            <div className='w-full h-full relative flex gap-3 max-md:flex-col max-md:gap-10'>
                <div className="relative h-full lg:w-full max-md:w-full max-md:flex justify-center items-center">
                    <img src="/assets/svg/about-02.svg" alt="hero" className='md:h-[550px]' />
                </div>
                <div className="w-full relative">
                    <h2 className='text-[35px] font-bold text-new-blue-300' style={{ lineHeight: '1.1' }}>
                        Authorized Partner of <strong className='text-new-green-500'>AngelOne.</strong> Your Trusted Brokerage Platform
                    </h2>
                    <p className='text-2xl font-medium text-new-dark-500 mt-5'>
                        Open a Free <strong>DEMAT</strong> Account and trade <strong className='text-new-green-500'>₹20 per order.</strong>
                    </p>

                    <p className='text-lg font-light text-new-dark-300 mt-5 flex flex-col gap-2'>
                        <span className='flex gap-3 items-center'>
                            <img src="/assets/svg/check.svg" alt="angelone" className='inline' />
                            Quick & Easy Account Opening
                        </span>
                        <span className='flex gap-3 items-center'>
                            <img src="/assets/svg/check.svg" alt="angelone" className='inline' />
                            Safe and Secure Platform
                        </span>
                        <span className='flex gap-3 items-center'>
                            <img src="/assets/svg/check.svg" alt="angelone" className='inline' />
                            Smart Tools for Smarter Trading
                        </span>
                    </p>
                    <p className='text-2xl font-semibold text-new-blue-500 mt-10'>
                        Brokerage Details
                    </p>
                    <span className='pl-5 mt-2 block text-new-green-500'>
                        <strong className='text-new-blue-300'>Equity Delivery :  </strong>0.20%
                    </span>
                    <span className='pl-5 block text-new-green-500'>
                        <strong className='text-new-blue-300'>Equity Intraday :  </strong>Rs 20 0r 0.03% whichever is lower
                    </span>
                    <span className='pl-5 block text-new-green-500'>
                        <strong className='text-new-blue-300'>Future, Options, Commodity :  </strong>Rs 20 per executed order
                    </span>
                    <p className='text-xl font-semibold text-new-blue-500 mt-5 max-w-[540px]'>
                        Start your trading journey with confidence—powered by <strong className='text-new-green-500'>AngelOne</strong> and guided by us.
                    </p>
                    <div className='relative mt-10 w-full'>
                        <Button name='Open Free Demat' path='https://a.aonelink.in/ANGOne/jAw6Hzr' calssName='block w-[fit-content] border border-new-blue-500 max-[396px]:px-5 max-[396px]:py-3 py-5 px-8 rounded-md font-semibold bg-new-blue-500 text-2xl text-new-light-500 hover:bg-new-blue-300 hover:border-new-blue-300' />
                    </div>
                </div>
            </div>
        </section>
    )
}
