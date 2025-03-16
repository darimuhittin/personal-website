'use client';

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const formDataReducer = (state, action) => {
    switch (action.type) {
        case "INPUT_CHANGE":
            return {
                ...state,
                [action.name]: action.value,
            };
        case "SUBMIT":
            return {
                ...state,
                submitted: true,
            };
        case "RESET_SUBMIT":
            return {
                ...state,
                submitted: false,
            };
        default:
            return state;
    }
};

const initialState = {
    user_name: "",
    user_email: "",
    message: "",
    submitted: false,
};

const ContactSection = () => {
    const [formData, dispatch] = React.useReducer(formDataReducer, initialState);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null);

        emailjs
            .sendForm(
                process.env.NEXT_PUBLIC_SERVICEID,
                process.env.NEXT_PUBLIC_TEMPLATEID,
                form.current,
                process.env.NEXT_PUBLIC_PUBLICKEY
            )
            .then(
                (result) => {
                    console.log(result.text);
                    dispatch({ type: "SUBMIT" });
                    setIsLoading(false);
                },
                (error) => {
                    console.log(error.text);
                    setError("Failed to send message. Please try again later.");
                    setIsLoading(false);
                }
            );
    };

    return (
        <div className="max-w-3xl mx-auto">
            {formData.submitted ? (
                <div className="bg-gray-800 border border-gray-700 rounded-lg p-8 text-center">
                    <div className="flex justify-center mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                        Thank you for your message!
                    </h3>
                    <p className="text-gray-300">
                        I will get back to you as soon as possible.
                    </p>
                    <button
                        className="mt-6 px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                        onClick={() => {
                            form.current.reset();
                            dispatch({ type: "RESET_SUBMIT" });
                        }}
                    >
                        Send Another Message
                    </button>
                </div>
            ) : (
                <div className="bg-gray-800 rounded-lg shadow-lg p-8 border border-gray-700">
                    <form ref={form} onSubmit={sendEmail} className="space-y-6">
                        <div>
                            <label htmlFor="user_name" className="block text-sm font-medium text-gray-200 mb-1">
                                Name
                            </label>
                            <input
                                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors text-white"
                                type="text"
                                name="user_name"
                                id="user_name"
                                placeholder="Your name"
                                required
                                value={formData.user_name}
                                onChange={(e) =>
                                    dispatch({
                                        type: "INPUT_CHANGE",
                                        name: e.target.name,
                                        value: e.target.value,
                                    })
                                }
                            />
                        </div>

                        <div>
                            <label htmlFor="user_email" className="block text-sm font-medium text-gray-200 mb-1">
                                Email
                            </label>
                            <input
                                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors text-white"
                                type="email"
                                name="user_email"
                                id="user_email"
                                placeholder="your.email@example.com"
                                required
                                value={formData.user_email}
                                onChange={(e) =>
                                    dispatch({
                                        type: "INPUT_CHANGE",
                                        name: e.target.name,
                                        value: e.target.value,
                                    })
                                }
                            />
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-200 mb-1">
                                Message
                            </label>
                            <textarea
                                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors text-white"
                                name="message"
                                id="message"
                                rows={6}
                                placeholder="Your message here..."
                                required
                                value={formData.message}
                                onChange={(e) =>
                                    dispatch({
                                        type: "INPUT_CHANGE",
                                        name: e.target.name,
                                        value: e.target.value,
                                    })
                                }
                            />
                        </div>

                        {error && (
                            <div className="p-3 bg-red-900/30 text-red-300 border border-red-800 rounded-lg text-sm">
                                {error}
                            </div>
                        )}

                        <button
                            type="submit"
                            disabled={isLoading}
                            className={`w-full px-6 py-3 bg-purple-600 text-white rounded-lg font-medium transition-colors ${isLoading ? 'opacity-70 cursor-not-allowed' : 'hover:bg-purple-700'
                                }`}
                        >
                            {isLoading ? (
                                <span className="flex items-center justify-center">
                                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Sending...
                                </span>
                            ) : (
                                'Send Message'
                            )}
                        </button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default ContactSection; 