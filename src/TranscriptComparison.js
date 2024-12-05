import React from 'react';
import { diffWords } from 'diff';

const TranscriptComparison = ({ standardTranscript, traineeTranscript }) => {
  const differences = diffWords(standardTranscript, traineeTranscript);

  return (
    <div className="grid grid-cols-2 gap-4 p-6">
      {/* Standard Transcript */}
      <div>
        <h3 className="text-lg font-bold mb-2">Standard Transcript</h3>
        <div className="border p-4 rounded-lg bg-gray-50">
          {standardTranscript.split('\n').map((line, index) => (
            <p key={index}>{line}</p>
          ))}
        </div>
      </div>

      {/* Trainee Transcript with Highlighted Differences */}
      <div>
        <h3 className="text-lg font-bold mb-2">Trainee Transcript</h3>
        <div className="border p-4 rounded-lg bg-gray-50">
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
        </div>
      </div>
    </div>
  );
};

export default TranscriptComparison;
