export type ThemeMode = 'celestial' | 'parchment' | 'amoled' | 'solar';
export type FontFamily = 'spectral' | 'cinzel' | 'inter' | 'mono';

export interface Bookmark {
  id: string;
  chapterId: string;
  chapterTitle: string;
  excerpt: string;
  createdAt: number;
}

export interface ReaderSettings {
  fontSizeScale: number; // 80 - 140
  fontFamily: FontFamily;
  theme: ThemeMode;
  lineHeight: 'normal' | 'relaxed' | 'loose';
  textAlignment: 'left' | 'justify';
}

