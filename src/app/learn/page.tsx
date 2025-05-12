import Button from '@/components/Button'
import Contact from '@/components/Contact'
import React from 'react'

export default function page() {
    return (
        <>
            <Hero />
            <Learn />
            <Contact/>
        </>
    )
}

function Hero() {
    return (
        <section className='bg-new-green-300 w-full z-[5]'>
            <div className='w-full relative flex gap-3 z-4 max-md:flex-col max-md:gap-10'>
                <div className='relative w-full pt-2'>
                    <h1 className='hero-heading text-[54px] font-bold text-new-blue-300' style={{ lineHeight: '1.1' }}>
                        Master the Stock Market with <span className='text-new-green-500'>Expert Guidance</span>
                    </h1>
                    <p className='text-xl font-bold text-new-dark-500 mt-3 flex gap-2 items-end txt'
                        style={{ lineHeight: '1.2' }}>
                        <span className='text-new-green-500'>New to the Stock Market? Start Learning Free Today!</span>
                    </p>

                    <p className='text-lg font-light text-new-dark-300 mt-5 max-w-lg '>
                        Master Technical Analysis, Options Trading, and Portfolio Strategies with Free Expert-Led Sessions and a Free Demat Account.
                    </p>

                    <div className='flex gap-3 mt-10'>
                        <Button name='Open Free Demat' path='https://a.aonelink.in/ANGOne/jAw6Hzr'
                            calssName='max-[396px]:px-3 max-[396px]:text-[14px] max-[396px]:py-2 text-new-blue-500 border border-new-blue-500 py-3 px-5 text-md font-semibold rounded-md hover:bg-new-blue-500 hover:text-white transition duration-300 ease-in-out flex items-center justify-center'
                        />
                        <Button name='Start Mutual Fund' path='https://ekyc.motilaloswal.com/partner/mfd/?kzZWSRubKJveEvdPSlKyT2Wu8sMrWJCBeLW7vgOPP/MvViI3pMgXNVgrTzdoiAUzHqcBed8t26M0AqMGjlvii2wJXcWPs8yoJfBfUh2TkjqOpZtOzECLZ2CUZtTUFvfy2V4XVZkvYv6GYTRi7lsbl3tokOjoSBcMRC/BFw6mmpc=' calssName='max-[396px]:px-3 max-[396px]:text-[14px] max-[396px]:py-2 border border-new-blue-500 py-3 px-5 text-md font-semibold rounded-md bg-new-blue-500 text-white hover:bg-new-blue-300 hover:border-new-blue-300' />

                    </div>


                </div>
                <div className='relative z-[5] lg:w-full max-md:w-full flex justify-center items-center '>
                    <img src="/assets/svg/blog.svg" alt="hero" className=' z-[5] relative' />
                </div>
            </div>
        </section>
    )
}

function Learn() {
    return (
        <section className="relative w-full bg-new-light-500">
            <div className="w-full relative flex gap-3 max-md:flex-col-reverse max-md:gap-10">

                <div className="relative w-full">
                    <h2 className="text-[35px] font-bold text-new-blue-300" style={{ lineHeight: '1.1' }}>
                        Trade Smart, Invest Right — Learn the <strong className="text-new-green-500">Stock Market for Free!</strong>
                    </h2>
                    <p className="text-xl font-medium text-new-dark-300 mt-5">
                        From technical analysis to swing trading strategies, gain hands-on knowledge in our free learning sessions and kickstart your journey with a free Demat account today!
                    </p>
                    <p className="text-xl font-semibold text-new-dark-500 mt-5">
                        Free Learning Sessions with Free Demat Account:
                    </p>

                    <p className='text-lg font-light text-new-dark-300 mt-5 flex flex-col gap-2'>
                        <span className='flex gap-3 items-start leading-none'>
                            <img src="/assets/svg/check.svg" alt="angelone" className='inline h-[20px]' />
                            <strong className='text-new-green-500 font-semibold'>Technical Analysis :</strong>
                            Understand market trends and price movements.
                        </span>
                        <span className='flex gap-3 items-start leading-none'>
                            <img src="/assets/svg/check.svg" alt="angelone" className='inline h-[20px]' />
                            <strong className='text-new-green-500 font-semibold'>Option Chain Analysis :</strong>
                            Learn to read and interpret option data.
                        </span>
                        <span className='flex gap-3 items-start leading-none'>
                            <img src="/assets/svg/check.svg" alt="angelone" className='inline h-[20px]' />
                            <strong className='text-new-green-500 font-semibold'>Option Trading Strategies:</strong>
                            Master strategies for consistent profits.
                        </span>
                        <span className='flex gap-3 items-start leading-none'>
                            <img src="/assets/svg/check.svg" alt="angelone" className='inline h-[20px]' />
                            <strong className='text-new-green-500 font-semibold'>Long-Term Portfolio Building:</strong>
                            Build a strong investment portfolio.
                        </span>
                        <span className='flex gap-3 items-start leading-none'>
                            <img src="/assets/svg/check.svg" alt="angelone" className='inline h-[20px]' />
                            <strong className='text-new-green-500 font-semibold'>Swing Trading Strategies:</strong>
                            Capture short- to medium-term market gains.
                        </span>
                        <span className='flex gap-3 items-start leading-none'>
                            <img src="/assets/svg/check.svg" alt="angelone" className='inline h-[20px]' />
                            <strong className='text-new-green-500 font-semibold'>Candlestick Patterns:</strong>
                            Decode price actions and predict market behavior.
                        </span>
                    </p>


                </div>

                <div className="relative lg:w-full max-md:w-full flex justify-center items-center">
                    <img src="/assets/mutual/learn.svg" alt="hero" />
                </div>
            </div>
        </section>
    )
}