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
We do not sell, rent or share your personal information with any third party.<br></br>
Your information is kept secure and used only for communication and service purposes.
                    </p>
                    <p className='text-xl font-medium text-new-dark-300 mt-5' style={{ lineHeight: '1' }}>
If you have any questions about this privacy policy, you can contact us at:<br></br>
StockTech Investments<br></br>
Email: stocktechinvestments@gmail.com<br></br>
Phone: +91-9651727272</p>
                </div>
            </div>
        </section>
    )
}

