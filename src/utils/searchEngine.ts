import { CHAPTERS_META } from '../data/chaptersData';
import { CITATIONS_DATA } from '../data/citationsData';
import { WATCHERS_DATA } from '../data/watchersData';
import { HEAVENS_DATA } from '../data/heavensData';
import { METATRON_GATES } from '../data/metatronData';

export interface SearchResult {
  id: string;
  type: 'chapter' | 'citation' | 'watcher' | 'heaven' | 'gate';
  title: string;
  subtitle: string;
  snippet: string;
  targetChapterId: string;
  tag?: string;
}

export function globalSearch(query: string): SearchResult[] {
  const normalizedQuery = query.toLowerCase().trim();
  if (!normalizedQuery || normalizedQuery.length < 2) return [];

  const results: SearchResult[] = [];

  // 1. Search in Chapters Meta
  CHAPTERS_META.forEach(cap => {
    if (
      cap.title.toLowerCase().includes(normalizedQuery) ||
      cap.subtitle.toLowerCase().includes(normalizedQuery)
    ) {
      results.push({
        id: `cap-${cap.id}`,
        type: 'chapter',
        title: `${cap.number}: ${cap.title}`,
        subtitle: cap.subtitle,
        snippet: `Capítulo completo com ensinamentos, história e revelações.`,
        targetChapterId: cap.id,
        tag: 'Capítulo'
      });
    }
  });

  // 2. Search in Citations
  CITATIONS_DATA.forEach((cit, idx) => {
    if (
      cit.text.toLowerCase().includes(normalizedQuery) ||
      cit.ref.toLowerCase().includes(normalizedQuery)
    ) {
      results.push({
        id: `cit-${idx}`,
        type: 'citation',
        title: cit.ref,
        subtitle: `Citação Teológica [${cit.tag.toUpperCase()}]`,
        snippet: `"${cit.text}"`,
        targetChapterId: 'cap6',
        tag: 'Citação'
      });
    }
  });

  // 3. Search in Watchers (Grigori)
  WATCHERS_DATA.forEach(w => {
    if (
      w.name.toLowerCase().includes(normalizedQuery) ||
      w.meaning.toLowerCase().includes(normalizedQuery) ||
      w.teaching.toLowerCase().includes(normalizedQuery) ||
      w.role.toLowerCase().includes(normalizedQuery) ||
      w.fate.toLowerCase().includes(normalizedQuery)
    ) {
      results.push({
        id: `watcher-${w.id}`,
        type: 'watcher',
        title: `${w.name} — "${w.meaning}"`,
        subtitle: `${w.role} (Vigilante Rebelde)`,
        snippet: `Ensinamento: ${w.teaching}`,
        targetChapterId: 'cap2',
        tag: 'Vigilante'
      });
    }
  });

  // 4. Search in Heavens
  HEAVENS_DATA.forEach(h => {
    if (
      h.name.toLowerCase().includes(normalizedQuery) ||
      h.concept.toLowerCase().includes(normalizedQuery) ||
      h.desc.toLowerCase().includes(normalizedQuery)
    ) {
      results.push({
        id: `heaven-${h.id}`,
        type: 'heaven',
        title: h.name,
        subtitle: `Esfera Celeste: ${h.concept}`,
        snippet: h.desc.slice(0, 160) + '...',
        targetChapterId: 'cap3',
        tag: 'Dez Céus'
      });
    }
  });

  // 5. Search in Metatron's Cube Gates
  METATRON_GATES.forEach(g => {
    if (
      g.name.toLowerCase().includes(normalizedQuery) ||
      g.text.toLowerCase().includes(normalizedQuery) ||
      (g.hebrewName && g.hebrewName.toLowerCase().includes(normalizedQuery))
    ) {
      results.push({
        id: `gate-${g.id}`,
        type: 'gate',
        title: g.name,
        subtitle: `Portão de Sabedoria (${g.hebrewName || ''})`,
        snippet: g.text,
        targetChapterId: 'cap5',
        tag: 'Metatron'
      });
    }
  });

  return results;
}

