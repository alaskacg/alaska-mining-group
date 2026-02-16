import SEO from '../components/SEO';
import { Building, Users, Award, Target } from 'lucide-react';

export default function About() {
  return (
    <>
      <SEO 
        title="About Us" 
        description="Learn about Alaska Mining Group's history, mission, and commitment to responsible mining operations in Alaska."
        keywords="about Alaska Mining Group, mining company history, mining expertise"
      />
      
      <div className="bg-slate-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">About Alaska Mining Group</h1>
          <p className="text-xl text-gray-300">Excellence in mining operations since our founding</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold mb-6 text-slate-800">Our Story</h2>
            <p className="text-gray-600 mb-4">
              Alaska Mining Group has been at the forefront of responsible mining operations in Alaska for decades. Our journey began with a vision to develop Alaska's mineral resources while maintaining the highest standards of environmental protection and community partnership.
            </p>
            <p className="text-gray-600 mb-4">
              Today, we stand as one of Alaska's most trusted mining companies, with a proven track record of successful projects, safety excellence, and sustainable practices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Building className="h-12 w-12 text-amber-500 mb-4" />
              <h3 className="text-xl font-bold mb-3 text-slate-800">Our Mission</h3>
              <p className="text-gray-600">
                To responsibly develop Alaska's mineral resources while creating value for stakeholders and supporting local communities.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Target className="h-12 w-12 text-amber-500 mb-4" />
              <h3 className="text-xl font-bold mb-3 text-slate-800">Our Vision</h3>
              <p className="text-gray-600">
                To be Alaska's leading mining company recognized for operational excellence, environmental stewardship, and community partnership.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Users className="h-12 w-12 text-amber-500 mb-4" />
              <h3 className="text-xl font-bold mb-3 text-slate-800">Our Team</h3>
              <p className="text-gray-600">
                Experienced professionals committed to safety, quality, and innovation in every aspect of our operations.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Award className="h-12 w-12 text-amber-500 mb-4" />
              <h3 className="text-xl font-bold mb-3 text-slate-800">Our Values</h3>
              <p className="text-gray-600">
                Safety, integrity, sustainability, and excellence guide everything we do in our mining operations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
