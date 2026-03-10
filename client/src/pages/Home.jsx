import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="animate-fadeIn">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                We build websites, automations, and AI chatbots that help businesses grow.
              </h1>
              <p className="text-lg mb-8 text-blue-100">
                Transform your business with modern technology solutions designed for small businesses.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/services" className="btn-primary bg-white text-blue-600 hover:bg-gray-100">
                  View Services
                </Link>
                <Link to="/contact" className="btn-outline border-white text-white hover:bg-white hover:text-blue-600">
                  Contact Us
                </Link>
              </div>
            </div>
            <div className="hidden md:block animate-slideUp">
              <div className="bg-blue-400 rounded-lg h-80 flex items-center justify-center">
                <span className="text-white text-center">Hero Image Placeholder</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Description */}
      <section className="section bg-gray-50">
        <div className="container-custom text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">About Our Agency</h2>
          <p className="text-lg text-gray-600 mb-6">
            We are a team of experienced developers and designers passionate about helping small businesses
            leverage technology to accelerate growth. With over 5 years of experience, we've successfully
            partnered with hundreds of businesses to transform their digital presence.
          </p>
          <p className="text-lg text-gray-600">
            Our approach is simple: understand your business challenges, design custom solutions, and deliver
            exceptional results that exceed expectations.
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card card-hover">
              <div className="text-5xl mb-4">🌐</div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Website Development</h3>
              <p className="text-gray-600 mb-4">
                Professional websites for businesses including booking systems, SEO optimization, and modern design.
              </p>
              <Link to="/services" className="text-blue-600 font-semibold hover:text-blue-800">
                Learn More →
              </Link>
            </div>

            <div className="card card-hover">
              <div className="text-5xl mb-4">⚙️</div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Business Automation</h3>
              <p className="text-gray-600 mb-4">
                Automate repetitive tasks like lead capture, appointment booking, email workflows, and CRM integrations.
              </p>
              <Link to="/services" className="text-blue-600 font-semibold hover:text-blue-800">
                Learn More →
              </Link>
            </div>

            <div className="card card-hover">
              <div className="text-5xl mb-4">🤖</div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">AI Chatbots</h3>
              <p className="text-gray-600 mb-4">
                Smart chatbots for WhatsApp and websites that answer customers automatically and capture leads.
              </p>
              <Link to="/services" className="text-blue-600 font-semibold hover:text-blue-800">
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section bg-gray-900 text-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12">Why Work With Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <div className="text-3xl">✓</div>
              <div>
                <h3 className="text-xl font-bold mb-2">Custom Solutions</h3>
                <p className="text-gray-300">
                  We don't use cookie-cutter templates. Every solution is custom-built for your business.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="text-3xl">✓</div>
              <div>
                <h3 className="text-xl font-bold mb-2">Proven Results</h3>
                <p className="text-gray-300">
                  Our clients see an average 40% increase in leads and 60% improvement in efficiency.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="text-3xl">✓</div>
              <div>
                <h3 className="text-xl font-bold mb-2">Ongoing Support</h3>
                <p className="text-gray-300">
                  We provide continuous support and updates to ensure your systems run smoothly.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="text-3xl">✓</div>
              <div>
                <h3 className="text-xl font-bold mb-2">Affordable Pricing</h3>
                <p className="text-gray-300">
                  Enterprise-level solutions at prices designed for small businesses.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section">
        <div className="container-custom text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">Ready to Grow Your Business?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Let's discuss how we can help you achieve your business goals with modern technology solutions.
          </p>
          <Link to="/contact" className="btn-primary">
            Get Started Today
          </Link>
        </div>
      </section>
    </div>
  );
}
