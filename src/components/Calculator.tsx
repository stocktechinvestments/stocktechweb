'use client';
import React, { useEffect, useState } from 'react';
import Button from './Button';
import { Charts } from './Chart';

export default function Calculator() {
    const [data, setData] = useState({
        amount: 5000,
        withdrawal: 5000,
        rate: 12,
        time: 10,
    });
    const [monthlyAmount, setMonthlyAmount] = useState(0);

    const [activeTab, setActiveTab] = useState(0);
    const [investedAmount, setInvestedAmount] = useState(0);
    const [totalValue, setTotalValue] = useState(0);
    const [interestEarned, setInterestEarned] = useState(0);
    const [withdrawalAmount, setWithdrawalAmount] = useState(0)
    const [availableAmount, setAvailableAmount] = useState(0)

    const tab = [
        {
            name: 'SIP',
            calculate: calculateSIP,
        },
        {
            name: 'Lumpsum',
            calculate: calculateLumpsum,
        },
        {
            name: 'Reverse SIP',
            calculate: calculateReverseSIP,
        },
        {
            name: 'SWP',
            calculate: calculateSWP,
        },
    ];


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setData(prev => ({
            ...prev,
            [name]: Number(value),
        }));
    };

    function calculateSIP() {
        if (!data.amount || !data.rate || !data.time) {
            setInvestedAmount(0);
            setTotalValue(0);
            setInterestEarned(0);
            return;
        }

        const amount = data.amount;
        const annualRate = data.rate;
        const time = data.time;

        const monthlyRate = annualRate / 12 / 100;
        const totalMonths = time * 12;

        const maturityAmount = amount * ((Math.pow(1 + monthlyRate, totalMonths) - 1) / monthlyRate) * (1 + monthlyRate);
        const totalInvestment = amount * totalMonths;
        const estimatedReturns = maturityAmount - totalInvestment;

        setInvestedAmount(Math.round(totalInvestment));
        setTotalValue(Math.round(maturityAmount));
        setInterestEarned(Math.round(estimatedReturns));
    }

    function calculateLumpsum() {
        if (!data.amount || !data.rate || !data.time) {
            setInvestedAmount(0);
            setTotalValue(0);
            setInterestEarned(0);
            return;
        }

        const amount = data.amount;
        const annualRate = data.rate;
        const time = data.time;

        const maturityAmount = amount * Math.pow(1 + (annualRate / 100), time);
        const totalInvestment = amount;
        const estimatedReturns = maturityAmount - totalInvestment;

        setInvestedAmount(Math.round(totalInvestment));
        setTotalValue(Math.round(maturityAmount));
        setInterestEarned(Math.round(estimatedReturns));
    }

    function calculateReverseSIP() {
        if (!data.amount || !data.rate || !data.time) {
            setInvestedAmount(0);
            setTotalValue(0);
            setInterestEarned(0);
            return;
        }

        const amount = data.amount;
        const annualRate = data.rate;
        const time = data.time;

        const monthlyRate = annualRate / 12 / 100;
        const totalMonths = time * 12;

        const denominator = ((Math.pow(1 + monthlyRate, totalMonths) - 1) / monthlyRate) * (1 + monthlyRate);
        const requiredMonthlySIP = amount / denominator;


        const totalInvestment = requiredMonthlySIP * totalMonths;
        const maturityAmount = amount;
        const estimatedReturns = maturityAmount - totalInvestment;

        setInvestedAmount(Math.round(totalInvestment));
        setTotalValue(Math.round(maturityAmount));
        setInterestEarned(Math.round(estimatedReturns));
        setMonthlyAmount(requiredMonthlySIP);
    }

    function calculateSWP() {
        if (!data.amount || !data.rate || !data.time || !data.withdrawal) {
            setInvestedAmount(0);
            setWithdrawalAmount(0);
            setAvailableAmount(0);
            return;
        }

        const principal = data.amount;
        const annualRate = data.rate;
        const time = data.time;
        const withdrawal = data.withdrawal;

        const monthlyRate = annualRate / 12 / 100;
        const totalMonths = time * 12;

        let balance = principal;
        let totalWithdrawn = 0;

        for (let i = 0; i < totalMonths; i++) {
            balance -= withdrawal;
            totalWithdrawn += withdrawal;
            balance = balance * (1 + monthlyRate);
        }

        setInvestedAmount(Math.round(principal));
        setWithdrawalAmount(Math.round(totalWithdrawn));
        setAvailableAmount(Math.round(balance));
    }

    useEffect(() => {
        setData(prevData => ({
            ...prevData,
            amount: activeTab === 3 ? 500000 : 5000,
        }));
    }, [activeTab]);


    useEffect(() => {
        tab[activeTab].calculate();
    }, [activeTab, data]);

    function handleSubmit() {
        tab[activeTab].calculate();
    }

    return (
        <section className='relative w-full bg-new-green-300'>
            <div className='w-full relative flex gap-7 max-md:flex-col max-md:gap-10'>
                <div className="relative w-[68%] max-md:w-full">
                    <h2 className='text-[40px] font-bold text-new-blue-300' style={{ lineHeight: '1.1' }}>
                        Let&apos;s Calculate Your <strong className='text-new-green-500'>Return.</strong>
                        <img src="/assets/svg/return.svg" alt="growth" className='inline ml-3 mb-5' style={{ height: "45px" }} />
                    </h2>

                    <div className='w-full mt-5 relative flex gap-3 flex-wrap overflow-x-auto calc'>
                        {tab.map((item, index) => (
                            <button
                                key={index}
                                onClick={() => {
                                    setActiveTab((prev) => prev === index ? prev : index);
                                }}
                                className={`border cursor-pointer border-new-green-500 px-3 py-1 rounded-full font-semibold text-base 
                                ${activeTab === index ? ' text-new-light-500 bg-new-green-500' : " text-new-green-500 "} `}
                            >
                                {item.name}
                            </button>
                        ))}
                    </div>

                    <div className='w-full mt-10 relative'>
                        <div className='w-full flex gap-3.5 relative flex-col'>

                            {['amount', 'withdrawal', 'rate', 'time'].map((field, idx) => {
                                if (field === 'withdrawal' && activeTab !== 3) return null;

                                return (<div key={idx} className='inputs-parent relative w-full border border-new-blue-500 rounded-full py-4 px-5 flex items-center gap-4'>
                                    <img src={`/assets/svg/${field === 'amount' ? 'rupee' : field === 'withdrawal' ? 'withdrawal' : field === 'rate' ? 'percent' : 'calender'}.svg`} alt="" style={{ height: "30px" }} />
                                    <input
                                        name={field}
                                        value={data[field as 'amount' | 'withdrawal' | 'rate' | 'time']}
                                        onChange={handleChange}
                                        placeholder=""
                                        type="number"
                                        required
                                        min="0"
                                        step="any"
                                        inputMode="decimal"
                                        pattern="[0-9]*"
                                        className='inputs w-full bg-transparent text-new-blue-500 outline-none text-xl font-semibold'
                                    />
                                    <label className='label'>
                                        {field === 'amount' ? `${activeTab !== 2 ? "Investment Amount" : "Target Amount"}` : field === 'withdrawal' ? "Monthly Withdrawal Amount" : field === 'rate' ? "Return Rate (p.a)" : "Time Period (yr)"}
                                    </label>
                                </div>)
                            })}
                            <button
                                onClick={handleSubmit}
                                className='relative w-full border border-new-green-500 bg-new-green-500 rounded-full py-4 px-5 text-new-light-500 font-bold text-3xl cursor-pointer hover:bg-[#428F21]'
                            >
                                SUBMIT
                            </button>
                        </div>
                    </div>
                </div>

                <div className="relative w-full">
                    <div className='w-full relative ' style={{ height: "100%" }}>
                        <div className='w-full flex justify-end'>
                            <Button name='Invest Now' path='https://ekyc.motilaloswal.com/partner/mfd/?kzZWSRubKJveEvdPSlKyT2Wu8sMrWJCBeLW7vgOPP/MvViI3pMgXNVgrTzdoiAUzHqcBed8t26M0AqMGjlvii2wJXcWPs8yoJfBfUh2TkjqOpZtOzECLZ2CUZtTUFvfy2V4XVZkvYv6GYTRi7lsbl3tokOjoSBcMRC/BFw6mmpc=' calssName='max-md:hidden relative border border-new-blue-500 bg-new-blue-500 rounded-full py-2 px-5 text-new-light-500 font-bold text-xl cursor-pointer' />
                        </div>

                        <div className='w-full flex justify-center items-center h-full flex-col'>
                            {/* {activeTab !== 3 &&
                            } */}
                            <Charts
                                investedAmount={investedAmount}
                                interestEarned={activeTab === 3 ? withdrawalAmount : interestEarned}
                                availableAmount = {availableAmount}
                                activeTab = {activeTab}
                            />

                            <div className='w-full mt-5 flex flex-col gap-2 items-center'>
                                {monthlyAmount && activeTab === 2 ? (<span
                                    className='font-bold text-lg text-new-dark-500 '>
                                    Monthly Amount Invested : &#8377;{monthlyAmount.toFixed(2)}
                                </span>) : ""}

                                {
                                    activeTab === 3 ?
                                        <>
                                            <span
                                                className='font-bold text-lg text-new-dark-500 '>
                                                Total Amount Invested : &#8377;{data.amount}
                                            </span>
                                            <span
                                                className='font-bold text-lg text-new-dark-500 '>
                                                Withdrawal Amount : &#8377;{withdrawalAmount}
                                            </span>
                                            <span
                                                className='font-bold text-lg text-new-dark-500 '>
                                                Available Amount : &#8377;{availableAmount}
                                            </span>
                                        </> :
                                        <>
                                            <span
                                                className='font-bold text-lg text-new-dark-500 '>
                                                Total Amount Invested : &#8377;{investedAmount}
                                            </span>
                                            <span
                                                className='font-bold text-lg text-new-dark-500 '>
                                                Final Amount : &#8377;{totalValue}
                                            </span>
                                            <span
                                                className='font-bold text-lg text-new-dark-500 '>
                                                Wealth gained : &#8377;{interestEarned}
                                            </span>

                                            <span className='font-bold text-md text-new-blue-500 '>
                                                Your investment multiplied by <strong className='text-new-green-500'>
                                                    {investedAmount ? (totalValue / investedAmount).toFixed(2) : '0.00'}
                                                </strong> times.
                                            </span>
                                        </>
                                }
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
