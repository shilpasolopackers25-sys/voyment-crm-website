'use client';

import { useState } from 'react';

const pricingPlans = [
    {
        name: 'Free Trial',
        price: 'Free',
        period: '14 days',
        description: 'Perfect for testing the waters',
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
        ),
        features: [
            'Up to 50 leads',
            'Basic dashboard',
            '1 user account',
            'Email support',
            'Basic reports',
        ],
        cta: 'Start Free Trial',
        popular: false,
        badge: 'Get Started',
        color: 'from-blue-500 to-cyan-500',
    },
    {
        name: 'Basic',
        price: 'TBD',
        period: '/month',
        description: 'Great for small travel agencies',
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
        ),
        features: [
            'Up to 500 leads',
            'Full dashboard access',
            'Up to 3 users',
            'Lead management',
            'Task management',
            'Email & chat support',
        ],
        cta: 'Get Started',
        popular: false,
        badge: 'Best Value',
        color: 'from-green-500 to-emerald-500',
    },
    {
        name: 'Professional',
        price: 'TBD',
        period: '/month',
        description: 'Best for growing agencies',
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
            </svg>
        ),
        features: [
            'Unlimited leads',
            'Advanced analytics',
            'Up to 10 users',
            'Invoice generation',
            'Google Sheets sync',
            'Productivity tracking',
            'Priority support',
            'Custom reports',
        ],
        cta: 'Get Started',
        popular: true,
        badge: 'Most Popular',
        color: 'from-purple-500 to-pink-500',
    },
    {
        name: 'Enterprise',
        price: 'TBD',
        period: '/month',
        description: 'For large travel companies',
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
        ),
        features: [
            'Everything in Professional',
            'Unlimited users',
            'White-label options',
            'API access',
            'Dedicated account manager',
            'Custom integrations',
            'SLA guarantee',
            'On-premise deployment',
        ],
        cta: 'Contact Sales',
        popular: false,
        badge: 'Enterprise',
        color: 'from-orange-500 to-red-500',
    },
];

export default function Pricing() {
    const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly'>('monthly');

    return (
        <section id="pricing" className="bg-gradient-to-b from-[#F8FBFB] to-white relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute inset-0 opacity-30">
                <div className="absolute top-20 left-10 w-72 h-72 bg-[#E8F5E9] rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#E8F5E9] rounded-full blur-3xl"></div>
            </div>

            {/* SECTION 1: Header - Individually Centered */}
            <div className="w-full flex justify-center pt-24 pb-12 relative z-10">
                <div className="w-full max-w-3xl px-6 text-center">
                    <div className="flex justify-center mb-6 animate-fade-in">
                        <div className="inline-flex items-center gap-2 bg-[#E8F5E9] px-4 py-2 rounded-full shadow-sm">
                            <svg className="w-4 h-4 text-[#075E54]" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
                            </svg>
                            <span className="text-sm font-medium text-[#075E54]">
                                Pricing Plans
                            </span>
                        </div>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 animate-fade-in-up">
                        Simple, Transparent{" "}
                        <span className="gradient-text">Pricing</span>
                    </h2>

                    <p className="text-lg text-gray-600 mb-8 animate-fade-in-up animation-delay-200">
                        Choose the plan that fits your business. All plans include core features
                        with no hidden fees.
                    </p>

                    {/* Billing Toggle */}
                    <div className="inline-flex items-center bg-white rounded-full p-1 shadow-lg border border-gray-200 animate-fade-in-up animation-delay-300">
                        <button
                            onClick={() => setBillingPeriod('monthly')}
                            className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${billingPeriod === 'monthly'
                                ? 'bg-[#075E54] text-white shadow-md'
                                : 'text-gray-600 hover:text-gray-900'
                                }`}
                        >
                            Monthly
                        </button>
                        <button
                            onClick={() => setBillingPeriod('yearly')}
                            className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 relative ${billingPeriod === 'yearly'
                                ? 'bg-[#075E54] text-white shadow-md'
                                : 'text-gray-600 hover:text-gray-900'
                                }`}
                        >
                            Yearly
                            <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-0.5 rounded-full">
                                Save 20%
                            </span>
                        </button>
                    </div>
                </div>
            </div>

            {/* SECTION 2: Pricing Cards - Individually Centered */}
            <div className="w-full flex justify-center pb-24 relative z-10">
                <div className="w-full max-w-7xl px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {pricingPlans.map((plan, index) => (
                            <div
                                key={index}
                                className={`relative bg-white rounded-3xl p-10 border-2 transition-all duration-500 hover:-translate-y-2 animate-fade-in-up ${plan.popular
                                    ? 'border-[#075E54] shadow-2xl scale-105 ring-4 ring-[#075E54]/10'
                                    : 'border-gray-100 hover:border-[#075E54]/30 hover:shadow-xl'
                                    }`}
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                {/* Gradient overlay for popular card */}
                                {plan.popular && (
                                    <div className="absolute inset-0 bg-gradient-to-br from-[#075E54]/5 to-transparent rounded-3xl pointer-events-none"></div>
                                )}

                                {/* Popular Badge */}
                                {plan.popular && (
                                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 z-10">
                                        <div className="bg-gradient-to-r from-[#075E54] to-[#054d44] text-white text-sm font-bold px-6 py-2.5 rounded-full shadow-xl flex items-center gap-2">
                                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                            {plan.badge}
                                        </div>
                                    </div>
                                )}

                                {/* Icon */}
                                <div className={`relative mb-8 ${plan.popular ? 'mt-5' : ''}`}>
                                    <div className={`w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br ${plan.color} p-0.5 shadow-lg`}>
                                        <div className="w-full h-full bg-white rounded-2xl flex items-center justify-center text-gray-900">
                                            {plan.icon}
                                        </div>
                                    </div>
                                </div>

                                <div className="text-center mb-10">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{plan.name}</h3>
                                    <p className="text-sm text-gray-500 mb-8 min-h-[40px] leading-relaxed">{plan.description}</p>
                                    <div className="flex items-baseline justify-center gap-2 mb-3">
                                        <span className="text-5xl font-bold bg-gradient-to-r from-[#075E54] to-[#054d44] bg-clip-text text-transparent">
                                            {plan.price}
                                        </span>
                                        <span className="text-gray-500 text-base">{plan.period}</span>
                                    </div>
                                    {billingPeriod === 'yearly' && plan.price !== 'Free' && (
                                        <p className="text-xs text-green-600 font-semibold mt-2">Billed annually, save 20%</p>
                                    )}
                                </div>

                                <ul className="space-y-5 mb-12 min-h-[280px]">
                                    {plan.features.map((feature, i) => (
                                        <li key={i} className="flex items-start gap-3 animate-fade-in-up" style={{ animationDelay: `${(index * 100) + (i * 50)}ms` }}>
                                            <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
                                                <svg
                                                    className="w-3 h-3 text-green-600"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={3}
                                                        d="M5 13l4 4L19 7"
                                                    />
                                                </svg>
                                            </div>
                                            <span className="text-sm text-gray-700 leading-relaxed">{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <a
                                    href="#contact"
                                    className={`group relative block text-center py-4 px-6 rounded-xl font-semibold transition-all duration-300 overflow-hidden ${plan.popular
                                        ? 'bg-gradient-to-r from-[#075E54] to-[#054d44] text-white shadow-lg hover:shadow-2xl'
                                        : 'bg-[#E8F5E9] text-[#075E54] hover:bg-[#075E54] hover:text-white shadow-md hover:shadow-lg'
                                        }`}
                                >
                                    <span className="relative z-10 flex items-center justify-center gap-2">
                                        {plan.cta}
                                        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                        </svg>
                                    </span>
                                    {plan.popular && (
                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                                    )}
                                </a>
                            </div>
                        ))}
                    </div>

                    {/* Bottom Note */}
                    <div className="text-center mt-16 text-gray-600 animate-fade-in-up animation-delay-600">
                        <p className="text-base mb-6">All plans include a 14-day free trial. No credit card required.</p>

                        {/* Trust Badges */}
                        <div className="flex flex-wrap justify-center items-center gap-8 mb-4">
                            <div className="flex items-center gap-2 text-sm text-gray-500">
                                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span className="font-medium">Secure Payments</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-gray-500">
                                <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span className="font-medium">Money-back Guarantee</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-gray-500">
                                <svg className="w-5 h-5 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                                </svg>
                                <span className="font-medium">24/7 Support</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
