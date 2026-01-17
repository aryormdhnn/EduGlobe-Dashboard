import { Check, Lock } from 'lucide-react';

interface LevelTrackerProps {
  currentLevel: number;
}

export function LevelTracker({ currentLevel }: LevelTrackerProps) {
  const levels = [
    { number: 1, name: 'Foundation', subtitle: 'Beginner' },
    { number: 2, name: 'Basic', subtitle: 'Elementary' },
    { number: 3, name: 'Developing', subtitle: 'Pre-Intermediate' },
    { number: 4, name: 'Growing', subtitle: 'Intermediate' },
    { number: 5, name: 'Advancing', subtitle: 'Upper-Intermediate' },
    { number: 6, name: 'Mastery', subtitle: 'Pre-Advanced' },
  ];

  const getStatus = (levelNumber: number) => {
    if (levelNumber < currentLevel) return 'completed';
    if (levelNumber === currentLevel) return 'inProgress';
    return 'locked';
  };

  return (
    <div className="bg-white rounded-xl p-8 border border-gray-200">
      <h2 className="font-semibold text-gray-900 mb-6">Learning Journey</h2>
      
      <div className="relative">
        <div className="flex items-center justify-between">
          {levels.map((level, index) => {
            const status = getStatus(level.number);
            const isCompleted = status === 'completed';
            const isInProgress = status === 'inProgress';
            const isLocked = status === 'locked';

            return (
              <div key={level.number} className="flex items-center flex-1">
                <div className="flex flex-col items-center relative z-10">
                  <div
                    className={`w-14 h-14 rounded-full flex items-center justify-center border-4 transition-all ${
                      isCompleted
                        ? 'bg-green-500 border-green-100'
                        : isInProgress
                        ? 'bg-blue-500 border-blue-100'
                        : 'bg-gray-200 border-gray-100'
                    }`}
                  >
                    {isCompleted ? (
                      <Check className="w-6 h-6 text-white" />
                    ) : isLocked ? (
                      <Lock className="w-5 h-5 text-gray-500" />
                    ) : (
                      <span className="text-white font-semibold">{level.number}</span>
                    )}
                  </div>
                  
                  <div className="mt-3 text-center">
                    <p
                      className={`font-semibold text-sm ${
                        isCompleted || isInProgress
                          ? 'text-gray-900'
                          : 'text-gray-400'
                      }`}
                    >
                      Level {level.number}
                    </p>
                    <p
                      className={`text-xs mt-0.5 ${
                        isCompleted || isInProgress
                          ? 'text-gray-600'
                          : 'text-gray-400'
                      }`}
                    >
                      {level.name}
                    </p>
                    <p
                      className={`text-xs ${
                        isCompleted || isInProgress
                          ? 'text-gray-500'
                          : 'text-gray-400'
                      }`}
                    >
                      ({level.subtitle})
                    </p>
                  </div>
                </div>

                {index < levels.length - 1 && (
                  <div className="flex-1 h-1 mx-2 mb-16 relative">
                    <div
                      className={`h-full rounded ${
                        isCompleted ? 'bg-green-500' : 'bg-gray-200'
                      }`}
                    ></div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}