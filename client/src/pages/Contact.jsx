import { useEffect, useState } from 'react';
import { submitContactForm } from '../services/api';

export default function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResponse(null);

    try {
      const result = await submitContactForm(formData);
      setResponse({
        type: 'success',
        message: result.message,
      });
      setFormData({
        name: '',
        email: '',
        company: '',
        message: '',
      });
    } catch (error) {
      setResponse({
        type: 'error',
        message: error.message || 'An error occurred. Please try again.',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section bg-blue-600 text-white">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how we can help your business grow.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Send us a Message</h2>

              {response && (
                <div
                  className={`mb-6 p-4 rounded-lg ${
                    response.type === 'success'
                      ? 'bg-green-100 text-green-800'
                      : 'bg-red-100 text-red-800'
                  }`}
                >
                  {response.message}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your Company"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project..."
                    rows="5"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Contact Information</h2>

              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Email</h3>
                  <p className="text-gray-600">
                    <a href="mailto:info@digitalagency.com" className="text-blue-600 hover:text-blue-800">
                      info@digitalagency.com
                    </a>
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Phone</h3>
                  <p className="text-gray-600">
                    <a href="tel:+1234567890" className="text-blue-600 hover:text-blue-800">
                      +1 (234) 567-890
                    </a>
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Address</h3>
                  <p className="text-gray-600">
                    123 Business Street<br />
                    Tech City, TC 12345<br />
                    United States
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Business Hours</h3>
                  <p className="text-gray-600">
                    Monday - Friday: 9:00 AM - 6:00 PM<br />
                    Saturday: 10:00 AM - 4:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Follow Us</h3>
                  <div className="flex gap-4">
                    <a href="#" className="text-gray-400 hover:text-blue-600 transition">
                      Facebook
                    </a>
                    <a href="#" className="text-gray-400 hover:text-blue-600 transition">
                      LinkedIn
                    </a>
                    <a href="#" className="text-gray-400 hover:text-blue-600 transition">
                      Instagram
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-gray-50">
        <div className="container-custom max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="card">
              <h3 className="text-lg font-bold mb-2 text-gray-900">What is your typical project timeline?</h3>
              <p className="text-gray-600">
                Project timelines vary depending on complexity. Most projects are completed within 4-12 weeks. We'll
                provide a detailed timeline during the initial consultation.
              </p>
            </div>

            <div className="card">
              <h3 className="text-lg font-bold mb-2 text-gray-900">Do you provide maintenance and support?</h3>
              <p className="text-gray-600">
                Yes! We offer ongoing support and maintenance packages to keep your solutions running smoothly and up
                to date.
              </p>
            </div>

            <div className="card">
              <h3 className="text-lg font-bold mb-2 text-gray-900">Can you integrate with existing systems?</h3>
              <p className="text-gray-600">
                Absolutely. We specialize in integrating new solutions with your existing systems and tools. We'll
                discuss integration options during the planning phase.
              </p>
            </div>

            <div className="card">
              <h3 className="text-lg font-bold mb-2 text-gray-900">What payment options do you accept?</h3>
              <p className="text-gray-600">
                We accept all major payment methods and can arrange custom payment plans. Contact us to discuss your
                specific needs.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
