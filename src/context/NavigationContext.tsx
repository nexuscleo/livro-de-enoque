import React, { createContext, useContext, useState } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

interface NavigationContextType {
  currentScreen: 'cover' | 'app';
  openBook: () => void;
  goToCover: () => void;
  activeChapter: string;
  setActiveChapter: (chapterId: string) => void;
  goToNextChapter: () => void;
  goToPrevChapter: () => void;
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (open: boolean) => void;
  toggleMobileMenu: () => void;
}

const CHAPTER_IDS = ['cap1', 'cap2', 'cap3', 'cap4', 'cap5', 'cap6', 'cap7'];

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

export const NavigationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentScreen, setCurrentScreen] = useState<'cover' | 'app'>('cover');
  const [activeChapter, setActiveChapterState] = useLocalStorage<string>('enoque_active_chapter', 'cap1');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const openBook = () => {
    setCurrentScreen('app');
  };

  const goToCover = () => {
    setCurrentScreen('cover');
  };

  const setActiveChapter = (chapterId: string) => {
    setActiveChapterState(chapterId);
    setIsMobileMenuOpen(false);
    
    // Scroll reading container to top
    const pane = document.getElementById('app-content-pane');
    if (pane) {
      pane.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const goToNextChapter = () => {
    const currentIndex = CHAPTER_IDS.indexOf(activeChapter);
    if (currentIndex < CHAPTER_IDS.length - 1) {
      setActiveChapter(CHAPTER_IDS[currentIndex + 1]);
    }
  };

  const goToPrevChapter = () => {
    const currentIndex = CHAPTER_IDS.indexOf(activeChapter);
    if (currentIndex > 0) {
      setActiveChapter(CHAPTER_IDS[currentIndex - 1]);
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(prev => !prev);
  };

  return (
    <NavigationContext.Provider value={{
      currentScreen,
      openBook,
      goToCover,
      activeChapter,
      setActiveChapter,
      goToNextChapter,
      goToPrevChapter,
      isMobileMenuOpen,
      setIsMobileMenuOpen,
      toggleMobileMenu
    }}>
      {children}
    </NavigationContext.Provider>
  );
};

export function useNavigation() {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error('useNavigation deve ser usado dentro de NavigationProvider');
  }
  return context;
}

