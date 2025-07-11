'use client'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import Loader from './Loader';

export default function PopForm() {
    const [formData, setFormData] = useState({
        name: '',
        contactNo: '',
        occupation: '',
        services: [] as string[],
    });

    const [isFormOpen, setIsFormOpen] = useState(false);
    const [loading, setLoading] = useState<boolean>(false)

    const occupations = [
        'Student',
        'Business',
        'Job',
        'Professional - Doctor/CA/Lawyer',
    ];
    const services = [
        'Mutual Fund',
        'Demat Account',
        'PMS & AIF',
        'Bond Investment',
    ];

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;

        if (type === 'checkbox') {
            setFormData((prev) => ({
                ...prev,
                services: checked
                    ? [...prev.services, value]
                    : prev.services.filter((s) => s !== value),
            }));
        } else {
            setFormData((prev) => ({ ...prev, [name]: value }));
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        toast.promise(
            axios
                .post("/api/popup-form", JSON.stringify(formData), {
                    headers: {
                        "Content-Type": "application/json",
                    },
                })
                .then((response) => {
                    if (response.status === 200) {
                        setFormData({
                            name: "",
                            contactNo: "",
                            occupation: "",
                            services: []
                        });
                        setIsFormOpen(false);
                        return response.data.message;
                    } else {
                        return response.data.message
                        // throw new Error(response.data.message || "Unknown error occurred.");
                    }
                })
                .catch((error) => {
                    console.log("Error sending message", error.message);
                    throw error;
                })
                .finally(() => {
                    setIsFormOpen(false);
                    setLoading(false);
                }),
            {
                loading: "Sending message...",
                success: (message) => message,
                error: (err) => err
            }
        );
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsFormOpen(true);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

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

    if (!isFormOpen) return null;

    return (
        <section className='fixed inset-0 bg-zinc-800/50 z-[999] p-4 overflow-hidden'>
            <div className='w-full h-full flex items-center justify-center'>
                <form
                    onSubmit={handleSubmit}
                    className='w-full max-w-lg bg-new-green-300 p-5 rounded shadow-lg max-h-[90vh] overflow-y-auto'
                >
                    <div className='relative flex justify-between items-center'>
                        <span className='text-lg text-new-blue-500 font-bold'>
                            Need Help With Investments? Let&apos;s Talk!
                        </span>
                        <div
                            onClick={() => setIsFormOpen(false)}
                            className='w-[45px] h-[45px] ml-auto bg-new-light-500 rounded-full cursor-pointer flex items-center justify-center'
                        >
                            <img
                                src="/assets/svg/close-btn.svg"
                                alt="close btn"
                                className='w-[30px]'
                            />
                        </div>
                    </div>

                    <div className='mt-10 flex flex-col gap-4'>
                        <input
                            type="text"
                            name="name"
                            placeholder='Name'
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className='w-full border border-new-green-500 rounded-lg px-3 py-3 outline-0 text-lg text-new-green-500'
                        />

                        <input
                            type="tel"
                            name="contactNo"
                            placeholder='Contact No.'
                            required
                            value={formData.contactNo}
                            onChange={handleChange}
                            className='w-full border border-new-green-500 rounded-lg px-3 py-3 outline-0 text-lg text-new-green-500'
                        />

                        <div>
                            <label className='block font-semibold text-new-blue-500 mb-2'>
                                Occupation
                            </label>
                            <div className='flex flex-col gap-2'>
                                {occupations.map((occ) => (
                                    <label key={occ} className='flex items-center gap-2'>
                                        <input
                                            type="radio"
                                            name="occupation"
                                            value={occ}
                                            checked={formData.occupation === occ}
                                            onChange={handleChange}
                                        />
                                        {occ}
                                    </label>
                                ))}
                            </div>
                        </div>

                        <div className='mt-4'>
                            <label className='block font-semibold text-new-blue-500 mb-2'>
                                Services You&apos;re Interested In
                            </label>
                            <div className='flex flex-col gap-2'>
                                {services.map((service) => (
                                    <label key={service} className='flex items-center gap-2'>
                                        <input
                                            type="checkbox"
                                            name="services"
                                            value={service}
                                            checked={formData.services.includes(service)}
                                            onChange={handleChange}
                                        />
                                        {service}
                                    </label>
                                ))}
                            </div>
                        </div>

                        <button
                            type="submit"
                            className='mt-6 bg-new-blue-500 text-white px-4 py-3 rounded hover:bg-new-blue-300 transition cursor-pointer'
                        >
                            {loading ? <Loader /> : "Send"}
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
}
