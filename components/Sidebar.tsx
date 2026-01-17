import { 
  LayoutDashboard, 
  BookOpen, 
  Calendar, 
  FileText, 
  BarChart3, 
  CreditCard, 
  Plane 
} from 'lucide-react';

export function Sidebar() {
  const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', active: false },
    { icon: BookOpen, label: 'My Classes', active: true },
    { icon: Calendar, label: 'Attendance', active: false },
    { icon: FileText, label: 'Study Materials', active: false },
    { icon: BarChart3, label: 'Academic Report', active: false },
    { icon: CreditCard, label: 'Tuition & Payments', active: false },
    { icon: Plane, label: 'Visa Information', active: false },
  ];

  return (
    <div className="w-64 bg-white border-r border-gray-200 flex flex-col">
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
            <BookOpen className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="font-semibold text-gray-900">EduLearn</h2>
            <p className="text-xs text-gray-500">English Academy</p>
          </div>
        </div>
      </div>

      <nav className="flex-1 p-4">
        <ul className="space-y-1">
          {menuItems.map((item, index) => (
            <li key={index}>
              <a
                href="#"
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                  item.active
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                <item.icon className="w-5 h-5" />
                <span className="font-medium text-sm">{item.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="p-4 border-t border-gray-200">
        <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
          <h3 className="font-semibold text-sm text-gray-900 mb-1">Need Help?</h3>
          <p className="text-xs text-gray-600 mb-3">Contact your academic advisor</p>
          <button className="w-full bg-blue-600 text-white text-sm py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
            Get Support
          </button>
        </div>
      </div>
    </div>
  );
}