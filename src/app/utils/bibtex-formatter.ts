// src/app/utils/bibtex-formatter.ts
export interface BibTeXEntry {
  type: string;
  citationKey: string;
  fields: { [key: string]: string };
}

export function parseBibTeX(bibtex: string): BibTeXEntry[] {
  const entries: BibTeXEntry[] = [];
  const entryRegex = /@(\w+)\s*{\s*([^,]+),([^@]*)}/g;
  let match;

  while ((match = entryRegex.exec(bibtex)) !== null) {
    const type = match[1];
    const citationKey = match[2];
    const fieldsString = match[3];
    const fields: { [key: string]: string } = {};

    fieldsString.split(',').forEach(field => {
      const [key, value] = field.split('=').map(s => s.trim());
      if (key && value) {
        fields[key] = value.replace(/[{}]/g, ''); // Remove curly braces
      }
    });

    entries.push({ type, citationKey, fields });
  }

  return entries;
}

export function formatBibTeXEntry(entry: BibTeXEntry): string {
  const fields = Object.entries(entry.fields)
    .map(([key, value]) => `  ${key} = {${value}}`)
    .join(',\n');

  return `@${entry.type}{${entry.citationKey},\n${fields}\n}`;
}

export function formatBibTeX(bibtex: string): string {
  const entries = parseBibTeX(bibtex);
  return entries.map(formatBibTeXEntry).join('\n\n');
}
