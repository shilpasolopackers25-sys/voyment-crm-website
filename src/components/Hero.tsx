export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center pt-20 pb-32 overflow-hidden bg-gradient-to-br from-[#F8FBFB] via-white to-[#E8F5E9]">
            {/* Background Decorations */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#075E54]/5 rounded-full blur-3xl" />
                <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#E8F5E9] rounded-full blur-3xl" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#075E54]/3 rounded-full blur-3xl" />
            </div>

            {/* Floating Icons */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-32 left-[15%] animate-float">
                    <div className="w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center">
                        <svg className="w-8 h-8 text-[#075E54]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>
                    </div>
                </div>
                <div className="absolute top-48 right-[20%] animate-float" style={{ animationDelay: '0.5s' }}>
                    <div className="w-14 h-14 bg-white rounded-2xl shadow-lg flex items-center justify-center">
                        <svg className="w-7 h-7 text-[#25D366]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
                        </svg>
                    </div>
                </div>
                <div className="absolute bottom-32 left-[25%] animate-float" style={{ animationDelay: '1s' }}>
                    <div className="w-12 h-12 bg-white rounded-xl shadow-lg flex items-center justify-center">
                        <svg className="w-6 h-6 text-[#075E54]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="text-center lg:text-left">
                        <div className="inline-flex items-center gap-2 bg-[#E8F5E9] px-4 py-2 rounded-full mb-6">
                            <span className="w-2 h-2 bg-[#25D366] rounded-full animate-pulse" />
                            <span className="text-sm font-medium text-[#075E54]">
                                #1 Travel CRM Solution
                            </span>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                            Transform Your{' '}
                            <span className="gradient-text">Travel Business</span>{' '}
                            with Intelligent CRM
                        </h1>

                        <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0">
                            Streamline lead management, boost agent productivity, and close more deals
                            with the CRM built specifically for travel agencies.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <a href="#contact" className="btn btn-primary text-lg px-8 py-4">
                                Start Free Trial
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </a>
                            <a href="#features" className="btn btn-secondary text-lg px-8 py-4">
                                See How It Works
                            </a>
                        </div>

                        {/* Stats */}
                        <div className="mt-12 grid grid-cols-3 gap-6 max-w-md mx-auto lg:mx-0">
                            <div>
                                <div className="text-3xl font-bold text-[#075E54]">500+</div>
                                <div className="text-sm text-gray-500">Travel Agencies</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-[#075E54]">50K+</div>
                                <div className="text-sm text-gray-500">Leads Managed</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-[#075E54]">98%</div>
                                <div className="text-sm text-gray-500">Satisfaction</div>
                            </div>
                        </div>
                    </div>

                    {/* Right Content - Dashboard Preview */}
                    <div className="relative hidden lg:block">
                        <div className="relative bg-white rounded-2xl shadow-2xl p-6 border border-gray-100">
                            {/* Mock Dashboard Header */}
                            <div className="flex items-center justify-between mb-6">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-[#075E54] rounded-xl flex items-center justify-center">
                                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <div className="text-sm font-semibold text-gray-800">Dashboard</div>
                                        <div className="text-xs text-gray-500">Travel Agency Pro</div>
                                    </div>
                                </div>
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 bg-red-400 rounded-full" />
                                    <div className="w-3 h-3 bg-yellow-400 rounded-full" />
                                    <div className="w-3 h-3 bg-green-400 rounded-full" />
                                </div>
                            </div>

                            {/* Mock Stats Cards */}
                            <div className="grid grid-cols-3 gap-4 mb-6">
                                <div className="bg-[#E8F5E9] rounded-xl p-4">
                                    <div className="text-2xl font-bold text-[#075E54]">247</div>
                                    <div className="text-xs text-gray-600">New Leads</div>
                                </div>
                                <div className="bg-[#FEF3C7] rounded-xl p-4">
                                    <div className="text-2xl font-bold text-amber-600">89</div>
                                    <div className="text-xs text-gray-600">In Progress</div>
                                </div>
                                <div className="bg-[#DBEAFE] rounded-xl p-4">
                                    <div className="text-2xl font-bold text-blue-600">156</div>
                                    <div className="text-xs text-gray-600">Converted</div>
                                </div>
                            </div>

                            {/* Mock Chart */}
                            <div className="bg-gray-50 rounded-xl p-4 h-32 flex items-end gap-2">
                                {[40, 65, 45, 80, 55, 90, 70].map((height, i) => (
                                    <div key={i} className="flex-1 bg-[#075E54] rounded-t-lg" style={{ height: `${height}%` }} />
                                ))}
                            </div>
                        </div>

                        {/* Floating Notification */}
                        <div className="absolute -right-6 top-20 bg-white rounded-xl shadow-xl p-4 w-64 animate-float">
                            <div className="flex items-start gap-3">
                                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <div>
                                    <div className="text-sm font-semibold text-gray-800">New Lead Captured!</div>
                                    <div className="text-xs text-gray-500">Dubai Holiday Package inquiry</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
                <div className="w-6 h-10 border-2 border-[#075E54]/30 rounded-full flex justify-center pt-2">
                    <div className="w-1.5 h-3 bg-[#075E54] rounded-full animate-bounce" />
                </div>
            </div>
        </section>
    );
}
