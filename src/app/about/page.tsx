import About from '@/components/About'
import Button from '@/components/Button'
import Contact from '@/components/Contact'
import React from 'react'

export default function AboutUs() {
    return (
        <>
            <AboutHeader />
            <About />
            <OurMission />
            <OurVision />
            <Contact />
        </>
    )
}

function AboutHeader() {
    return (
        <section className='bg-new-green-300 w-full z-[5]'>
            <div className='w-full relative flex gap-3 z-4 max-md:flex-col max-md:gap-10'>
                <div className='relative w-full pt-3 flex flex-col justify-center'>
                    <h1 className='hero-heading text-[50px] font-bold text-new-blue-300' style={{ lineHeight: '1.1' }}>
                        Empowering Your <span className='text-new-green-500'>Financial.</span>  Journey with Trust and Expertise
                    </h1>

                    <p className='text-lg font-light text-new-dark-300 mt-5 max-w-lg '>
                        At Stocktech Investments, we combine experience, honesty, and smart strategies to help you invest with confidence and grow your wealth responsibly.
                    </p>

                </div>
                <div className='relative z-[5] lg:w-full max-md:w-full max-md:flex justify-center items-center '>
                    <img src="/assets/bg/about-bg.svg" alt="hero" className=' z-[5] relative' />
                </div>
            </div>
        </section>
    )
}

function OurMission() {
    return (
        <section className='bg-new-light-500 w-full'>
            <div className='w-full h-full relative flex gap-3 max-md:flex-col max-md:gap-10'>
                <div className="relative h-full lg:w-full max-md:w-full flex justify-center items-center">
                    <img src="/assets/svg/mission.svg" alt="hero" />
                </div>
                <div className="w-full relative">
                    <h2 className='text-[35px] font-bold text-new-blue-300' style={{ lineHeight: '1.1' }}>
                        <strong className='text-new-green-500'>Our Mission.</strong>
                    </h2>

                    <p className='text-xl font-medium text-new-dark-300 mt-5' style={{ lineHeight: '1' }}>
                        Our mission is to help you take control of your financial journey with clarity, confidence, and the right guidance. Whether you&apos;re investing for the first time or planning your next move, we&apos;re here to make the process simpler and smarter for you.
                    </p>
                    <p className='text-xl font-medium text-new-dark-300 mt-5' style={{ lineHeight: '1' }}>
                        At Stocktech Investments, it&apos;s all about understanding your goals, your concerns, and your vision for the future. We work with you closely to create investment strategies that truly fit your lifestyle — offering support at every step, reducing risks, and helping you make decisions that lead to steady, long-term growth.
                    </p>

                    <div className='relative mt-10 w-full'>
                        <Button name='Open Free Demat' path='https://a.aonelink.in/ANGOne/jAw6Hzr' calssName='block w-[fit-content] border border-new-blue-500 max-[396px]:px-4 max-[396px]:py-2 py-4 px-6 rounded-md font-semibold bg-new-blue-500 text-2xl text-new-light-500 hover:bg-new-blue-300 hover:border-new-blue-300' />
                    </div>
                </div>
            </div>
        </section>
    )
}
function OurVision() {
    return (
        <section className='relative w-full bg-new-light-500'>
            <div className="w-full relative flex gap-3 max-md:flex-col-reverse max-md:gap-10">
                <div className="relative w-full">
                    <h2 className='text-[40px] font-bold text-new-blue-300' style={{ lineHeight: '1.1' }}>
                        <strong className='text-new-green-500'>Our Vision.</strong>
                    </h2>
                    <p className='text-xl font-medium text-new-dark-300 mt-5' style={{ lineHeight: '1' }}>
                        Our vision is to be your go-to partner for building a secure and rewarding financial future. We want to make investing something you feel confident about — not confused by.

                    </p>
                    <p className='text-xl font-medium text-new-dark-300 mt-5' style={{ lineHeight: '1' }}>
                        We see a future where you can achieve your financial dreams with less stress and more clarity. Whether it&apos;s saving for your child&apos;s education, buying your dream home, or retiring with peace of mind — we&apos;re here to walk that path with you. With trust, transparency, and personalized care, we aim to give you not just results, but confidence in every financial step you take.
                    </p>

                </div>
                <div className="relative lg:w-full max-md:w-full flex justify-center items-center">
                    <img src="/assets/svg/vision.svg" alt="hero" />
                </div>
            </div>
        </section>
    )
}