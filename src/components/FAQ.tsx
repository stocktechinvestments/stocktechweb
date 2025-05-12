'use client'
import React, { useState } from 'react'

export default function FAQ() {
    const faqDetails = [
        {
            question: "<h2 class='faq-heading'>What is a Demat account and why is it needed for investing?</h2>",
            answer: "<p class='w-full text-new-dark-300'>A Demat (Dematerialized) account holds your shares and securities in an electronic format, making trading and investing safer and more convenient. It is mandatory for buying and selling stocks in India.</p>"
        },
        {
            question: "<h2 class='faq-heading'>What is SIP and how does it work?</h2>",
            answer: "<p class='w-full text-new-dark-300'>Systematic Investment Plan (SIP) is a disciplined way to invest a fixed amount regularly in mutual funds. It helps build wealth over time by averaging the cost of investment and taking advantage of compounding.</p>"
        },
        {
            question: "<h2 class='faq-heading'>Is it better to invest in lumpsum or SIP?</h2>",
            answer: "<p class='w-full text-new-dark-300'>If you have a large amount available, lumpsum investment can be suitable in favorable market conditions. However, SIPs are recommended for disciplined investing, reducing market volatility risks through rupee cost averaging.</p>"
        },
        {
            question: "<h2 class='faq-heading'>Can I open multiple Demat accounts?</h2>",
            answer: "<p class='w-full text-new-dark-300'>Yes, you can open multiple Demat accounts with different brokers. However, you must link each Demat account to a unique trading account, and maintaining multiple accounts may incur extra maintenance charges.</p>"
        }
    ];
    const [activeIndex, setActiveIndex] = useState<number | null>(0);

    const toggleFAQ = (index: number) => {
        setActiveIndex(prevIndex => (prevIndex === index ? null : index));
    };

    return (
        <section className='relative w-full bg-new-light-500'>
            <div className='w-full relative'>
                <h2 className='text-[40px] text-center max-w-2xl mx-auto font-bold text-new-blue-300 '
                    style={{ lineHeight: '1.2' }}>
                    Need Help? Check Our <strong className='text-new-green-500'>FAQs.</strong>
                </h2>

                <div className='w-full mt-12 relative'>
                    <div className='w-full relative flex gap-3 max-md:flex-col-reverse max-md:gap-10'>
                        <div className='relative w-[55%] max-md:w-full flex flex-col gap-5'>
                            {
                                faqDetails.map((data, idx) => (
                                    <div
                                        key={idx}
                                        className={`w-full flex flex-col shadow-[0_5px_10px_rgba(0,0,0,0.15)] bg-new-light-500 rounded-2xl px-8 py-4 
                                            ${activeIndex === idx && "border border-new-blue-500"}`}
                                    >
                                        <div className='w-full flex justify-between gap-5 items-center'
                                            onClick={() => toggleFAQ(idx)} >
                                            <div className='text-new-dark-500 font-medium text-lg'
                                                dangerouslySetInnerHTML={{ __html: data.question }}></div>
                                            <div className={`w-[40px] h-[40px] rounded-full flex justify-center items-center shadow-[0_5px_10px_rgba(0,0,0,0.15)] cursor-pointer 
                                                ${activeIndex === idx && "border border-new-blue-500 bg-new-blue-500"}`}>
                                                <svg
                                                    style={{ transform: `${activeIndex === idx ? "rotate(90deg)" : "rotate(0deg)"}`, }}
                                                    width="10" height="14" viewBox="0 0 10 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M1.11353 15.2744L8.14944 8.49018L1.11353 1.70595" stroke={`${activeIndex === idx ? "#fefefe" : "#0A2D47"}`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                                    />
                                                </svg>
                                            </div>
                                        </div>
                                        <div className={`w-full h-0 opacity-0 overflow-hidden ${activeIndex === idx && "h-[fit-content] mt-4 opacity-100"} `}
                                            dangerouslySetInnerHTML={{ __html: data.answer }}></div>
                                    </div>
                                ))
                            }
                        </div>
                        <div className='relative w-[44%] max-md:w-full flex justify-center '>
                        <img src="/assets/svg/faq-02.svg" alt="hero" className='' />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
