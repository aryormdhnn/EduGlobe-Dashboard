import { Clock, CheckCircle, AlertCircle, FileText } from 'lucide-react';

interface Application {
  id: string;
  studentName: string;
  nationality: string;
  course: string;
  status: 'pending' | 'approved' | 'processing' | 'review';
  submittedDate: string;
  estimatedCompletion: string;
}

interface VisaApplicationCardProps {
  application: Application;
}

export function VisaApplicationCard({ application }: VisaApplicationCardProps) {
  const getStatusConfig = (status: string) => {
    switch (status) {
      case 'approved':
        return {
          color: 'bg-green-100 text-green-700',
          icon: CheckCircle,
          label: 'Approved'
        };
      case 'processing':
        return {
          color: 'bg-blue-100 text-blue-700',
          icon: Clock,
          label: 'Processing'
        };
      case 'review':
        return {
          color: 'bg-orange-100 text-orange-700',
          icon: AlertCircle,
          label: 'Under Review'
        };
      default:
        return {
          color: 'bg-gray-100 text-gray-700',
          icon: FileText,
          label: 'Pending'
        };
    }
  };

  const statusConfig = getStatusConfig(application.status);
  const StatusIcon = statusConfig.icon;

  return (
    <div className="bg-white rounded-xl p-5 border border-gray-200 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-4">
        <div>
          <p className="text-xs text-gray-500 mb-1">Application ID</p>
          <p className="font-semibold text-gray-900">{application.id}</p>
        </div>
        <span className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium ${statusConfig.color}`}>
          <StatusIcon className="w-3.5 h-3.5" />
          {statusConfig.label}
        </span>
      </div>

      <div className="space-y-2 mb-4">
        <div>
          <p className="text-xs text-gray-500">Student Name</p>
          <p className="font-medium text-gray-900">{application.studentName}</p>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div>
            <p className="text-xs text-gray-500">Nationality</p>
            <p className="text-sm text-gray-900">{application.nationality}</p>
          </div>
          <div>
            <p className="text-xs text-gray-500">Course</p>
            <p className="text-sm text-gray-900">{application.course}</p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
        <div>
          <p className="text-xs text-gray-500">Submitted</p>
          <p className="text-xs font-medium text-gray-900">{application.submittedDate}</p>
        </div>
        <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
          View Details →
        </button>
      </div>
    </div>
  );
}
