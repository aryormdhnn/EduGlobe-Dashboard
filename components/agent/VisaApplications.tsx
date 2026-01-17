import { AgentSidebar } from './AgentSidebar';
import { AgentTopBar } from './AgentTopBar';
import { VisaApplicationDetail } from './VisaApplicationDetail';
import { Search, Filter, Download, Plus, FileText, Clock, CheckCircle, XCircle, AlertCircle } from 'lucide-react';
import { useState } from 'react';

interface VisaApplicationsProps {
  onNavigate?: (page: string) => void;
}

export function VisaApplications({ onNavigate }: VisaApplicationsProps) {
  const [view, setView] = useState<'list' | 'detail'>('list');

  // Handle sub-navigation
  if (view === 'detail') {
    return <VisaApplicationDetail onNavigate={onNavigate} onBack={() => setView('list')} />;
  }

  const applications = [
    {
      id: 'VA-2024-001',
      studentName: 'Ahmad Zaki',
      nationality: 'Indonesia',
      passportNo: 'A12345678',
      course: 'Intensive English Programme',
      institution: 'ELS Language Center KL',
      status: 'pending',
      submittedDate: '2024-01-12',
      estimatedCompletion: '2024-01-25',
      documents: ['Passport', 'Photo', 'Offer Letter', 'Financial Proof'],
      officer: 'Sarah Lee',
      priority: 'normal'
    },
    {
      id: 'VA-2024-002',
      studentName: 'Li Wei',
      nationality: 'China',
      passportNo: 'E98765432',
      course: 'Advanced English Course',
      institution: 'British Council Malaysia',
      status: 'approved',
      submittedDate: '2024-01-10',
      estimatedCompletion: '2024-01-20',
      approvedDate: '2024-01-14',
      documents: ['Passport', 'Photo', 'Offer Letter', 'Financial Proof', 'Medical'],
      officer: 'John Tan',
      priority: 'normal'
    },
    {
      id: 'VA-2024-003',
      studentName: 'Sarah Johnson',
      nationality: 'United States',
      passportNo: 'US5647382',
      course: 'Business English',
      institution: 'ELS Language Center KL',
      status: 'processing',
      submittedDate: '2024-01-11',
      estimatedCompletion: '2024-01-24',
      documents: ['Passport', 'Photo', 'Offer Letter'],
      officer: 'Mary Wong',
      priority: 'high'
    },
    {
      id: 'VA-2024-004',
      studentName: 'Fatima Al-Rashid',
      nationality: 'Saudi Arabia',
      passportNo: 'SA1122334',
      course: 'IELTS Preparation',
      institution: 'IDP Education',
      status: 'review',
      submittedDate: '2024-01-13',
      estimatedCompletion: '2024-01-26',
      documents: ['Passport', 'Photo', 'Offer Letter', 'Financial Proof'],
      officer: 'Ahmad Ibrahim',
      priority: 'normal'
    },
    {
      id: 'VA-2024-005',
      studentName: 'Mohammed Hassan',
      nationality: 'Egypt',
      passportNo: 'EG7788990',
      course: 'General English',
      institution: 'Wall Street English',
      status: 'rejected',
      submittedDate: '2024-01-09',
      estimatedCompletion: '2024-01-22',
      rejectedDate: '2024-01-13',
      rejectionReason: 'Incomplete financial documentation',
      documents: ['Passport', 'Photo', 'Offer Letter'],
      officer: 'Lisa Chen',
      priority: 'normal'
    },
    {
      id: 'VA-2024-006',
      studentName: 'Yuki Tanaka',
      nationality: 'Japan',
      passportNo: 'JP9988776',
      course: 'English for Academic Purposes',
      institution: 'British Council Malaysia',
      status: 'approved',
      submittedDate: '2024-01-08',
      estimatedCompletion: '2024-01-21',
      approvedDate: '2024-01-12',
      documents: ['Passport', 'Photo', 'Offer Letter', 'Financial Proof', 'Medical'],
      officer: 'David Lim',
      priority: 'normal'
    }
  ];

  const getStatusConfig = (status: string) => {
    switch (status) {
      case 'approved':
        return {
          color: 'bg-green-100 text-green-700 border-green-200',
          icon: CheckCircle,
          label: 'Approved'
        };
      case 'processing':
        return {
          color: 'bg-blue-100 text-blue-700 border-blue-200',
          icon: Clock,
          label: 'Processing'
        };
      case 'review':
        return {
          color: 'bg-orange-100 text-orange-700 border-orange-200',
          icon: AlertCircle,
          label: 'Under Review'
        };
      case 'rejected':
        return {
          color: 'bg-red-100 text-red-700 border-red-200',
          icon: XCircle,
          label: 'Rejected'
        };
      default:
        return {
          color: 'bg-gray-100 text-gray-700 border-gray-200',
          icon: FileText,
          label: 'Pending'
        };
    }
  };

  const getPriorityColor = (priority: string) => {
    if (priority === 'high') return 'text-red-600';
    if (priority === 'normal') return 'text-gray-600';
    return 'text-blue-600';
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <AgentSidebar currentPage="applications" onNavigate={onNavigate} />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <AgentTopBar />
        
        <main className="flex-1 overflow-y-auto p-8">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="mb-8">
              <h1 className="mb-2">Visa Applications</h1>
              <p className="text-gray-600">Track and manage student visa applications</p>
            </div>

            {/* Filters and Actions */}
            <div className="bg-white rounded-xl p-4 border border-gray-200 mb-6">
              <div className="flex items-center gap-4 flex-wrap">
                <div className="flex-1 min-w-[300px]">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search by application ID, student name, or passport..."
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

                <button className="flex items-center gap-2 px-4 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
                  <Plus className="w-4 h-4" />
                  New Application
                </button>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-6">
              <div className="bg-white rounded-xl p-5 border border-gray-200">
                <p className="text-sm text-gray-600 mb-1">Total Applications</p>
                <p className="text-2xl font-semibold text-gray-900">156</p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-gray-200">
                <p className="text-sm text-gray-600 mb-1">Pending</p>
                <p className="text-2xl font-semibold text-gray-600">34</p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-gray-200">
                <p className="text-sm text-gray-600 mb-1">Processing</p>
                <p className="text-2xl font-semibold text-blue-600">45</p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-gray-200">
                <p className="text-sm text-gray-600 mb-1">Approved</p>
                <p className="text-2xl font-semibold text-green-600">68</p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-gray-200">
                <p className="text-sm text-gray-600 mb-1">Rejected</p>
                <p className="text-2xl font-semibold text-red-600">9</p>
              </div>
            </div>

            {/* Applications List */}
            <div className="space-y-4">
              {applications.map((application) => {
                const statusConfig = getStatusConfig(application.status);
                const StatusIcon = statusConfig.icon;
                
                return (
                  <div key={application.id} className="bg-white rounded-xl p-6 border border-gray-200 hover:border-gray-300 transition-all">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center border border-gray-200">
                          <FileText className="w-6 h-6 text-gray-600" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="font-semibold text-gray-900">{application.id}</h3>
                            {application.priority === 'high' && (
                              <span className="px-2 py-0.5 bg-red-100 text-red-700 text-xs font-medium rounded border border-red-200">
                                High Priority
                              </span>
                            )}
                          </div>
                          <p className="text-sm text-gray-600">Officer: {application.officer}</p>
                        </div>
                      </div>
                      <span className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border ${statusConfig.color}`}>
                        <StatusIcon className="w-3.5 h-3.5" />
                        {statusConfig.label}
                      </span>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                      <div>
                        <p className="text-xs text-gray-500 mb-1">Student Name</p>
                        <p className="text-sm font-medium text-gray-900">{application.studentName}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 mb-1">Nationality</p>
                        <p className="text-sm text-gray-900">{application.nationality}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 mb-1">Passport No.</p>
                        <p className="text-sm text-gray-900">{application.passportNo}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 mb-1">Course</p>
                        <p className="text-sm text-gray-900">{application.course}</p>
                      </div>
                    </div>

                    <div className="mb-4">
                      <p className="text-xs text-gray-500 mb-2">Required Documents</p>
                      <div className="flex flex-wrap gap-2">
                        {application.documents.map((doc, index) => (
                          <span key={index} className="px-2 py-1 bg-gray-50 text-gray-700 text-xs rounded border border-gray-200">
                            {doc}
                          </span>
                        ))}
                      </div>
                    </div>

                    {application.status === 'rejected' && application.rejectionReason && (
                      <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg">
                        <p className="text-xs font-medium text-red-900 mb-1">Rejection Reason</p>
                        <p className="text-sm text-red-700">{application.rejectionReason}</p>
                      </div>
                    )}

                    <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                      <div className="flex items-center gap-6 text-xs text-gray-600">
                        <div>
                          <span className="text-gray-500">Submitted:</span>
                          <span className="ml-1 font-medium">{application.submittedDate}</span>
                        </div>
                        {application.approvedDate && (
                          <div>
                            <span className="text-gray-500">Approved:</span>
                            <span className="ml-1 font-medium text-green-600">{application.approvedDate}</span>
                          </div>
                        )}
                        {application.rejectedDate && (
                          <div>
                            <span className="text-gray-500">Rejected:</span>
                            <span className="ml-1 font-medium text-red-600">{application.rejectedDate}</span>
                          </div>
                        )}
                        {!application.approvedDate && !application.rejectedDate && (
                          <div>
                            <span className="text-gray-500">Est. Completion:</span>
                            <span className="ml-1 font-medium">{application.estimatedCompletion}</span>
                          </div>
                        )}
                      </div>
                      <button 
                        onClick={() => setView('detail')}
                        className="text-sm text-blue-600 hover:text-blue-700 font-medium"
                      >
                        View Details →
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}