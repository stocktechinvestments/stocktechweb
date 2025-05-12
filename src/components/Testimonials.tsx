import React from 'react'

export default function Testimonials() {
    return (
        <section className='bg-new-light-500 relative w-full'>
            <h2 className='text-[40px] text-center font-bold text-new-blue-300' style={{ lineHeight: '1.1' }}>
                Testimonials
            </h2>
            <div className='mt-10 relative w-full grid lg:grid-cols-3 md:grid-cols-2 max-[768px]:grid-cols-2 max-[520px]:grid-cols-1 gap-8'>

                <div className='w-full rounded-2xl'>
                    <iframe
                        className='w-full h-[450px] rounded-2xl'
                        src="https://www.youtube.com/embed/-SICBxHNtbY"
                        title="YouTube video player"
                        referrerPolicy="strict-origin-when-cross-origin"></iframe>
                </div>
                <div className='w-full'>
                    <iframe
                        className='w-full h-[450px] rounded-2xl'
                        src="https://www.youtube.com/embed/ft6_VruNEjk"
                        title="YouTube video player"
                        referrerPolicy="strict-origin-when-cross-origin"></iframe>
                </div>
                <div className='w-full'>
                    <iframe
                        className='w-full h-[450px] rounded-2xl'
                        src="https://www.youtube.com/embed/kfYb16RO-ko"
                        title="YouTube video player"
                        referrerPolicy="strict-origin-when-cross-origin"></iframe>
                </div>

            </div>
        </section>
    )
}
