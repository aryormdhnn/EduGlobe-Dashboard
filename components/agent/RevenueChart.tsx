import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

export function RevenueChart() {
  const data = [
    { month: 'Jan', commission: 12500, students: 18 },
    { month: 'Feb', commission: 15200, students: 22 },
    { month: 'Mar', commission: 18900, students: 27 },
    { month: 'Apr', commission: 16700, students: 24 },
    { month: 'May', commission: 21300, students: 31 },
    { month: 'Jun', commission: 19800, students: 28 },
  ];

  return (
    <div className="bg-white rounded-xl p-6 border border-gray-200">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="font-semibold text-gray-900 mb-1">Commission Overview</h2>
          <p className="text-sm text-gray-600">Last 6 months performance</p>
        </div>
        <div className="flex gap-2">
          <button className="px-4 py-2 bg-blue-50 text-blue-600 rounded-lg text-sm font-medium">
            6 Months
          </button>
          <button className="px-4 py-2 bg-gray-100 text-gray-600 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors">
            1 Year
          </button>
        </div>
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
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
          <Bar dataKey="commission" fill="#3b82f6" radius={[8, 8, 0, 0]} name="Commission (RM)" />
          <Bar dataKey="students" fill="#10b981" radius={[8, 8, 0, 0]} name="New Students" />
        </BarChart>
      </ResponsiveContainer>

      <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-gray-200">
        <div>
          <p className="text-xs text-gray-500 mb-1">Total Commission</p>
          <p className="text-xl font-semibold text-gray-900">RM 104,400</p>
        </div>
        <div>
          <p className="text-xs text-gray-500 mb-1">Average per Student</p>
          <p className="text-xl font-semibold text-gray-900">RM 696</p>
        </div>
        <div>
          <p className="text-xs text-gray-500 mb-1">Total Students</p>
          <p className="text-xl font-semibold text-gray-900">150</p>
        </div>
      </div>
    </div>
  );
}