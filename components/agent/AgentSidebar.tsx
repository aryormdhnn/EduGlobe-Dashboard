import { 
  LayoutDashboard, 
  Users, 
  FileText, 
  DollarSign, 
  BarChart3, 
  Settings,
  HelpCircle,
  Building2
} from 'lucide-react';

interface AgentSidebarProps {
  currentPage?: string;
  onNavigate?: (page: string) => void;
}

export function AgentSidebar({ currentPage = 'dashboard', onNavigate }: AgentSidebarProps) {
  const menuItems = [
    { id: 'dashboard', icon: LayoutDashboard, label: 'Dashboard' },
    { id: 'students', icon: Users, label: 'My Students' },
    { id: 'applications', icon: FileText, label: 'Visa Applications' },
    { id: 'commission', icon: DollarSign, label: 'Commission & Payments' },
    { id: 'reports', icon: BarChart3, label: 'Reports & Analytics' },
    { id: 'schools', icon: Building2, label: 'Partner Schools' },
    { id: 'settings', icon: Settings, label: 'Settings' },
  ];

  const handleClick = (id: string) => {
    if (onNavigate) {
      onNavigate(id);
    }
  };

  return (
    <div className="w-64 bg-white border-r border-gray-200 flex flex-col">
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
            <Building2 className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="font-semibold text-gray-900">Agent Portal</h2>
            <p className="text-xs text-gray-500">Malaysia Education</p>
          </div>
        </div>
      </div>

      <nav className="flex-1 p-4">
        <ul className="space-y-1">
          {menuItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => handleClick(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                  currentPage === item.id
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                <item.icon className="w-5 h-5" />
                <span className="font-medium text-sm">{item.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <div className="p-4 border-t border-gray-200">
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg p-4 text-white border border-blue-700">
          <HelpCircle className="w-8 h-8 mb-2" />
          <h3 className="font-semibold text-sm mb-1">Need Help?</h3>
          <p className="text-xs mb-3 opacity-90">Contact our agent support team</p>
          <button className="w-full bg-white text-blue-600 text-sm py-2 px-4 rounded-lg hover:bg-blue-50 transition-colors font-medium">
            Get Support
          </button>
        </div>
      </div>
    </div>
  );
}