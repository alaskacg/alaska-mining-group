import SEO from '../components/SEO';
import { Calendar, FileText } from 'lucide-react';

export default function News() {
  const newsItems = [
    {
      date: '2024-02-15',
      title: 'Alaska Mining Group Announces New Exploration Project',
      excerpt: 'Company expands operations with significant new mineral exploration initiative in Interior Alaska.'
    },
    {
      date: '2024-01-28',
      title: 'Safety Milestone: 1 Million Hours Without Incident',
      excerpt: 'Team achieves remarkable safety record across all operations and project sites.'
    },
    {
      date: '2024-01-10',
      title: 'Community Partnership Program Launches',
      excerpt: 'New initiative strengthens relationships with local communities and supports economic development.'
    },
    {
      date: '2023-12-20',
      title: 'Q4 Production Targets Exceeded',
      excerpt: 'Strong operational performance delivers results above projected targets for the quarter.'
    }
  ];

  return (
    <>
      <SEO 
        title="News" 
        description="Latest news and updates from Alaska Mining Group including project announcements, company milestones, and industry insights."
        keywords="mining news Alaska, mining industry updates, Alaska Mining Group news"
      />
      
      <div className="bg-slate-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">News & Updates</h1>
          <p className="text-xl text-gray-300">Stay informed about our latest developments</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto space-y-8">
          {newsItems.map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-2 text-amber-600 mb-3">
                <Calendar className="h-5 w-5" />
                <span className="text-sm font-semibold">
                  {new Date(item.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </span>
              </div>
              <h2 className="text-2xl font-bold mb-3 text-slate-800">{item.title}</h2>
              <p className="text-gray-600 mb-4">{item.excerpt}</p>
              <button className="text-amber-600 hover:text-amber-700 font-semibold flex items-center gap-2">
                <FileText className="h-4 w-4" />
                Read More
              </button>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-white rounded-lg shadow-lg p-8 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-slate-800">Media Inquiries</h2>
          <p className="text-gray-600 mb-4">
            For media inquiries, press releases, or interview requests, please contact our communications team.
          </p>
          <p className="text-gray-600">
            Email: <a href="mailto:media@alaskamining.group" className="text-amber-600 hover:text-amber-700">media@alaskamining.group</a>
          </p>
        </div>
      </div>
    </>
  );
}
