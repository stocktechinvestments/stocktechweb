import About from '@/components/About'
import Button from '@/components/Button'
import Contact from '@/components/Contact'
import React from 'react'

export default function AboutUs() {
    return (
        <>
            
            <PolicyDetails />

        </>
    )
}


function PolicyDetails() {
    return (
        <section className='bg-new-light-500 w-full'>
            <div className='w-full h-full relative flex gap-3 max-md:flex-col max-md:gap-10'>

                <div className="w-full relative">
                    <h2 className='text-[35px] font-bold text-new-blue-300' style={{ lineHeight: '1.1' }}>
                        <strong className='text-new-green-500'>Privacy Policy.</strong>
                    </h2>

                    <p className='text-xl font-medium text-new-dark-300 mt-5' style={{ lineHeight: '1' }}>
                        We respect your privacy and are committed to protecting your personal information.
                    </p>
                    <p className='text-xl font-medium text-new-dark-300 mt-5' style={{ lineHeight: '1' }}>
                        When you submit your details through our lead forms, we may collect your name, phone number and email address. This information is used only to contact you regarding stock market, mutual fund, insurance and investment related services offered by StockTech Investments
                    </p>
                    <p className='text-xl font-medium text-new-dark-300 mt-5' style={{ lineHeight: '1' }}>
We do not sell, rent or share your personal information with any third party.

Your information is kept secure and used only for communication and service purposes.
                    </p>
                    <p className='text-xl font-medium text-new-dark-300 mt-5' style={{ lineHeight: '1' }}>
If you have any questions about this privacy policy, you can contact us at:<br>
StockTech Investments<br>
Email: stocktechinvestments@gmail.com<br>
Phone: +91-9651727272

                    </p>

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
