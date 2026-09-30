import { portfolioData } from '../data/portfolioData';

function normalize(str) {
  return str
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
}

const STOP_WORDS = new Set([
  'de', 'el', 'la', 'los', 'las', 'un', 'una', 'unos', 'unas', 'y', 'e', 'o', 'u',
  'en', 'a', 'al', 'del', 'por', 'con', 'para', 'su', 'sus',
  'in', 'on', 'at', 'to', 'of', 'and', 'or', 'for', 'by', 'the', 'an', 'is', 'it'
]);

function escapeRegExp(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function makeAccentPattern(term) {
  const accentMap = {
    a: '[aáàäâAÁÀÄÂ]',
    e: '[eéèëêEÉÈËÊ]',
    i: '[iíìïîIÍÌÏÎ]',
    o: '[oóòöôOÓÒÖÔ]',
    u: '[uúùüûUÚÙÜÛ]',
    n: '[nñNÑ]',
    c: '[cçCÇ]'
  };

  return escapeRegExp(term)
    .split('')
    .map(char => {
      const lower = char.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
      return accentMap[lower] || escapeRegExp(char);
    })
    .join('');
}

function highlight(text, query) {
  if (!query || !text) return text;

  const rawTerms = query
    .trim()
    .split(/\s+/)
    .filter(Boolean);

  let meaningfulTerms = rawTerms.filter(t => !STOP_WORDS.has(t.toLowerCase()) && t.length > 1);
  if (meaningfulTerms.length === 0) {
    meaningfulTerms = rawTerms.filter(t => t.length > 1);
  }
  if (meaningfulTerms.length === 0) return text;

  const uniqueTerms = Array.from(new Set(meaningfulTerms.map(t => t.toLowerCase())))
    .sort((a, b) => b.length - a.length);

  const patternString = uniqueTerms.map(makeAccentPattern).join('|');
  if (!patternString) return text;

  try {
    const regex = new RegExp(`(${patternString})`, 'gi');
    return text.replace(regex, '<mark class="search-highlight">$1</mark>');
  } catch {
    return text;
  }
}

export function buildIndex(lang = 'es') {
  const data = portfolioData[lang];
  const items = [];

  data.projects.items.forEach(p => {
    const cleanUrl = p.githubUrl ? p.githubUrl.replace(/\.git$/, '') : p.githubUrl;
    items.push({
      id: p.id,
      title: p.title,
      url: cleanUrl,
      description: p.description,
      category: 'projects',
      tags: [...p.technologies, p.category],
      thumbnail: p.image,
      type: 'project',
      featured: p.featured,
      data: p
    });
  });

  data.skills.categories.forEach(cat => {
    cat.items.forEach(skill => {
      items.push({
        id: `skill-${skill.toLowerCase().replace(/\s+/g, '-')}`,
        title: skill,
        url: `https://github.com/Jsebastiansalas?tab=repositories&q=${encodeURIComponent(skill)}`,
        description: cat.desc,
        category: 'technologies',
        tags: [cat.name, skill],
        thumbnail: null,
        type: 'skill',
        data: { ...cat, skill }
      });
    });
  });

  data.formation.items.forEach(f => {
    items.push({
      id: `formation-${f.title.toLowerCase().replace(/\s+/g, '-')}`,
      title: f.title,
      url: data.hero.linkedinUrl || 'https://www.linkedin.com/in/sebasti%C3%A1n-salas-torres-317a4a425/',
      description: f.desc,
      category: 'education',
      tags: [...f.skills, f.institution],
      thumbnail: f.image,
      type: 'education',
      data: f
    });
  });

  items.push({
    id: 'contact',
    title: data.contact.name,
    url: `mailto:${data.contact.email}`,
    description: data.contact.subtitle,
    category: 'contact',
    tags: ['contacto', 'email', 'linkedin', 'github'],
    thumbnail: null,
    type: 'contact',
    data: data.contact
  });

  items.push({
    id: 'about',
    title: `${data.hero.firstName} ${data.hero.lastName} - ${data.hero.role}`,
    url: data.hero.githubUrl || 'https://github.com/Jsebastiansalas',
    description: data.about.paragraphs.join(' '),
    category: 'about',
    tags: ['sobre mí', 'desarrollador', 'junior', 'software', 'datos'],
    thumbnail: null,
    type: 'about',
    data: data.about
  });

  return items;
}

export function search(query, lang = 'es') {
  const index = buildIndex(lang);
  const normalizedQuery = normalize(query);
  const terms = normalizedQuery.split(/\s+/).filter(Boolean);

  if (terms.length === 0) return [];

  const results = index.map(item => {
    const haystack = normalize(`${item.title} ${item.description} ${item.tags.join(' ')}`);
    let score = 0;

    terms.forEach(term => {
      if (normalize(item.title).includes(term)) score += 10;
      if (item.tags.some(t => normalize(t).includes(term))) score += 5;
      if (haystack.includes(term)) score += 1;
    });

    return { ...item, score };
  })
    .filter(item => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .map(item => ({
      ...item,
      highlightedTitle: highlight(item.title, query),
      highlightedDesc: highlight(item.description, query)
    }));

  return results;
}

export function filterByCategory(results, category) {
  if (category === 'Todo' || category === 'All') return results;
  const catMap = {
    'Proyectos': 'projects',
    'Projects': 'projects',
    'Tecnologías': 'technologies',
    'Technologies': 'technologies',
    'Formación': 'education',
    'Education': 'education',
    'Contacto': 'contact',
    'Contact': 'contact'
  };
  const target = catMap[category];
  return target ? results.filter(r => r.category === target) : results;
}