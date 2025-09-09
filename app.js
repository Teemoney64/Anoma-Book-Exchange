const { useState, useEffect } = React;

// Mock data for preloaded intents
const initialIntents = [
  {
    id: 1,
    username: "Alice",
    bookWanted: "1984",
    bookOffered: "The Great Gatsby",
    timestamp: new Date().toISOString()
  },
  {
    id: 2,
    username: "Bob",
    bookWanted: "The Great Gatsby",
    bookOffered: "To Kill a Mockingbird",
    timestamp: new Date().toISOString()
  },
  {
    id: 3,
    username: "Charlie",
    bookWanted: "To Kill a Mockingbird",
    bookOffered: "1984",
    timestamp: new Date().toISOString()
  }
];

// Hero Section Component
const HeroSection = () => {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-16 px-4 fade-in">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Anoma Book Exchange
        </h1>
        <p className="text-xl md:text-2xl mb-4 text-blue-100">
          Powered by Intents & Solvers
        </p>
        <p className="text-lg text-blue-200 max-w-2xl mx-auto">
          Users declare what they want and offer, solvers coordinate fair swaps.
          Experience the future of decentralized exchange.
        </p>
      </div>
    </div>
  );
};

// Intent Form Component
const IntentForm = ({ onAddIntent }) => {
  const [formData, setFormData] = useState({
    username: '',
    bookWanted: '',
    bookOffered: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.username && formData.bookWanted && formData.bookOffered) {
      onAddIntent({
        ...formData,
        id: Date.now(),
        timestamp: new Date().toISOString()
      });
      setFormData({ username: '', bookWanted: '', bookOffered: '' });
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-8 fade-in">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Post New Intent</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Username
            </label>
            <input
              type="text"
              value={formData.username}
              onChange={(e) => setFormData({...formData, username: e.target.value})}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your username"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Book Wanted
            </label>
            <input
              type="text"
              value={formData.bookWanted}
              onChange={(e) => setFormData({...formData, bookWanted: e.target.value})}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Book you want"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Book Offered
            </label>
            <input
              type="text"
              value={formData.bookOffered}
              onChange={(e) => setFormData({...formData, bookOffered: e.target.value})}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Book you offer"
              required
            />
          </div>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200 font-medium"
        >
          Submit Intent
        </button>
      </form>
    </div>
  );
};

// Intent Card Component
const IntentCard = ({ intent, isMatched = false }) => {
  return (
    <div className={`bg-white rounded-lg shadow-md p-4 border-l-4 ${isMatched ? 'border-green-500 pulse-match' : 'border-blue-500'} slide-in`}>
      <div className="flex justify-between items-start mb-3">
        <h3 className="font-semibold text-gray-800">{intent.username}</h3>
        {isMatched && (
          <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
            Matched
          </span>
        )}
      </div>
      <div className="space-y-2 text-sm">
        <div className="flex items-center">
          <span className="text-red-600 font-medium">Wants:</span>
          <span className="ml-2 text-gray-700">{intent.bookWanted}</span>
        </div>
        <div className="flex items-center">
          <span className="text-green-600 font-medium">Offers:</span>
          <span className="ml-2 text-gray-700">{intent.bookOffered}</span>
        </div>
      </div>
      <div className="mt-3 text-xs text-gray-500">
        {new Date(intent.timestamp).toLocaleString()}
      </div>
    </div>
  );
};

// Intent Pool Component
const IntentPool = ({ intents }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Active Intent Pool ({intents.length})
      </h2>
      {intents.length === 0 ? (
        <p className="text-gray-500 text-center py-8">No active intents</p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {intents.map(intent => (
            <IntentCard key={intent.id} intent={intent} />
          ))}
        </div>
      )}
    </div>
  );
};

// Matched Trades Component
const MatchedTrades = ({ matches }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Matched Trades ({matches.length})
      </h2>
      {matches.length === 0 ? (
        <p className="text-gray-500 text-center py-8">No matches found yet</p>
      ) : (
        <div className="space-y-6">
          {matches.map((match, index) => (
            <div key={index} className="bg-green-50 rounded-lg p-4 border border-green-200 fade-in">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-green-800">Match #{index + 1}</h3>
                <span className="bg-green-600 text-white text-xs px-3 py-1 rounded-full">
                  Solved via Intent Matching (Anoma Demo)
                </span>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {match.participants.map((intent, i) => (
                  <IntentCard key={intent.id} intent={intent} isMatched={true} />
                ))}
              </div>
              <div className="mt-4 text-sm text-green-700 bg-green-100 p-3 rounded">
                <strong>Trade Summary:</strong> {match.summary}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

// Solver Component
const Solver = ({ intents, onMatches, isRunning, setIsRunning }) => {
  const runSolver = () => {
    setIsRunning(true);
    
    // Simulate solver processing time
    setTimeout(() => {
      const matches = findMatches(intents);
      onMatches(matches);
      setIsRunning(false);
    }, 2000);
  };

  const findMatches = (intents) => {
    const matches = [];
    const used = new Set();

    // Find direct matches (2-way swaps)
    for (let i = 0; i < intents.length; i++) {
      if (used.has(i)) continue;
      
      for (let j = i + 1; j < intents.length; j++) {
        if (used.has(j)) continue;
        
        const intentA = intents[i];
        const intentB = intents[j];
        
        // Direct match: A wants what B offers, B wants what A offers
        if (intentA.bookWanted === intentB.bookOffered && 
            intentB.bookWanted === intentA.bookOffered) {
          matches.push({
            participants: [intentA, intentB],
            summary: `${intentA.username} gets "${intentA.bookWanted}" from ${intentB.username}, ${intentB.username} gets "${intentB.bookWanted}" from ${intentA.username}`
          });
          used.add(i);
          used.add(j);
          break;
        }
      }
    }

    // Find 3-way cycles (A→B→C→A)
    for (let i = 0; i < intents.length; i++) {
      if (used.has(i)) continue;
      
      for (let j = 0; j < intents.length; j++) {
        if (used.has(j) || i === j) continue;
        
        for (let k = 0; k < intents.length; k++) {
          if (used.has(k) || i === k || j === k) continue;
          
          const intentA = intents[i];
          const intentB = intents[j];
          const intentC = intents[k];
          
          // 3-way cycle: A wants B's offer, B wants C's offer, C wants A's offer
          if (intentA.bookWanted === intentB.bookOffered &&
              intentB.bookWanted === intentC.bookOffered &&
              intentC.bookWanted === intentA.bookOffered) {
            matches.push({
              participants: [intentA, intentB, intentC],
              summary: `3-way cycle: ${intentA.username} → ${intentB.username} → ${intentC.username} → ${intentA.username}`
            });
            used.add(i);
            used.add(j);
            used.add(k);
            break;
          }
        }
        if (used.has(i)) break;
      }
    }

    return matches;
  };

  return (
    <div className="text-center mb-8">
      <button
        onClick={runSolver}
        disabled={isRunning || intents.length === 0}
        className={`px-8 py-3 rounded-lg font-semibold text-lg transition duration-200 ${
          isRunning || intents.length === 0
            ? 'bg-gray-400 text-gray-600 cursor-not-allowed'
            : 'bg-purple-600 text-white hover:bg-purple-700 shadow-lg hover:shadow-xl'
        }`}
      >
        {isRunning ? (
          <span className="flex items-center justify-center">
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Running Solver...
          </span>
        ) : (
          'Run Solver'
        )}
      </button>
      <p className="text-gray-600 mt-2 text-sm">
        Click to find matching intents and coordinate swaps
      </p>
    </div>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-16">
      <div className="max-w-4xl mx-auto text-center px-4">
        <p className="text-gray-300">
          This is a demo inspired by Anoma's intent-centric architecture.
        </p>
        <p className="text-sm text-gray-400 mt-2">
          Built with React, TailwindCSS, and intent-matching algorithms
        </p>
      </div>
    </footer>
  );
};

// Main App Component
const App = () => {
  const [activeIntents, setActiveIntents] = useState(initialIntents);
  const [matches, setMatches] = useState([]);
  const [isRunning, setIsRunning] = useState(false);

  const addIntent = (newIntent) => {
    setActiveIntents(prev => [newIntent, ...prev]);
  };

  const handleMatches = (foundMatches) => {
    if (foundMatches.length > 0) {
      // Remove matched intents from active pool
      const matchedIds = new Set();
      foundMatches.forEach(match => {
        match.participants.forEach(participant => {
          matchedIds.add(participant.id);
        });
      });
      
      setActiveIntents(prev => prev.filter(intent => !matchedIds.has(intent.id)));
      setMatches(prev => [...foundMatches, ...prev]);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <HeroSection />
      
      <div className="max-w-6xl mx-auto px-4 py-8">
        <IntentForm onAddIntent={addIntent} />
        
        <IntentPool intents={activeIntents} />
        
        <Solver 
          intents={activeIntents}
          onMatches={handleMatches}
          isRunning={isRunning}
          setIsRunning={setIsRunning}
        />
        
        <MatchedTrades matches={matches} />
      </div>
      
      <Footer />
    </div>
  );
};

// Render the app
ReactDOM.render(<App />, document.getElementById('root'));