import SEO from '../components/SEO';
import { Shield, AlertTriangle, CheckCircle, HardHat } from 'lucide-react';

export default function Safety() {
  return (
    <>
      <SEO 
        title="Safety" 
        description="Safety is our top priority at Alaska Mining Group. Learn about our comprehensive safety programs and commitment to zero incidents."
        keywords="mining safety, workplace safety, safety protocols, Alaska mining safety"
      />
      
      <div className="bg-slate-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Safety First</h1>
          <p className="text-xl text-gray-300">Our commitment to the safety of our team and communities</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <div className="flex items-center gap-4 mb-6">
            <Shield className="h-16 w-16 text-amber-500" />
            <h2 className="text-3xl font-bold text-slate-800">Safety is Our Priority</h2>
          </div>
          <p className="text-gray-600 mb-4">
            At Alaska Mining Group, safety isn't just a policy—it's our core value. We are committed to maintaining the highest safety standards in all our operations, ensuring every team member returns home safely every day.
          </p>
          <p className="text-gray-600">
            Our comprehensive safety programs exceed industry standards and are continuously updated to incorporate the latest best practices and technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <HardHat className="h-12 w-12 text-amber-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2 text-slate-800">Training</h3>
            <p className="text-gray-600">Comprehensive safety training for all personnel</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <AlertTriangle className="h-12 w-12 text-amber-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2 text-slate-800">Prevention</h3>
            <p className="text-gray-600">Proactive hazard identification and mitigation</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <CheckCircle className="h-12 w-12 text-amber-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2 text-slate-800">Compliance</h3>
            <p className="text-gray-600">Full regulatory compliance and certification</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <Shield className="h-12 w-12 text-amber-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2 text-slate-800">Culture</h3>
            <p className="text-gray-600">Safety-first mindset in all operations</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold mb-6 text-slate-800">Safety Programs</h2>
          <ul className="space-y-3 text-gray-600">
            <li className="flex items-start gap-3">
              <CheckCircle className="h-6 w-6 text-amber-500 mt-1 flex-shrink-0" />
              <span>Regular safety audits and inspections of all facilities and equipment</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="h-6 w-6 text-amber-500 mt-1 flex-shrink-0" />
              <span>Mandatory safety training and certification programs for all employees</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="h-6 w-6 text-amber-500 mt-1 flex-shrink-0" />
              <span>Emergency response procedures and regular drill exercises</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="h-6 w-6 text-amber-500 mt-1 flex-shrink-0" />
              <span>Personal protective equipment (PPE) requirements and enforcement</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="h-6 w-6 text-amber-500 mt-1 flex-shrink-0" />
              <span>Continuous safety improvement initiatives and feedback systems</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
