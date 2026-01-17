import { AgentSidebar } from './AgentSidebar';
import { AgentTopBar } from './AgentTopBar';
import { ArrowLeft, Mail, Phone, MapPin, Calendar, FileText, Download, Edit, Trash2, Send, CheckCircle, Clock, BookOpen, Award, TrendingUp, DollarSign } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface StudentDetailProps {
  onNavigate?: (page: string) => void;
  onBack?: () => void;
}

export function StudentDetail({ onNavigate, onBack }: StudentDetailProps) {
  const student = {
    id: 1,
    name: 'Ahmad Zaki',
    email: 'ahmad.zaki@email.com',
    phone: '+62 812-3456-7890',
    nationality: 'Indonesia',
    passportNo: 'A12345678',
    dateOfBirth: '1995-05-15',
    address: 'Jl. Sudirman No. 123, Jakarta, Indonesia',
    course: 'Intensive English Programme',
    level: 'Level 2 - Elementary',
    institution: 'ELS Language Center KL',
    visaStatus: 'Approved',
    enrollmentDate: '2024-01-05',
    expectedCompletion: '2024-07-05',
    commission: 'RM 850',
    progress: 65,
    nextClass: '2024-01-15, 10:00 AM',
    teacher: 'Ms. Sarah Johnson',
    classRoom: 'Room A-301',
    attendanceRate: 92,
    averageScore: 78
  };

  const progressHistory = [
    { month: 'Week 1', score: 45 },
    { month: 'Week 2', score: 52 },
    { month: 'Week 3', score: 58 },
    { month: 'Week 4', score: 63 },
    { month: 'Week 5', score: 68 },
    { month: 'Week 6', score: 72 },
    { month: 'Week 7', score: 78 }
  ];

  const documents = [
    { name: 'Passport Copy', uploadDate: '2024-01-05', status: 'verified', size: '2.4 MB' },
    { name: 'Visa Letter', uploadDate: '2024-01-12', status: 'verified', size: '1.2 MB' },
    { name: 'Offer Letter', uploadDate: '2024-01-05', status: 'verified', size: '856 KB' },
    { name: 'Financial Proof', uploadDate: '2024-01-05', status: 'verified', size: '3.1 MB' },
    { name: 'Medical Certificate', uploadDate: '2024-01-08', status: 'verified', size: '1.8 MB' }
  ];

  const activities = [
    { date: '2024-01-14', time: '10:30 AM', action: 'Attended class - Business Communication', type: 'attendance' },
    { date: '2024-01-14', time: '09:00 AM', action: 'Submitted Assignment - Email Writing', type: 'assignment', score: 85 },
    { date: '2024-01-13', time: '02:15 PM', action: 'Completed Quiz - Grammar Test', type: 'quiz', score: 78 },
    { date: '2024-01-12', time: '10:30 AM', action: 'Attended class - Presentation Skills', type: 'attendance' },
    { date: '2024-01-11', time: '03:00 PM', action: 'Meeting with counselor', type: 'meeting' }
  ];

  const payments = [
    { date: '2024-01-05', description: 'Tuition Fee - Semester 1', amount: 'RM 5,500', status: 'paid' },
    { date: '2024-01-05', description: 'Registration Fee', amount: 'RM 300', status: 'paid' },
    { date: '2024-02-01', description: 'Material Fee', amount: 'RM 200', status: 'pending' }
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      <AgentSidebar currentPage="students" onNavigate={onNavigate} />
      
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
              Back to My Students
            </button>

            {/* Header with Student Info */}
            <div className="bg-white rounded-xl p-6 border border-gray-200 mb-6">
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                    <span className="text-white text-2xl font-semibold">
                      {student.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <h1 className="mb-1">{student.name}</h1>
                    <p className="text-gray-600 mb-3">{student.nationality} • {student.passportNo}</p>
                    <div className="flex items-center gap-2">
                      <span className="px-3 py-1 bg-green-100 text-green-700 text-sm font-medium rounded-full border border-green-200">
                        {student.visaStatus}
                      </span>
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm font-medium rounded-full border border-blue-200">
                        {student.level}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors border border-gray-200">
                    <Mail className="w-5 h-5" />
                  </button>
                  <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors border border-gray-200">
                    <Edit className="w-5 h-5" />
                  </button>
                  <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors border border-red-200">
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
              <div className="bg-white rounded-xl p-5 border border-gray-200">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-blue-600" />
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-1">Course Progress</p>
                <p className="text-2xl font-semibold text-gray-900">{student.progress}%</p>
              </div>

              <div className="bg-white rounded-xl p-5 border border-gray-200">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-1">Attendance Rate</p>
                <p className="text-2xl font-semibold text-gray-900">{student.attendanceRate}%</p>
              </div>

              <div className="bg-white rounded-xl p-5 border border-gray-200">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Award className="w-5 h-5 text-purple-600" />
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-1">Average Score</p>
                <p className="text-2xl font-semibold text-gray-900">{student.averageScore}%</p>
              </div>

              <div className="bg-white rounded-xl p-5 border border-gray-200">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                    <DollarSign className="w-5 h-5 text-orange-600" />
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-1">Commission</p>
                <p className="text-2xl font-semibold text-green-600">{student.commission}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Left Column */}
              <div className="lg:col-span-2 space-y-6">
                {/* Contact Information */}
                <div className="bg-white rounded-xl p-6 border border-gray-200">
                  <h2 className="font-semibold text-gray-900 mb-4">Contact Information</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-start gap-3">
                      <Mail className="w-5 h-5 text-gray-400 mt-0.5" />
                      <div>
                        <p className="text-xs text-gray-500 mb-1">Email</p>
                        <p className="text-sm text-gray-900">{student.email}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Phone className="w-5 h-5 text-gray-400 mt-0.5" />
                      <div>
                        <p className="text-xs text-gray-500 mb-1">Phone</p>
                        <p className="text-sm text-gray-900">{student.phone}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Calendar className="w-5 h-5 text-gray-400 mt-0.5" />
                      <div>
                        <p className="text-xs text-gray-500 mb-1">Date of Birth</p>
                        <p className="text-sm text-gray-900">{student.dateOfBirth}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-gray-400 mt-0.5" />
                      <div>
                        <p className="text-xs text-gray-500 mb-1">Address</p>
                        <p className="text-sm text-gray-900">{student.address}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Progress Chart */}
                <div className="bg-white rounded-xl p-6 border border-gray-200">
                  <h2 className="font-semibold text-gray-900 mb-4">Performance Trend</h2>
                  <ResponsiveContainer width="100%" height={250}>
                    <LineChart data={progressHistory}>
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
                      <Line type="monotone" dataKey="score" stroke="#3b82f6" strokeWidth={2} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>

                {/* Recent Activities */}
                <div className="bg-white rounded-xl p-6 border border-gray-200">
                  <h2 className="font-semibold text-gray-900 mb-4">Recent Activities</h2>
                  <div className="space-y-3">
                    {activities.map((activity, index) => (
                      <div key={index} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg border border-gray-200">
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${
                          activity.type === 'attendance' ? 'bg-blue-100' :
                          activity.type === 'assignment' ? 'bg-green-100' :
                          activity.type === 'quiz' ? 'bg-purple-100' : 'bg-orange-100'
                        }`}>
                          {activity.type === 'attendance' && <CheckCircle className="w-4 h-4 text-blue-600" />}
                          {activity.type === 'assignment' && <FileText className="w-4 h-4 text-green-600" />}
                          {activity.type === 'quiz' && <BookOpen className="w-4 h-4 text-purple-600" />}
                          {activity.type === 'meeting' && <Calendar className="w-4 h-4 text-orange-600" />}
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-medium text-gray-900">{activity.action}</p>
                          <p className="text-xs text-gray-500">{activity.date} at {activity.time}</p>
                        </div>
                        {activity.score && (
                          <span className="text-sm font-semibold text-blue-600">{activity.score}%</span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Payment History */}
                <div className="bg-white rounded-xl p-6 border border-gray-200">
                  <h2 className="font-semibold text-gray-900 mb-4">Payment History</h2>
                  <div className="space-y-3">
                    {payments.map((payment, index) => (
                      <div key={index} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                        <div>
                          <p className="font-medium text-gray-900 mb-1">{payment.description}</p>
                          <p className="text-xs text-gray-500">{payment.date}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold text-gray-900 mb-1">{payment.amount}</p>
                          <span className={`text-xs px-2 py-1 rounded-full ${
                            payment.status === 'paid' 
                              ? 'bg-green-100 text-green-700' 
                              : 'bg-orange-100 text-orange-700'
                          }`}>
                            {payment.status}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-6">
                {/* Course Details */}
                <div className="bg-white rounded-xl p-6 border border-gray-200">
                  <h2 className="font-semibold text-gray-900 mb-4">Course Details</h2>
                  <div className="space-y-3">
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Course Name</p>
                      <p className="text-sm font-medium text-gray-900">{student.course}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Institution</p>
                      <p className="text-sm font-medium text-gray-900">{student.institution}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Teacher</p>
                      <p className="text-sm font-medium text-gray-900">{student.teacher}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Classroom</p>
                      <p className="text-sm font-medium text-gray-900">{student.classRoom}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Next Class</p>
                      <p className="text-sm font-medium text-blue-600">{student.nextClass}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Enrollment Date</p>
                      <p className="text-sm font-medium text-gray-900">{student.enrollmentDate}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Expected Completion</p>
                      <p className="text-sm font-medium text-gray-900">{student.expectedCompletion}</p>
                    </div>
                  </div>
                </div>

                {/* Documents */}
                <div className="bg-white rounded-xl p-6 border border-gray-200">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="font-semibold text-gray-900">Documents</h2>
                    <button className="text-xs text-blue-600 hover:text-blue-700 font-medium">
                      Upload New
                    </button>
                  </div>
                  <div className="space-y-2">
                    {documents.map((doc, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-200">
                        <div className="flex items-center gap-2 flex-1">
                          <FileText className="w-4 h-4 text-gray-400" />
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-gray-900 truncate">{doc.name}</p>
                            <p className="text-xs text-gray-500">{doc.size}</p>
                          </div>
                        </div>
                        <button className="p-1 text-gray-600 hover:bg-gray-200 rounded transition-colors">
                          <Download className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="bg-white rounded-xl p-6 border border-gray-200">
                  <h2 className="font-semibold text-gray-900 mb-4">Quick Actions</h2>
                  <div className="space-y-2">
                    <button className="w-full flex items-center gap-2 px-4 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
                      <Send className="w-4 h-4" />
                      Send Message
                    </button>
                    <button className="w-full flex items-center gap-2 px-4 py-2.5 bg-gray-50 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors text-sm font-medium border border-gray-200">
                      <Calendar className="w-4 h-4" />
                      Schedule Meeting
                    </button>
                    <button className="w-full flex items-center gap-2 px-4 py-2.5 bg-gray-50 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors text-sm font-medium border border-gray-200">
                      <FileText className="w-4 h-4" />
                      Generate Report
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