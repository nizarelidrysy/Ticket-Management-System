import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQS = [
    {
        question: "How do I purchase tickets?",
        answer: "Select a match from the Home page, choose your preferred category on the seat map, add to cart, and proceed to checkout. You can checkout as a guest."
    },
    {
        question: "Can I choose my specific seat?",
        answer: "Currently, you can select the Category (1, 2, or 3). Specific seat numbers are assigned automatically upon purchase to ensure contiguous seating for groups."
    },
    {
        question: "What payment methods are accepted?",
        answer: "We accept all major international credit cards (Visa, Mastercard, Amex) and local Moroccan bank cards (CMI)."
    },
    {
        question: "When will I receive my tickets?",
        answer: "Tickets are sent immediately to your email address as a QR code after successful payment. Please check your spam folder if you don't see them."
    },
    {
        question: "Can I transfer my tickets?",
        answer: "Yes, tickets can be transferred up to 24 hours before the match through the 'Manage Order' link in your confirmation email."
    }
];

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    return (
        <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h1>
                    <p className="text-lg text-slate-600">Everything you need to know about World Cup 2026 ticketing.</p>
                </div>

                <div className="space-y-4">
                    {FAQS.map((faq, index) => (
                        <div key={index} className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
                            <button
                                onClick={() => setOpenIndex(active => active === index ? null : index)}
                                className="w-full px-6 py-4 text-left flex items-center justify-between font-bold text-slate-900 focus:outline-none hover:bg-slate-50 transition-colors"
                            >
                                {faq.question}
                                {openIndex === index ? <ChevronUp className="w-5 h-5 text-emerald-600" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
                            </button>
                            <AnimatePresence initial={false}>
                                {openIndex === index && (
                                    <motion.div
                                        key="content"
                                        initial="collapsed"
                                        animate="open"
                                        exit="collapsed"
                                        variants={{
                                            open: { opacity: 1, height: 'auto' },
                                            collapsed: { opacity: 0, height: 0 }
                                        }}
                                        transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                                        className="px-6"
                                    >
                                        <p className="text-slate-600 leading-relaxed border-t border-slate-100 pt-4 pb-6">
                                            {faq.answer}
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FAQ;
