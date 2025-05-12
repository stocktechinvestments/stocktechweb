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
                        What&apos;s the Best Way to <strong className='text-new-green-500'>Invest in Mutual Funds</strong> - All at Once or Bit by Bit?
                    </h1>

                    <div className='w-full'>
                        <img src="/assets/blogs/15.png" alt="" className='md:h-[450px] h-[350px] block mx-auto' />
                    </div>

                    <div className='w-full relative flex flex-col gap-5'>
                        <p className='font-medium text-new-dark-500 md:text-xl text-base leading-[1.2]'>
                            If you&apos;ve ever thought about investing in mutual funds, you&apos;ve probably come across two common options: <strong className='text-new-green-500'>Lumpsum and SIP</strong> (Systematic Investment Plan). Both are smart ways to grow your money, but they work differently. So which one is right for you?
                            <br /><br />
                            In this blog, we&apos;ll keep it simple and user-friendly, helping you understand how both options work and how to decide what suits your financial life better
                        </p>

                        <h2 className='font-bold md:text-2xl text-lg text-new-blue-300'>Two Ways, One Goal - Growing Your Money</h2>
                        <p className='font-medium text-new-dark-500 md:text-xl text-base leading-[1.2]'>
                            Mutual funds are a great way to build wealth over time. But how you invest matters too.
                        </p>
                        <ul className='-mt-3 pl-5 list-disc text-new-dark-300'>
                            <li>In a <strong className='text-new-green-500'>Lumpsum</strong>, you invest a large amount of money at once.</li>
                            <li>In an <strong className='text-new-green-500'>SIP</strong>, you invest smaller amounts regularly (monthly or quarterly).</li>
                        </ul>
                        <p className='font-medium text-new-dark-500 md:text-xl text-base leading-[1.2]'>
                            Both aim to help your money grow through professionally managed funds. But your choice depends on your income, goals, and mindset.
                        </p>

                        <h2 className='font-bold md:text-2xl text-lg text-new-blue-300'>SIP - For Those Who Like to Start Small and Stay Consistent</h2>
                        <p className='font-medium text-new-dark-500 md:text-xl text-base leading-[1.2]'>
                            A Systematic Investment Plan (SIP) is perfect for people who earn monthly and prefer to invest a little every month—like <strong className='text-new-green-500'>₹2,000 or more.</strong> It builds a saving habit and doesn&apos;t affect your budget much.
                            <br />
                            <br />
                            With SIPs, you don&apos;t have to time the market. Whether the market is high or low, your money gets invested regularly. Over time, this helps you buy fund units at an average price—a benefit known as <strong className='text-new-green-500'>rupee cost averaging.</strong> Plus, compounding helps your money grow faster if you stay invested for the long term.
                            <br /><br />
                            SIPs are great if:
                        </p>
                        <ul className='-mt-3 pl-5 list-disc text-new-dark-300'>
                            <li>You have regular income</li>
                            <li>You want to invest without stress</li>
                            <li>You&apos;re planning for long-term goals like a house, education, or retirement</li>
                        </ul>


                        <h2 className='font-bold md:text-2xl text-lg text-new-blue-300'>Lump Sum - For Those with Idle Money Ready to Work</h2>
                        <p className='font-medium text-new-dark-500 md:text-xl text-base leading-[1.2]'>
                            Lump sum investment is when you put in a big amount—say ₹1 lakh or more—at once. It&apos;s a good choice if you&apos;ve received a bonus, sold property, or have money sitting idle in your bank.
                            <br />
                            <br />
                            When the market is down or stable, lump sum investing can give you the benefit of buying more fund units at a lower price. But it also comes with higher risk—because if the market drops right after you invest, your full amount gets affected.
                            <br /><br />
                            Lump sum is suitable if:
                        </p>
                        <ul className='-mt-3 pl-5 list-disc text-new-dark-300'>
                            <li>You have a large amount ready to invest</li>
                            <li>You understand market movements or have expert guidance</li>
                            <li>You are okay with short-term ups and downs for long-term gain</li>
                        </ul>

                        <h2 className='font-bold md:text-2xl text-lg text-new-blue-300'>Can You Do Both? Yes, and It&apos;s Actually Smart!</h2>
                        <p className='font-medium text-new-dark-500 md:text-xl text-base leading-[1.2]'>
                            Many investors combine both strategies. They start with a lump sum and then continue with SIPs. For example, if you have ₹1 lakh today, you can invest ₹50,000 as a lump sum and the rest as monthly SIPs.
                            <br />
                            <br />
                            This approach helps you put your idle money to work right away and build a habit of regular investing. It also balances the benefits of timing and consistency. If you&apos;re not sure how to split the amount, a financial advisor can help you plan smartly.
                        </p>

                        <h2 className='font-bold md:text-2xl text-lg text-new-blue-300'>So, Which One Should You Choose?</h2>
                        <p className='font-medium text-new-dark-500 md:text-xl text-base leading-[1.2]'>
                            There&apos;s no one-size-fits-all answer. The best way to invest in mutual funds depends on <strong className='text-new-green-500'>your lifestyle, your savings, and your comfort with risk.</strong> SIPs are ideal for most salaried people because they&apos;re simple, flexible, and build good money habits. Lump sum is great when you have extra funds and want to make the most of market opportunities.
                            <br />
                            <br />
                            The good news? <strong className='text-new-green-500'>Both help your money grow,</strong> if you stay patient and invested for the long term.
                        </p>

                        <h2 className='font-bold md:text-2xl text-lg text-new-blue-300'>Final Word - Start with What You Have, Grow at Your Pace</h2>
                        <p className='font-medium text-new-dark-500 md:text-xl text-base leading-[1.2]'>
                            You don&apos;t need to wait for a huge amount to start investing. Begin with what you have—even ₹2,000 per month—and build from there. What matters most is staying consistent, choosing the right fund, and giving your money time to grow
                            <br />
                            <br />
                            At <strong className='text-new-green-500'>Stocktech Investment,</strong> we guide you through both SIP and lump sum options based on your goals. Whether you want to invest small every month or use a one-time amount wisely, we&apos;re here to help.
                            <br />
                            <br />
                            <strong className='text-new-green-500 text-xl'>Need help deciding how to invest?</strong> <br />
                            Talk to <strong className='text-new-green-500'>Vinay Agarwal</strong> at Stocktech Investment and get a simple, personalized plan to start your mutual fund journey today.
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