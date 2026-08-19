// src/app/utils/bibtex-formatter.ts
import { Publication } from '../models/publication.model';

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

    // Parse fields respecting braces and quotes
    const parsedFields = parseFields(fieldsString);
    parsedFields.forEach(({ key, value }) => {
      fields[key] = value;
    });

    entries.push({ type, citationKey, fields });
  }

  return entries;
}

function parseFields(fieldsString: string): Array<{ key: string; value: string }> {
  const fields: Array<{ key: string; value: string }> = [];
  let currentField = '';
  let braceDepth = 0;
  let inQuotes = false;
  let escaped = false;

  for (let i = 0; i < fieldsString.length; i++) {
    const char = fieldsString[i];

    if (escaped) {
      currentField += char;
      escaped = false;
      continue;
    }

    if (char === '\\') {
      currentField += char;
      escaped = true;
      continue;
    }

    if (char === '"' && braceDepth === 0) {
      inQuotes = !inQuotes;
      currentField += char;
      continue;
    }

    if (char === '{') {
      braceDepth++;
      currentField += char;
      continue;
    }

    if (char === '}') {
      braceDepth--;
      currentField += char;
      continue;
    }

    // Only split on comma when outside braces and quotes
    if (char === ',' && braceDepth === 0 && !inQuotes) {
      const parsed = parseField(currentField.trim());
      if (parsed) {
        fields.push(parsed);
      }
      currentField = '';
      continue;
    }

    currentField += char;
  }

  // Don't forget the last field
  if (currentField.trim()) {
    const parsed = parseField(currentField.trim());
    if (parsed) {
      fields.push(parsed);
    }
  }

  return fields;
}

function parseField(field: string): { key: string; value: string } | null {
  const equalIndex = field.indexOf('=');
  if (equalIndex === -1) {
    return null;
  }

  const key = field.substring(0, equalIndex).trim();
  let value = field.substring(equalIndex + 1).trim();

  // Remove surrounding braces or quotes
  if ((value.startsWith('{') && value.endsWith('}')) ||
      (value.startsWith('"') && value.endsWith('"'))) {
    value = value.substring(1, value.length - 1);
  }

  return { key, value };
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

function toBibAuthorName(fullName: string): string {
  const parts = fullName.trim().split(/\s+/);
  if (parts.length < 2) {
    return fullName;
  }
  const last = parts[parts.length - 1];
  const first = parts.slice(0, -1).join(' ');
  return `${last}, ${first}`;
}

export function generateBibTeXWithoutDoi(publication: Publication): string {
  const year = new Date(publication.date).getFullYear();
  const authors = publication.authors.split(',').map(a => a.trim()).filter(Boolean);
  const bibAuthors = authors.map(toBibAuthorName).join(' and ');
  const firstAuthorSurname = authors[0]?.trim().split(/\s+/).pop() ?? 'unknown';
  const citationKey = `${firstAuthorSurname.toLowerCase()}${year}`;

  const isJournal = /journal|transactions/i.test(publication.publishedIn ?? '');
  const entryType = isJournal ? 'article' : 'inproceedings';
  const venueKey = isJournal ? 'journal' : 'booktitle';

  const fields: { [key: string]: string } = {
    author: bibAuthors,
    title: publication.title,
    year: `${year}`,
  };
  if (publication.publishedIn) {
    fields[venueKey] = publication.publishedIn;
  }
  if (publication.status === 'accepted') {
    fields['note'] = 'Accepted for publication';
  }

  return formatBibTeXEntry({ type: entryType, citationKey, fields });
}
