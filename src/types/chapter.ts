export interface ChapterMeta {
  id: string;
  number: string;
  title: string;
  shortTitle: string;
  subtitle: string;
  icon: string;
  estimatedReadTimeMinutes: number;
}

export interface ChapterSection {
  id?: string;
  title?: string;
  content: string[];
  quotes?: {
    text: string;
    ref: string;
  }[];
  listItems?: {
    strong?: string;
    text: string;
  }[];
  illustration?: {
    src: string;
    alt: string;
    caption: string;
  };
}

export interface ChapterData extends ChapterMeta {
  sections: ChapterSection[];
  interactiveComponent?: 'watchers' | 'heavens' | 'metatron' | 'citations' | 'meditation';
}

