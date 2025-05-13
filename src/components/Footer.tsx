import Link from 'next/link'
import React from 'react'

export default function Footer() {
    return (
        <>
            <section className='relative w-full bg-new-blue-500'>
                <footer className='w-full relative grid lg:grid-cols-[42%_1fr_1fr] max-md:grid-cols-1 gap-3 max-md:gap-10'>
                    <div className='w-full relative flex flex-col gap-5'>
                        <img src='/assets/logo/logo.png' className='w-1/2' />

                        <div className='w-full max-w-[400px] text-new-light-500 px-4'>
                            <p>At Stocktech Investments, we are committed to helping you succeed in the market by providing you with the knowledge and tools you need.</p>
                        </div>

                        <div className='w-full flex gap-3 px-4'>
                            <a
                                href='https://www.instagram.com/stocktechinvestments/'
                                className='cursor-pointer w-[50px] h-[50px] rounded-full bg-new-green-500 border border-new-light-500 flex items-center justify-center'>
                                <img src="/assets/svg/insta.svg" alt="social media" />
                            </a>
                            <a href='https://www.facebook.com/StockTech.Investments'
                                className='cursor-pointer w-[50px] h-[50px] rounded-full bg-new-green-500 border border-new-light-500 flex items-center justify-center'>
                                <img src="/assets/svg/fb.svg" alt="social media" />
                            </a>
                        </div>
                    </div>
                    <div className='w-full flex flex-col gap-10'>
                        <h2 className='text-new-green-500 text-4xl font-bold'>Quick Links</h2>
                        <div className='w-full flex flex-col gap-1'>
                            <Link href="/" className='text-new-light-500 text-lg hover:text-new-green-500'>Home</Link>
                            <Link href="/about" className='text-new-light-500 text-lg hover:text-new-green-500'>About Us</Link>
                            <Link href="/mutual-funds" className='text-new-light-500 text-lg hover:text-new-green-500'>Mutual Funds</Link>
                            <Link href="/learn" className='text-new-light-500 text-lg hover:text-new-green-500'>Learn</Link>
                            <Link href="/blogs" className='text-new-light-500 text-lg hover:text-new-green-500'>Blogs</Link>
                            <Link href="/contact" className='text-new-light-500 text-lg hover:text-new-green-500'>Contact Us</Link>
                        </div>
                    </div>
                    <div className='w-full flex flex-col gap-10'>
                        <h2 className='text-new-green-500 text-4xl font-bold'>Get to Us</h2>
                        <div className='w-full'>

                            <div className='flex flex-col gap-4'>
                                <a href='https://maps.app.goo.gl/wp2kRxBidJVqACDT7' className='text-[18px] flex gap-4 items-center text-new-green-500 leading-[1.1]'>
                                    <img src='/assets/logo/location.svg' className='h-[30px]' /> Gangapuri Colony, Mahmoorganj, Varanasi
                                </a>
                                <a href='mailto:stocktechinvestments@gmail.com' className='text-[18px] flex gap-4 items-center text-new-green-500 leading-[1.1]'>
                                    <img src='/assets/logo/email-2.svg' className='h-[30px]' /> stocktechinvestments@gmail.com
                                </a>
                                <a href='tel:+919651727272' className='text-[18px] flex gap-4 items-center text-new-green-500 leading-[1.1]'>
                                    <img src='/assets/logo/mobile-1.svg' className='h-[30px]' /> +91 96517 27272
                                </a>
                            </div>

                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3606.9655942999866!2d82.982185!3d25.305360000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjXCsDE4JzE5LjMiTiA4MsKwNTgnNTUuOSJF!5e0!3m2!1sen!2sin!4v1747114887802!5m2!1sen!2sin"
                                width="100%"
                                height="200"
                                style={{ border: "0", borderRadius: "10px", marginTop:"30px" }}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade">
                            </iframe>
                        </div>
                    </div>
                </footer>

            </section>
            <div className='w-full relative bg-new-blue-500 py-5 border-t border-new-blue-300 text-center text-new-green-300 font-semibold'>
                <p>Copyright {new Date().getFullYear()} @ StockTech Investments | Developed by <a href="https://wizards.co.in/" target='_blank' className='text-new-green-500'>Wizards.</a></p>
            </div>
        </>
    )
}
