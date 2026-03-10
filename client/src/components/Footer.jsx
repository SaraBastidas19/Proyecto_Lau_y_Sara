import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Digital Agency</h3>
            <p className="text-gray-400">
              Building websites, automations, and AI chatbots for businesses.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link to="/services" className="hover:text-white transition">
                  Website Development
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition">
                  Business Automation
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition">
                  AI Chatbots
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link to="/about" className="hover:text-white transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="hover:text-white transition">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Follow Us</h4>
            <div className="space-y-2 text-gray-400">
              <p className="hover:text-white cursor-pointer transition">Facebook</p>
              <p className="hover:text-white cursor-pointer transition">LinkedIn</p>
              <p className="hover:text-white cursor-pointer transition">Instagram</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Digital Agency. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
