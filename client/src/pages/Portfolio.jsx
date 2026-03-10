import { useEffect } from 'react';
import ProjectCard from '../components/ProjectCard';

export default function Portfolio() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const projects = [
    {
      name: 'Restaurant Website',
      description: 'Modern restaurant website with online booking system, menu management, and reservation capabilities.',
      category: 'website',
      image: null,
    },
    {
      name: 'Hotel Booking Website',
      description: 'Complete hotel management system with real-time availability, online payments, and guest management.',
      category: 'website',
      image: null,
    },
    {
      name: 'WhatsApp Customer Service Bot',
      description: 'AI-powered chatbot for customer support, order tracking, and automated responses.',
      category: 'chatbot',
      image: null,
    },
    {
      name: 'E-commerce Automation',
      description: 'Automated order processing, inventory management, and customer notification system.',
      category: 'automation',
      image: null,
    },
    {
      name: 'Real Estate Portal',
      description: 'Property listing website with advanced search, virtual tours, and automated lead capture.',
      category: 'website',
      image: null,
    },
    {
      name: 'Lead Generation Bot',
      description: 'WhatsApp bot for B2B lead generation with qualification automation.',
      category: 'chatbot',
      image: null,
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section bg-gradient-to-r from-[#E192A7] to-[#d87a93] text-white">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Portfolio</h1>
          <p className="text-xl text-[#FCEEF1] max-w-2xl mx-auto">
            Successful projects delivered to businesses across various industries
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="section">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button className="px-6 py-2 bg-[#E192A7] text-white rounded-lg font-semibold hover:bg-[#d87a93] transition">
              All Projects
            </button>
            <button className="px-6 py-2 border-2 border-[#E192A7] text-[#E192A7] rounded-lg font-semibold hover:bg-[#E192A7] hover:text-white transition">
              Websites
            </button>
            <button className="px-6 py-2 border-2 border-[#E192A7] text-[#E192A7] rounded-lg font-semibold hover:bg-[#E192A7] hover:text-white transition">
              Automation
            </button>
            <button className="px-6 py-2 border-2 border-[#E192A7] text-[#E192A7] rounded-lg font-semibold hover:bg-[#E192A7] hover:text-white transition">
              Chatbots
            </button>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="animate-slideUp" style={{ animationDelay: `${index * 0.1}s` }}>
                <ProjectCard {...project} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section">
        <div className="container-custom text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">Ready to Start Your Project?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Let's discuss your project requirements and create something amazing together.
          </p>
          <button className="btn-primary">Request a Quote</button>
        </div>
      </section>
    </div>
  );
}
