import React, { useRef } from 'react';
import { useNavigation } from './context/NavigationContext';
import { useReader } from './context/ReaderContext';
import { BackgroundStars } from './components/layout/BackgroundStars';
import { CoverScreen } from './components/layout/CoverScreen';
import { Sidebar } from './components/layout/Sidebar';
import { MobileHeader } from './components/layout/MobileHeader';
import { MobileNavigation } from './components/layout/MobileNavigation';
import { MobileBottomNav } from './components/layout/MobileBottomNav';
import { ReadingProgressBar } from './components/layout/ReadingProgressBar';
import { ChapterRenderer } from './components/chapters/ChapterRenderer';
import { GlobalSearchModal } from './components/reader/GlobalSearchModal';
import { PreferencesModal } from './components/reader/PreferencesModal';
import { BookmarksModal } from './components/reader/BookmarksModal';
import { useReadingProgress } from './hooks/useReadingProgress';

export const AppContent: React.FC = () => {
  const { currentScreen } = useNavigation();
  const { settings } = useReader();
  const contentPaneRef = useRef<HTMLElement>(null);
  const progress = useReadingProgress(contentPaneRef);

  // Apply typography classes based on reader settings
  const fontClass = {
    spectral: 'font-spectral',
    cinzel: 'font-header',
    inter: 'font-sans',
    mono: 'font-mono'
  }[settings.fontFamily] || 'font-spectral';

  const alignClass = settings.textAlignment === 'justify' ? 'text-justify' : 'text-left';

  const lineHeightClass = {
    normal: 'leading-normal',
    relaxed: 'leading-relaxed',
    loose: 'leading-loose'
  }[settings.lineHeight] || 'leading-relaxed';

  return (
    <div className={`min-h-screen w-full relative overflow-x-hidden ${fontClass} ${alignClass} ${lineHeightClass}`}>
      
      {/* Immersive Celestial Background */}
      <BackgroundStars />

      {/* Conditional: Cover Screen or Main Reading App */}
      {currentScreen === 'cover' ? (
        <CoverScreen />
      ) : (
        <div className="flex flex-col lg:flex-row h-screen w-full overflow-hidden">
          
          {/* Top Reading Progress Bar */}
          <ReadingProgressBar progress={progress} />

          {/* Desktop Left Sidebar */}
          <Sidebar />

          {/* Mobile Sticky Header */}
          <div className="lg:hidden w-full shrink-0">
            <MobileHeader />
          </div>

          {/* Mobile Drawer Menu */}
          <MobileNavigation />

          {/* Main Reading & Interactive Pane with bottom padding on mobile */}
          <main 
            id="app-content-pane"
            ref={contentPaneRef}
            className="flex-1 h-full overflow-y-auto overflow-x-hidden scroll-smooth relative pb-20 lg:pb-0"
          >
            <ChapterRenderer />
          </main>

          {/* Mobile Bottom Navigation Bar */}
          <MobileBottomNav />

        </div>
      )}

      {/* Global Modals */}
      <GlobalSearchModal />
      <PreferencesModal />
      <BookmarksModal />

    </div>
  );
};
