import { AgentSidebar } from './AgentSidebar';
import { AgentTopBar } from './AgentTopBar';
import { Download, TrendingUp, Users, FileText, DollarSign, Globe } from 'lucide-react';
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface ReportsAnalyticsProps {
  onNavigate?: (page: string) => void;
}

export function ReportsAnalytics({ onNavigate }: ReportsAnalyticsProps) {
  const monthlyPerformance = [
    { month: 'Jan', students: 18, applications: 22, revenue: 15300 },
    { month: 'Feb', students: 22, applications: 28, revenue: 18700 },
    { month: 'Mar', students: 27, applications: 32, revenue: 23000 },
    { month: 'Apr', students: 24, applications: 29, revenue: 20400 },
    { month: 'May', students: 31, applications: 38, revenue: 26400 },
    { month: 'Jun', students: 28, applications: 34, revenue: 23800 }
  ];

  const nationalityData = [
    { name: 'Indonesia', value: 45, color: '#3b82f6' },
    { name: 'China', value: 38, color: '#10b981' },
    { name: 'Saudi Arabia', value: 28, color: '#f59e0b' },
    { name: 'Japan', value: 22, color: '#8b5cf6' },
    { name: 'Egypt', value: 18, color: '#ec4899' },
    { name: 'Others', value: 35, color: '#6b7280' }
  ];

  const coursePopularity = [
    { course: 'Intensive English Programme', students: 45, percentage: 24 },
    { course: 'Advanced English Course', students: 38, percentage: 20 },
    { course: 'Business English', students: 32, percentage: 17 },
    { course: 'IELTS Preparation', students: 28, percentage: 15 },
    { course: 'General English', students: 24, percentage: 13 },
    { course: 'English for Academic Purposes', students: 21, percentage: 11 }
  ];

  const visaSuccessRate = [
    { month: 'Jan', approved: 18, rejected: 2, pending: 4 },
    { month: 'Feb', approved: 22, rejected: 1, pending: 5 },
    { month: 'Mar', approved: 27, rejected: 2, pending: 3 },
    { month: 'Apr', approved: 24, rejected: 1, pending: 4 },
    { month: 'May', approved: 31, rejected: 3, pending: 4 },
    { month: 'Jun', approved: 28, rejected: 2, pending: 4 }
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      <AgentSidebar currentPage="reports" onNavigate={onNavigate} />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <AgentTopBar />
        
        <main className="flex-1 overflow-y-auto p-8">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="mb-8">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="mb-2">Reports & Analytics</h1>
                  <p className="text-gray-600">Comprehensive insights into your performance</p>
                </div>
                <button className="flex items-center gap-2 px-4 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
                  <Download className="w-4 h-4" />
                  Export All Reports
                </button>
              </div>
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <Users className="w-6 h-6 text-blue-600" />
                  </div>
                  <span className="flex items-center gap-1 text-sm font-medium text-green-600">
                    <TrendingUp className="w-4 h-4" />
                    +15%
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-1">Total Students</p>
                <p className="text-2xl font-semibold text-gray-900">248</p>
                <p className="text-xs text-gray-500 mt-1">vs last month: 216</p>
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                    <FileText className="w-6 h-6 text-green-600" />
                  </div>
                  <span className="flex items-center gap-1 text-sm font-medium text-green-600">
                    <TrendingUp className="w-4 h-4" />
                    +12%
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-1">Applications</p>
                <p className="text-2xl font-semibold text-gray-900">183</p>
                <p className="text-xs text-gray-500 mt-1">vs last month: 163</p>
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                    <DollarSign className="w-6 h-6 text-purple-600" />
                  </div>
                  <span className="flex items-center gap-1 text-sm font-medium text-green-600">
                    <TrendingUp className="w-4 h-4" />
                    +23%
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-1">Total Revenue</p>
                <p className="text-2xl font-semibold text-gray-900">RM 127.6K</p>
                <p className="text-xs text-gray-500 mt-1">vs last month: RM 103.8K</p>
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                    <Globe className="w-6 h-6 text-orange-600" />
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-1">Visa Success Rate</p>
                <p className="text-2xl font-semibold text-gray-900">93.2%</p>
                <p className="text-xs text-gray-500 mt-1">150 approved / 161 total</p>
              </div>
            </div>

            {/* Charts Row 1 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
              {/* Monthly Performance */}
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h2 className="font-semibold text-gray-900 mb-1">Monthly Performance</h2>
                    <p className="text-sm text-gray-600">Students & Revenue Trend</p>
                  </div>
                </div>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={monthlyPerformance}>
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
                    <Legend />
                    <Bar dataKey="students" fill="#3b82f6" radius={[8, 8, 0, 0]} name="Students" />
                    <Bar dataKey="applications" fill="#10b981" radius={[8, 8, 0, 0]} name="Applications" />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              {/* Student Nationality Distribution */}
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="mb-6">
                  <h2 className="font-semibold text-gray-900 mb-1">Student Nationality Distribution</h2>
                  <p className="text-sm text-gray-600">Top countries by enrollment</p>
                </div>
                <div className="flex items-center gap-8">
                  <ResponsiveContainer width="50%" height={250}>
                    <PieChart>
                      <Pie
                        data={nationalityData}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={90}
                        paddingAngle={5}
                        dataKey="value"
                      >
                        {nationalityData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                  <div className="flex-1 space-y-2">
                    {nationalityData.map((item, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                          <span className="text-sm text-gray-700">{item.name}</span>
                        </div>
                        <span className="text-sm font-medium text-gray-900">{item.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Charts Row 2 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
              {/* Visa Success Rate */}
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="mb-6">
                  <h2 className="font-semibold text-gray-900 mb-1">Visa Application Success Rate</h2>
                  <p className="text-sm text-gray-600">Monthly breakdown</p>
                </div>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={visaSuccessRate}>
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
                    <Legend />
                    <Line type="monotone" dataKey="approved" stroke="#10b981" strokeWidth={2} name="Approved" />
                    <Line type="monotone" dataKey="pending" stroke="#f59e0b" strokeWidth={2} name="Pending" />
                    <Line type="monotone" dataKey="rejected" stroke="#ef4444" strokeWidth={2} name="Rejected" />
                  </LineChart>
                </ResponsiveContainer>
              </div>

              {/* Course Popularity */}
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="mb-6">
                  <h2 className="font-semibold text-gray-900 mb-1">Most Popular Courses</h2>
                  <p className="text-sm text-gray-600">Enrollment by course type</p>
                </div>
                <div className="space-y-4">
                  {coursePopularity.map((course, index) => (
                    <div key={index}>
                      <div className="flex items-center justify-between mb-2">
                        <p className="text-sm font-medium text-gray-900">{course.course}</p>
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-gray-600">{course.students} students</span>
                          <span className="text-sm font-semibold text-blue-600">{course.percentage}%</span>
                        </div>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-blue-600 h-2 rounded-full transition-all"
                          style={{ width: `${course.percentage}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Performance Summary Table */}
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h2 className="font-semibold text-gray-900 mb-4">6-Month Performance Summary</h2>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-50 border-b border-gray-200">
                      <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Month</th>
                      <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Students</th>
                      <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Applications</th>
                      <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Revenue</th>
                      <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Avg/Student</th>
                      <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Growth</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {monthlyPerformance.map((data, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="px-4 py-3 text-sm font-medium text-gray-900">{data.month}</td>
                        <td className="px-4 py-3 text-sm text-gray-900">{data.students}</td>
                        <td className="px-4 py-3 text-sm text-gray-900">{data.applications}</td>
                        <td className="px-4 py-3 text-sm font-medium text-green-600">RM {data.revenue.toLocaleString()}</td>
                        <td className="px-4 py-3 text-sm text-gray-900">RM {Math.round(data.revenue / data.students)}</td>
                        <td className="px-4 py-3">
                          {index > 0 && (
                            <span className={`text-sm font-medium ${
                              data.students > monthlyPerformance[index - 1].students 
                                ? 'text-green-600' 
                                : 'text-red-600'
                            }`}>
                              {data.students > monthlyPerformance[index - 1].students ? '+' : ''}
                              {((data.students - monthlyPerformance[index - 1].students) / monthlyPerformance[index - 1].students * 100).toFixed(1)}%
                            </span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}