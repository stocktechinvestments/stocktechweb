'use client'
import axios from 'axios'
import React, { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import Loader from './Loader'

interface ContactData {
    name: string,
    email: string,
    contactNo: string,
    message: string
}

export default function Contact() {
    const [contactData, setContactData] = useState<ContactData>({
        name: "",
        email: "",
        contactNo: "",
        message: ""
    })
    const [loading, setLoading] = useState<boolean>(false)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setContactData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        toast.promise(
            axios
                .post("/api/contact", contactData, {
                    headers: {
                        "Content-Type": "application/json",
                    },
                })
                .then((response) => {
                    if (response.status === 200) {
                        setContactData({
                            name: "",
                            email: "",
                            message: "",
                            contactNo: "",
                        });
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
                    setLoading(false);
                }),
            {
                loading: "Sending message...",
                success: (message) => message,
                error: (err) => err
            }
        );

    };

    return (
        <section className='w-full relative bg-new-light-500'>
            <div className='w-full relative'>
                <div className='w-full relative bg-new-green-300 rounded-2xl p-8'>
                    <form onSubmit={handleSubmit}>
                        <div className='w-full relative flex gap-4 max-md:flex-col-reverse max-md:gap-10'>
                            <div className='relative w-full'>
                                <div className='w-full text-center'>
                                    <h2 className='text-4xl text-new-green-500 font-bold'>Contact Us</h2>
                                </div>
                                <div className='w-full mt-5 flex flex-col gap-5'>
                                    <div className='w-full'>
                                        <input
                                            type="text"
                                            name="name"
                                            value={contactData.name}
                                            onChange={handleChange}
                                            placeholder='Name'
                                            required
                                            className='w-full border border-new-green-500 rounded-lg px-3 py-4 outline-0 text-lg text-new-green-500'
                                        />
                                    </div>
                                    <div className='w-full'>
                                        <input
                                            type="email"
                                            name="email"
                                            value={contactData.email}
                                            onChange={handleChange}
                                            placeholder='Email'
                                            required
                                            className='w-full border border-new-green-500 rounded-lg px-3 py-4 outline-0 text-lg text-new-green-500'
                                        />
                                    </div>
                                    <div className='w-full'>
                                        <input
                                            type="number"
                                            name="contactNo"
                                            value={contactData.contactNo}
                                            onChange={handleChange}
                                            placeholder='Contact No.'
                                            required
                                            className='w-full border border-new-green-500 rounded-lg px-3 py-4 outline-0 text-lg text-new-green-500'
                                        />
                                    </div>
                                    <div className='w-full'>
                                        <textarea
                                            name="message"
                                            value={contactData.message}
                                            onChange={handleChange}
                                            placeholder='Message'
                                            required
                                            rows={5}
                                            className='w-full border border-new-green-500 rounded-lg px-3 py-4 outline-0 text-lg text-new-green-500'
                                        ></textarea>
                                    </div>
                                    <div className='w-full flex justify-end'>
                                        <button
                                            disabled={loading}
                                            type="submit"
                                            className='relative px-10 py-2 text-2xl font-bold rounded-md cursor-pointer bg-new-green-500 text-new-light-500 hover:bg-[#428F21]'
                                        >
                                            {loading ? <Loader /> : "Send"}
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className='relative w-full flex justify-center'>
                                <img src="/assets/svg/contact-02.svg" alt="hero" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <Toaster />
        </section>
    )
}
