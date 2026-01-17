import { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { TopBar } from './components/TopBar';
import { LevelTracker } from './components/LevelTracker';
import { ClassCard } from './components/ClassCard';
import { LoginPage } from './components/LoginPage';
import { SignupPage } from './components/SignupPage';
import { ForgotPasswordPage } from './components/ForgotPasswordPage';
import { AgentDashboard } from './components/AgentDashboard';

type Page = 'login' | 'signup' | 'forgot' | 'dashboard' | 'agent-dashboard';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('login');

  const classes = [
    {
      id: 1,
      category: 'Speaking',
      title: 'Conversational English Basics',
      teacher: 'Sarah Johnson',
      schedule: 'Mon & Wed, 10:00 AM - 11:30 AM',
      progress: 85,
      status: 'active' as const,
      level: 2
    },
    {
      id: 2,
      category: 'Listening',
      title: 'Active Listening Skills',
      teacher: 'Michael Chen',
      schedule: 'Tue & Thu, 2:00 PM - 3:30 PM',
      progress: 60,
      status: 'active' as const,
      level: 2
    },
    {
      id: 3,
      category: 'Grammar',
      title: 'Essential Grammar Foundation',
      teacher: 'Emma Williams',
      schedule: 'Fri, 9:00 AM - 11:00 AM',
      progress: 100,
      status: 'completed' as const,
      level: 1
    },
    {
      id: 4,
      category: 'Speaking',
      title: 'Pronunciation Workshop',
      teacher: 'David Martinez',
      schedule: 'Mon & Wed, 3:00 PM - 4:30 PM',
      progress: 100,
      status: 'completed' as const,
      level: 1
    },
    {
      id: 5,
      category: 'Grammar',
      title: 'Intermediate Grammar Structures',
      teacher: 'Lisa Anderson',
      schedule: 'Tue & Thu, 10:00 AM - 11:30 AM',
      progress: 0,
      status: 'locked' as const,
      level: 3,
      opensAt: 3
    },
    {
      id: 6,
      category: 'Listening',
      title: 'Advanced Comprehension',
      teacher: 'Robert Taylor',
      schedule: 'Wed & Fri, 1:00 PM - 2:30 PM',
      progress: 0,
      status: 'locked' as const,
      level: 4,
      opensAt: 4
    }
  ];

  if (currentPage === 'login') {
    return (
      <LoginPage
        onNavigateToSignup={() => setCurrentPage('signup')}
        onNavigateToForgot={() => setCurrentPage('forgot')}
        onNavigateToDashboard={() => setCurrentPage('agent-dashboard')}
      />
    );
  }

  if (currentPage === 'signup') {
    return (
      <SignupPage
        onNavigateToLogin={() => setCurrentPage('login')}
      />
    );
  }

  if (currentPage === 'forgot') {
    return (
      <ForgotPasswordPage
        onNavigateToLogin={() => setCurrentPage('login')}
      />
    );
  }

  if (currentPage === 'agent-dashboard') {
    return <AgentDashboard />;
  }

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <TopBar />
        
        <main className="flex-1 overflow-y-auto p-8">
          <div className="max-w-7xl mx-auto">
            <div className="mb-8">
              <h1 className="mb-2">My Classes</h1>
              <p className="text-gray-600">Intensive English Programme (IEP)</p>
            </div>

            <LevelTracker currentLevel={2} />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              {classes.map((classItem) => (
                <ClassCard key={classItem.id} classData={classItem} />
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
