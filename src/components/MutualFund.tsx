import React from 'react'
import Button from './Button'

export default function MutualFund() {
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
                        <Button name='Invest Now' path='https://ekyc.motilaloswal.com/partner/mfd/?kzZWSRubKJveEvdPSlKyT2Wu8sMrWJCBeLW7vgOPP/MvViI3pMgXNVgrTzdoiAUzHqcBed8t26M0AqMGjlvii2wJXcWPs8yoJfBfUh2TkjqOpZtOzECLZ2CUZtTUFvfy2V4XVZkvYv6GYTRi7lsbl3tokOjoSBcMRC/BFw6mmpc=' calssName='block w-[fit-content] border border-new-blue-500 max-[396px]:px-4 max-[396px]:py-2 py-4 px-6 rounded-md font-semibold bg-new-blue-500 text-2xl text-new-light-500 hover:bg-new-blue-300 hover:border-new-blue-300' />
                    </div>

                </div>
                <div className="relative lg:w-full max-md:w-full flex justify-center items-center">
                    <img src="/assets/mutual/banner.svg" alt="hero" className='' />
                </div>
            </div>
        </section>
    )
}
