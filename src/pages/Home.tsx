import SEO from '../components/SEO';
import { Mountain, Shield, Users, TrendingUp } from 'lucide-react';

export default function Home() {
  return (
    <>
      <SEO 
        title="Home" 
        description="Alaska Mining Group - Professional mining operations and development company serving Alaska with expertise in exploration, development, and sustainable mining practices."
        keywords="Alaska mining, mining operations, mineral exploration, Alaska resources, mining development"
      />
      
      <div className="bg-gradient-to-br from-slate-800 to-slate-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-5xl font-bold mb-6">Alaska Mining Group</h1>
            <p className="text-xl text-gray-200 mb-8">
              Leading mining operations and development company with decades of experience in Alaska's resource sector.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="/projects" className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-3 rounded-lg font-semibold transition">
                Our Projects
              </a>
              <a href="/contact" className="bg-slate-700 hover:bg-slate-600 text-white px-8 py-3 rounded-lg font-semibold transition">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <Mountain className="h-12 w-12 text-amber-500 mb-4" />
            <h3 className="text-xl font-bold mb-2 text-slate-800">Mining Operations</h3>
            <p className="text-gray-600">Comprehensive mining solutions from exploration to production.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <Shield className="h-12 w-12 text-amber-500 mb-4" />
            <h3 className="text-xl font-bold mb-2 text-slate-800">Safety First</h3>
            <p className="text-gray-600">Industry-leading safety standards and protocols.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <Users className="h-12 w-12 text-amber-500 mb-4" />
            <h3 className="text-xl font-bold mb-2 text-slate-800">Expert Team</h3>
            <p className="text-gray-600">Experienced professionals dedicated to excellence.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <TrendingUp className="h-12 w-12 text-amber-500 mb-4" />
            <h3 className="text-xl font-bold mb-2 text-slate-800">Sustainable Growth</h3>
            <p className="text-gray-600">Responsible mining practices for long-term success.</p>
          </div>
        </div>

        <div className="mt-16 bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold mb-6 text-slate-800">About Our Company</h2>
          <p className="text-gray-600 mb-4">
            Alaska Mining Group is a premier mining operations and development company with extensive experience in Alaska's mineral resource sector. We specialize in exploration, development, and sustainable extraction of valuable minerals while maintaining the highest standards of environmental stewardship and community engagement.
          </p>
          <p className="text-gray-600">
            Our commitment to safety, sustainability, and operational excellence has made us a trusted partner for investors, communities, and stakeholders across Alaska.
          </p>
        </div>
      </div>
    </>
  );
}
