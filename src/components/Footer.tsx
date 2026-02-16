import { Mountain, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Mountain className="h-8 w-8 text-amber-500" />
              <span className="text-xl font-bold text-white">Alaska Mining Group</span>
            </div>
            <p className="text-sm">
              Professional mining operations and development company serving Alaska.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-amber-500">About</Link></li>
              <li><Link to="/projects" className="hover:text-amber-500">Projects</Link></li>
              <li><Link to="/services" className="hover:text-amber-500">Services</Link></li>
              <li><Link to="/careers" className="hover:text-amber-500">Careers</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/safety" className="hover:text-amber-500">Safety</Link></li>
              <li><Link to="/investors" className="hover:text-amber-500">Investors</Link></li>
              <li><Link to="/news" className="hover:text-amber-500">News</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>(907) 555-0100</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>info@alaskamining.group</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Anchorage, Alaska</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} Alaska Mining Group. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
