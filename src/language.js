export function resolveLanguage(query, saved, browserLanguages = []) {
  if (query === 'ru' || query === 'en') return query;
  if (saved === 'ru' || saved === 'en') return saved;
  // Honour the device's preferred language; English is the international fallback.
  const primary = browserLanguages[0] || 'en';
  return primary.toLowerCase().split(/[-_]/)[0] === 'ru' ? 'ru' : 'en';
}

export function getInitialLanguage() {
  let saved;
  try { saved = localStorage.getItem('portfolio-language'); } catch { /* Storage may be blocked. */ }
  return resolveLanguage(new URLSearchParams(location.search).get('lang'), saved, navigator.languages?.length ? navigator.languages : [navigator.language]);
}

export function saveLanguage(language) {
  try { localStorage.setItem('portfolio-language', language); } catch { /* The URL still preserves the choice. */ }
}
