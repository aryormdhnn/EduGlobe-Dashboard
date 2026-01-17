import { AgentSidebar } from './AgentSidebar';
import { AgentTopBar } from './AgentTopBar';
import { SchoolDetail } from './SchoolDetail';
import { Search, MapPin, Phone, Mail, Globe, Star, Users, Award } from 'lucide-react';
import { useState } from 'react';

interface PartnerSchoolsProps {
  onNavigate?: (page: string) => void;
}

export function PartnerSchools({ onNavigate }: PartnerSchoolsProps) {
  const [view, setView] = useState<'list' | 'detail'>('list');

  // Handle sub-navigation
  if (view === 'detail') {
    return <SchoolDetail onNavigate={onNavigate} onBack={() => setView('list')} />;
  }

  const schools = [
    {
      id: 1,
      name: 'ELS Language Center Kuala Lumpur',
      logo: '🏫',
      location: 'Kuala Lumpur, Malaysia',
      address: 'Level 5, Menara MBMR, Jalan Syed Putra, 50450 Kuala Lumpur',
      phone: '+60 3-2274 5345',
      email: 'info@els.edu.my',
      website: 'www.els.edu.my',
      rating: 4.8,
      totalStudents: 87,
      activeStudents: 62,
      commissionRate: '15%',
      programs: ['Intensive English', 'Business English', 'IELTS Prep', 'TOEFL Prep'],
      accreditations: ['British Council', 'EduTrust', 'ISO 9001'],
      status: 'active'
    },
    {
      id: 2,
      name: 'British Council Malaysia',
      logo: '🎓',
      location: 'Kuala Lumpur, Malaysia',
      address: 'Ground Floor, Wisma Selangor Dredging, 142A Jalan Ampang, 50450 Kuala Lumpur',
      phone: '+60 3-2723 7900',
      email: 'enquiries@britishcouncil.org.my',
      website: 'www.britishcouncil.my',
      rating: 4.9,
      totalStudents: 124,
      activeStudents: 98,
      commissionRate: '12%',
      programs: ['General English', 'IELTS Preparation', 'Academic English', 'Professional English'],
      accreditations: ['British Council', 'Cambridge Assessment', 'IELTS Official'],
      status: 'active'
    },
    {
      id: 3,
      name: 'IDP Education Malaysia',
      logo: '📚',
      location: 'Petaling Jaya, Malaysia',
      address: 'Suite 11.01, Level 11, Menara Keck Seng, 203 Jalan Bukit Bintang, 55100 Kuala Lumpur',
      phone: '+60 3-2011 8800',
      email: 'info@idp.com',
      website: 'www.idp.com/malaysia',
      rating: 4.7,
      totalStudents: 56,
      activeStudents: 45,
      commissionRate: '18%',
      programs: ['IELTS Preparation', 'Academic English', 'English for Work'],
      accreditations: ['IELTS Official', 'British Council', 'IDP Certified'],
      status: 'active'
    },
    {
      id: 4,
      name: 'Wall Street English Malaysia',
      logo: '🏢',
      location: 'Kuala Lumpur, Malaysia',
      address: 'Lot 163 & 165, 1st Floor, Pavilion KL, 168 Jalan Bukit Bintang, 55100 Kuala Lumpur',
      phone: '+60 3-2142 1718',
      email: 'info@wallstreet.edu.my',
      website: 'www.wallstreetenglish.com.my',
      rating: 4.6,
      totalStudents: 45,
      activeStudents: 38,
      commissionRate: '16%',
      programs: ['Business English', 'General English', 'Professional English'],
      accreditations: ['Pearson', 'EduTrust', 'ISO 9001'],
      status: 'active'
    },
    {
      id: 5,
      name: 'International House Kuala Lumpur',
      logo: '🌍',
      location: 'Kuala Lumpur, Malaysia',
      address: 'Wisma UOA II, 6th Floor, 21 Jalan Pinang, 50450 Kuala Lumpur',
      phone: '+60 3-2171 3059',
      email: 'info@ihlangcentre.com',
      website: 'www.ihlangcentre.com',
      rating: 4.5,
      totalStudents: 34,
      activeStudents: 28,
      commissionRate: '14%',
      programs: ['General English', 'Cambridge Exam Prep', 'Business English'],
      accreditations: ['Cambridge Assessment', 'British Council', 'IH World'],
      status: 'active'
    },
    {
      id: 6,
      name: 'Awesome English Language Centre',
      logo: '⭐',
      location: 'Shah Alam, Malaysia',
      address: 'B-3A-3A, Megan Avenue 2, Jalan Yap Kwan Seng, 50450 Kuala Lumpur',
      phone: '+60 3-2181 3313',
      email: 'enquiry@awesome.edu.my',
      website: 'www.awesome.edu.my',
      rating: 4.4,
      totalStudents: 28,
      activeStudents: 22,
      commissionRate: '17%',
      programs: ['Intensive English', 'MUET Preparation', 'Foundation English'],
      accreditations: ['MOE Malaysia', 'EduTrust'],
      status: 'active'
    }
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      <AgentSidebar currentPage="schools" onNavigate={onNavigate} />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <AgentTopBar />
        
        <main className="flex-1 overflow-y-auto p-8">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="mb-8">
              <h1 className="mb-2">Partner Schools</h1>
              <p className="text-gray-600">Our trusted education partners in Malaysia</p>
            </div>

            {/* Search Bar */}
            <div className="bg-white rounded-xl p-4 border border-gray-200 mb-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search schools by name, location, or program..."
                  className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                />
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
              <div className="bg-white rounded-xl p-5 border border-gray-200">
                <p className="text-sm text-gray-600 mb-1">Total Partners</p>
                <p className="text-2xl font-semibold text-gray-900">24</p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-gray-200">
                <p className="text-sm text-gray-600 mb-1">Active Students</p>
                <p className="text-2xl font-semibold text-blue-600">293</p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-gray-200">
                <p className="text-sm text-gray-600 mb-1">Avg. Commission</p>
                <p className="text-2xl font-semibold text-green-600">15.2%</p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-gray-200">
                <p className="text-sm text-gray-600 mb-1">Avg. Rating</p>
                <p className="text-2xl font-semibold text-orange-600">4.7 ⭐</p>
              </div>
            </div>

            {/* Schools Grid */}
            <div className="space-y-6">
              {schools.map((school) => (
                <div key={school.id} className="bg-white rounded-xl p-6 border border-gray-200 hover:border-gray-300 transition-all">
                  <div className="flex items-start gap-6">
                    {/* Logo */}
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center text-4xl flex-shrink-0">
                      {school.logo}
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      {/* Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-1">{school.name}</h3>
                          <div className="flex items-center gap-2">
                            <div className="flex items-center gap-1">
                              <Star className="w-4 h-4 text-orange-500 fill-orange-500" />
                              <span className="text-sm font-medium text-gray-900">{school.rating}</span>
                            </div>
                            <span className="text-gray-400">•</span>
                            <span className="text-sm text-gray-600">{school.location}</span>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-sm text-gray-600 mb-1">Commission Rate</p>
                          <p className="text-xl font-semibold text-green-600">{school.commissionRate}</p>
                        </div>
                      </div>

                      {/* Contact Info */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
                        <div className="flex items-start gap-2 text-sm text-gray-600">
                          <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                          <span>{school.address}</span>
                        </div>
                        <div className="space-y-1">
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <Phone className="w-4 h-4" />
                            <span>{school.phone}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <Mail className="w-4 h-4" />
                            <span>{school.email}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <Globe className="w-4 h-4" />
                            <a href={`https://${school.website}`} className="text-blue-600 hover:text-blue-700">
                              {school.website}
                            </a>
                          </div>
                        </div>
                      </div>

                      {/* Programs */}
                      <div className="mb-4">
                        <p className="text-xs text-gray-500 mb-2">Available Programs</p>
                        <div className="flex flex-wrap gap-2">
                          {school.programs.map((program, index) => (
                            <span key={index} className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-full border border-blue-200">
                              {program}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Accreditations */}
                      <div className="mb-4">
                        <p className="text-xs text-gray-500 mb-2">Accreditations</p>
                        <div className="flex flex-wrap gap-2">
                          {school.accreditations.map((acc, index) => (
                            <span key={index} className="flex items-center gap-1 px-2 py-1 bg-green-50 text-green-700 text-xs font-medium rounded border border-green-200">
                              <Award className="w-3 h-3" />
                              {acc}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Stats */}
                      <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                        <div className="flex items-center gap-6">
                          <div className="flex items-center gap-2">
                            <Users className="w-4 h-4 text-gray-400" />
                            <div>
                              <p className="text-xs text-gray-500">Total Students</p>
                              <p className="text-sm font-medium text-gray-900">{school.totalStudents}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <Users className="w-4 h-4 text-blue-400" />
                            <div>
                              <p className="text-xs text-gray-500">Active Now</p>
                              <p className="text-sm font-medium text-blue-600">{school.activeStudents}</p>
                            </div>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <button 
                            onClick={() => setView('detail')}
                            className="px-4 py-2 bg-gray-50 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors text-sm font-medium border border-gray-200"
                          >
                            View Details
                          </button>
                          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
                            Register Student
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}