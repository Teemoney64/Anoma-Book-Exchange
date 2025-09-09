# 📚 Intent Matching API Documentation

This document describes the intent matching algorithms and data structures used in the Anoma Book Exchange demo.

## 🎯 Core Concepts

### Intent Structure

Each intent represents a user's trading intention:

```javascript
const intent = {
  id: number,           // Unique identifier
  username: string,     // User's display name
  bookWanted: string,   // Book the user wants to receive
  bookOffered: string,  // Book the user is willing to give
  timestamp: string     // ISO timestamp of creation
};
```

### Example Intent

```javascript
{
  id: 1,
  username: "Alice",
  bookWanted: "1984",
  bookOffered: "The Great Gatsby",
  timestamp: "2024-01-15T10:30:00.000Z"
}
```

## 🔄 Matching Algorithms

### Direct Matching (2-way)

Finds pairs of intents where:
- Intent A wants what Intent B offers
- Intent B wants what Intent A offers

```javascript
/**
 * Find direct 2-way matches between intents
 * @param {Array} intents - Array of intent objects
 * @returns {Array} - Array of match objects
 */
function findDirectMatches(intents) {
  const matches = [];
  const used = new Set();

  for (let i = 0; i < intents.length; i++) {
    if (used.has(i)) continue;
    
    for (let j = i + 1; j < intents.length; j++) {
      if (used.has(j)) continue;
      
      const intentA = intents[i];
      const intentB = intents[j];
      
      // Check if A wants what B offers AND B wants what A offers
      if (intentA.bookWanted === intentB.bookOffered && 
          intentB.bookWanted === intentA.bookOffered) {
        
        matches.push({
          type: 'direct',
          participants: [intentA, intentB],
          summary: `${intentA.username} gets "${intentA.bookWanted}" from ${intentB.username}, ${intentB.username} gets "${intentB.bookWanted}" from ${intentA.username}`
        });
        
        used.add(i);
        used.add(j);
        break;
      }
    }
  }
  
  return matches;
}
```

### Cycle Matching (3-way)

Finds cycles where:
- Intent A wants what Intent B offers
- Intent B wants what Intent C offers
- Intent C wants what Intent A offers

```javascript
/**
 * Find 3-way trading cycles
 * @param {Array} intents - Array of intent objects
 * @returns {Array} - Array of match objects
 */
function findCycleMatches(intents) {
  const matches = [];
  const used = new Set();

  for (let i = 0; i < intents.length; i++) {
    if (used.has(i)) continue;
    
    for (let j = 0; j < intents.length; j++) {
      if (used.has(j) || i === j) continue;
      
      for (let k = 0; k < intents.length; k++) {
        if (used.has(k) || i === k || j === k) continue;
        
        const intentA = intents[i];
        const intentB = intents[j];
        const intentC = intents[k];
        
        // Check for 3-way cycle: A→B→C→A
        if (intentA.bookWanted === intentB.bookOffered &&
            intentB.bookWanted === intentC.bookOffered &&
            intentC.bookWanted === intentA.bookOffered) {
          
          matches.push({
            type: 'cycle',
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
}
```

## 🧮 Complete Solver Algorithm

```javascript
/**
 * Main solver function that finds all possible matches
 * @param {Array} intents - Array of intent objects
 * @returns {Array} - Array of all found matches
 */
function findMatches(intents) {
  const allMatches = [];
  let remainingIntents = [...intents];
  
  // First pass: Find direct matches
  const directMatches = findDirectMatches(remainingIntents);
  allMatches.push(...directMatches);
  
  // Remove matched intents
  const usedIds = new Set();
  directMatches.forEach(match => {
    match.participants.forEach(intent => usedIds.add(intent.id));
  });
  remainingIntents = remainingIntents.filter(intent => !usedIds.has(intent.id));
  
  // Second pass: Find cycle matches
  const cycleMatches = findCycleMatches(remainingIntents);
  allMatches.push(...cycleMatches);
  
  return allMatches;
}
```

## 📊 Match Object Structure

```javascript
const match = {
  type: string,           // 'direct' or 'cycle'
  participants: Array,    // Array of intent objects involved
  summary: string         // Human-readable description
};
```

### Example Matches

**Direct Match:**
```javascript
{
  type: 'direct',
  participants: [
    { id: 1, username: "Alice", bookWanted: "1984", bookOffered: "Gatsby" },
    { id: 2, username: "Bob", bookWanted: "Gatsby", bookOffered: "1984" }
  ],
  summary: "Alice gets \"1984\" from Bob, Bob gets \"Gatsby\" from Alice"
}
```

**Cycle Match:**
```javascript
{
  type: 'cycle',
  participants: [
    { id: 1, username: "Alice", bookWanted: "1984", bookOffered: "Gatsby" },
    { id: 2, username: "Bob", bookWanted: "Gatsby", bookOffered: "Mockingbird" },
    { id: 3, username: "Charlie", bookWanted: "Mockingbird", bookOffered: "1984" }
  ],
  summary: "3-way cycle: Alice → Bob → Charlie → Alice"
}
```

## 🎮 Usage Examples

### Adding New Intent

```javascript
const newIntent = {
  id: Date.now(),
  username: "David",
  bookWanted: "Dune",
  bookOffered: "Foundation",
  timestamp: new Date().toISOString()
};

// Add to intent pool
setActiveIntents(prev => [newIntent, ...prev]);
```

### Running Solver

```javascript
const handleSolverRun = () => {
  const foundMatches = findMatches(activeIntents);
  
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
```

## 🔧 Algorithm Complexity

### Time Complexity
- **Direct Matching**: O(n²) where n is the number of intents
- **Cycle Matching**: O(n³) for 3-way cycles
- **Overall**: O(n³)

### Space Complexity
- **Memory Usage**: O(n) for storing used intent indices
- **Match Storage**: O(m) where m is the number of matches found

## 🚀 Potential Extensions

### 4-way Cycles
```javascript
// Extend to find 4-way trading cycles
function find4WayCycles(intents) {
  // A→B→C→D→A matching logic
  // Time complexity: O(n⁴)
}
```

### Weighted Matching
```javascript
// Add preference weights to intents
const intentWithWeight = {
  ...intent,
  priority: number,     // 1-10 priority score
  preferences: Array    // Preferred trading partners
};
```

### Partial Matching
```javascript
// Allow partial book matching (e.g., series, authors)
function findPartialMatches(intents) {
  // Fuzzy matching logic
  // Book series matching
  // Author-based matching
}
```

## 🧪 Testing

### Test Cases

```javascript
// Test direct matching
const testDirectMatch = [
  { id: 1, bookWanted: "A", bookOffered: "B" },
  { id: 2, bookWanted: "B", bookOffered: "A" }
];
// Expected: 1 direct match

// Test cycle matching
const testCycleMatch = [
  { id: 1, bookWanted: "A", bookOffered: "B" },
  { id: 2, bookWanted: "B", bookOffered: "C" },
  { id: 3, bookWanted: "C", bookOffered: "A" }
];
// Expected: 1 cycle match

// Test no matches
const testNoMatch = [
  { id: 1, bookWanted: "A", bookOffered: "B" },
  { id: 2, bookWanted: "C", bookOffered: "D" }
];
// Expected: 0 matches
```

## 📈 Performance Optimization

### Indexing
```javascript
// Create lookup maps for faster matching
function createLookupMaps(intents) {
  const wantedMap = new Map();
  const offeredMap = new Map();
  
  intents.forEach(intent => {
    if (!wantedMap.has(intent.bookWanted)) {
      wantedMap.set(intent.bookWanted, []);
    }
    wantedMap.get(intent.bookWanted).push(intent);
    
    if (!offeredMap.has(intent.bookOffered)) {
      offeredMap.set(intent.bookOffered, []);
    }
    offeredMap.get(intent.bookOffered).push(intent);
  });
  
  return { wantedMap, offeredMap };
}
```

---

## 📞 API Support

For questions about the intent matching API:
- **GitHub Issues**: Technical questions and bug reports
- **Discussions**: Algorithm improvements and feature requests
- **Documentation**: This file and inline code comments