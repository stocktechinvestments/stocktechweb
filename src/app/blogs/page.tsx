
import Contact from '@/components/Contact'
import Link from 'next/link'
import React from 'react'

export default function Blog() {
    return (
        <>
            <Hero />
            <BlogSection />
            <Contact />
        </>
    )
}

function Hero() {
    return (
        <section className='bg-new-green-300 w-full z-[5]'>
            <div className='w-full relative flex gap-3 z-4 max-md:flex-col max-md:gap-10'>
                <div className='relative w-full pt-2'>
                    <h1 className='hero-heading text-[58px] font-bold text-new-blue-300' style={{ lineHeight: '1.1' }}>
                        Explore the <strong className='text-new-green-500'>Latest.</strong> in Stock Market Trends.
                    </h1>
                    <p className='text-3xl font-bold text-new-dark-500 mt-3 flex gap-2 items-end txt'
                        style={{ lineHeight: '1' }}>
                        <span className='text-new-green-500'>Discover. Learn. Grow.</span>
                    </p>

                    <p className='text-lg font-light text-new-dark-300 mt-5 max-w-lg '>
                        Welcome to our blog — a place where we share expert tips, fresh ideas, and real-world experiences. Whether you&apos;re looking to learn something new, stay updated, or find inspiration, you&apos;ll discover valuable content crafted just for you.
                    </p>

                </div>
                <div className='relative z-[5] lg:w-full max-md:w-full flex justify-center items-center '>
                    <img src="/assets/svg/learn.svg" alt="hero" className=' z-[5] relative' />
                </div>
            </div>
        </section>
    )
}

function BlogSection() {
    return (
        <section className='bg-new-light-500 w-full relative'>
            <div className='w-full relative'>
                <div className='w-full mt-12 relative'>
                    <div className='w-full grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1  gap-5'>

                        <div
                            className="w-full relative bg-new-light-500 rounded-2xl border border-new-dark-500 overflow-hidden">
                            <div className="w-full flex flex-col gap-2">
                                <div className='w-full p-3'>
                                    <img src="/assets/blogs/16.png" alt="" className='h-[250px] block mx-auto' />
                                </div>

                                <div className='w-full px-5 py-3'>
                                    <Link href='blogs/how-sip-can-help-you-build-wealth-over-time' className='block font-medium text-new-blue-300 text-lg'
                                        style={{ lineHeight: "1.1" }}>
                                        How SIPs Can Help You Build Wealth Over Time.
                                    </Link>
                                </div>
                                <div className='w-full px-5 py-1 max-h-[160px] overflow-clip '>
                                    <p className='font-normal text-new-dark-300 text-md leading-[1.2] line-clamp-4'>
                                        When it comes to building long-term wealth, most people either delay investing or wait for the “right time.” But the truth is, the earlier you start, the better your chances of growing your money. One of the simplest and most effective ways to invest regularly and grow wealth is through a Systematic Investment Plan, also known as SIP. Let&apos;s understand how SIPs work and how they can help you reach your financial goals over time.
                                    </p>
                                </div>
                                <div className='w-full py-5 flex justify-end px-5'>
                                    <Link href='blogs/how-sip-can-help-you-build-wealth-over-time' className='text-new-blue-300 underline' >Read More</Link>
                                </div>
                            </div>
                        </div>

                        <div
                            className="w-full relative bg-new-light-500 rounded-2xl border border-new-dark-500 overflow-hidden">
                            <div className="w-full flex flex-col gap-2">
                                <div className='w-full p-3'>
                                    <img src="/assets/blogs/17.png" alt="" className='h-[250px] block mx-auto' />
                                </div>

                                <div className='w-full px-5 py-3'>
                                    <Link href='blogs/best-mutual-funds-to-invest-in-2025' className='block font-medium text-new-blue-300 text-lg leading-[1.1]'>
                                        Best Mutual Funds to Invest in 2025.
                                    </Link>
                                </div>
                                <div className='w-full px-5 py-1 max-h-[160px] overflow-clip '>
                                    <p className='font-normal text-new-dark-300 text-md leading-[1.2] line-clamp-4'>
                                        Investing in mutual funds is one of the most reliable ways to grow your wealth over time. If you&apos;re looking to get started but feel overwhelmed by options, you&apos;re not alone. At Stocktech Investment, we&apos;re here to make mutual fund investing simple, smart, and stress-free.
                                    </p>
                                </div>
                                <div className='w-full py-5 flex justify-end px-5'>
                                    <Link href='blogs/best-mutual-funds-to-invest-in-2025' className='text-new-blue-300 underline'>Read More</Link>
                                </div>
                            </div>
                        </div>

                        <div
                            className="w-full relative bg-new-light-500 rounded-2xl border border-new-dark-500 overflow-hidden">
                            <div className="w-full flex flex-col gap-2">
                                <div className='w-full p-3'>
                                    <img src="/assets/blogs/15.png" alt="" className='h-[250px] block mx-auto' />
                                </div>

                                <div className='w-full px-5 py-3'>
                                    <Link href='blogs/best-way-to-invest-in-mutual-funds' className='block font-medium text-new-blue-300 text-lg leading-[1.1]'>
                                        What&apos;s the Best Way to Invest in Mutual Funds - All at Once or Bit by Bit?
                                    </Link>
                                </div>
                                <div className='w-full px-5 py-1 max-h-[160px] overflow-clip '>
                                    <p className='font-normal text-new-dark-300 text-md leading-[1.2] line-clamp-4'>
                                        If you&apos;ve ever thought about investing in mutual funds, you&apos;ve probably come across two common options: lump sum and SIP (Systematic Investment Plan). Both are smart ways to grow your money, but they work differently. So which one is right for you?
                                    </p>
                                </div>
                                <div className='w-full py-5 flex justify-end px-5'>
                                    <Link href='blogs/best-way-to-invest-in-mutual-funds' className='text-new-blue-300 underline'>Read More</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
