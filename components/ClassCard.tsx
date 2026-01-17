import { User, Clock, Lock, CheckCircle, Play } from 'lucide-react';

interface ClassData {
  id: number;
  category: string;
  title: string;
  teacher: string;
  schedule: string;
  progress: number;
  status: 'active' | 'completed' | 'locked';
  level: number;
  opensAt?: number;
}

interface ClassCardProps {
  classData: ClassData;
}

export function ClassCard({ classData }: ClassCardProps) {
  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Speaking':
        return 'bg-purple-100 text-purple-700';
      case 'Listening':
        return 'bg-blue-100 text-blue-700';
      case 'Grammar':
        return 'bg-orange-100 text-orange-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  const getProgressColor = () => {
    if (classData.status === 'completed') return 'bg-green-500';
    if (classData.status === 'active') return 'bg-blue-500';
    return 'bg-gray-300';
  };

  const renderButton = () => {
    if (classData.status === 'locked') {
      return (
        <button
          disabled
          className="w-full flex items-center justify-center gap-2 bg-gray-100 text-gray-400 py-3 px-4 rounded-lg cursor-not-allowed"
        >
          <Lock className="w-4 h-4" />
          <span className="font-medium text-sm">Locked</span>
        </button>
      );
    }

    if (classData.status === 'completed') {
      return (
        <button className="w-full flex items-center justify-center gap-2 bg-green-50 text-green-700 py-3 px-4 rounded-lg hover:bg-green-100 transition-colors">
          <CheckCircle className="w-4 h-4" />
          <span className="font-medium text-sm">Review Class</span>
        </button>
      );
    }

    return (
      <button className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors">
        <Play className="w-4 h-4" />
        <span className="font-medium text-sm">Continue</span>
      </button>
    );
  };

  return (
    <div
      className={`bg-white rounded-xl p-6 border border-gray-200 transition-all hover:border-gray-300 ${
        classData.status === 'locked' ? 'opacity-60' : ''
      }`}
    >
      <div className="flex items-start justify-between mb-4">
        <span
          className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(
            classData.category
          )}`}
        >
          {classData.category}
        </span>
        {classData.status === 'locked' && classData.opensAt && (
          <span className="px-2.5 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium">
            Opens at Level {classData.opensAt}
          </span>
        )}
      </div>

      <h3 className="font-semibold text-gray-900 mb-4 line-clamp-2">
        {classData.title}
      </h3>

      <div className="space-y-2.5 mb-5">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <User className="w-4 h-4 text-gray-400" />
          <span>{classData.teacher}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Clock className="w-4 h-4 text-gray-400" />
          <span>{classData.schedule}</span>
        </div>
      </div>

      {classData.status !== 'locked' && (
        <div className="mb-5">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-gray-600">Progress</span>
            <span className="text-xs font-semibold text-gray-900">
              {classData.progress}%
            </span>
          </div>
          <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
            <div
              className={`h-full ${getProgressColor()} transition-all rounded-full`}
              style={{ width: `${classData.progress}%` }}
            ></div>
          </div>
        </div>
      )}

      {renderButton()}
    </div>
  );
}