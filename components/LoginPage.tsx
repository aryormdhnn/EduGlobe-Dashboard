import { useState } from 'react';
import { BookOpen, Lock, Mail, ArrowRight } from 'lucide-react';

interface LoginPageProps {
  onNavigateToSignup: () => void;
  onNavigateToForgot: () => void;
  onNavigateToDashboard: () => void;
}

export function LoginPage({ onNavigateToSignup, onNavigateToForgot, onNavigateToDashboard }: LoginPageProps) {
  const [selectedRole, setSelectedRole] = useState<string>('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showRoleSelection, setShowRoleSelection] = useState(true);

  const roles = [
    { id: 'super-admin', name: 'Super Admin', icon: '👑' },
    { id: 'admin', name: 'Admin', icon: '⚙️' },
    { id: 'admissions', name: 'Admissions & Visa Office Portal', icon: '📋' },
    { id: 'agent', name: 'Agent Portal', icon: '🤝' },
    { id: 'teacher', name: 'Teacher', icon: '👨‍🏫' },
    { id: 'student', name: 'Student', icon: '🎓' },
  ];

  const handleRoleSelect = (roleId: string) => {
    setSelectedRole(roleId);
    setShowRoleSelection(false);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock login - in real app would validate credentials
    onNavigateToDashboard();
  };

  if (showRoleSelection) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 flex items-center justify-center p-4">
        <div className="w-full max-w-2xl">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-2xl mb-4">
              <BookOpen className="w-8 h-8 text-white" />
            </div>
            <h1 className="mb-2">Welcome to EduLearn</h1>
            <p className="text-gray-600">Select your role to continue</p>
          </div>

          <div className="bg-white rounded-xl p-8 border border-gray-200">
            <h2 className="font-semibold text-gray-900 mb-6">Choose Your Portal</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {roles.map((role) => (
                <button
                  key={role.id}
                  onClick={() => handleRoleSelect(role.id)}
                  className="flex items-center gap-4 p-5 bg-gray-50 hover:bg-blue-50 border-2 border-transparent hover:border-blue-500 rounded-xl transition-all group"
                >
                  <div className="text-3xl">{role.icon}</div>
                  <div className="flex-1 text-left">
                    <p className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                      {role.name}
                    </p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
                </button>
              ))}
            </div>
          </div>

          <p className="text-center text-sm text-gray-600 mt-6">
            Don't have an account?{' '}
            <button
              onClick={onNavigateToSignup}
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              Sign up here
            </button>
          </p>
        </div>
      </div>
    );
  }

  const currentRole = roles.find(r => r.id === selectedRole);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-2xl mb-4">
            <BookOpen className="w-8 h-8 text-white" />
          </div>
          <h1 className="mb-2">Sign In</h1>
          <p className="text-gray-600">{currentRole?.name}</p>
        </div>

        <div className="bg-white rounded-xl p-8 border border-gray-200">
          <button
            onClick={() => setShowRoleSelection(true)}
            className="text-sm text-blue-600 hover:text-blue-700 mb-6 flex items-center gap-1"
          >
            ← Change Role
          </button>

          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <span className="text-sm text-gray-600">Remember me</span>
              </label>
              <button
                type="button"
                onClick={onNavigateToForgot}
                className="text-sm text-blue-600 hover:text-blue-700 font-medium"
              >
                Forgot Password?
              </button>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Sign In
            </button>
          </form>

          <div className="mt-6 pt-6 border-t border-gray-200">
            <p className="text-center text-sm text-gray-600">
              Don't have an account?{' '}
              <button
                onClick={onNavigateToSignup}
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                Sign up
              </button>
            </p>
          </div>
        </div>

        <p className="text-center text-xs text-gray-500 mt-6">
          By signing in, you agree to our Terms of Service and Privacy Policy
        </p>
      </div>
    </div>
  );
}