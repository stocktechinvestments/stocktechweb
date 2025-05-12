import Button from '@/components/Button'
import Contact from '@/components/Contact'
import React from 'react'

export default function page() {
    return (
        <>
            <Blog />
            <Contact />
        </>
    )
}

function Blog() {
    return (
        <section className='bg-new-light-500 w-full relative'>
            <div className='bg-new-light-500 max-w-[768px] w-full mx-auto mt-5 '>
                <div className='relative w-full flex flex-col gap-8'>
                    <h1 className='hero-heading md:text-[36px] text-[24px] font-bold text-new-blue-300' style={{ lineHeight: '1.1' }}>
                        Best Mutual Funds to <strong className='text-new-green-500'>Invest in 2025.</strong>
                    </h1>

                    <div className='w-full'>
                        <img src="/assets/blogs/17.png" alt="" className='md:h-[450px] h-[350px] block mx-auto' />
                    </div>

                    <div className='w-full relative flex flex-col gap-5'>
                        <p className='font-medium text-new-dark-500 md:text-xl text-base leading-[1.2]'>
                            Investing in mutual funds is one of the most reliable ways to grow your wealth over time. If you&apos;re looking to get started but feel overwhelmed by options, you&apos;re not alone. At <strong className='text-new-green-500'>Stocktech Investment,</strong> we&apos;re here to make mutual fund investing simple, smart, and stress-free.
                            <br /><br />
                            In this guide, we&apos;ll walk you through the <strong className='text-new-green-500'>best mutual funds to consider in 2025,</strong> how to pick the right one based on your goals, and why trusted AMCs like Motilal Oswal deserve a spot on your radar.
                        </p>

                        <h2 className='font-bold md:text-2xl text-lg text-new-blue-300'>What Are Mutual Funds (In Simple Terms)?</h2>
                        <p className='font-medium text-new-dark-500 md:text-xl text-base leading-[1.2]'>
                            A mutual fund collects money from many investors and invests it across stocks, bonds, or other financial assets. These are managed by experienced fund managers, which means you don&apos;t need to be a market expert to start.
                            <br />
                            <br />
                            You can invest with just <strong className='text-new-green-500'>₹2,000/month via SIP</strong> and slowly build wealth for the long run.
                        </p>
                        <h2 className='font-bold md:text-2xl text-lg text-new-blue-300'>How to Choose the Best Mutual Fund for You?</h2>
                        <p className='font-medium text-new-dark-500 md:text-xl text-base leading-[1.2]'>
                            Before jumping into fund names, consider:
                        </p>
                        <ul className='-mt-3 pl-5 list-disc'>
                            <li>
                                <strong className='text-new-green-500'>Your Goal: </strong>Long-term growth, short-term safety, or regular income?
                            </li>
                            <li>
                                <strong className='text-new-green-500'>Risk Level: </strong> Are you okay with ups and downs or prefer stable returns?
                            </li>
                            <li>
                                <strong className='text-new-green-500'> Investment Timeframe </strong>: Are you investing for 3 years or 10?
                            </li>
                            <li>
                                <strong className='text-new-green-500'>Fund Manager Track Record & AMC Reputation</strong>
                            </li>
                        </ul>
                        <p>
                            At <strong className='text-new-green-500'>Stocktech Investment,</strong> we help you identify funds aligned with your personal financial goals.
                        </p>

                        <h2 className='font-bold md:text-2xl text-lg text-new-blue-300'>Top Mutual Fund Categories for 2025</h2>
                        <p className='pl-5 font-medium text-new-dark-500 md:text-xl text-base leading-[1.2]'>
                            <strong className='text-new-green-500 text-[22px] block '>1. Best Equity Mutual Funds (High Growth Potential)</strong>
                            Great for long-term investors seeking strong returns.
                        </p>
                        <ul className='-mt-3 pl-5 list-disc'>
                            <li>
                                <strong className='text-new-green-500 text-[18px]'>Motilal Oswal Flexi Cap Fund</strong>
                                <ul className='pl-5'>
                                    <li>Invests across large, mid, and small-cap stocks</li>
                                    <li>Known for focused investing and strong performance</li>
                                    <li>Ideal for wealth creation over 5-10 years</li>
                                </ul>
                            </li>
                            <li>
                                <strong className='text-new-green-500 text-[18px]'>Parag Parikh Flexi Cap Fund</strong>
                                <ul className='pl-5'>
                                    <li>Includes global exposure</li>
                                    <li>Balanced, long-term performance with lower volatility</li>
                                </ul>
                            </li>
                        </ul>

                        <p className='pl-5 font-medium text-new-dark-500 md:text-xl text-base leading-[1.2]'>
                            <strong className='text-new-green-500 text-[22px] block '>2. Best Debt Mutual Funds (Low Risk, Stable Returns)</strong>
                            Perfect for conservative investors or short-term goals.
                        </p>
                        <ul className='-mt-3 pl-5 list-disc'>
                            <li>
                                <strong className='text-new-green-500 text-[18px]'>ICICI Prudential Corporate Bond Fund</strong>
                            </li>
                            <li>
                                <strong className='text-new-green-500 text-[18px]'>HDFC Short Term Debt Fund</strong>
                            </li>
                        </ul>
                        <p className='pl-5 font-medium text-new-dark-500 md:text-xl text-base leading-[1.2]'>Debt funds focus on fixed income instruments and are good alternatives to fixed deposits.
                        </p>

                        <p className='pl-5 font-medium text-new-dark-500 md:text-xl text-base leading-[1.2]'>
                            <strong className='text-new-green-500 text-[22px] block '>3. Best Hybrid Mutual Funds (Balanced Approach)</strong>
                            Combines the growth of equities with the stability of debt.
                        </p>
                        <ul className='-mt-3 pl-5 list-disc'>
                            <li>
                                <strong className='text-new-green-500 text-[18px]'>Motilal Oswal Aggressive Hybrid Fund</strong>
                                <ul className='pl-5'>
                                    <li>Good for new investors who want both safety and growth</li>
                                    <li>Ideal for medium-term goals</li>
                                </ul>
                            </li>

                            <li>
                                <strong className='text-new-green-500 text-[18px]'>Canara Robeco Equity Hybrid Fund</strong>
                            </li>
                        </ul>

                        <h2 className='font-bold md:text-2xl text-lg text-new-blue-300'>Why Choose Motilal Oswal Mutual Funds?</h2>
                        <p className='font-medium text-new-dark-500 md:text-xl text-base leading-[1.2]'>
                            <strong className='text-new-green-500'>Motilal Oswal</strong> is one of India&apos;s most respected fund houses, known for:
                        </p>

                        <ul className='-mt-3 pl-5 list-disc'>
                            <li>In-depth research-based stock selection</li>
                            <li>Consistent fund manager performance</li>
                            <li>Focused portfolio strategies (not over-diversified)</li>
                            <li>Long-term wealth-building vision</li>
                        </ul>
                        <p className='font-medium text-new-dark-500 md:text-xl text-base leading-[1.2]'>
                            It&apos;s a strong choice for investors looking for serious returns and a proven track record
                        </p>


                        <h2 className='font-bold md:text-2xl text-lg text-new-blue-300'>
                            How to Get Started with Mutual Funds at Stocktech Investment.
                        </h2>
                        <p className='font-medium text-new-dark-500 md:text-xl text-base leading-[1.2]'>
                            Vinay Agarwal, founder of Stocktech Investment, ensures you receive:
                        </p>
                        <ul className='-mt-3 pl-5 list-disc'>
                            <li>Personalised fund recommendations</li>
                            <li>Easy onboarding & KYC process</li>
                            <li>Zero commission on direct mutual funds</li>
                            <li>Long-term goal planning support</li>
                        </ul>
                        <p className='font-medium text-new-dark-500 md:text-xl text-base leading-[1.2]'>
                            <strong className='text-new-green-500 text-xl'>Minimum SIP starts at just ₹5,000/month.</strong> No need to time the market — just stay consistent.
                        </p>

                        <h2 className='font-bold md:text-2xl text-lg text-new-blue-300'>Quick Mutual Fund Tips for 2025</h2>
                        <ul className='-mt-3 pl-5 list-disc'>
                            <li>Start with SIP — it&apos;s low risk, disciplined, and stress-free.</li>
                            <li>Stay invested for 3-5+ years for good returns.</li>
                            <li>Avoid jumping from one fund to another too quickly.</li>
                            <li>Use platforms that offer SEBI-registered direct mutual funds (like ours).</li>
                        </ul>
                        <h2 className='font-bold md:text-2xl text-lg text-new-blue-300'>Want Help Choosing the Right Mutual Fund?</h2>
                        <p className='font-medium text-new-dark-500 md:text-xl text-base leading-[1.2]'>
                            At <strong className='text-new-green-500 text-xl'>Stocktech Investment,</strong> we help individuals, families, and business owners start their investment journey with clarity and confidence. <br />
                            Speak to Vinay Agarwal today and get a free 15-minute consultation on the best mutual fund strategy for your goals.
                        </p>

                        <div className='relative w-full'>
                            <Button name='Invest Now' path='https://ekyc.motilaloswal.com/partner/mfd/?kzZWSRubKJveEvdPSlKyT2Wu8sMrWJCBeLW7vgOPP/MvViI3pMgXNVgrTzdoiAUzHqcBed8t26M0AqMGjlvii2wJXcWPs8yoJfBfUh2TkjqOpZtOzECLZ2CUZtTUFvfy2V4XVZkvYv6GYTRi7lsbl3tokOjoSBcMRC/BFw6mmpc=' calssName='ml-auto block w-[fit-content] border border-new-green-500 max-[396px]:px-4 max-[396px]:py-2 py-4 px-6 rounded-md font-semibold bg-new-green-500 text-2xl text-new-light-500 hover:bg-new-blue-300 hover:border-new-blue-300' />
                        </div>


                    </div>

                </div>
            </div>
        </section>
    )
}