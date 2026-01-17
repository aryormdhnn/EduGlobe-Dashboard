import { AgentSidebar } from './AgentSidebar';
import { AgentTopBar } from './AgentTopBar';
import { ArrowLeft, FileText, Download, Mail, Phone, MapPin, Calendar, CheckCircle, Clock, AlertCircle, User, Building2, Globe, Paperclip, MessageSquare, Send } from 'lucide-react';
import { useState } from 'react';

interface VisaApplicationDetailProps {
  onNavigate?: (page: string) => void;
  onBack?: () => void;
}

export function VisaApplicationDetail({ onNavigate, onBack }: VisaApplicationDetailProps) {
  const [newComment, setNewComment] = useState('');

  const application = {
    id: 'VA-2024-001',
    studentName: 'Ahmad Zaki',
    studentEmail: 'ahmad.zaki@email.com',
    studentPhone: '+62 812-3456-7890',
    nationality: 'Indonesia',
    passportNo: 'A12345678',
    passportExpiry: '2028-05-15',
    dateOfBirth: '1995-05-15',
    course: 'Intensive English Programme',
    institution: 'ELS Language Center KL',
    duration: '6 months',
    startDate: '2024-02-01',
    status: 'processing',
    submittedDate: '2024-01-12',
    estimatedCompletion: '2024-01-25',
    officer: 'Sarah Lee',
    officerEmail: 'sarah.lee@immigration.gov.my',
    priority: 'normal',
    commissionAmount: 'RM 850'
  };

  const documents = [
    { name: 'Passport Copy (Certified)', uploadDate: '2024-01-12', status: 'verified', size: '2.4 MB', verifiedBy: 'Sarah Lee' },
    { name: 'Passport Photo (3.5x5cm)', uploadDate: '2024-01-12', status: 'verified', size: '856 KB', verifiedBy: 'Sarah Lee' },
    { name: 'Offer Letter from Institution', uploadDate: '2024-01-12', status: 'verified', size: '1.2 MB', verifiedBy: 'Sarah Lee' },
    { name: 'Financial Proof - Bank Statement', uploadDate: '2024-01-12', status: 'verified', size: '3.1 MB', verifiedBy: 'Sarah Lee' },
    { name: 'Medical Certificate', uploadDate: '2024-01-13', status: 'pending', size: '1.8 MB', verifiedBy: null },
    { name: 'Educational Certificate', uploadDate: '2024-01-13', status: 'verified', size: '2.2 MB', verifiedBy: 'Sarah Lee' }
  ];

  const timeline = [
    { date: '2024-01-14', time: '11:30 AM', title: 'Application Under Review', description: 'Immigration officer reviewing submitted documents', status: 'current' },
    { date: '2024-01-13', time: '02:15 PM', title: 'Additional Document Uploaded', description: 'Medical certificate and educational certificate uploaded', status: 'completed' },
    { date: '2024-01-13', time: '09:00 AM', title: 'Document Verification', description: 'All initial documents verified by immigration officer', status: 'completed' },
    { date: '2024-01-12', time: '04:30 PM', title: 'Application Received', description: 'Application received by immigration department', status: 'completed' },
    { date: '2024-01-12', time: '10:15 AM', title: 'Application Submitted', description: 'Application submitted by agent', status: 'completed' }
  ];

  const comments = [
    { date: '2024-01-14', time: '10:00 AM', author: 'Sarah Lee (Immigration Officer)', message: 'Please ensure the medical certificate is from an approved clinic.', type: 'officer' },
    { date: '2024-01-13', time: '03:00 PM', author: 'You (Agent)', message: 'Medical certificate has been uploaded. Please review.', type: 'agent' },
    { date: '2024-01-13', time: '09:30 AM', author: 'Sarah Lee (Immigration Officer)', message: 'Initial documents look good. Please upload medical certificate.', type: 'officer' }
  ];

  const handleSubmitComment = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle comment submission
    console.log('New comment:', newComment);
    setNewComment('');
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <AgentSidebar currentPage="applications" onNavigate={onNavigate} />
      
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
              Back to Visa Applications
            </button>

            {/* Header */}
            <div className="bg-white rounded-xl p-6 border border-gray-200 mb-6">
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center">
                    <FileText className="w-8 h-8 text-blue-600" />
                  </div>
                  <div>
                    <h1 className="mb-1">{application.id}</h1>
                    <p className="text-gray-600 mb-3">{application.studentName}</p>
                    <div className="flex items-center gap-2">
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm font-medium rounded-full border border-blue-200 flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        Processing
                      </span>
                      {application.priority === 'high' && (
                        <span className="px-3 py-1 bg-red-100 text-red-700 text-sm font-medium rounded-full border border-red-200">
                          High Priority
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="flex items-center gap-2 px-4 py-2 bg-gray-50 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors text-sm font-medium border border-gray-200">
                    <Download className="w-4 h-4" />
                    Download PDF
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
                    <Mail className="w-4 h-4" />
                    Contact Officer
                  </button>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
              <div className="bg-white rounded-xl p-5 border border-gray-200">
                <p className="text-sm text-gray-600 mb-1">Submitted Date</p>
                <p className="text-lg font-semibold text-gray-900">{application.submittedDate}</p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-gray-200">
                <p className="text-sm text-gray-600 mb-1">Est. Completion</p>
                <p className="text-lg font-semibold text-blue-600">{application.estimatedCompletion}</p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-gray-200">
                <p className="text-sm text-gray-600 mb-1">Processing Time</p>
                <p className="text-lg font-semibold text-gray-900">3 days</p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-gray-200">
                <p className="text-sm text-gray-600 mb-1">Commission</p>
                <p className="text-lg font-semibold text-green-600">{application.commissionAmount}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Left Column */}
              <div className="lg:col-span-2 space-y-6">
                {/* Student Information */}
                <div className="bg-white rounded-xl p-6 border border-gray-200">
                  <h2 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <User className="w-5 h-5" />
                    Student Information
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Full Name</p>
                      <p className="text-sm font-medium text-gray-900">{application.studentName}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Nationality</p>
                      <p className="text-sm font-medium text-gray-900">{application.nationality}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Passport Number</p>
                      <p className="text-sm font-medium text-gray-900">{application.passportNo}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Passport Expiry</p>
                      <p className="text-sm font-medium text-gray-900">{application.passportExpiry}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Date of Birth</p>
                      <p className="text-sm font-medium text-gray-900">{application.dateOfBirth}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Email</p>
                      <p className="text-sm font-medium text-gray-900">{application.studentEmail}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Phone</p>
                      <p className="text-sm font-medium text-gray-900">{application.studentPhone}</p>
                    </div>
                  </div>
                </div>

                {/* Course Information */}
                <div className="bg-white rounded-xl p-6 border border-gray-200">
                  <h2 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <Building2 className="w-5 h-5" />
                    Course Information
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Course Name</p>
                      <p className="text-sm font-medium text-gray-900">{application.course}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Institution</p>
                      <p className="text-sm font-medium text-gray-900">{application.institution}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Duration</p>
                      <p className="text-sm font-medium text-gray-900">{application.duration}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Start Date</p>
                      <p className="text-sm font-medium text-gray-900">{application.startDate}</p>
                    </div>
                  </div>
                </div>

                {/* Documents */}
                <div className="bg-white rounded-xl p-6 border border-gray-200">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="font-semibold text-gray-900 flex items-center gap-2">
                      <Paperclip className="w-5 h-5" />
                      Submitted Documents
                    </h2>
                    <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
                      Upload Additional
                    </button>
                  </div>
                  <div className="space-y-2">
                    {documents.map((doc, index) => (
                      <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-200">
                        <div className="flex items-center gap-3 flex-1">
                          <FileText className="w-5 h-5 text-gray-400" />
                          <div className="flex-1">
                            <p className="text-sm font-medium text-gray-900">{doc.name}</p>
                            <div className="flex items-center gap-2 mt-1">
                              <p className="text-xs text-gray-500">{doc.size}</p>
                              <span className="text-xs text-gray-400">•</span>
                              <p className="text-xs text-gray-500">Uploaded: {doc.uploadDate}</p>
                              {doc.verifiedBy && (
                                <>
                                  <span className="text-xs text-gray-400">•</span>
                                  <p className="text-xs text-gray-500">Verified by: {doc.verifiedBy}</p>
                                </>
                              )}
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            doc.status === 'verified' 
                              ? 'bg-green-100 text-green-700' 
                              : 'bg-orange-100 text-orange-700'
                          }`}>
                            {doc.status}
                          </span>
                          <button className="p-2 text-gray-600 hover:bg-gray-200 rounded-lg transition-colors">
                            <Download className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Timeline */}
                <div className="bg-white rounded-xl p-6 border border-gray-200">
                  <h2 className="font-semibold text-gray-900 mb-4">Application Timeline</h2>
                  <div className="space-y-4">
                    {timeline.map((item, index) => (
                      <div key={index} className="flex gap-4">
                        <div className="flex flex-col items-center">
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                            item.status === 'current' 
                              ? 'bg-blue-100 border-2 border-blue-600' 
                              : 'bg-green-100'
                          }`}>
                            {item.status === 'current' ? (
                              <Clock className="w-5 h-5 text-blue-600" />
                            ) : (
                              <CheckCircle className="w-5 h-5 text-green-600" />
                            )}
                          </div>
                          {index < timeline.length - 1 && (
                            <div className="w-0.5 h-12 bg-gray-200 my-1"></div>
                          )}
                        </div>
                        <div className="flex-1 pb-8">
                          <div className="flex items-start justify-between mb-1">
                            <h3 className="font-medium text-gray-900">{item.title}</h3>
                            <span className="text-xs text-gray-500">{item.time}</span>
                          </div>
                          <p className="text-sm text-gray-600 mb-1">{item.description}</p>
                          <p className="text-xs text-gray-500">{item.date}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Comments */}
                <div className="bg-white rounded-xl p-6 border border-gray-200">
                  <h2 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <MessageSquare className="w-5 h-5" />
                    Comments & Notes
                  </h2>
                  <div className="space-y-3 mb-4">
                    {comments.map((comment, index) => (
                      <div key={index} className={`p-4 rounded-lg border ${
                        comment.type === 'officer' 
                          ? 'bg-blue-50 border-blue-200' 
                          : 'bg-gray-50 border-gray-200'
                      }`}>
                        <div className="flex items-start justify-between mb-2">
                          <p className="text-sm font-medium text-gray-900">{comment.author}</p>
                          <p className="text-xs text-gray-500">{comment.date} at {comment.time}</p>
                        </div>
                        <p className="text-sm text-gray-700">{comment.message}</p>
                      </div>
                    ))}
                  </div>
                  <form onSubmit={handleSubmitComment} className="flex gap-2">
                    <input
                      type="text"
                      value={newComment}
                      onChange={(e) => setNewComment(e.target.value)}
                      placeholder="Add a comment or note..."
                      className="flex-1 px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                    />
                    <button 
                      type="submit"
                      className="flex items-center gap-2 px-4 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
                    >
                      <Send className="w-4 h-4" />
                      Send
                    </button>
                  </form>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-6">
                {/* Immigration Officer */}
                <div className="bg-white rounded-xl p-6 border border-gray-200">
                  <h2 className="font-semibold text-gray-900 mb-4">Immigration Officer</h2>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-semibold">
                        {application.officer.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{application.officer}</p>
                      <p className="text-xs text-gray-500">Case Officer</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <button className="w-full flex items-center gap-2 px-4 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
                      <Mail className="w-4 h-4" />
                      Send Email
                    </button>
                    <div className="pt-2 border-t border-gray-200">
                      <p className="text-xs text-gray-500 mb-1">Email</p>
                      <p className="text-sm text-gray-900">{application.officerEmail}</p>
                    </div>
                  </div>
                </div>

                {/* Application Status */}
                <div className="bg-white rounded-xl p-6 border border-gray-200">
                  <h2 className="font-semibold text-gray-900 mb-4">Status Details</h2>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <span className="text-sm text-gray-600">Documents Submitted</span>
                      <CheckCircle className="w-5 h-5 text-green-600" />
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <span className="text-sm text-gray-600">Documents Verified</span>
                      <CheckCircle className="w-5 h-5 text-green-600" />
                    </div>
                    <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg border border-blue-200">
                      <span className="text-sm text-gray-900 font-medium">Under Review</span>
                      <Clock className="w-5 h-5 text-blue-600" />
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg opacity-50">
                      <span className="text-sm text-gray-600">Final Decision</span>
                      <Clock className="w-5 h-5 text-gray-400" />
                    </div>
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="bg-white rounded-xl p-6 border border-gray-200">
                  <h2 className="font-semibold text-gray-900 mb-4">Quick Actions</h2>
                  <div className="space-y-2">
                    <button className="w-full flex items-center gap-2 px-4 py-2.5 bg-gray-50 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors text-sm font-medium border border-gray-200">
                      <Download className="w-4 h-4" />
                      Download All Documents
                    </button>
                    <button className="w-full flex items-center gap-2 px-4 py-2.5 bg-gray-50 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors text-sm font-medium border border-gray-200">
                      <FileText className="w-4 h-4" />
                      Generate Summary
                    </button>
                    <button className="w-full flex items-center gap-2 px-4 py-2.5 bg-gray-50 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors text-sm font-medium border border-gray-200">
                      <Mail className="w-4 h-4" />
                      Email Student
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
