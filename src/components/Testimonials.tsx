const testimonials = [
    {
        name: 'Priya Sharma',
        role: 'Owner, Dream Destinations Travel',
        image: '/testimonials/avatar1.jpg',
        quote: 'Voyager CRM transformed how we manage leads. Our conversion rate increased by 40% in just 3 months!',
        rating: 5,
    },
    {
        name: 'Rahul Mehta',
        role: 'Manager, Globe Trotters Agency',
        image: '/testimonials/avatar2.jpg',
        quote: 'The productivity tracking feature helped us identify top performers and improve team efficiency dramatically.',
        rating: 5,
    },
    {
        name: 'Anita Desai',
        role: 'Director, Paradise Tours',
        image: '/testimonials/avatar3.jpg',
        quote: 'Finally, a CRM that understands travel business! The invoice generation saves us hours every week.',
        rating: 5,
    },
];

export default function Testimonials() {
    return (
        <section id="testimonials" className="bg-white">
            {/* SECTION 1: Header - Individually Centered */}
            <div className="w-full flex justify-center pt-16 md:pt-24 pb-12">
                <div className="w-full max-w-3xl px-6 text-center">
                    <div className="flex justify-center mb-6">
                        <div className="inline-flex items-center gap-2 bg-[#E8F5E9] px-4 py-2 rounded-full">
                            <span className="text-sm font-medium text-[#075E54]">
                                Testimonials
                            </span>
                        </div>
                    </div>

                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                        Loved by{" "}
                        <span className="gradient-text">Travel Agencies</span>
                    </h2>

                    <p className="text-lg text-gray-600">
                        See what our customers have to say about how Voyager CRM has helped
                        transform their businesses.
                    </p>
                </div>
            </div>

            {/* SECTION 2: Testimonials Grid - Individually Centered */}
            <div className="w-full flex justify-center pb-24">
                <div className="w-full max-w-5xl px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <div
                                key={index}
                                className="bg-[#F8FBFB] rounded-2xl p-8 relative"
                            >
                                {/* Quote Icon */}
                                <div className="absolute -top-4 left-8">
                                    <div className="w-10 h-10 bg-[#075E54] rounded-full flex items-center justify-center">
                                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                                        </svg>
                                    </div>
                                </div>

                                {/* Rating */}
                                <div className="flex gap-1 mb-4 pt-4">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>

                                {/* Quote */}
                                <p className="text-gray-700 mb-6 leading-relaxed">
                                    &ldquo;{testimonial.quote}&rdquo;
                                </p>

                                {/* Author */}
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-[#075E54] rounded-full flex items-center justify-center text-white font-bold text-lg">
                                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                                    </div>
                                    <div>
                                        <div className="font-semibold text-gray-900">{testimonial.name}</div>
                                        <div className="text-sm text-gray-500">{testimonial.role}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Trust Badges */}
                    <div className="mt-16 text-center">
                        <p className="text-gray-500 mb-6">Trusted by 500+ travel agencies worldwide</p>
                        <div className="flex flex-wrap justify-center gap-8 opacity-50">
                            {['Travel Partners', 'Tourism Board', 'IATA Certified', 'TripAdvisor Partner'].map((badge, i) => (
                                <div key={i} className="text-lg font-semibold text-gray-400">
                                    {badge}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
