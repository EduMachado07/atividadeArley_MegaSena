import React, { createContext, useContext, useEffect, useState } from "react";


export type Suggestion = {
  id: string;
  numbers: number[]; // 6 numbers sorted
  createdAt: string; // ISO
};

type ContextType = {
  suggestions: Suggestion[];
  generateSuggestion: () => Suggestion;
  addSuggestion: (s: Suggestion) => void;
  clearHistory: () => void;
};

const SuggestionsContext = createContext<ContextType | undefined>(undefined);

function randomUniqueNumbers(count = 6, max = 60) {
  const set = new Set<number>();
  while (set.size < count) {
    const n = Math.floor(Math.random() * max) + 1;
    set.add(n);
  }
  return Array.from(set).sort((a, b) => a - b);
}

export const SuggestionsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [suggestions, setSuggestions] = useState<Suggestion[]>(() => {
    try {
      const raw = localStorage.getItem("megabets_suggestions_v1");
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("megabets_suggestions_v1", JSON.stringify(suggestions));
  }, [suggestions]);

  function generateSuggestion() {
    const s: Suggestion = {
      id: String(Date.now()) + Math.random().toString(36).slice(2, 7),
      numbers: randomUniqueNumbers(),
      createdAt: new Date().toISOString(),
    };
    setSuggestions(prev => [s, ...prev]);
    return s;
  }

  function addSuggestion(s: Suggestion) {
    setSuggestions(prev => [s, ...prev]);
  }

  function clearHistory() {
    setSuggestions([]);
  }

  return (
    <SuggestionsContext.Provider value={{ suggestions, generateSuggestion, addSuggestion, clearHistory }}>
      {children}
    </SuggestionsContext.Provider>
  );
};


export function useSuggestions(): ContextType {
  const ctx = useContext(SuggestionsContext);
  if (ctx === undefined) {
    throw new Error("useSuggestions must be used inside SuggestionsProvider");
  }
  return ctx;
}
