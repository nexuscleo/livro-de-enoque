export type CitationTag = 'all' | 'queda' | 'ascensao' | 'julgamento' | 'sabedoria' | 'filho';

export interface Citation {
  id?: string;
  text: string;
  ref: string;
  tag: 'queda' | 'ascensao' | 'julgamento' | 'sabedoria' | 'filho';
}

