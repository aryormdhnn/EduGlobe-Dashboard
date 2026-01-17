import { useState } from 'react';
import { BookOpen, Mail, CheckCircle, ArrowLeft } from 'lucide-react';

interface ForgotPasswordPageProps {
  onNavigateToLogin: () => void;
}

export function ForgotPasswordPage({ onNavigateToLogin }: ForgotPasswordPageProps) {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock password reset - in real app would send reset email
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <h1 className="mb-2">Check Your Email</h1>
            <p className="text-gray-600">We've sent you a password reset link</p>
          </div>

          <div className="bg-white rounded-xl p-8 border border-gray-200">
            <div className="text-center mb-6">
              <p className="text-gray-600 mb-2">
                We've sent a password reset link to:
              </p>
              <p className="font-medium text-gray-900">{email}</p>
            </div>

            <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 mb-6">
              <p className="text-sm text-blue-900">
                <strong>Didn't receive the email?</strong>
              </p>
              <ul className="text-sm text-blue-800 mt-2 space-y-1 list-disc list-inside">
                <li>Check your spam or junk folder</li>
                <li>Make sure you entered the correct email</li>
                <li>Wait a few minutes and check again</li>
              </ul>
            </div>

            <button
              onClick={() => setIsSubmitted(false)}
              className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium mb-3"
            >
              Resend Email
            </button>

            <button
              onClick={onNavigateToLogin}
              className="w-full bg-gray-100 text-gray-700 py-3 px-4 rounded-lg hover:bg-gray-200 transition-colors font-medium flex items-center justify-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Sign In
            </button>
          </div>

          <p className="text-center text-xs text-gray-500 mt-6">
            The reset link will expire in 24 hours
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-2xl mb-4">
            <BookOpen className="w-8 h-8 text-white" />
          </div>
          <h1 className="mb-2">Forgot Password?</h1>
          <p className="text-gray-600">No worries, we'll send you reset instructions</p>
        </div>

        <div className="bg-white rounded-xl p-8 border border-gray-200">
          <div className="text-center mb-6">
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
            <p className="text-xs text-gray-500 mt-2">
              Enter the email address associated with your account
            </p>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            Send Reset Link
          </button>
        </div>

        <div className="mt-6 pt-6 border-t border-gray-200">
          <button
            onClick={onNavigateToLogin}
            className="w-full text-center text-sm text-gray-600 hover:text-gray-900 flex items-center justify-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Sign In
          </button>
        </div>

        <div className="mt-6 bg-white rounded-xl p-4 border border-gray-200">
          <p className="text-sm text-gray-600 text-center">
            Need help? Contact{' '}
            <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">
              support@edulearn.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}