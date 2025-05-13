import Contact from '@/components/Contact'
import React from 'react'

export default function page() {
  return (
    <>
      <ContactMe />
      <Contact />
    </>
  )
}

const ContactMe = () => {
  return (
    <section className='w-full relative bg-new-light-500' style={{ paddingBottom: "10px" }}>
      <div className='w-full h-full relative flex gap-10 items-center justify-center flex-wrap'>
        <div className='w-[400px] bg-new-green-300 rounded-2xl p-5 h-full '>
          <div className='w-full h-full'>
            <div className='w-full mb-5'>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3606.9655942999866!2d82.982185!3d25.305360000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjXCsDE4JzE5LjMiTiA4MsKwNTgnNTUuOSJF!5e0!3m2!1sen!2sin!4v1747114887802!5m2!1sen!2sin"
                width="100%"
                height="250"
                style={{ border: "0", borderRadius: "16px" }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade">
              </iframe>
            </div>
            <div className='w-full'>
              <a href='https://maps.app.goo.gl/wp2kRxBidJVqACDT7' target='_blank' className='text-xl text-new-blue-300 font-semibold'>
                Gangapuri Colony, Mahmoorganj, Varanasi, Uttar Pradesh, India 221010
              </a>
            </div>
          </div>
        </div>
        <div className='w-[400px] h-full bg-new-green-300 rounded-2xl p-5'>
          <div className='w-full h-full'>
            <div className='w-full flex gap-5 items-center flex-wrap'>
              <div className='w-[50px] h-[50px] bg-new-green-500 border border-new-light-500 rounded-full flex items-center justify-center '>
                <img src="/assets/logo/mobile.svg" alt="Contact Me" className='h-[28px]' />
              </div>
              <a href="tel:+919651727272" className='font-medium text-xl text-new-dark-500'>+91 96517 27272</a>
            </div>

            <div className='w-full flex gap-5 items-center mt-5'>
              <div className='w-[50px] h-[50px] bg-new-green-500 border border-new-light-500 rounded-full flex items-center justify-center '>
                <img src="/assets/logo/email.svg" alt="Contact Me" className='h-[28px]' />
              </div>
              <a href="mailto:stocktechinvestments@gmail.com" style={{ lineBreak: "anywhere" }}
                className='font-medium text-lg text-new-dark-500 flex-[1] leading-[1.1]'>
                stocktechinvestments@gmail.com
              </a>
            </div>

            <div className='w-full mt-8 flex flex-wrap gap-5'>
              <a href="tel:+919651727272" className='block px-8 py-3 border border-new-green-500 rounded-lg text-new-green-500 text-xl '>Call Me</a>
              <a href="mailto:stocktechinvestments@gmail.com" className='block px-8 py-3 border border-new-green-500 rounded-lg text-new-light-500 bg-new-green-500 text-xl '>Mail Me</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}