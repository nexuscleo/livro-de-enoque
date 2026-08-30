import React from 'react';
import { useNavigation } from '../../context/NavigationContext';
import { Chapter1View } from './Chapter1View';
import { Chapter2View } from './Chapter2View';
import { Chapter3View } from './Chapter3View';
import { Chapter4View } from './Chapter4View';
import { Chapter5View } from './Chapter5View';
import { Chapter6View } from './Chapter6View';
import { Chapter7View } from './Chapter7View';

export const ChapterRenderer: React.FC = () => {
  const { activeChapter } = useNavigation();

  switch (activeChapter) {
    case 'cap1': return <Chapter1View />;
    case 'cap2': return <Chapter2View />;
    case 'cap3': return <Chapter3View />;
    case 'cap4': return <Chapter4View />;
    case 'cap5': return <Chapter5View />;
    case 'cap6': return <Chapter6View />;
    case 'cap7': return <Chapter7View />;
    default: return <Chapter1View />;
  }
};

