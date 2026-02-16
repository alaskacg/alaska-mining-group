import SEO from '../components/SEO';
import { Wrench, Truck, Search, BarChart } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Search,
      title: 'Mineral Exploration',
      description: 'Comprehensive geological surveys and resource assessment using advanced technology.'
    },
    {
      icon: Wrench,
      title: 'Mine Development',
      description: 'Complete mine planning, design, and infrastructure development services.'
    },
    {
      icon: Truck,
      title: 'Mining Operations',
      description: 'Full-scale mining operations management with focus on efficiency and safety.'
    },
    {
      icon: BarChart,
      title: 'Resource Management',
      description: 'Strategic planning and optimization of mineral resource extraction.'
    }
  ];

  return (
    <>
      <SEO 
        title="Services" 
        description="Alaska Mining Group offers comprehensive mining services including exploration, development, operations, and resource management."
        keywords="mining services, mineral exploration, mine development, mining operations"
      />
      
      <div className="bg-slate-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Our Services</h1>
          <p className="text-xl text-gray-300">Comprehensive mining solutions for Alaska</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8">
                <Icon className="h-12 w-12 text-amber-500 mb-4" />
                <h3 className="text-2xl font-bold mb-3 text-slate-800">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            );
          })}
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold mb-6 text-slate-800">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className="text-xl font-bold mb-3 text-slate-800">Experience</h3>
              <p className="text-gray-600">Decades of proven success in Alaska mining operations.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3 text-slate-800">Technology</h3>
              <p className="text-gray-600">State-of-the-art equipment and modern mining techniques.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3 text-slate-800">Sustainability</h3>
              <p className="text-gray-600">Commitment to environmental protection and community partnership.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
