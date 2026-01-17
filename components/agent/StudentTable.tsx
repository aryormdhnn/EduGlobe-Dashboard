import { Eye, Download, MoreVertical } from 'lucide-react';

interface Student {
  id: number;
  name: string;
  email: string;
  nationality: string;
  course: string;
  level: string;
  visaStatus: string;
  enrollmentDate: string;
  commission: string;
}

interface StudentTableProps {
  students: Student[];
}

export function StudentTable({ students }: StudentTableProps) {
  const getStatusColor = (status: string) => {
    if (status === 'Approved') return 'bg-green-100 text-green-700';
    if (status === 'Processing') return 'bg-blue-100 text-blue-700';
    return 'bg-orange-100 text-orange-700';
  };

  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-200">
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Student Name
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Nationality
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Course
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Level
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Visa Status
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Commission
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {students.map((student) => (
              <tr key={student.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4">
                  <div>
                    <p className="font-medium text-gray-900">{student.name}</p>
                    <p className="text-sm text-gray-500">{student.email}</p>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <p className="text-sm text-gray-900">{student.nationality}</p>
                </td>
                <td className="px-6 py-4">
                  <p className="text-sm text-gray-900">{student.course}</p>
                </td>
                <td className="px-6 py-4">
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-700">
                    {student.level}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${getStatusColor(student.visaStatus)}`}>
                    {student.visaStatus}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <p className="font-semibold text-green-600">{student.commission}</p>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <button className="p-1.5 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                      <Eye className="w-4 h-4" />
                    </button>
                    <button className="p-1.5 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                      <Download className="w-4 h-4" />
                    </button>
                    <button className="p-1.5 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                      <MoreVertical className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}