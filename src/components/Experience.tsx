import React from 'react'

export default function Experience() {
    return (
        <section className='w-full relative bg-new-blue-500'>
            <div className="w-full relative grid lg:grid-cols-3 md:grid-cols-2 gap-6 ">
                <div className="w-full relative bg-new-light-500 rounded-2xl p-8">
                    <div className='w-full relative flex flex-col gap-3'>
                        <div className='w-full flex justify-center'>
                            <img src="/assets/svg/exp-01.svg" alt="hero" />
                        </div>
                        <div className='w-full mt-5 text-center'>
                            <strong className='text-2xl font-bold text-new-blue-500'>
                                10+ years of experience
                            </strong>
                        </div>
                    </div>
                </div>
                <div className="w-full relative bg-new-light-500 rounded-2xl p-8">
                    <div className='w-full relative flex flex-col gap-3'>
                        <div className='w-full flex justify-center'>
                            <img src="/assets/svg/exp-02.svg" alt="hero" />
                        </div>
                        <div className='w-full mt-5 text-center'>
                            <strong className='text-2xl font-bold text-new-blue-500'>
                                2,000 + Traders Trained
                            </strong>
                        </div>
                    </div>
                </div>
                <div className="w-full relative bg-new-light-500 rounded-2xl p-8">
                    <div className='w-full relative flex flex-col gap-3'>
                        <div className='w-full flex justify-center'>
                            <img src="/assets/svg/exp-03.svg" alt="hero" />
                        </div>
                        <div className='w-full mt-5 text-center'>
                            <strong className='text-2xl font-bold text-new-blue-500'>
                                100 + Seminars Conducted
                            </strong>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
