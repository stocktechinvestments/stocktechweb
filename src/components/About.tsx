import React from 'react'
import Button from './Button'

export default function About() {
    return (
        <section className='relative w-full bg-new-light-500'>
            <div className="w-full relative flex gap-3 max-md:flex-col-reverse max-md:gap-10">
                <div className="relative w-full">
                    <h2 className='text-[40px] font-bold text-new-blue-300' style={{ lineHeight: '1.1' }}>
                        Your Trusted Guide to <strong className='text-new-green-500'>Smart Investing.</strong>
                    </h2>
                    <p className='text-xl font-medium text-new-dark-300 mt-5' style={{ lineHeight: '1' }}>
                        At <strong>Stocktech Investments</strong>, we&apos;re more than just a stock market service — we&apos;re your partners in long-term financial growth.
                    </p>
                    <p className='text-xl font-medium text-new-dark-300 mt-5' style={{ lineHeight: '1' }}>
                        The company is led by <strong>Mr. Vinay Agrawal</strong>, who has over 10 years of experience in the stock market and financial advisory, we bring deep insights and a personalized approach to every client.
                    </p>
                    <p className='text-xl font-medium text-new-dark-300 mt-5' style={{ lineHeight: '1' }}>
                        As an authorized <strong>AngelOne</strong> franchisee in Varanasi, we specialize in direct equity, mutual funds, and portfolio management services — all tailored to your goals. Whether you&apos;re just starting out or seeking expert portfolio guidance, we&apos;re here to help you invest smartly and responsibly.
                    </p>
                    <p className='text-xl font-medium text-new-dark-300 mt-5' style={{ lineHeight: '1' }}>
                        We don&apos;t just offer a platform to invest — we help you make smarter decisions and achieve your financial goals through <strong>direct equity, mutual funds, and portfolio management</strong> services.
                    </p>
                    <div className='relative mt-10 w-full'>
                        <Button name='Open Demat' path='https://a.aonelink.in/ANGOne/jAw6Hzr' calssName='block w-[fit-content] border border-new-blue-500 py-5 px-8 max-[396px]:px-5 max-[396px]:py-2 rounded-md font-semibold bg-new-blue-500 text-2xl text-new-light-500 hover:bg-new-blue-300 hover:border-new-blue-300' />
                    </div>
                </div>
                <div className="relative lg:w-full max-md:w-full flex justify-center items-center">
                    <img src="/assets/bg/img.png" alt="hero" className='' />
                </div>
            </div>
        </section>
    )
}
