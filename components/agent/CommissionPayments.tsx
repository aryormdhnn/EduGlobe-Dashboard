import { AgentSidebar } from './AgentSidebar';
import { AgentTopBar } from './AgentTopBar';
import { DollarSign, TrendingUp, Download, Calendar, CheckCircle, Clock, XCircle } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface CommissionPaymentsProps {
  onNavigate?: (page: string) => void;
}

export function CommissionPayments({ onNavigate }: CommissionPaymentsProps) {
  const monthlyData = [
    { month: 'Jul', commission: 8500, paid: 8500 },
    { month: 'Aug', commission: 12200, paid: 12200 },
    { month: 'Sep', commission: 15800, paid: 15800 },
    { month: 'Oct', commission: 14200, paid: 14200 },
    { month: 'Nov', commission: 18500, paid: 18500 },
    { month: 'Dec', commission: 21300, paid: 0 },
    { month: 'Jan', commission: 19800, paid: 0 },
  ];

  const transactions = [
    {
      id: 'TXN-2024-045',
      date: '2024-01-10',
      description: 'Commission for 12 student enrollments',
      studentCount: 12,
      amount: 'RM 10,200',
      status: 'paid',
      paidDate: '2024-01-12',
      method: 'Bank Transfer'
    },
    {
      id: 'TXN-2024-046',
      date: '2024-01-11',
      description: 'Bonus - High performer incentive',
      studentCount: 0,
      amount: 'RM 2,000',
      status: 'paid',
      paidDate: '2024-01-13',
      method: 'Bank Transfer'
    },
    {
      id: 'TXN-2024-047',
      date: '2024-01-12',
      description: 'Commission for 8 student enrollments',
      studentCount: 8,
      amount: 'RM 6,800',
      status: 'pending',
      paidDate: null,
      method: null
    },
    {
      id: 'TXN-2024-048',
      date: '2024-01-13',
      description: 'Commission for 15 student enrollments',
      studentCount: 15,
      amount: 'RM 12,750',
      status: 'processing',
      paidDate: null,
      method: null
    },
    {
      id: 'TXN-2024-049',
      date: '2024-01-14',
      description: 'Commission for 10 student enrollments',
      studentCount: 10,
      amount: 'RM 8,500',
      status: 'pending',
      paidDate: null,
      method: null
    }
  ];

  const commissionBreakdown = [
    { course: 'Intensive English Programme', students: 45, commission: 'RM 38,250', rate: 'RM 850/student' },
    { course: 'Advanced English Course', students: 28, commission: 'RM 26,600', rate: 'RM 950/student' },
    { course: 'Business English', students: 32, commission: 'RM 25,600', rate: 'RM 800/student' },
    { course: 'IELTS Preparation', students: 24, commission: 'RM 21,600', rate: 'RM 900/student' },
    { course: 'General English', students: 18, commission: 'RM 13,500', rate: 'RM 750/student' },
    { course: 'English for Academic Purposes', students: 20, commission: 'RM 17,600', rate: 'RM 880/student' }
  ];

  const getStatusConfig = (status: string) => {
    switch (status) {
      case 'paid':
        return {
          color: 'bg-green-100 text-green-700 border-green-200',
          icon: CheckCircle,
          label: 'Paid'
        };
      case 'processing':
        return {
          color: 'bg-blue-100 text-blue-700 border-blue-200',
          icon: Clock,
          label: 'Processing'
        };
      default:
        return {
          color: 'bg-orange-100 text-orange-700 border-orange-200',
          icon: Clock,
          label: 'Pending'
        };
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <AgentSidebar currentPage="commission" onNavigate={onNavigate} />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <AgentTopBar />
        
        <main className="flex-1 overflow-y-auto p-8">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="mb-8">
              <h1 className="mb-2">Commission & Payments</h1>
              <p className="text-gray-600">Track your earnings and payment history</p>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                    <DollarSign className="w-6 h-6 text-green-600" />
                  </div>
                  <span className="flex items-center gap-1 text-sm font-medium text-green-600">
                    <TrendingUp className="w-4 h-4" />
                    +23%
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-1">Total Earned (YTD)</p>
                <p className="text-2xl font-semibold text-gray-900">RM 143,150</p>
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-blue-600" />
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-1">Paid This Month</p>
                <p className="text-2xl font-semibold text-gray-900">RM 12,200</p>
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                    <Clock className="w-6 h-6 text-orange-600" />
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-1">Pending Payment</p>
                <p className="text-2xl font-semibold text-gray-900">RM 28,050</p>
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-purple-600" />
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-1">Avg. Commission/Student</p>
                <p className="text-2xl font-semibold text-gray-900">RM 863</p>
              </div>
            </div>

            {/* Commission Trend Chart */}
            <div className="bg-white rounded-xl p-6 border border-gray-200 mb-8">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="font-semibold text-gray-900 mb-1">Commission Trend</h2>
                  <p className="text-sm text-gray-600">Last 7 months performance</p>
                </div>
                <button className="flex items-center gap-2 px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg hover:bg-gray-100 transition-colors text-sm font-medium">
                  <Download className="w-4 h-4" />
                  Export Report
                </button>
              </div>

              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={monthlyData}>
                  <defs>
                    <linearGradient id="colorCommission" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="colorPaid" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
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
                  <Area type="monotone" dataKey="commission" stroke="#3b82f6" fillOpacity={1} fill="url(#colorCommission)" name="Commission Earned (RM)" />
                  <Area type="monotone" dataKey="paid" stroke="#10b981" fillOpacity={1} fill="url(#colorPaid)" name="Amount Paid (RM)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>

            {/* Commission Breakdown by Course */}
            <div className="bg-white rounded-xl p-6 border border-gray-200 mb-8">
              <h2 className="font-semibold text-gray-900 mb-4">Commission Breakdown by Course</h2>
              <div className="space-y-3">
                {commissionBreakdown.map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-200">
                    <div className="flex-1">
                      <p className="font-medium text-gray-900 mb-1">{item.course}</p>
                      <p className="text-sm text-gray-600">{item.students} students • {item.rate}</p>
                    </div>
                    <p className="font-semibold text-green-600">{item.commission}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Transactions */}
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h2 className="font-semibold text-gray-900 mb-4">Recent Transactions</h2>
              <div className="space-y-3">
                {transactions.map((transaction) => {
                  const statusConfig = getStatusConfig(transaction.status);
                  const StatusIcon = statusConfig.icon;
                  
                  return (
                    <div key={transaction.id} className="p-4 border border-gray-200 rounded-lg hover:border-gray-300 transition-all">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <p className="font-medium text-gray-900">{transaction.id}</p>
                            <span className={`flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium border ${statusConfig.color}`}>
                              <StatusIcon className="w-3 h-3" />
                              {statusConfig.label}
                            </span>
                          </div>
                          <p className="text-sm text-gray-600 mb-1">{transaction.description}</p>
                          {transaction.studentCount > 0 && (
                            <p className="text-xs text-gray-500">{transaction.studentCount} students enrolled</p>
                          )}
                        </div>
                        <p className="text-xl font-semibold text-gray-900">{transaction.amount}</p>
                      </div>
                      
                      <div className="flex items-center justify-between pt-3 border-t border-gray-200">
                        <div className="flex items-center gap-4 text-xs text-gray-600">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-3.5 h-3.5" />
                            <span>Date: {transaction.date}</span>
                          </div>
                          {transaction.paidDate && (
                            <>
                              <div className="flex items-center gap-1">
                                <CheckCircle className="w-3.5 h-3.5 text-green-600" />
                                <span>Paid: {transaction.paidDate}</span>
                              </div>
                              <span className="text-gray-500">• {transaction.method}</span>
                            </>
                          )}
                        </div>
                        <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
                          View Details
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}