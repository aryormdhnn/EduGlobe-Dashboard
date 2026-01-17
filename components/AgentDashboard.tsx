import { AgentSidebar } from './agent/AgentSidebar';
import { AgentTopBar } from './agent/AgentTopBar';
import { StatCard } from './agent/StatCard';
import { VisaApplicationCard } from './agent/VisaApplicationCard';
import { StudentTable } from './agent/StudentTable';
import { RevenueChart } from './agent/RevenueChart';
import { MyStudents } from './agent/MyStudents';
import { VisaApplications } from './agent/VisaApplications';
import { CommissionPayments } from './agent/CommissionPayments';
import { ReportsAnalytics } from './agent/ReportsAnalytics';
import { PartnerSchools } from './agent/PartnerSchools';
import { Settings } from './agent/Settings';
import { Users, FileText, DollarSign, CheckCircle, Clock, AlertCircle } from 'lucide-react';
import { useState } from 'react';

export function AgentDashboard() {
  const [currentPage, setCurrentPage] = useState('dashboard');

  // Render different pages based on currentPage
  if (currentPage === 'students') {
    return <MyStudents onNavigate={setCurrentPage} />;
  }

  if (currentPage === 'applications') {
    return <VisaApplications onNavigate={setCurrentPage} />;
  }

  if (currentPage === 'commission') {
    return <CommissionPayments onNavigate={setCurrentPage} />;
  }

  if (currentPage === 'reports') {
    return <ReportsAnalytics onNavigate={setCurrentPage} />;
  }

  if (currentPage === 'schools') {
    return <PartnerSchools onNavigate={setCurrentPage} />;
  }

  if (currentPage === 'settings') {
    return <Settings onNavigate={setCurrentPage} />;
  }

  const stats = [
    {
      title: 'Total Students',
      value: '248',
      change: '+12%',
      trend: 'up' as const,
      icon: Users,
      color: 'blue'
    },
    {
      title: 'Active Applications',
      value: '34',
      change: '+8',
      trend: 'up' as const,
      icon: FileText,
      color: 'orange'
    },
    {
      title: 'Total Commission',
      value: 'RM 45,680',
      change: '+23%',
      trend: 'up' as const,
      icon: DollarSign,
      color: 'green'
    },
    {
      title: 'Approved This Month',
      value: '28',
      change: '+15%',
      trend: 'up' as const,
      icon: CheckCircle,
      color: 'purple'
    }
  ];

  const recentApplications = [
    {
      id: 'VA-2024-001',
      studentName: 'Ahmad Zaki',
      nationality: 'Indonesia',
      course: 'Intensive English Programme',
      status: 'pending',
      submittedDate: '2024-01-12',
      estimatedCompletion: '2024-01-25'
    },
    {
      id: 'VA-2024-002',
      studentName: 'Li Wei',
      nationality: 'China',
      course: 'Advanced English Course',
      status: 'approved',
      submittedDate: '2024-01-10',
      estimatedCompletion: '2024-01-20'
    },
    {
      id: 'VA-2024-003',
      studentName: 'Sarah Johnson',
      nationality: 'United States',
      course: 'Business English',
      status: 'processing',
      submittedDate: '2024-01-11',
      estimatedCompletion: '2024-01-24'
    },
    {
      id: 'VA-2024-004',
      studentName: 'Fatima Al-Rashid',
      nationality: 'Saudi Arabia',
      course: 'IELTS Preparation',
      status: 'review',
      submittedDate: '2024-01-13',
      estimatedCompletion: '2024-01-26'
    }
  ];

  const recentStudents = [
    {
      id: 1,
      name: 'Ahmad Zaki',
      email: 'ahmad.zaki@email.com',
      nationality: 'Indonesia',
      course: 'Intensive English Programme',
      level: 'Level 2',
      visaStatus: 'Approved',
      enrollmentDate: '2024-01-05',
      commission: 'RM 850'
    },
    {
      id: 2,
      name: 'Li Wei',
      email: 'li.wei@email.com',
      nationality: 'China',
      course: 'Advanced English Course',
      level: 'Level 4',
      visaStatus: 'Approved',
      enrollmentDate: '2024-01-03',
      commission: 'RM 950'
    },
    {
      id: 3,
      name: 'Sarah Johnson',
      email: 'sarah.j@email.com',
      nationality: 'United States',
      course: 'Business English',
      level: 'Level 3',
      visaStatus: 'Processing',
      enrollmentDate: '2024-01-08',
      commission: 'RM 800'
    },
    {
      id: 4,
      name: 'Fatima Al-Rashid',
      email: 'fatima.ar@email.com',
      nationality: 'Saudi Arabia',
      course: 'IELTS Preparation',
      level: 'Level 5',
      visaStatus: 'Under Review',
      enrollmentDate: '2024-01-10',
      commission: 'RM 900'
    },
    {
      id: 5,
      name: 'Mohammed Hassan',
      email: 'mohammed.h@email.com',
      nationality: 'Egypt',
      course: 'General English',
      level: 'Level 1',
      visaStatus: 'Approved',
      enrollmentDate: '2024-01-02',
      commission: 'RM 750'
    }
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      <AgentSidebar currentPage={currentPage} onNavigate={setCurrentPage} />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <AgentTopBar />
        
        <main className="flex-1 overflow-y-auto p-8">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="mb-8">
              <h1 className="mb-2">Agent Dashboard</h1>
              <p className="text-gray-600">Welcome back, Agent Portal</p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {stats.map((stat, index) => (
                <StatCard key={index} {...stat} />
              ))}
            </div>

            {/* Revenue Chart */}
            <div className="mb-8">
              <RevenueChart />
            </div>

            {/* Recent Applications */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-semibold text-gray-900">Recent Visa Applications</h2>
                <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
                  View All
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {recentApplications.map((application) => (
                  <VisaApplicationCard key={application.id} application={application} />
                ))}
              </div>
            </div>

            {/* Students Table */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-semibold text-gray-900">My Students</h2>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
                  Add New Student
                </button>
              </div>
              <StudentTable students={recentStudents} />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}