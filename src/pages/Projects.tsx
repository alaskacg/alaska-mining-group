import SEO from '../components/SEO';
import { MapPin, Calendar, TrendingUp } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      name: 'Northern Gold Project',
      location: 'Interior Alaska',
      status: 'Active',
      description: 'Major gold exploration and development project in Alaska\'s interior region.'
    },
    {
      name: 'Copper Ridge Mine',
      location: 'Southeast Alaska',
      status: 'Production',
      description: 'High-grade copper mining operation with sustainable practices.'
    },
    {
      name: 'Silver Creek Exploration',
      location: 'Southwest Alaska',
      status: 'Exploration',
      description: 'Promising silver and zinc exploration project.'
    }
  ];

  return (
    <>
      <SEO 
        title="Projects" 
        description="Explore Alaska Mining Group's current and past mining projects across Alaska, including exploration, development, and production operations."
        keywords="mining projects Alaska, gold mining, copper mining, mineral exploration"
      />
      
      <div className="bg-slate-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Our Projects</h1>
          <p className="text-xl text-gray-300">Developing Alaska's mineral resources responsibly</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-slate-800">{project.name}</h3>
                <span className="px-3 py-1 bg-amber-500 text-white text-sm rounded-full">
                  {project.status}
                </span>
              </div>
              
              <div className="flex items-center gap-2 text-gray-600 mb-3">
                <MapPin className="h-4 w-4" />
                <span>{project.location}</span>
              </div>
              
              <p className="text-gray-600">{project.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold mb-6 text-slate-800">Project Development Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <Calendar className="h-8 w-8 text-amber-500" />
                <h3 className="text-xl font-bold text-slate-800">Exploration</h3>
              </div>
              <p className="text-gray-600">
                Initial surveys, geological assessment, and resource identification.
              </p>
            </div>
            
            <div>
              <div className="flex items-center gap-3 mb-3">
                <TrendingUp className="h-8 w-8 text-amber-500" />
                <h3 className="text-xl font-bold text-slate-800">Development</h3>
              </div>
              <p className="text-gray-600">
                Permitting, infrastructure development, and operational planning.
              </p>
            </div>
            
            <div>
              <div className="flex items-center gap-3 mb-3">
                <MapPin className="h-8 w-8 text-amber-500" />
                <h3 className="text-xl font-bold text-slate-800">Production</h3>
              </div>
              <p className="text-gray-600">
                Sustainable extraction and processing with environmental monitoring.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
