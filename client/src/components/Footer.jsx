import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-[#F9FAFB] text-gray-900">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Digital Agency</h3>
            <p className="text-gray-700">
              Building websites, automations, and AI chatbots for businesses.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-700">
              <li>
                <Link to="/services" className="hover:text-[#E192A7] transition">
                  Website Development
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-[#E192A7] transition">
                  Business Automation
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-[#E192A7] transition">
                  AI Chatbots
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-700">
              <li>
                <Link to="/about" className="hover:text-[#E192A7] transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="hover:text-[#E192A7] transition">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#E192A7] transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Follow Us</h4>
            <div className="space-y-2 text-gray-700">
              <p className="hover:text-[#E192A7] cursor-pointer transition">Facebook</p>
              <p className="hover:text-[#E192A7] cursor-pointer transition">LinkedIn</p>
              <p className="hover:text-[#E192A7] cursor-pointer transition">Instagram</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 text-center text-gray-600">
          <p>&copy; 2024 Digital Agency. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
