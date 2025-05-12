'use client';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import Loader from './Loader';

export default function Services() {
    const [isFormOpen, setIsFormOpen] = useState<boolean>(false);
    useEffect(() => {
        if (isFormOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isFormOpen]);

    return (
        <>
            <section className="relative w-full bg-new-light-500">
                <div className="w-full relative flex gap-3 max-md:flex-col-reverse max-md:gap-10">
                    <div className="relative lg:w-full max-md:w-full flex justify-center items-center">
                        <img src="/assets/svg/services-05.svg" alt="hero" />
                    </div>
                    <div className="relative w-full">
                        <h2 className="text-[35px] font-bold text-new-blue-300" style={{ lineHeight: '1.1' }}>
                            Learn Stock Market free in <strong className="text-new-green-500">Varanasi.</strong>
                        </h2>
                        <p className="text-xl font-medium text-new-dark-300 mt-5">
                            Empower your investment strategies with our comprehensive Stock Market Training in Varanasi.
                        </p>
                        <p className="text-xl font-medium text-new-dark-300 mt-5">
                            Our expert trainers provide hands-on guidance and practical knowledge on various aspects of the stock market, including technical analysis, fundamental analysis, and risk management.
                        </p>
                        <p className="text-xl font-medium text-new-dark-300 mt-5">
                            Upgrade your skills and gain a competitive edge in the stock market with our tailored training programs. Sign up for the best Stock Market Training in Varanasi today!
                        </p>
                        <div className="relative mt-5 w-full">
                            <button
                                onClick={() => setIsFormOpen(true)}
                                className="cursor-pointer block w-fit border border-new-blue-500 py-5 px-8 max-[396px]:px-5 max-[396px]:py-2 rounded-md font-semibold bg-new-blue-500 text-2xl text-new-light-500 hover:bg-new-blue-300 hover:border-new-blue-300"
                            >
                                Enquiry Now
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            {isFormOpen && <EnquiryForm closeForm={() => setIsFormOpen(false)} />}
        </>
    );
}

interface UserData {
    name: string;
    email: string;
    contactNo: string;
}

interface EnquiryFormProps {
    closeForm: () => void;
}

function EnquiryForm({ closeForm }: EnquiryFormProps) {
    const [loading, setLoading] = useState<boolean>(false);
    const [userData, setUserData] = useState<UserData>({
        name: '',
        email: '',
        contactNo: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setUserData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const promise = axios.post('/api/enquiry', userData, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            await toast.promise(
                promise,
                {
                    loading: 'Sending message...',
                    success: (res) => {
                        setUserData({ name: '', email: '', contactNo: '' });
                        closeForm();
                        return res.data.message || 'Message sent successfully!';
                    },
                    error: (err) => {
                        console.error('Error sending message:', err);
                        return err.response?.data?.message || 'An error occurred while sending message.';
                    },
                }
            );
        } catch (error) {
            console.error('Unexpected Error:', error);
            toast.error('Something went wrong. Try again later.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="backdrop-blur-[5px] fixed inset-0 z-50 p-12">
            <div className="relative w-full h-fit flex items-center justify-center max-w-xl mx-auto overflow-y-auto bg-transparent">
                <div className="w-full bg-new-green-300 rounded-2xl p-5">
                    <div className="w-full flex justify-between items-center">
                        <div className="w-[180px]">
                            <img src="/assets/logo/logo.png" alt="StockTech Investment" />
                        </div>
                        <button
                            type="button"
                            onClick={closeForm}
                            className="cursor-pointer w-[40px] h-[40px] flex items-center justify-center rounded-full border-2 border-new-blue-300"
                        >
                            <img src="/assets/svg/cross.svg" alt="Close" className="h-[20px]" />
                        </button>
                    </div>

                    <form onSubmit={handleSubmit} className="w-full mt-10 flex flex-col gap-5">
                        <div className="w-full border px-5 py-3 border-new-green-500 rounded-lg">
                            <input
                                type="text"
                                name="name"
                                value={userData.name}
                                onChange={handleChange}
                                placeholder="Name"
                                required
                                className="text-2xl outline-0 border-0 bg-transparent text-new-green-500 w-full"
                            />
                        </div>
                        <div className="w-full border px-5 py-3 border-new-green-500 rounded-lg">
                            <input
                                type="email"
                                name="email"
                                value={userData.email}
                                onChange={handleChange}
                                placeholder="Email"
                                required
                                className="text-2xl outline-0 border-0 bg-transparent text-new-green-500 w-full"
                            />
                        </div>
                        <div className="w-full border px-5 py-3 border-new-green-500 rounded-lg">
                            <input
                                type="tel"
                                name="contactNo"
                                value={userData.contactNo}
                                onChange={handleChange}
                                placeholder="Contact No."
                                pattern="[0-9]{10}"
                                title="Enter a valid 10-digit contact number"
                                required
                                className="text-2xl outline-0 border-0 bg-transparent text-new-green-500 w-full"
                            />
                        </div>
                        <div className="w-full">
                            <button
                                type="submit"
                                disabled={loading}
                                className="rounded-lg px-5 py-3 cursor-pointer bg-new-green-500 text-2xl outline-0 border-0 text-new-light-500 w-full flex items-center justify-center"
                            >
                                {loading ? <Loader /> : 'Send'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}
