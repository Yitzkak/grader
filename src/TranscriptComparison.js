import React from 'react';
import { diffWords } from 'diff';

const TranscriptComparison = ({ standardTranscript, traineeTranscript }) => {
  const differences = diffWords(standardTranscript, traineeTranscript);

  return (
    <div className="flex flex-col items-center p-8">
      <div className="grid grid-cols-2 gap-8 w-full max-w-[1400px]">
        {/* Standard Transcript */}
        <div className="flex flex-col">
          <h3 className="text-2xl font-bold mb-4 text-center">Standard Transcript</h3>
          <div className="border p-6 rounded-lg bg-gray-50 h-[600px] overflow-y-auto text-lg">
            <pre className="whitespace-pre-wrap">{standardTranscript}</pre>
          </div>
        </div>

        {/* Trainee Transcript with Highlighted Differences */}
        <div className="flex flex-col">
          <h3 className="text-2xl font-bold mb-4 text-center">Trainee Transcript</h3>
          <div className="border p-6 rounded-lg bg-gray-50 h-[600px] overflow-y-auto text-lg">
            <pre className="whitespace-pre-wrap">
              {differences.map((part, index) => (
                <span
                  key={index}
                  className={`${
                    part.added ? 'bg-red-200' : part.removed ? 'bg-green-200' : ''
                  } px-1`}
                >
                  {part.value}
                </span>
              ))}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TranscriptComparison;
