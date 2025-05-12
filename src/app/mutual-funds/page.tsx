import Button from '@/components/Button'
import Calculator from '@/components/Calculator'
import Contact from '@/components/Contact'
import React from 'react'

export default function page() {
    return (
        <>
            <Hero />
            <AboutMutualFund />
            <Calculator />
            <TypeofMutual />
            <Mutual />
            <HowTo />
            <WhyMutual />
            <WhyUs />
            <Contact />
        </>
    )
}

function Hero() {
    return (
        <section className='bg-new-green-300 w-full z-[5]'>
            <div className='w-full relative flex gap-3 z-4 max-md:flex-col max-md:gap-10'>
                <div className='relative w-full pt-2'>
                    <h1 className='hero-heading text-[64px] font-bold text-new-blue-300' style={{ lineHeight: '1.1' }}>
                        Start Growing Your <span className='text-new-green-500'>Wealth</span>  with Mutual Funds
                    </h1>
                    <p className='text-3xl font-bold text-new-dark-500 mt-3 flex gap-2 items-end txt'
                        style={{ lineHeight: '1' }}>
                        <span className='text-new-green-500'>Invest smartly. Invest with confidence.</span>
                    </p>

                    <p className='text-lg font-light text-new-dark-300 mt-5 max-w-lg '>
                        At Stocktech Investments, we make mutual fund investing easy and understandable. Whether you&apos;re planning for the future, saving for a goal, or just starting out, we&apos;re here to guide you every step of the way.
                    </p>

                </div>
                <div className='relative z-[5] lg:w-full max-md:w-full flex justify-center items-center '>
                    <img src="/assets/mutual/banner-02.svg" alt="hero" className=' z-[5] relative' />
                </div>
            </div>
        </section>
    )
}

function AboutMutualFund() {
    return (
        <section className='relative w-full bg-new-light-500'>
            <div className="w-full relative flex gap-3 max-md:flex-col-reverse max-md:gap-10">
                <div className="relative w-full">
                    <h2 className='text-[40px] font-bold text-new-blue-300' style={{ lineHeight: '1.1' }}>
                        What Are <strong className='text-new-green-500'>Mutual Funds?</strong>
                    </h2>
                    <p className='text-xl font-medium text-new-dark-300 mt-5' style={{ lineHeight: '1.1' }}>
                        Mutual funds are professionally managed investment schemes where your money is pooled with money from other investors. This pool of money is then invested in a variety of financial assets like stocks, bonds, or a combination of both. These funds are managed by experienced fund managers who decide where and how to invest the pooled money based on the fund&apos;s goal.

                    </p>
                    <p className='text-xl font-medium text-new-dark-300 mt-5' style={{ lineHeight: '1.1' }}>
                        You don&apos;t need to be an expert to invest in mutual funds. You simply choose a fund that fits your financial goals and risk comfort, and the fund manager does the rest. It&apos;s one of the most accessible, low-stress ways to enter the world of investing.
                    </p>

                    <div className='relative mt-10 w-full'>
                        <Button name='Invest Now' path='https://ekyc.motilaloswal.com/partner/mfd/?kzZWSRubKJveEvdPSlKyT2Wu8sMrWJCBeLW7vgOPP/MvViI3pMgXNVgrTzdoiAUzHqcBed8t26M0AqMGjlvii2wJXcWPs8yoJfBfUh2TkjqOpZtOzECLZ2CUZtTUFvfy2V4XVZkvYv6GYTRi7lsbl3tokOjoSBcMRC/BFw6mmpc=' calssName='block w-[fit-content] border border-new-green-500 max-[396px]:px-4 max-[396px]:py-2 py-4 px-6 rounded-md font-semibold bg-new-green-500 text-2xl text-new-light-500 hover:bg-new-blue-300 hover:border-new-blue-300' />
                    </div>

                </div>
                <div className="relative lg:w-full max-md:w-full flex justify-center items-center">
                    <img src="/assets/mutual/banner.svg" alt="hero" className='' />
                </div>
            </div>
        </section>
    )
}

function TypeofMutual() {
    return (
        <section className='bg-new-light-500 w-full'>
            <div className='w-full h-full relative flex gap-3 max-md:flex-col max-md:gap-10'>
                <div className="relative h-full lg:w-full max-md:w-full flex justify-center items-center">
                    <img src="/assets/mutual/type-mutual.svg" alt="hero" />
                </div>
                <div className="w-full relative">
                    <h2 className='text-[35px] font-bold text-new-blue-300' style={{ lineHeight: '1.1' }}>
                        How Do <strong className='text-new-green-500'>Mutual Funds</strong> Work?
                    </h2>

                    <p className='text-xl font-medium text-new-blue-300 mt-5' style={{ lineHeight: '1' }}>
                        Here&apos;s a simple breakdown:
                    </p>

                    <p className='text-lg font-light text-new-dark-300 mt-5 flex flex-col gap-2'>
                        <span className='flex gap-3 items-start leading-none'>
                            <img src="/assets/svg/check.svg" alt="angelone" className='inline h-[20px]' />
                            You invest your money in a mutual fund of your choice.
                        </span>
                        <span className='flex gap-3 items-start leading-none'>
                            <img src="/assets/svg/check.svg" alt="angelone" className='inline h-[20px]' />
                            Your money is combined with funds from other investors.
                        </span>
                        <span className='flex gap-3 items-start leading-none'>
                            <img src="/assets/svg/check.svg" alt="angelone" className='inline h-[20px]' />
                            A professional fund manager invests the pooled money in a diversified portfolio of assets.
                        </span>
                        <span className='flex gap-3 items-start leading-none'>
                            <img src="/assets/svg/check.svg" alt="angelone" className='inline h-[20px]' />
                            The performance of these assets determines your returns. This can include capital gains, dividends, or interest.
                        </span>
                        <span className='flex gap-3 items-start leading-[1.1]'>
                            <img src="/assets/svg/check.svg" alt="angelone" className='inline h-[20px]' />
                            The goal is to grow your wealth over time while managing risks. You can invest through a Systematic Investment Plan (SIP) or by making a one-time lump sum investment.
                        </span>
                    </p>

                    <div className='relative mt-10 w-full'>
                        <Button name='Invest Now' path='https://ekyc.motilaloswal.com/partner/mfd/?kzZWSRubKJveEvdPSlKyT2Wu8sMrWJCBeLW7vgOPP/MvViI3pMgXNVgrTzdoiAUzHqcBed8t26M0AqMGjlvii2wJXcWPs8yoJfBfUh2TkjqOpZtOzECLZ2CUZtTUFvfy2V4XVZkvYv6GYTRi7lsbl3tokOjoSBcMRC/BFw6mmpc=' calssName='ml-auto block w-[fit-content] border border-new-green-500 max-[396px]:px-4 max-[396px]:py-2 py-4 px-6 rounded-md font-semibold bg-new-green-500 text-2xl text-new-light-500 hover:bg-new-blue-300 hover:border-new-blue-300' />
                    </div>
                </div>
            </div>
        </section>
    )
}

function Mutual() {
    return (
        <section className='relative w-full bg-new-light-500'>
            <div className="w-full relative flex gap-3 max-md:flex-col-reverse max-md:gap-10">
                <div className="relative w-full">
                    <h2 className='text-[40px] font-bold text-new-blue-300' style={{ lineHeight: '1.1' }}>
                        Types of Mutual Funds <strong className='text-new-green-500'>We Offer</strong>
                    </h2>
                    <p className='text-lg font-medium text-new-blue-300 mt-5' style={{ lineHeight: '1' }}>
                        Mutual funds come in different types to suit your needs and financial preferences. At Stocktech Investments, we help you choose what&apos;s best for you:
                    </p>

                    <p className='text-base font-bold text-new-dark-500 mt-5 flex flex-col gap-2'>
                        <span className='flex gap-3 items-start leading-none'>
                            <img src="/assets/svg/check.svg" alt="angelone" className='inline h-[20px]' />
                            Equity Mutual Funds
                        </span>

                    </p>
                    <ul className='mt-3 list-disc leading-[1.1] block pl-5 font-light text-new-dark-300'>
                        <li>
                            Invest mostly in company stocks. Suitable for long-term wealth creation.
                        </li>
                        <li>
                            Options include Large Cap (well-established companies), Mid Cap (growing companies), and Small Cap (emerging companies).
                        </li>
                    </ul>
                    <p className='text-base font-bold text-new-dark-500 mt-5 flex flex-col gap-2'>
                        <span className='flex gap-3 items-start leading-none'>
                            <img src="/assets/svg/check.svg" alt="angelone" className='inline h-[20px]' />
                            Debt Mutual Funds
                        </span>

                    </p>
                    <ul className='mt-3 list-disc leading-[1.1] block pl-5 font-light text-new-dark-300'>
                        <li>
                            Invest in government bonds, corporate debt, and fixed-income products.
                        </li>
                        <li>
                            Ideal for those seeking stability, lower risk, and regular returns.
                        </li>
                    </ul>
                    <p className='text-base font-bold text-new-dark-500 mt-5 flex flex-col gap-2'>
                        <span className='flex gap-3 items-start leading-none'>
                            <img src="/assets/svg/check.svg" alt="angelone" className='inline h-[20px]' />
                            Hybrid Mutual Funds
                        </span>

                    </p>
                    <ul className='mt-3 list-disc leading-[1.1] block pl-5 font-light text-new-dark-300'>
                        <li>
                            Combine both equity and debt investments.
                        </li>
                        <li>
                            Good for balanced growth with moderate risk.
                        </li>
                    </ul>
                    <p className='text-base font-bold text-new-dark-500 mt-5 flex flex-col gap-2'>
                        <span className='flex gap-3 items-start leading-none'>
                            <img src="/assets/svg/check.svg" alt="angelone" className='inline h-[20px]' />
                            Liquid Mutual Funds
                        </span>
                    </p>
                    <ul className='mt-3 list-disc leading-[1.1] block pl-5 font-light text-new-dark-300'>
                        <li>
                            Invest in short-term money market instruments.
                        </li>
                        <li>
                            Best for short-term goals, emergency funds, or idle cash.
                        </li>
                    </ul>
                    <p className='text-base font-bold text-new-dark-500 mt-5 flex flex-col gap-2'>
                        <span className='flex gap-3 items-start leading-none'>
                            <img src="/assets/svg/check.svg" alt="angelone" className='inline h-[20px]' />
                            Tax Saving Funds (ELSS)
                        </span>

                    </p>
                    <ul className=' mt-3 list-disc leading-[1.1] block pl-5 font-light text-new-dark-300'>
                        <li>
                            Offer tax deductions under Section 80C.
                        </li>
                        <li>
                            Invest in equities with a lock-in period of 3 years.
                        </li>
                    </ul>

                </div>
                <div className="relative lg:w-full max-md:w-full flex justify-center items-center">
                    <img src="/assets/mutual/typ.svg" alt="hero" className='' />
                </div>
            </div>
        </section>
    )
}

function HowTo() {
    return (
        <section className='bg-new-light-500 w-full'>
            <div className='w-full h-full relative flex gap-3 max-md:flex-col max-md:gap-10'>
                <div className="relative h-full lg:w-full max-md:w-full flex justify-center items-center">
                    <img src="/assets/mutual/why.svg" alt="hero" />
                </div>
                <div className="w-full relative">
                    <h2 className='text-[35px] font-bold text-new-blue-300' style={{ lineHeight: '1.1' }}>
                        How to Start <strong className='text-new-green-500'>Investing</strong> in Mutual Funds with Us.
                    </h2>

                    <p className='text-xl font-medium text-new-blue-300 mt-5' style={{ lineHeight: '1' }}>
                        Getting started with Stocktech Investments is quick, smooth, and fully personalized. Here&apos;s how we help:
                    </p>

                    <p className='text-lg font-light text-new-dark-300 mt-5 flex flex-col gap-2'>
                        <span className='flex gap-3 items-start leading-none'>
                            <img src="/assets/svg/check.svg" alt="angelone" className='inline h-[20px]' />
                            Understand Your Financial GoalsWhether you&apos;re saving for retirement, education, a house, or simply growing your wealth, we help define your goals clearly.
                        </span>

                    </p>
                    <p className='text-lg font-light text-new-dark-300 mt-5 flex flex-col gap-2'>
                        <span className='flex gap-3 items-start leading-none'>
                            <img src="/assets/svg/check.svg" alt="angelone" className='inline h-[20px]' />
                            Assess Your Risk ProfileEveryone has a different comfort level with risk. We assess your profile to find the right balance of safety and growth.
                        </span>
                    </p>
                    <p className='text-lg font-light text-new-dark-300 mt-5 flex flex-col gap-2'>
                        <span className='flex gap-3 items-start leading-none'>
                            <img src="/assets/svg/check.svg" alt="angelone" className='inline h-[20px]' />
                            Choose the Right FundBased on your goal and risk level, we help you select funds that match your needs, whether it&apos;s aggressive growth or low-risk returns.
                        </span>
                    </p>
                    <p className='text-lg font-light text-new-dark-300 mt-5 flex flex-col gap-2'>
                        <span className='flex gap-3 items-start leading-none'>
                            <img src="/assets/svg/check.svg" alt="angelone" className='inline h-[20px]' />
                            Pick an Investment StyleYou can go with a SIP for regular, small investments or choose a one-time lump sum option. We help you decide what&apos;s best.
                        </span>
                    </p>
                    <p className='text-lg font-light text-new-dark-300 mt-5 flex flex-col gap-2'>
                        <span className='flex gap-3 items-start leading-none'>
                            <img src="/assets/svg/check.svg" alt="angelone" className='inline h-[20px]' />
                            Track and AdjustInvesting is a journey. We help you monitor performance regularly and suggest changes as life or markets evolve.
                        </span>
                    </p>
                    <p className='text-lg font-light text-new-dark-300 mt-5 flex flex-col gap-2'>
                        <span className='flex gap-3 items-start leading-none'>
                            <img src="/assets/svg/check.svg" alt="angelone" className='inline h-[20px]' />
                            Paperwork Made EasyWe take care of all the documentation and KYC requirements, ensuring a hassle-free onboarding process.
                        </span>
                    </p>

                    <div className='relative mt-10 w-full'>
                        <Button name='Invest Now' path='https://ekyc.motilaloswal.com/partner/mfd/?kzZWSRubKJveEvdPSlKyT2Wu8sMrWJCBeLW7vgOPP/MvViI3pMgXNVgrTzdoiAUzHqcBed8t26M0AqMGjlvii2wJXcWPs8yoJfBfUh2TkjqOpZtOzECLZ2CUZtTUFvfy2V4XVZkvYv6GYTRi7lsbl3tokOjoSBcMRC/BFw6mmpc=' calssName='ml-auto block w-[fit-content] border border-new-green-500 max-[396px]:px-4 max-[396px]:py-2 py-4 px-6 rounded-md font-semibold bg-new-green-500 text-2xl text-new-light-500 hover:bg-new-blue-300 hover:border-new-blue-300' />
                    </div>
                </div>
            </div>
        </section>
    )
}

function WhyMutual() {
    return (
        <section className='bg-new-light-500 w-full'>
            <div className='w-full h-full relative flex gap-3 max-md:flex-col max-md:gap-10'>

                <div className="w-full relative">
                    <h2 className='text-[35px] font-bold text-new-blue-300' style={{ lineHeight: '1.1' }}>
                        Why Should You <strong className='text-new-green-500'>Invest</strong> in Mutual Funds ?
                    </h2>

                    <p className='text-xl font-medium text-new-blue-300 mt-5' style={{ lineHeight: '1' }}>
                        Mutual funds are one of the most convenient and reliable ways to build wealth. Here&apos;s why:
                    </p>

                    <p className='text-base font-bold text-new-dark-500 mt-5 flex flex-col gap-2'>
                        <span className='flex gap-3 items-start leading-none'>
                            <img src="/assets/svg/check.svg" alt="angelone" className='inline h-[20px]' />
                            Diversification
                        </span>

                    </p>
                    <ul className='mt-1 list-disc leading-[1.1] block pl-5 font-light text-new-dark-300'>
                        <li>
                            Your money is invested across many assets, reducing risk.
                        </li>
                    </ul>
                    <p className='text-base font-bold text-new-dark-500 mt-5 flex flex-col gap-2'>
                        <span className='flex gap-3 items-start leading-none'>
                            <img src="/assets/svg/check.svg" alt="angelone" className='inline h-[20px]' />
                            Professional Management
                        </span>

                    </p>
                    <ul className='mt-1 list-disc leading-[1.1] block pl-5 font-light text-new-dark-300'>
                        <li>
                            Expert fund managers make smart decisions for you.
                        </li>
                    </ul>
                    <p className='text-base font-bold text-new-dark-500 mt-5 flex flex-col gap-2'>
                        <span className='flex gap-3 items-start leading-none'>
                            <img src="/assets/svg/check.svg" alt="angelone" className='inline h-[20px]' />
                            Flexibility
                        </span>

                    </p>
                    <ul className='mt-1 list-disc leading-[1.1] block pl-5 font-light text-new-dark-300'>
                        <li>
                            Choose funds that suit your goals, time frame, and comfort.
                        </li>
                    </ul>
                    <p className='text-base font-bold text-new-dark-500 mt-5 flex flex-col gap-2'>
                        <span className='flex gap-3 items-start leading-none'>
                            <img src="/assets/svg/check.svg" alt="angelone" className='inline h-[20px]' />
                            Tax Benefits
                        </span>

                    </p>
                    <ul className='mt-1 list-disc leading-[1.1] block pl-5 font-light text-new-dark-300'>
                        <li>
                            Save taxes under Section 80C with ELSS funds.
                        </li>
                    </ul>
                    <p className='text-base font-bold text-new-dark-500 mt-5 flex flex-col gap-2'>
                        <span className='flex gap-3 items-start leading-none'>
                            <img src="/assets/svg/check.svg" alt="angelone" className='inline h-[20px]' />
                            Start Small
                        </span>

                    </p>
                    <ul className='mt-1 list-disc leading-[1.1] block pl-5 font-light text-new-dark-300'>
                        <li>
                            You can begin with as little as ₹5000 per month.
                        </li>
                    </ul>
                    <p className='text-base font-bold text-new-dark-500 mt-5 flex flex-col gap-2'>
                        <span className='flex gap-3 items-start leading-none'>
                            <img src="/assets/svg/check.svg" alt="angelone" className='inline h-[20px]' />
                            Liquidity
                        </span>

                    </p>
                    <ul className='mt-1 list-disc leading-[1.1] block pl-5 font-light text-new-dark-300'>
                        <li>
                            Most mutual funds allow easy withdrawal whenever you need the money.
                        </li>
                    </ul>

                    <div className='relative mt-10 w-full'>
                        <Button name='Invest Now' path='https://ekyc.motilaloswal.com/partner/mfd/?kzZWSRubKJveEvdPSlKyT2Wu8sMrWJCBeLW7vgOPP/MvViI3pMgXNVgrTzdoiAUzHqcBed8t26M0AqMGjlvii2wJXcWPs8yoJfBfUh2TkjqOpZtOzECLZ2CUZtTUFvfy2V4XVZkvYv6GYTRi7lsbl3tokOjoSBcMRC/BFw6mmpc=' calssName='block w-[fit-content] border border-new-green-500 max-[396px]:px-4 max-[396px]:py-2 py-4 px-6 rounded-md font-semibold bg-new-green-500 text-2xl text-new-light-500 hover:bg-new-blue-300 hover:border-new-blue-300' />
                    </div>
                </div>

                <div className="relative h-full lg:w-full max-md:w-full flex justify-center items-center">
                    <img src="/assets/mutual/new.png" alt="hero" />
                </div>
            </div>
        </section>
    )
}

function WhyUs() {
    return (
        <section className='bg-new-light-500 w-full'>
            <div className='w-full h-full relative flex gap-3 max-md:flex-col max-md:gap-10'>

                <div className="relative h-full lg:w-full max-md:w-full flex justify-center items-center">
                    <img src="/assets/mutual/why-us.svg" alt="hero" />
                </div>

                <div className="w-full relative">
                    <h2 className='text-[35px] font-bold text-new-blue-300' style={{ lineHeight: '1.1' }}>
                        Why Choose  <strong className='text-new-green-500'>Stocktech Investments ?</strong>
                    </h2>

                    <p className='text-xl font-medium text-new-blue-300 mt-5' style={{ lineHeight: '1' }}>
                        When it comes to mutual funds, we don&apos;t believe in a one-size-fits-all approach. Here&apos;s what makes us different:
                    </p>

                    <p className='text-base font-bold text-new-dark-500 mt-5 flex flex-col gap-2'>
                        <span className='flex gap-3 items-start leading-none'>
                            <img src="/assets/svg/check.svg" alt="angelone" className='inline h-[20px]' />
                            Personalized Advisory
                        </span>

                    </p>
                    <ul className='mt-1 list-disc leading-[1.1] block pl-5 font-light text-new-dark-300'>
                        <li>
                            We understand your unique goals before suggesting any fund.
                        </li>
                    </ul>
                    <p className='text-base font-bold text-new-dark-500 mt-5 flex flex-col gap-2'>
                        <span className='flex gap-3 items-start leading-none'>
                            <img src="/assets/svg/check.svg" alt="angelone" className='inline h-[20px]' />
                            Experience That Matters
                        </span>

                    </p>
                    <ul className='mt-1 list-disc leading-[1.1] block pl-5 font-light text-new-dark-300'>
                        <li>
                            Our founder, Mr. Vinay Agrawal, brings over 10 years of stock market and investment expertise.
                        </li>
                    </ul>
                    <p className='text-base font-bold text-new-dark-500 mt-5 flex flex-col gap-2'>
                        <span className='flex gap-3 items-start leading-none'>
                            <img src="/assets/svg/check.svg" alt="angelone" className='inline h-[20px]' />
                            Trusted Franchise
                        </span>

                    </p>
                    <ul className='mt-1 list-disc leading-[1.1] block pl-5 font-light text-new-dark-300'>
                        <li>
                            We are an authorized AngelOne partner, adding credibility and access to top-rated products.
                        </li>
                    </ul>
                    <p className='text-base font-bold text-new-dark-500 mt-5 flex flex-col gap-2'>
                        <span className='flex gap-3 items-start leading-none'>
                            <img src="/assets/svg/check.svg" alt="angelone" className='inline h-[20px]' />
                            Transparent Process
                        </span>

                    </p>
                    <ul className='mt-1 list-disc leading-[1.1] block pl-5 font-light text-new-dark-300'>
                        <li>
                            No hidden charges, no jargon. Just clear, honest advice.
                        </li>
                    </ul>
                    <p className='text-base font-bold text-new-dark-500 mt-5 flex flex-col gap-2'>
                        <span className='flex gap-3 items-start leading-none'>
                            <img src="/assets/svg/check.svg" alt="angelone" className='inline h-[20px]' />
                            Ongoing Support
                        </span>

                    </p>
                    <ul className='mt-1 list-disc leading-[1.1] block pl-5 font-light text-new-dark-300'>
                        <li>
                            We don&apos;t stop at investment. We track, report, and update you regularly.
                        </li>
                    </ul>

                    <div className='relative mt-10 w-full'>
                        <Button name='Start Now' path='https://ekyc.motilaloswal.com/partner/mfd/?kzZWSRubKJveEvdPSlKyT2Wu8sMrWJCBeLW7vgOPP/MvViI3pMgXNVgrTzdoiAUzHqcBed8t26M0AqMGjlvii2wJXcWPs8yoJfBfUh2TkjqOpZtOzECLZ2CUZtTUFvfy2V4XVZkvYv6GYTRi7lsbl3tokOjoSBcMRC/BFw6mmpc=' calssName='ml-auto block w-[fit-content] border border-new-green-500 max-[396px]:px-4 max-[396px]:py-2 py-4 px-6 rounded-md font-semibold bg-new-green-500 text-2xl text-new-light-500 hover:bg-new-blue-300 hover:border-new-blue-300' />
                    </div>
                </div>


            </div>
        </section>
    )
}