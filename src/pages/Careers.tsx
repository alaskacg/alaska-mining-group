import SEO from '../components/SEO';
import { Briefcase, Users, GraduationCap, Heart } from 'lucide-react';

export default function Careers() {
  const positions = [
    {
      title: 'Mining Engineer',
      department: 'Operations',
      location: 'Various Sites',
      type: 'Full-time'
    },
    {
      title: 'Geologist',
      department: 'Exploration',
      location: 'Anchorage, AK',
      type: 'Full-time'
    },
    {
      title: 'Safety Coordinator',
      department: 'Safety',
      location: 'Various Sites',
      type: 'Full-time'
    },
    {
      title: 'Equipment Operator',
      department: 'Operations',
      location: 'Various Sites',
      type: 'Full-time'
    }
  ];

  return (
    <>
      <SEO 
        title="Careers" 
        description="Join the Alaska Mining Group team. Explore career opportunities in mining operations, engineering, geology, and more."
        keywords="mining jobs Alaska, mining careers, mining employment, Alaska jobs"
      />
      
      <div className="bg-slate-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Careers</h1>
          <p className="text-xl text-gray-300">Build your career with Alaska's premier mining company</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold mb-6 text-slate-800">Why Work With Us</h2>
          <p className="text-gray-600 mb-8">
            Alaska Mining Group is more than just a workplace—it's a community of dedicated professionals committed to excellence, safety, and innovation in mining operations. Join our team and be part of Alaska's mining future.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <Briefcase className="h-12 w-12 text-amber-500 mx-auto mb-3" />
              <h3 className="font-bold text-slate-800 mb-2">Competitive Pay</h3>
              <p className="text-sm text-gray-600">Industry-leading compensation packages</p>
            </div>
            
            <div className="text-center">
              <Heart className="h-12 w-12 text-amber-500 mx-auto mb-3" />
              <h3 className="font-bold text-slate-800 mb-2">Benefits</h3>
              <p className="text-sm text-gray-600">Comprehensive health and wellness programs</p>
            </div>
            
            <div className="text-center">
              <GraduationCap className="h-12 w-12 text-amber-500 mx-auto mb-3" />
              <h3 className="font-bold text-slate-800 mb-2">Training</h3>
              <p className="text-sm text-gray-600">Ongoing professional development opportunities</p>
            </div>
            
            <div className="text-center">
              <Users className="h-12 w-12 text-amber-500 mx-auto mb-3" />
              <h3 className="font-bold text-slate-800 mb-2">Culture</h3>
              <p className="text-sm text-gray-600">Supportive team environment</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold mb-6 text-slate-800">Current Openings</h2>
          <div className="space-y-4">
            {positions.map((position, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-slate-800 mb-2">{position.title}</h3>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                      <span>Department: {position.department}</span>
                      <span>Location: {position.location}</span>
                      <span>Type: {position.type}</span>
                    </div>
                  </div>
                  <button className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-2 rounded-lg font-semibold transition">
                    Apply
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
