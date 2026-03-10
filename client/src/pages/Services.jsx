import { useEffect } from 'react';
import ServiceCard from '../components/ServiceCard';

export default function Services() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      icon: '🌐',
      title: 'Website Development',
      description:
        'Professional websites for businesses including booking systems, SEO optimization, and modern design. We create responsive, fast-loading websites that convert visitors into customers.',
      cta: 'Request Quote',
    },
    {
      icon: '⚙️',
      title: 'Business Automation',
      description:
        'Automate repetitive tasks like lead capture, appointment booking, email workflows, and CRM integrations. Save time and increase productivity with intelligent automation.',
      cta: 'Explore Automation',
    },
    {
      icon: '🤖',
      title: 'AI Chatbots',
      description:
        'Smart chatbots for WhatsApp and websites that answer customers automatically and capture leads. Available 24/7 to serve your customers.',
      cta: 'Build a Chatbot',
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section bg-[#E192A7] text-white">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-xl text-[#FCEEF1] max-w-2xl mx-auto">
            Complete digital solutions to transform and grow your business
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {services.map((service, index) => (
              <div key={index} className="animate-fadeIn h-full" style={{ animationDelay: `${index * 0.1}s` }}>
                <ServiceCard {...service} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Descriptions */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Service Details</h2>

          {/* Website Development */}
          <div className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Website Development</h3>
                <ul className="space-y-3 text-gray-700">
                  <li>✓ Custom responsive design</li>
                  <li>✓ SEO optimization</li>
                  <li>✓ Fast loading speeds</li>
                  <li>✓ Mobile-first approach</li>
                  <li>✓ E-commerce integration</li>
                  <li>✓ Booking system integration</li>
                </ul>
              </div>
              <div className="bg-[#F7D5DD] h-64 rounded-lg flex items-center justify-center">
                <span className="text-[#E192A7]">Website Mockup</span>
              </div>
            </div>
          </div>

          {/* Business Automation */}
          <div className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="bg-green-200 h-64 rounded-lg flex items-center justify-center order-2 md:order-1">
                <span className="text-green-600">Automation Flow</span>
              </div>
              <div className="order-1 md:order-2">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Business Automation</h3>
                <ul className="space-y-3 text-gray-700">
                  <li>✓ Lead capture automation</li>
                  <li>✓ Appointment scheduling</li>
                  <li>✓ Email workflow automation</li>
                  <li>✓ CRM integration</li>
                  <li>✓ Invoice automation</li>
                  <li>✓ Customer follow-up systems</li>
                </ul>
              </div>
            </div>
          </div>

          {/* AI Chatbots */}
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">AI Chatbots</h3>
                <ul className="space-y-3 text-gray-700">
                  <li>✓ WhatsApp integration</li>
                  <li>✓ Website chat widget</li>
                  <li>✓ AI-powered responses</li>
                  <li>✓ Lead qualification</li>
                  <li>✓ Multi-language support</li>
                  <li>✓ 24/7 availability</li>
                </ul>
              </div>
              <div className="bg-purple-200 h-64 rounded-lg flex items-center justify-center">
                <span className="text-purple-600">Chatbot Interface</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="section">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Flexible Pricing</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['Starter', 'Professional', 'Enterprise'].map((plan, index) => (
              <div key={index} className="card border-2 border-gray-200">
                <h3 className="text-xl font-bold mb-4">{plan}</h3>
                <p className="text-3xl font-bold text-[#E192A7] mb-6">Custom</p>
                <ul className="space-y-2 mb-6 text-gray-600">
                  <li>✓ Custom solutions</li>
                  <li>✓ Dedicated support</li>
                  <li>✓ Flexible terms</li>
                </ul>
                <button className="btn-primary w-full">Get Quote</button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
