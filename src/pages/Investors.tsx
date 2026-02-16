import SEO from '../components/SEO';
import { TrendingUp, FileText, DollarSign, BarChart } from 'lucide-react';

export default function Investors() {
  return (
    <>
      <SEO 
        title="Investors" 
        description="Investor information for Alaska Mining Group including financial reports, presentations, and investment opportunities."
        keywords="mining investment, Alaska mining investors, mining stock, investment opportunities"
      />
      
      <div className="bg-slate-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Investor Relations</h1>
          <p className="text-xl text-gray-300">Building value through responsible mining operations</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold mb-6 text-slate-800">Investment Opportunity</h2>
          <p className="text-gray-600 mb-4">
            Alaska Mining Group offers investors the opportunity to participate in Alaska's vibrant mining sector. Our proven track record of operational excellence and strategic resource development positions us for long-term growth and value creation.
          </p>
          <p className="text-gray-600">
            We are committed to transparency, sound financial management, and delivering sustainable returns to our shareholders.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <TrendingUp className="h-12 w-12 text-amber-500 mb-4" />
            <h3 className="text-xl font-bold mb-3 text-slate-800">Growth</h3>
            <p className="text-gray-600">Strategic expansion and resource development</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <BarChart className="h-12 w-12 text-amber-500 mb-4" />
            <h3 className="text-xl font-bold mb-3 text-slate-800">Performance</h3>
            <p className="text-gray-600">Consistent operational and financial performance</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <DollarSign className="h-12 w-12 text-amber-500 mb-4" />
            <h3 className="text-xl font-bold mb-3 text-slate-800">Value</h3>
            <p className="text-gray-600">Long-term value creation for stakeholders</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <FileText className="h-12 w-12 text-amber-500 mb-4" />
            <h3 className="text-xl font-bold mb-3 text-slate-800">Transparency</h3>
            <p className="text-gray-600">Regular reporting and investor communications</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold mb-4 text-slate-800">Financial Reports</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-amber-500" />
                <span>Annual Reports</span>
              </li>
              <li className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-amber-500" />
                <span>Quarterly Statements</span>
              </li>
              <li className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-amber-500" />
                <span>SEC Filings</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold mb-4 text-slate-800">Presentations</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-amber-500" />
                <span>Investor Presentations</span>
              </li>
              <li className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-amber-500" />
                <span>Conference Materials</span>
              </li>
              <li className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-amber-500" />
                <span>Project Updates</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
