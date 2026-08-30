import React, { createContext, useContext, useEffect } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { Bookmark, FontFamily, ReaderSettings, ThemeMode } from '../types/reader';

interface ReaderContextType {
  settings: ReaderSettings;
  updateSettings: (newSettings: Partial<ReaderSettings>) => void;
  increaseFontSize: () => void;
  decreaseFontSize: () => void;
  resetFontSize: () => void;
  setTheme: (theme: ThemeMode) => void;
  setFontFamily: (font: FontFamily) => void;
  bookmarks: Bookmark[];
  addBookmark: (chapterId: string, chapterTitle: string, excerpt: string) => void;
  removeBookmark: (bookmarkId: string) => void;
  isBookmarked: (chapterId: string) => boolean;
  isSearchOpen: boolean;
  setIsSearchOpen: (open: boolean) => void;
  isPreferencesOpen: boolean;
  setIsPreferencesOpen: (open: boolean) => void;
  isBookmarksOpen: boolean;
  setIsBookmarksOpen: (open: boolean) => void;
}

const defaultSettings: ReaderSettings = {
  fontSizeScale: 100,
  fontFamily: 'spectral',
  theme: 'celestial',
  lineHeight: 'relaxed',
  textAlignment: 'left'
};

const ReaderContext = createContext<ReaderContextType | undefined>(undefined);

export const ReaderProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [settings, setSettings] = useLocalStorage<ReaderSettings>('enoque_reader_settings', defaultSettings);
  const [bookmarks, setBookmarks] = useLocalStorage<Bookmark[]>('enoque_bookmarks', []);
  const [isSearchOpen, setIsSearchOpen] = React.useState(false);
  const [isPreferencesOpen, setIsPreferencesOpen] = React.useState(false);
  const [isBookmarksOpen, setIsBookmarksOpen] = React.useState(false);

  // Apply theme and font variables to HTML root
  useEffect(() => {
    const root = document.documentElement;
    
    // Set font scale
    root.style.setProperty('--font-size-modifier', `${settings.fontSizeScale}%`);

    // Set Theme Class
    root.classList.remove('theme-celestial', 'theme-parchment', 'theme-amoled', 'theme-solar');
    root.classList.add(`theme-${settings.theme}`);

    if (settings.theme === 'solar') {
      root.classList.remove('dark');
    } else {
      root.classList.add('dark');
    }
  }, [settings]);

  // Global keyboard shortcuts (Ctrl+K or Cmd+K for search)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const updateSettings = (newSettings: Partial<ReaderSettings>) => {
    setSettings(prev => ({ ...prev, ...newSettings }));
  };

  const increaseFontSize = () => {
    setSettings(prev => ({
      ...prev,
      fontSizeScale: Math.min(140, prev.fontSizeScale + 10)
    }));
  };

  const decreaseFontSize = () => {
    setSettings(prev => ({
      ...prev,
      fontSizeScale: Math.max(80, prev.fontSizeScale - 10)
    }));
  };

  const resetFontSize = () => {
    setSettings(prev => ({
      ...prev,
      fontSizeScale: 100
    }));
  };

  const setTheme = (theme: ThemeMode) => {
    updateSettings({ theme });
  };

  const setFontFamily = (fontFamily: FontFamily) => {
    updateSettings({ fontFamily });
  };

  const addBookmark = (chapterId: string, chapterTitle: string, excerpt: string) => {
    const newBookmark: Bookmark = {
      id: `bm-${Date.now()}`,
      chapterId,
      chapterTitle,
      excerpt: excerpt.slice(0, 160) + (excerpt.length > 160 ? '...' : ''),
      createdAt: Date.now()
    };
    setBookmarks(prev => [newBookmark, ...prev]);
  };

  const removeBookmark = (bookmarkId: string) => {
    setBookmarks(prev => prev.filter(b => b.id !== bookmarkId));
  };

  const isBookmarked = (chapterId: string) => {
    return bookmarks.some(b => b.chapterId === chapterId);
  };

  return (
    <ReaderContext.Provider value={{
      settings,
      updateSettings,
      increaseFontSize,
      decreaseFontSize,
      resetFontSize,
      setTheme,
      setFontFamily,
      bookmarks,
      addBookmark,
      removeBookmark,
      isBookmarked,
      isSearchOpen,
      setIsSearchOpen,
      isPreferencesOpen,
      setIsPreferencesOpen,
      isBookmarksOpen,
      setIsBookmarksOpen
    }}>
      {children}
    </ReaderContext.Provider>
  );
};

export function useReader() {
  const context = useContext(ReaderContext);
  if (!context) {
    throw new Error('useReader deve ser usado dentro de ReaderProvider');
  }
  return context;
}

