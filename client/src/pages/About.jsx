import { useEffect } from 'react';

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section bg-[#E192A7] text-white">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Digital Agency</h1>
          <p className="text-xl text-[#FCEEF1] max-w-2xl mx-auto">
            We're passionate about helping small businesses succeed with technology
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Our Mission</h2>
              <p className="text-lg text-gray-700 mb-4">
                Our mission is to empower small businesses with affordable, cutting-edge digital solutions that
                help them compete with larger enterprises. We believe every business, regardless of size, deserves
                access to professional technology.
              </p>
              <p className="text-lg text-gray-700">
                We're committed to being more than just a service provider – we're your strategic partner in
                digital transformation.
              </p>
            </div>
            <div className="bg-[#F7D5DD] h-80 rounded-lg flex items-center justify-center">
              <span className="text-[#E192A7]">Company Image</span>
            </div>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="bg-[#F7D5DD] h-80 rounded-lg flex items-center justify-center order-2 md:order-1">
              <span className="text-[#E192A7]">Vision Image</span>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Our Vision</h2>
              <p className="text-lg text-gray-700 mb-4">
                We envision a future where technology is accessible and affordable for all small businesses.
                A world where innovative digital solutions are the norm, not the exception.
              </p>
              <p className="text-lg text-gray-700">
                By 2025, we want to have helped 1,000+ businesses transform their operations and achieve
                unprecedented growth through our solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Why Small Businesses Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card">
              <h3 className="text-xl font-bold mb-4 text-gray-900">Affordable Solutions</h3>
              <p className="text-gray-600">
                We understand the budget constraints of small businesses. Our pricing is designed to be
                accessible without compromising on quality.
              </p>
            </div>

            <div className="card">
              <h3 className="text-xl font-bold mb-4 text-gray-900">Personal Attention</h3>
              <p className="text-gray-600">
                You're not just a ticket number. We build relationships with our clients and understand their
                unique business needs.
              </p>
            </div>

            <div className="card">
              <h3 className="text-xl font-bold mb-4 text-gray-900">Proven Expertise</h3>
              <p className="text-gray-600">
                With 5+ years of experience, we've successfully delivered 200+ projects across various
                industries.
              </p>
            </div>

            <div className="card">
              <h3 className="text-xl font-bold mb-4 text-gray-900">Continuous Support</h3>
              <p className="text-gray-600">
                Our relationship doesn't end after launch. We provide ongoing support, updates, and optimization
                to ensure your success.
              </p>
            </div>

            <div className="card">
              <h3 className="text-xl font-bold mb-4 text-gray-900">Technology Stack</h3>
              <p className="text-gray-600">
                We use modern, scalable technologies that keep your business future-proof and competitive in
                the digital landscape.
              </p>
            </div>

            <div className="card">
              <h3 className="text-xl font-bold mb-4 text-gray-900">Measurable Results</h3>
              <p className="text-gray-600">
                We focus on delivering tangible results: increased leads, improved efficiency, and growing
                revenue.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section bg-[#7A7676] text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold mb-2">200+</div>
              <p className="text-[#F5F5F5]">Projects Delivered</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">150+</div>
              <p className="text-[#F5F5F5]">Happy Clients</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">40%</div>
              <p className="text-[#F5F5F5]">Avg Lead Increase</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">5+</div>
              <p className="text-[#F5F5F5]">Years Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['Senior Developer', 'Design Lead', 'Project Manager'].map((role, index) => (
              <div key={index} className="card text-center">
                <div className="w-24 h-24 mx-auto bg-gray-300 rounded-full mb-4"></div>
                <h3 className="text-xl font-bold mb-2">Team Member {index + 1}</h3>
                <p className="text-[#E192A7] font-semibold mb-2">{role}</p>
                <p className="text-gray-600 text-sm">
                  Experienced professional dedicated to delivering excellent results for our clients.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
