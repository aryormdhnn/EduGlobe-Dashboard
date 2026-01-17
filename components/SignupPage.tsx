import { useState } from 'react';
import { BookOpen, Lock, Mail, User, Phone, ArrowRight } from 'lucide-react';

interface SignupPageProps {
  onNavigateToLogin: () => void;
}

export function SignupPage({ onNavigateToLogin }: SignupPageProps) {
  const [selectedRole, setSelectedRole] = useState<string>('');
  const [showRoleSelection, setShowRoleSelection] = useState(true);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });

  const roles = [
    { id: 'super-admin', name: 'Super Admin', icon: '👑', disabled: true },
    { id: 'admin', name: 'Admin', icon: '⚙️', disabled: true },
    { id: 'admissions', name: 'Admissions & Visa Office', icon: '📋', disabled: true },
    { id: 'agent', name: 'Agent Portal', icon: '🤝' },
    { id: 'teacher', name: 'Teacher', icon: '👨‍🏫' },
    { id: 'student', name: 'Student', icon: '🎓' },
  ];

  const handleRoleSelect = (roleId: string) => {
    const role = roles.find(r => r.id === roleId);
    if (role?.disabled) return;
    setSelectedRole(roleId);
    setShowRoleSelection(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock signup - in real app would create account
    alert('Account created successfully!');
    onNavigateToLogin();
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  if (showRoleSelection) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 flex items-center justify-center p-4">
        <div className="w-full max-w-2xl">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-2xl mb-4">
              <BookOpen className="w-8 h-8 text-white" />
            </div>
            <h1 className="mb-2">Create Account</h1>
            <p className="text-gray-600">Select your role to get started</p>
          </div>

          <div className="bg-white rounded-xl p-8 border border-gray-200">
            <h2 className="font-semibold text-gray-900 mb-6">Choose Your Portal</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {roles.map((role) => (
                <button
                  key={role.id}
                  onClick={() => handleRoleSelect(role.id)}
                  disabled={role.disabled}
                  className={`flex items-center gap-4 p-5 rounded-xl transition-all group ${
                    role.disabled
                      ? 'bg-gray-100 cursor-not-allowed opacity-50'
                      : 'bg-gray-50 hover:bg-blue-50 border-2 border-transparent hover:border-blue-500'
                  }`}
                >
                  <div className="text-3xl">{role.icon}</div>
                  <div className="flex-1 text-left">
                    <p className={`font-medium ${
                      role.disabled 
                        ? 'text-gray-500' 
                        : 'text-gray-900 group-hover:text-blue-600'
                    } transition-colors`}>
                      {role.name}
                    </p>
                    {role.disabled && (
                      <p className="text-xs text-gray-400 mt-0.5">By invitation only</p>
                    )}
                  </div>
                  {!role.disabled && (
                    <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
                  )}
                </button>
              ))}
            </div>
          </div>

          <p className="text-center text-sm text-gray-600 mt-6">
            Already have an account?{' '}
            <button
              onClick={onNavigateToLogin}
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              Sign in here
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
          <h1 className="mb-2">Create Account</h1>
          <p className="text-gray-600">{currentRole?.name}</p>
        </div>

        <div className="bg-white rounded-xl p-8 border border-gray-200">
          <button
            onClick={() => setShowRoleSelection(true)}
            className="text-sm text-blue-600 hover:text-blue-700 mb-6 flex items-center gap-1"
          >
            ← Change Role
          </button>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                Full Name
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  id="fullName"
                  type="text"
                  value={formData.fullName}
                  onChange={(e) => handleInputChange('fullName', e.target.value)}
                  placeholder="Enter your full name"
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  placeholder="Enter your email"
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number
              </label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  placeholder="Enter your phone number"
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
                  value={formData.password}
                  onChange={(e) => handleInputChange('password', e.target.value)}
                  placeholder="Create a password"
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-2">
                Confirm Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  id="confirmPassword"
                  type="password"
                  value={formData.confirmPassword}
                  onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                  placeholder="Confirm your password"
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
            </div>

            <div>
              <label className="flex items-start gap-2">
                <input
                  type="checkbox"
                  className="w-4 h-4 mt-0.5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  required
                />
                <span className="text-sm text-gray-600">
                  I agree to the Terms of Service and Privacy Policy
                </span>
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Create Account
            </button>
          </form>

          <div className="mt-6 pt-6 border-t border-gray-200">
            <p className="text-center text-sm text-gray-600">
              Already have an account?{' '}
              <button
                onClick={onNavigateToLogin}
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                Sign in
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}