import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';

interface RecruiterContextType {
  isRecruiterMode: boolean;
  toggleRecruiterMode: () => void;
  setRecruiterMode: (enabled: boolean) => void;
}

const RecruiterContext = createContext<RecruiterContextType | undefined>(undefined);

const STORAGE_KEY = 'portfolio_recruiter_mode';

export function RecruiterProvider({ children }: { children: ReactNode }) {
  const [isRecruiterMode, setIsRecruiterMode] = useState<boolean>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved === 'true';
    } catch {
      return false;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, String(isRecruiterMode));
    } catch {
      // Ignore storage errors in private browsing
    }
  }, [isRecruiterMode]);

  const toggleRecruiterMode = () => {
    setIsRecruiterMode((prev) => !prev);
  };

  const setRecruiterMode = (enabled: boolean) => {
    setIsRecruiterMode(enabled);
  };

  return (
    <RecruiterContext.Provider value={{ isRecruiterMode, toggleRecruiterMode, setRecruiterMode }}>
      {children}
    </RecruiterContext.Provider>
  );
}

export function useRecruiterMode() {
  const context = useContext(RecruiterContext);
  if (!context) {
    return {
      isRecruiterMode: false,
      toggleRecruiterMode: () => {},
      setRecruiterMode: () => {},
    };
  }
  return context;
}
