'use client';

import { useState } from 'react';

const faqs = [
    {
        question: 'What is Voyager Intelligent Travel CRM?',
        answer: 'Voyager CRM is a comprehensive customer relationship management system designed specifically for travel agencies. It helps you manage leads, track agent productivity, generate invoices, and grow your travel business efficiently.',
    },
    {
        question: 'How long is the free trial?',
        answer: 'We offer a 14-day free trial with full access to all features. No credit card required. You can upgrade to a paid plan anytime during or after the trial.',
    },
    {
        question: 'Can I import my existing leads?',
        answer: 'Absolutely! Voyager CRM supports importing leads from Google Sheets, CSV files, and direct API integrations. Our team will help you migrate your existing data seamlessly.',
    },
    {
        question: 'Is my data secure?',
        answer: 'Yes, we take security seriously. All data is encrypted in transit and at rest. We use industry-standard security practices and comply with data protection regulations.',
    },
    {
        question: 'Can multiple team members use the system?',
        answer: 'Yes! Our plans support multiple users with role-based access control. You can have Super Admins, Admins, and Agents with different permission levels.',
    },
    {
        question: 'Do you offer training and support?',
        answer: 'We provide comprehensive onboarding, video tutorials, and documentation. Our support team is available via email and chat. Enterprise customers get dedicated account managers.',
    },
    {
        question: 'Can I customize the CRM for my agency?',
        answer: 'The Professional and Enterprise plans include customization options for reports, workflows, and branding. Contact us for specific requirements.',
    },
    {
        question: 'What payment methods do you accept?',
        answer: 'We accept all major credit cards, debit cards, UPI, and bank transfers. Enterprise customers can also pay via invoice with NET-30 terms.',
    },
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section id="faq" className="bg-[#F8FBFB]">
            {/* SECTION 1: Header - Individually Centered */}
            <div className="w-full flex justify-center pt-24 pb-12">
                <div className="w-full max-w-3xl px-6 text-center">
                    <div className="flex justify-center mb-6">
                        <div className="inline-flex items-center gap-2 bg-[#E8F5E9] px-4 py-2 rounded-full">
                            <span className="text-sm font-medium text-[#075E54]">
                                FAQ
                            </span>
                        </div>
                    </div>

                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                        Frequently Asked{" "}
                        <span className="gradient-text">Questions</span>
                    </h2>

                    <p className="text-lg text-gray-600">
                        Got questions? We&apos;ve got answers. If you can&apos;t find what you&apos;re looking for,
                        feel free to contact us.
                    </p>
                </div>
            </div>

            {/* SECTION 2: FAQ Accordion - Individually Centered */}
            <div className="w-full flex justify-center pb-24">
                <div className="w-full max-w-3xl px-6">
                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-xl border border-gray-100 overflow-hidden transition-all duration-300"
                            >
                                <button
                                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                    className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                                >
                                    <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                                    <span className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${openIndex === index ? 'bg-[#075E54] text-white rotate-180' : 'bg-[#E8F5E9] text-[#075E54]'
                                        }`}>
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </span>
                                </button>
                                <div
                                    className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-96' : 'max-h-0'
                                        }`}
                                >
                                    <div className="p-6 pt-0 text-gray-600 leading-relaxed">
                                        {faq.answer}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Contact CTA */}
                    <div className="text-center mt-12">
                        <p className="text-gray-600 mb-4">Still have questions?</p>
                        <a href="#contact" className="btn btn-secondary">
                            Contact Us
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
