import React from 'react'

const About = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4">
            <div className="max-w-6xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <h1 className="text-5xl font-bold text-gray-800 mb-6">About Our Company</h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        We are dedicated to delivering exceptional products and services that empower
                        businesses and individuals to achieve their goals through innovation and excellence.
                    </p>
                </div>

                {/* Mission & Vision */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                    <div className="bg-white rounded-2xl shadow-lg p-8">
                        <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                            <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                        </div>
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h2>
                        <p className="text-gray-600 leading-relaxed">
                            To create innovative solutions that simplify complex challenges and enhance
                            the daily lives of our customers. We believe in pushing boundaries while
                            maintaining the highest standards of quality and integrity.
                        </p>
                    </div>

                    <div className="bg-white rounded-2xl shadow-lg p-8">
                        <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                        </div>
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Vision</h2>
                        <p className="text-gray-600 leading-relaxed">
                            To be the global leader in our industry, recognized for our commitment to
                            innovation, customer satisfaction, and sustainable business practices that
                            make a positive impact on the world.
                        </p>
                    </div>
                </div>

                {/* Our Story */}
                <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
                    <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Our Story</h2>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                        <div>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                Founded in 2015, our journey began with a simple idea: to create products
                                that genuinely make a difference. What started as a small team of passionate
                                individuals has grown into a thriving company serving customers worldwide.
                            </p>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                Over the years, we've remained committed to our core values while adapting
                                to the ever-changing technological landscape. Our dedication to quality and
                                customer satisfaction has been the driving force behind our success.
                            </p>
                            <p className="text-gray-600 leading-relaxed">
                                Today, we continue to innovate and expand our offerings, always keeping
                                our customers' needs at the forefront of everything we do.
                            </p>
                        </div>
                        <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-8 h-64 flex items-center justify-center">
                            <div className="text-center">
                                <div className="text-4xl font-bold text-gray-800 mb-2">8+</div>
                                <div className="text-gray-600">Years of Excellence</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Our Values */}
                <div className="mb-16">
                    <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Our Values</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            {
                                icon: "💡",
                                title: "Innovation",
                                description: "We constantly push boundaries and embrace new ideas to stay ahead of the curve."
                            },
                            {
                                icon: "🤝",
                                title: "Integrity",
                                description: "We conduct business with honesty, transparency, and ethical practices."
                            },
                            {
                                icon: "⭐",
                                title: "Excellence",
                                description: "We strive for the highest quality in everything we create and deliver."
                            },
                            {
                                icon: "👥",
                                title: "Collaboration",
                                description: "We believe in the power of teamwork and diverse perspectives."
                            },
                            {
                                icon: "🌱",
                                title: "Sustainability",
                                description: "We are committed to environmentally responsible business practices."
                            },
                            {
                                icon: "❤️",
                                title: "Customer Focus",
                                description: "Our customers' success is the ultimate measure of our success."
                            }
                        ].map((value, index) => (
                            <div key={index} className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition-shadow">
                                <div className="text-3xl mb-4">{value.icon}</div>
                                <h3 className="text-xl font-bold text-gray-800 mb-3">{value.title}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Team Section */}
                <div className="bg-white rounded-2xl shadow-lg p-8">
                    <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Meet Our Leadership</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                name: "Sarah Johnson",
                                role: "CEO & Founder",
                                image: "👩‍💼"
                            },
                            {
                                name: "Michael Chen",
                                role: "CTO",
                                image: "👨‍💻"
                            },
                            {
                                name: "Emily Davis",
                                role: "Head of Design",
                                image: "👩‍🎨"
                            },
                            {
                                name: "David Wilson",
                                role: "Operations Director",
                                image: "👨‍💼"
                            }
                        ].map((member, index) => (
                            <div key={index} className="text-center group">
                                <div className="w-24 h-24 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full flex items-center justify-center text-3xl mx-auto mb-4 group-hover:scale-110 transition-transform">
                                    {member.image}
                                </div>
                                <h3 className="text-lg font-bold text-gray-800 mb-1">{member.name}</h3>
                                <p className="text-blue-600 font-medium">{member.role}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA Section */}
                <div className="text-center mt-16">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Ready to Work With Us?</h2>
                    <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                        Join thousands of satisfied customers who have transformed their business with our solutions.
                    </p>
                    <div className="space-x-4">
                        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200">
                            Get Started
                        </button>
                        <button className="border border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold py-3 px-8 rounded-lg transition-colors duration-200">
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About