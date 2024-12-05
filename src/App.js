import React, { useState } from 'react';
import TranscriptComparison from './TranscriptComparison';

const App = () => {
  const [standardTranscript, setStandardTranscript] = useState('');
  const [traineeTranscript, setTraineeTranscript] = useState('');

  const handleFileUpload = (e, type) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      if (type === 'standard') {
        setStandardTranscript(reader.result);
      } else if (type === 'trainee') {
        setTraineeTranscript(reader.result);
      }
    };

    reader.readAsText(file);
  };

  return (
    <div className="p-6 max-w-4xl mx-auto space-y-6">
      <h1 className="text-2xl font-bold">Transcript Comparison Tool</h1>

      {/* File Upload */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block mb-2 font-semibold">Upload Standard Transcript</label>
          <input
            type="file"
            accept=".txt"
            onChange={(e) => handleFileUpload(e, 'standard')}
            className="block w-full border border-gray-300 rounded-lg p-2"
          />
        </div>
        <div>
          <label className="block mb-2 font-semibold">Upload Trainee Transcript</label>
          <input
            type="file"
            accept=".txt"
            onChange={(e) => handleFileUpload(e, 'trainee')}
            className="block w-full border border-gray-300 rounded-lg p-2"
          />
        </div>
      </div>

      {/* Transcript Comparison */}
      {standardTranscript && traineeTranscript ? (
        <TranscriptComparison
          standardTranscript={standardTranscript}
          traineeTranscript={traineeTranscript}
        />
      ) : (
        <p className="text-gray-500">Please upload both transcripts to compare.</p>
      )}
    </div>
  );
};

export default App;
