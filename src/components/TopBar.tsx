import React from 'react'

export default function TopBar() {
    return (
        <div className='max-[900px]:hidden w-full bg-new-green-300 px-10 py-2 '>
            <div className='w-full flex items-center justify-between'>
                <a href='https://maps.app.goo.gl/wp2kRxBidJVqACDT7' className='flex gap-2 items-center text-new-dark-300'>
                    <img src='/assets/logo/location.svg' className='h-[20px]' /> Gangapuri Colony, Mahmoorganj, Varanasi
                </a>
                <a href='mailto:stocktechinvestments@gmail.com' className='flex gap-2 items-center text-new-dark-300'>
                    <img src='/assets/logo/email-2.svg' className='h-[20px]' /> stocktechinvestments@gmail.com
                </a>
                <a href='tel:+919651727272' className='flex gap-2 items-center text-new-dark-300'>
                    <img src='/assets/logo/mobile-1.svg' className='h-[20px]' /> +91 96517 27272
                </a>
            </div>
        </div>
    )
}
