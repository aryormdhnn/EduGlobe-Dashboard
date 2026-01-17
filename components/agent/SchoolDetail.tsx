import { AgentSidebar } from './AgentSidebar';
import { AgentTopBar } from './AgentTopBar';
import { ArrowLeft, MapPin, Phone, Mail, Globe, Star, Users, Award, BookOpen, Calendar, DollarSign, TrendingUp, CheckCircle } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface SchoolDetailProps {
  onNavigate?: (page: string) => void;
  onBack?: () => void;
}

export function SchoolDetail({ onNavigate, onBack }: SchoolDetailProps) {
  const school = {
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
    completedStudents: 25,
    commissionRate: '15%',
    averageCommission: 'RM 850',
    totalCommissionEarned: 'RM 73,950',
    established: '1998',
    description: 'ELS Language Center is one of the leading English language institutions in Malaysia, offering comprehensive English programs for international students. With over 25 years of experience, we provide quality education and excellent support services.',
    facilities: [
      'Modern Classrooms with Smart Boards',
      'Computer Lab with Latest Software',
      'Library & Resource Center',
      'Student Lounge',
      'Free WiFi Throughout Campus',
      'Cafeteria'
    ]
  };

  const programs = [
    { 
      name: 'Intensive English Programme', 
      duration: '12 weeks', 
      students: 35,
      commissionRate: '15%',
      avgCommission: 'RM 850',
      schedule: 'Mon-Fri, 9:00 AM - 3:00 PM'
    },
    { 
      name: 'Business English', 
      duration: '8 weeks', 
      students: 22,
      commissionRate: '15%',
      avgCommission: 'RM 800',
      schedule: 'Mon-Fri, 2:00 PM - 6:00 PM'
    },
    { 
      name: 'IELTS Preparation', 
      duration: '10 weeks', 
      students: 18,
      commissionRate: '18%',
      avgCommission: 'RM 920',
      schedule: 'Mon-Fri, 9:00 AM - 1:00 PM'
    },
    { 
      name: 'TOEFL Preparation', 
      duration: '10 weeks', 
      students: 12,
      commissionRate: '18%',
      avgCommission: 'RM 920',
      schedule: 'Mon-Fri, 1:00 PM - 5:00 PM'
    }
  ];

  const accreditations = [
    { name: 'British Council', year: '2010', status: 'Active' },
    { name: 'EduTrust Certification', year: '2015', status: 'Active' },
    { name: 'ISO 9001:2015', year: '2018', status: 'Active' },
    { name: 'Cambridge Assessment', year: '2012', status: 'Active' }
  ];

  const monthlyEnrollments = [
    { month: 'Jul', students: 8 },
    { month: 'Aug', students: 12 },
    { month: 'Sep', students: 14 },
    { month: 'Oct', students: 11 },
    { month: 'Nov', students: 16 },
    { month: 'Dec', students: 13 }
  ];

  const recentStudents = [
    { name: 'Ahmad Zaki', course: 'Intensive English', enrollDate: '2024-01-05', status: 'Active', commission: 'RM 850' },
    { name: 'Li Wei', course: 'Business English', enrollDate: '2024-01-08', status: 'Active', commission: 'RM 800' },
    { name: 'Sarah Johnson', course: 'IELTS Prep', enrollDate: '2024-01-10', status: 'Active', commission: 'RM 920' },
    { name: 'Mohammed Hassan', course: 'Intensive English', enrollDate: '2024-01-12', status: 'Active', commission: 'RM 850' },
    { name: 'Yuki Tanaka', course: 'TOEFL Prep', enrollDate: '2024-01-14', status: 'Active', commission: 'RM 920' }
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      <AgentSidebar currentPage="schools" onNavigate={onNavigate} />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <AgentTopBar />
        
        <main className="flex-1 overflow-y-auto p-8">
          <div className="max-w-7xl mx-auto">
            {/* Back Button */}
            <button 
              onClick={onBack}
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6 font-medium"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Partner Schools
            </button>

            {/* Header */}
            <div className="bg-white rounded-xl p-6 border border-gray-200 mb-6">
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center text-5xl">
                    {school.logo}
                  </div>
                  <div>
                    <h1 className="mb-1">{school.name}</h1>
                    <p className="text-gray-600 mb-3">Established {school.established}</p>
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1">
                        <Star className="w-5 h-5 text-orange-500 fill-orange-500" />
                        <span className="font-semibold text-gray-900">{school.rating}</span>
                        <span className="text-sm text-gray-500">(124 reviews)</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="flex items-center gap-2 px-4 py-2 bg-gray-50 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors text-sm font-medium border border-gray-200">
                    <Mail className="w-4 h-4" />
                    Contact School
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
                    <Users className="w-4 h-4" />
                    Register Student
                  </button>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-6">
              <div className="bg-white rounded-xl p-5 border border-gray-200">
                <div className="flex items-center gap-2 mb-2">
                  <Users className="w-5 h-5 text-blue-600" />
                  <p className="text-sm text-gray-600">Total Students</p>
                </div>
                <p className="text-2xl font-semibold text-gray-900">{school.totalStudents}</p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-gray-200">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <p className="text-sm text-gray-600">Active Now</p>
                </div>
                <p className="text-2xl font-semibold text-green-600">{school.activeStudents}</p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-gray-200">
                <div className="flex items-center gap-2 mb-2">
                  <Award className="w-5 h-5 text-purple-600" />
                  <p className="text-sm text-gray-600">Completed</p>
                </div>
                <p className="text-2xl font-semibold text-purple-600">{school.completedStudents}</p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-gray-200">
                <div className="flex items-center gap-2 mb-2">
                  <TrendingUp className="w-5 h-5 text-orange-600" />
                  <p className="text-sm text-gray-600">Commission Rate</p>
                </div>
                <p className="text-2xl font-semibold text-orange-600">{school.commissionRate}</p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-gray-200">
                <div className="flex items-center gap-2 mb-2">
                  <DollarSign className="w-5 h-5 text-green-600" />
                  <p className="text-sm text-gray-600">Total Earned</p>
                </div>
                <p className="text-2xl font-semibold text-green-600">{school.totalCommissionEarned}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Left Column */}
              <div className="lg:col-span-2 space-y-6">
                {/* About */}
                <div className="bg-white rounded-xl p-6 border border-gray-200">
                  <h2 className="font-semibold text-gray-900 mb-4">About the Institution</h2>
                  <p className="text-gray-700 leading-relaxed">{school.description}</p>
                </div>

                {/* Contact Information */}
                <div className="bg-white rounded-xl p-6 border border-gray-200">
                  <h2 className="font-semibold text-gray-900 mb-4">Contact Information</h2>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-gray-400 mt-0.5" />
                      <div>
                        <p className="text-xs text-gray-500 mb-1">Address</p>
                        <p className="text-sm text-gray-900">{school.address}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Phone className="w-5 h-5 text-gray-400 mt-0.5" />
                      <div>
                        <p className="text-xs text-gray-500 mb-1">Phone</p>
                        <p className="text-sm text-gray-900">{school.phone}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Mail className="w-5 h-5 text-gray-400 mt-0.5" />
                      <div>
                        <p className="text-xs text-gray-500 mb-1">Email</p>
                        <p className="text-sm text-gray-900">{school.email}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Globe className="w-5 h-5 text-gray-400 mt-0.5" />
                      <div>
                        <p className="text-xs text-gray-500 mb-1">Website</p>
                        <a href={`https://${school.website}`} className="text-sm text-blue-600 hover:text-blue-700">
                          {school.website}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Programs Offered */}
                <div className="bg-white rounded-xl p-6 border border-gray-200">
                  <h2 className="font-semibold text-gray-900 mb-4">Programs Offered</h2>
                  <div className="space-y-3">
                    {programs.map((program, index) => (
                      <div key={index} className="p-4 border border-gray-200 rounded-lg hover:border-gray-300 transition-all">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h3 className="font-medium text-gray-900 mb-1">{program.name}</h3>
                            <p className="text-sm text-gray-600">{program.duration} • {program.schedule}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-sm font-semibold text-green-600">{program.avgCommission}</p>
                            <p className="text-xs text-gray-500">{program.commissionRate} commission</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-4 text-sm">
                          <div className="flex items-center gap-1">
                            <Users className="w-4 h-4 text-gray-400" />
                            <span className="text-gray-600">{program.students} enrolled</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Enrollment Trend */}
                <div className="bg-white rounded-xl p-6 border border-gray-200">
                  <h2 className="font-semibold text-gray-900 mb-4">Monthly Enrollment Trend</h2>
                  <ResponsiveContainer width="100%" height={250}>
                    <BarChart data={monthlyEnrollments}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                      <XAxis 
                        dataKey="month" 
                        tick={{ fill: '#6b7280', fontSize: 12 }}
                        axisLine={{ stroke: '#e5e7eb' }}
                      />
                      <YAxis 
                        tick={{ fill: '#6b7280', fontSize: 12 }}
                        axisLine={{ stroke: '#e5e7eb' }}
                      />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: '#fff', 
                          border: '1px solid #e5e7eb',
                          borderRadius: '8px'
                        }}
                      />
                      <Bar dataKey="students" fill="#3b82f6" radius={[8, 8, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>

                {/* Recent Students */}
                <div className="bg-white rounded-xl p-6 border border-gray-200">
                  <h2 className="font-semibold text-gray-900 mb-4">Recent Students Enrolled</h2>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-gray-200">
                          <th className="text-left py-3 px-4 text-xs font-semibold text-gray-600 uppercase">Student Name</th>
                          <th className="text-left py-3 px-4 text-xs font-semibold text-gray-600 uppercase">Course</th>
                          <th className="text-left py-3 px-4 text-xs font-semibold text-gray-600 uppercase">Enroll Date</th>
                          <th className="text-left py-3 px-4 text-xs font-semibold text-gray-600 uppercase">Status</th>
                          <th className="text-right py-3 px-4 text-xs font-semibold text-gray-600 uppercase">Commission</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        {recentStudents.map((student, index) => (
                          <tr key={index} className="hover:bg-gray-50">
                            <td className="py-3 px-4 text-sm font-medium text-gray-900">{student.name}</td>
                            <td className="py-3 px-4 text-sm text-gray-600">{student.course}</td>
                            <td className="py-3 px-4 text-sm text-gray-600">{student.enrollDate}</td>
                            <td className="py-3 px-4">
                              <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">
                                {student.status}
                              </span>
                            </td>
                            <td className="py-3 px-4 text-sm font-semibold text-green-600 text-right">{student.commission}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-6">
                {/* Accreditations */}
                <div className="bg-white rounded-xl p-6 border border-gray-200">
                  <h2 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <Award className="w-5 h-5" />
                    Accreditations
                  </h2>
                  <div className="space-y-3">
                    {accreditations.map((acc, index) => (
                      <div key={index} className="p-3 bg-green-50 rounded-lg border border-green-200">
                        <div className="flex items-start justify-between mb-1">
                          <p className="text-sm font-medium text-gray-900">{acc.name}</p>
                          <CheckCircle className="w-4 h-4 text-green-600" />
                        </div>
                        <p className="text-xs text-gray-600">Since {acc.year}</p>
                        <span className="inline-block mt-2 px-2 py-0.5 bg-green-100 text-green-700 text-xs font-medium rounded">
                          {acc.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Facilities */}
                <div className="bg-white rounded-xl p-6 border border-gray-200">
                  <h2 className="font-semibold text-gray-900 mb-4">Facilities</h2>
                  <div className="space-y-2">
                    {school.facilities.map((facility, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <p className="text-sm text-gray-700">{facility}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Commission Details */}
                <div className="bg-white rounded-xl p-6 border border-gray-200">
                  <h2 className="font-semibold text-gray-900 mb-4">Commission Details</h2>
                  <div className="space-y-3">
                    <div className="p-3 bg-gray-50 rounded-lg">
                      <p className="text-xs text-gray-500 mb-1">Base Commission Rate</p>
                      <p className="text-lg font-semibold text-gray-900">{school.commissionRate}</p>
                    </div>
                    <div className="p-3 bg-gray-50 rounded-lg">
                      <p className="text-xs text-gray-500 mb-1">Average Per Student</p>
                      <p className="text-lg font-semibold text-green-600">{school.averageCommission}</p>
                    </div>
                    <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                      <p className="text-xs text-gray-500 mb-1">Total Earned (YTD)</p>
                      <p className="text-xl font-semibold text-green-600">{school.totalCommissionEarned}</p>
                    </div>
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="bg-white rounded-xl p-6 border border-gray-200">
                  <h2 className="font-semibold text-gray-900 mb-4">Quick Actions</h2>
                  <div className="space-y-2">
                    <button className="w-full flex items-center gap-2 px-4 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
                      <Users className="w-4 h-4" />
                      Register New Student
                    </button>
                    <button className="w-full flex items-center gap-2 px-4 py-2.5 bg-gray-50 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors text-sm font-medium border border-gray-200">
                      <Mail className="w-4 h-4" />
                      Contact School
                    </button>
                    <button className="w-full flex items-center gap-2 px-4 py-2.5 bg-gray-50 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors text-sm font-medium border border-gray-200">
                      <BookOpen className="w-4 h-4" />
                      View All Programs
                    </button>
                    <button className="w-full flex items-center gap-2 px-4 py-2.5 bg-gray-50 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors text-sm font-medium border border-gray-200">
                      <Calendar className="w-4 h-4" />
                      Schedule Visit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
