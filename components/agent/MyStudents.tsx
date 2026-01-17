import { AgentSidebar } from './AgentSidebar';
import { AgentTopBar } from './AgentTopBar';
import { StudentDetail } from './StudentDetail';
import { AddStudent } from './AddStudent';
import { Search, Filter, Download, Plus, Eye, Mail, Phone, MapPin, Calendar } from 'lucide-react';
import { useState } from 'react';

interface MyStudentsProps {
  onNavigate?: (page: string) => void;
}

export function MyStudents({ onNavigate }: MyStudentsProps) {
  const [view, setView] = useState<'list' | 'detail' | 'add'>('list');

  // Handle sub-navigation
  if (view === 'detail') {
    return <StudentDetail onNavigate={onNavigate} onBack={() => setView('list')} />;
  }

  if (view === 'add') {
    return <AddStudent onNavigate={onNavigate} onBack={() => setView('list')} />;
  }

  const students = [
    {
      id: 1,
      name: 'Ahmad Zaki',
      email: 'ahmad.zaki@email.com',
      phone: '+62 812-3456-7890',
      nationality: 'Indonesia',
      course: 'Intensive English Programme',
      level: 'Level 2 - Elementary',
      visaStatus: 'Approved',
      enrollmentDate: '2024-01-05',
      commission: 'RM 850',
      progress: 65,
      nextClass: '2024-01-15, 10:00 AM',
      institution: 'ELS Language Center KL'
    },
    {
      id: 2,
      name: 'Li Wei',
      email: 'li.wei@email.com',
      phone: '+86 138-0013-8000',
      nationality: 'China',
      course: 'Advanced English Course',
      level: 'Level 4 - Intermediate',
      visaStatus: 'Approved',
      enrollmentDate: '2024-01-03',
      commission: 'RM 950',
      progress: 82,
      nextClass: '2024-01-15, 2:00 PM',
      institution: 'British Council Malaysia'
    },
    {
      id: 3,
      name: 'Sarah Johnson',
      email: 'sarah.j@email.com',
      phone: '+1 555-0123',
      nationality: 'United States',
      course: 'Business English',
      level: 'Level 3 - Pre-Intermediate',
      visaStatus: 'Processing',
      enrollmentDate: '2024-01-08',
      commission: 'RM 800',
      progress: 45,
      nextClass: '2024-01-16, 9:00 AM',
      institution: 'ELS Language Center KL'
    },
    {
      id: 4,
      name: 'Fatima Al-Rashid',
      email: 'fatima.ar@email.com',
      phone: '+966 50-123-4567',
      nationality: 'Saudi Arabia',
      course: 'IELTS Preparation',
      level: 'Level 5 - Upper-Intermediate',
      visaStatus: 'Under Review',
      enrollmentDate: '2024-01-10',
      commission: 'RM 900',
      progress: 58,
      nextClass: '2024-01-15, 3:00 PM',
      institution: 'IDP Education'
    },
    {
      id: 5,
      name: 'Mohammed Hassan',
      email: 'mohammed.h@email.com',
      phone: '+20 100-123-4567',
      nationality: 'Egypt',
      course: 'General English',
      level: 'Level 1 - Foundation',
      visaStatus: 'Approved',
      enrollmentDate: '2024-01-02',
      commission: 'RM 750',
      progress: 90,
      nextClass: '2024-01-17, 11:00 AM',
      institution: 'Wall Street English'
    },
    {
      id: 6,
      name: 'Yuki Tanaka',
      email: 'yuki.tanaka@email.com',
      phone: '+81 90-1234-5678',
      nationality: 'Japan',
      course: 'English for Academic Purposes',
      level: 'Level 3 - Pre-Intermediate',
      visaStatus: 'Approved',
      enrollmentDate: '2024-01-06',
      commission: 'RM 880',
      progress: 72,
      nextClass: '2024-01-15, 1:00 PM',
      institution: 'British Council Malaysia'
    }
  ];

  const getStatusColor = (status: string) => {
    if (status === 'Approved') return 'bg-green-100 text-green-700 border-green-200';
    if (status === 'Processing') return 'bg-blue-100 text-blue-700 border-blue-200';
    return 'bg-orange-100 text-orange-700 border-orange-200';
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <AgentSidebar currentPage="students" onNavigate={onNavigate} />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <AgentTopBar />
        
        <main className="flex-1 overflow-y-auto p-8">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="mb-8">
              <h1 className="mb-2">My Students</h1>
              <p className="text-gray-600">Manage and track your student enrollments</p>
            </div>

            {/* Filters and Actions */}
            <div className="bg-white rounded-xl p-4 border border-gray-200 mb-6">
              <div className="flex items-center gap-4 flex-wrap">
                <div className="flex-1 min-w-[300px]">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search by name, email, or nationality..."
                      className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                    />
                  </div>
                </div>
                
                <button className="flex items-center gap-2 px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg hover:bg-gray-100 transition-colors text-sm font-medium">
                  <Filter className="w-4 h-4" />
                  Filter
                </button>

                <button className="flex items-center gap-2 px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg hover:bg-gray-100 transition-colors text-sm font-medium">
                  <Download className="w-4 h-4" />
                  Export
                </button>

                <button 
                  onClick={() => setView('add')}
                  className="flex items-center gap-2 px-4 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
                >
                  <Plus className="w-4 h-4" />
                  Add Student
                </button>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
              <div className="bg-white rounded-xl p-5 border border-gray-200">
                <p className="text-sm text-gray-600 mb-1">Total Students</p>
                <p className="text-2xl font-semibold text-gray-900">248</p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-gray-200">
                <p className="text-sm text-gray-600 mb-1">Active Enrollments</p>
                <p className="text-2xl font-semibold text-blue-600">186</p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-gray-200">
                <p className="text-sm text-gray-600 mb-1">Pending Visa</p>
                <p className="text-2xl font-semibold text-orange-600">34</p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-gray-200">
                <p className="text-sm text-gray-600 mb-1">Completed</p>
                <p className="text-2xl font-semibold text-green-600">28</p>
              </div>
            </div>

            {/* Students Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {students.map((student) => (
                <div key={student.id} className="bg-white rounded-xl p-6 border border-gray-200 hover:border-gray-300 transition-all">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                        <span className="text-white font-semibold">
                          {student.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">{student.name}</h3>
                        <p className="text-sm text-gray-600">{student.nationality}</p>
                      </div>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(student.visaStatus)}`}>
                      {student.visaStatus}
                    </span>
                  </div>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Mail className="w-4 h-4" />
                      <span>{student.email}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Phone className="w-4 h-4" />
                      <span>{student.phone}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <MapPin className="w-4 h-4" />
                      <span>{student.institution}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Calendar className="w-4 h-4" />
                      <span>Next class: {student.nextClass}</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="flex items-center justify-between text-sm mb-2">
                      <span className="text-gray-600">Course Progress</span>
                      <span className="font-medium text-gray-900">{student.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-blue-600 h-2 rounded-full transition-all"
                        style={{ width: `${student.progress}%` }}
                      ></div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <div>
                      <p className="text-xs text-gray-500">Commission</p>
                      <p className="font-semibold text-green-600">{student.commission}</p>
                    </div>
                    <div className="flex gap-2">
                      <button 
                        onClick={() => setView('detail')}
                        className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                        <Mail className="w-4 h-4" />
                      </button>
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