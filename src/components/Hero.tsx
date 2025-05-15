import React from 'react'
import Button from './Button'

export default function Hero() {
    return (
        <section className='bg-new-green-300 w-full z-[5]' style={{paddingTop:"60px"}}>
            <div className='w-full relative flex gap-3 z-4 max-md:flex-col max-md:gap-10'>
                <div className='relative w-full pt-3'>
                    <h1 className='hero-heading text-[64px] font-bold text-new-blue-300' style={{ lineHeight: '1.1' }}>
                        Master the Market with <span className='text-new-green-500'>Confidence.</span></h1>
                    <p className='text-3xl font-bold text-new-dark-500 mt-3 flex gap-2 items-end txt'
                        style={{ lineHeight: '0.7' }}>
                        Learn. Trade. <span className='text-new-green-500'>Grow.</span>
                        <img src="/assets/svg/grow.svg" alt="growth" className='inline h-[35px] ' />
                    </p>

                    <p className='text-lg font-light text-new-dark-300 mt-5 max-w-lg '>
                        Learn to trade smart, invest wisely, and grow your financial future with our trusted stock market services and easy-to-understand guidance.
                    </p>

                    <div className='flex gap-3 mt-10'>
                        <Button name='Open Free Demat' path='https://a.aonelink.in/ANGOne/jAw6Hzr'
                            calssName='max-[396px]:px-3 max-[396px]:text-[14px] max-[396px]:py-2 text-new-blue-500 border border-new-blue-500 py-3 px-5 text-md font-semibold rounded-md hover:bg-new-blue-500 hover:text-white transition duration-300 ease-in-out flex items-center justify-center'
                        />
                        <Button name='Start Mutual Fund' path='https://ekyc.motilaloswal.com/partner/mfd/?kzZWSRubKJveEvdPSlKyT2Wu8sMrWJCBeLW7vgOPP/MvViI3pMgXNVgrTzdoiAUzHqcBed8t26M0AqMGjlvii2wJXcWPs8yoJfBfUh2TkjqOpZtOzECLZ2CUZtTUFvfy2V4XVZkvYv6GYTRi7lsbl3tokOjoSBcMRC/BFw6mmpc=' calssName='max-[396px]:px-3 max-[396px]:text-[14px] max-[396px]:py-2 border border-new-blue-500 py-3 px-5 text-md font-semibold rounded-md bg-new-blue-500 text-white hover:bg-new-blue-300 hover:border-new-blue-300' />

                    </div>

                </div>
                <div className='relative z-[5] lg:w-full max-md:w-full max-md:flex justify-center items-center '>
                    <img src="/assets/bg/img.png" alt="hero" className=' z-[5] relative' />
                    <div className='absolute left-0 top-0 w-full h-full z-1 layer' style={{ backgroundImage: "url('/assets/bg/bg.png')", backgroundPosition: "center", backgroundSize: "cover", backgroundRepeat: "no-repeat" }}></div>
                    <div className='hero-icon p-3 absolute md:w-[80px] md:h-[80px] w-[60px] h-[60px] bg-new-blue-500 rounded-xl 
                    top-[15%] z-10 left-[15%] '>
                        <img src="/assets/svg/bull.svg" alt="hero" className=' z-[5] relative' />
                    </div>
                    <div className='hero-icon p-3 absolute md:w-[80px] md:h-[80px] w-[60px] h-[60px] bg-new-blue-500 rounded-xl top-[2%] z-10 right-[6%]'>
                        <img src="/assets/svg/bear.svg" alt="hero" className=' z-[5] relative' />
                    </div>
                    <div className='hero-icon p-1 absolute md:w-[80px] border border-new-green-500 md:h-[80px] w-[60px] h-[60px] bg-new-green-300 rounded-xl bottom-[10%] z-10 left-[0]'>
                        <img src="/assets/logo/angelone.png" alt="hero" className=' z-[5] relative' />
                    </div>

                    <div className='hero-icon p-1 absolute md:w-[80px] border border-new-green-500 md:h-[80px] w-[60px] h-[40px] bg-new-green-300 rounded-xl bottom-[10%] z-10 right-[0] flex justify-center items-center '>
                        <img src="/assets/logo/mo.png" alt="hero" className=' z-[5] relative h-auto' />
                    </div>
                </div>
            </div>
        </section>
    )
}
