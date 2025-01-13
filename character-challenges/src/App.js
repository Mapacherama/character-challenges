import React, { useState } from "react";
import { getChallenge } from "./server/getChallenge";

const App = () => {
  const [currentChallenge, setCurrentChallenge] = useState(null);

  const handleGenerateChallenge = async () => {
    const challenge = await getChallenge();
    setCurrentChallenge(challenge);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-8">
        Character-Themed Daily Challenges
      </h1>
      <button
        onClick={handleGenerateChallenge}
        className="px-6 py-3 bg-blue-500 text-white text-lg font-medium rounded-lg shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
      >
        Get Your Daily Challenge
      </button>
      {currentChallenge && (
        <div className="mt-8 text-center">
          <h2 className="text-2xl font-semibold text-gray-800">
            {currentChallenge.character} Challenge
          </h2>
          <p className="mt-4 text-gray-600">{currentChallenge.task}</p>
        </div>
      )}
    </div>
  );
};

export default App;