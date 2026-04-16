export type Language = 'es' | 'en'

export type LocalizedString = Record<Language, string>

export function pickLocalized(obj: LocalizedString, lang: Language): string {
  return obj[lang]
}

export function pickLocalizedOrString(
  value: LocalizedString | string | undefined,
  lang: Language,
): string | undefined {
  if (value === undefined) return undefined
  if (typeof value === 'string') return value
  return value[lang]
}
