import { AgentSidebar } from './AgentSidebar';
import { AgentTopBar } from './AgentTopBar';
import { ArrowLeft, Upload, X } from 'lucide-react';
import { useState } from 'react';

interface AddStudentProps {
  onNavigate?: (page: string) => void;
  onBack?: () => void;
}

export function AddStudent({ onNavigate, onBack }: AddStudentProps) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    nationality: '',
    passportNo: '',
    dateOfBirth: '',
    address: '',
    city: '',
    country: '',
    postalCode: '',
    course: '',
    institution: '',
    startDate: '',
    emergencyName: '',
    emergencyPhone: '',
    emergencyRelation: ''
  });

  const [documents, setDocuments] = useState<string[]>([]);

  const institutions = [
    'ELS Language Center KL',
    'British Council Malaysia',
    'IDP Education',
    'Wall Street English',
    'International House KL',
    'Awesome English Language Centre'
  ];

  const courses = [
    'Intensive English Programme',
    'Advanced English Course',
    'Business English',
    'IELTS Preparation',
    'TOEFL Preparation',
    'General English',
    'English for Academic Purposes'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <AgentSidebar currentPage="students" onNavigate={onNavigate} />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <AgentTopBar />
        
        <main className="flex-1 overflow-y-auto p-8">
          <div className="max-w-4xl mx-auto">
            {/* Back Button */}
            <button 
              onClick={onBack}
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6 font-medium"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to My Students
            </button>

            {/* Header */}
            <div className="mb-8">
              <h1 className="mb-2">Add New Student</h1>
              <p className="text-gray-600">Register a new student to your agency</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <h2 className="font-semibold text-gray-900 mb-4">Personal Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.firstName}
                      onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                      className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                      placeholder="Enter first name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.lastName}
                      onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                      className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                      placeholder="Enter last name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                      placeholder="student@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                      placeholder="+60 12-345 6789"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nationality <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.nationality}
                      onChange={(e) => setFormData({...formData, nationality: e.target.value})}
                      className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                      placeholder="Enter nationality"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Passport Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.passportNo}
                      onChange={(e) => setFormData({...formData, passportNo: e.target.value})}
                      className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                      placeholder="A12345678"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Date of Birth <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="date"
                      required
                      value={formData.dateOfBirth}
                      onChange={(e) => setFormData({...formData, dateOfBirth: e.target.value})}
                      className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                    />
                  </div>
                </div>
              </div>

              {/* Address Information */}
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <h2 className="font-semibold text-gray-900 mb-4">Address Information</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Street Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.address}
                      onChange={(e) => setFormData({...formData, address: e.target.value})}
                      className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                      placeholder="Enter street address"
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        City <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.city}
                        onChange={(e) => setFormData({...formData, city: e.target.value})}
                        className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                        placeholder="City"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Country <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.country}
                        onChange={(e) => setFormData({...formData, country: e.target.value})}
                        className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                        placeholder="Country"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Postal Code
                      </label>
                      <input
                        type="text"
                        value={formData.postalCode}
                        onChange={(e) => setFormData({...formData, postalCode: e.target.value})}
                        className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                        placeholder="Postal code"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Course Information */}
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <h2 className="font-semibold text-gray-900 mb-4">Course Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Institution <span className="text-red-500">*</span>
                    </label>
                    <select
                      required
                      value={formData.institution}
                      onChange={(e) => setFormData({...formData, institution: e.target.value})}
                      className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                    >
                      <option value="">Select institution</option>
                      {institutions.map((inst, index) => (
                        <option key={index} value={inst}>{inst}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Course <span className="text-red-500">*</span>
                    </label>
                    <select
                      required
                      value={formData.course}
                      onChange={(e) => setFormData({...formData, course: e.target.value})}
                      className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                    >
                      <option value="">Select course</option>
                      {courses.map((course, index) => (
                        <option key={index} value={course}>{course}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Start Date <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="date"
                      required
                      value={formData.startDate}
                      onChange={(e) => setFormData({...formData, startDate: e.target.value})}
                      className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                    />
                  </div>
                </div>
              </div>

              {/* Emergency Contact */}
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <h2 className="font-semibold text-gray-900 mb-4">Emergency Contact</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Contact Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.emergencyName}
                      onChange={(e) => setFormData({...formData, emergencyName: e.target.value})}
                      className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                      placeholder="Full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.emergencyPhone}
                      onChange={(e) => setFormData({...formData, emergencyPhone: e.target.value})}
                      className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                      placeholder="+60 12-345 6789"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Relationship <span className="text-red-500">*</span>
                    </label>
                    <select
                      required
                      value={formData.emergencyRelation}
                      onChange={(e) => setFormData({...formData, emergencyRelation: e.target.value})}
                      className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                    >
                      <option value="">Select relationship</option>
                      <option value="parent">Parent</option>
                      <option value="spouse">Spouse</option>
                      <option value="sibling">Sibling</option>
                      <option value="guardian">Guardian</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Document Upload */}
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <h2 className="font-semibold text-gray-900 mb-4">Required Documents</h2>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-blue-500 transition-colors cursor-pointer">
                  <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-sm font-medium text-gray-900 mb-1">Click to upload or drag and drop</p>
                  <p className="text-xs text-gray-500">Passport, Photo, Financial Proof (Max 10MB each)</p>
                </div>
                {documents.length > 0 && (
                  <div className="mt-4 space-y-2">
                    {documents.map((doc, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-200">
                        <span className="text-sm text-gray-900">{doc}</span>
                        <button 
                          type="button"
                          onClick={() => setDocuments(documents.filter((_, i) => i !== index))}
                          className="text-red-600 hover:text-red-700"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Form Actions */}
              <div className="flex items-center justify-end gap-4">
                <button 
                  type="button"
                  onClick={onBack}
                  className="px-6 py-2.5 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors font-medium border border-gray-200"
                >
                  Cancel
                </button>
                <button 
                  type="submit"
                  className="px-6 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                >
                  Register Student
                </button>
              </div>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
}
