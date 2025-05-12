import React from 'react'

export default function Advice() {
    return (
        <section className='relative w-full bg-new-light-500'>
            <div className='w-full relative'>
                <h2 className='text-[40px] text-center max-w-2xl mx-auto font-bold text-new-blue-300 '
                    style={{ lineHeight: '1.2' }}>
                    No Matter Who You Are, You Can <strong className='text-new-green-500'>Invest.</strong>
                </h2>

                <div className='w-full mt-12 relative'>
                    <div className='w-full grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  gap-5'>
                        <div className="w-full relative p-8 bg-new-blue-500 rounded-2xl">
                            <div className="w-full flex flex-col gap-5">
                                <img src="/assets/svg/house-wife.svg" alt="" style={{ height: "160px" }} />
                                <h2 className='font-bold text-new-light-500 text-3xl text-center'>Housewife</h2>
                                <p className='font-normal text-new-light-500 text-lg' style={{ lineHeight: "1.2" }}>
                                    Build a secure future—start SIPs and save for your family&apos;s goals.
                                    <br />
                                    <br />
                                    No income? No problem. Begin your investment journey with small, regular contributions.
                                </p>
                            </div>
                        </div>
                        <div className="w-full relative p-8 bg-new-blue-500 rounded-2xl">
                            <div className="w-full flex flex-col gap-3">
                                <img src="/assets/svg/student-01.svg" alt="" style={{ height: "160px" }} />
                                <h2 className='font-bold text-new-light-500 text-3xl text-center'>Students</h2>
                                <p className='font-normal text-new-light-500 text-lg' style={{ lineHeight: "1.2" }}>
                                    Start small, start early. Grow wealth over time with smart habits.
                                    <br />
                                    <br />
                                    Learn the basics of investing, develop financial discipline, and create a strong foundation for your future.
                                </p>
                            </div>
                        </div>
                        <div className="w-full relative p-8 bg-new-blue-500 rounded-2xl">
                            <div className="w-full flex flex-col gap-3">
                                <img src="/assets/svg/working.svg" alt="" style={{ height: "160px" }} />
                                <h2 className='font-bold text-new-light-500 text-3xl text-center'>Working Professionals</h2>
                                <p className='font-normal text-new-light-500 text-lg' style={{ lineHeight: "1.2" }}>
                                    Put your income to work with strategic, long-term investments.
                                    <br />
                                    <br />
                                    Balance your expenses and savings with expert guidance to achieve your short-term and retirement goals.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
