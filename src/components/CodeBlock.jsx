import React, { useMemo } from 'react';

/**
 * CodeBlock
 * ------------------------------------------------------------------
 * A lightweight "editor tab" renderer. Not a real syntax highlighter —
 * just enough tokenization (keywords, strings, comments, numbers) to feel
 * alive without pulling in 200KB of Prism/Shiki for a portfolio.
 *
 * Props:
 *   filename  — shown in the tab header
 *   language  — one of: hcl, python, groovy, yaml
 *   lines     — array<string>, one entry per line
 */

// Keyword sets per language. Case-sensitive; small and intentional.
const KEYWORDS = {
  hcl: ['module', 'source', 'variable', 'output', 'resource', 'data', 'provider', 'locals', 'terraform', 'required_providers', 'true', 'false', 'null', 'for_each'],
  bicep: [
    'param', 'var', 'resource', 'module', 'output', 'targetScope',
    'existing', 'if', 'for', 'in', 'true', 'false', 'null',
  ],
  python: [
    'class', 'def', 'async', 'await', 'return', 'import', 'from', 'as',
    'if', 'elif', 'else', 'for', 'while', 'in', 'and', 'or', 'not',
    'self', 'True', 'False', 'None', 'try', 'except', 'raise', 'with', 'lambda',
  ],
  groovy: [
    'pipeline', 'agent', 'environment', 'stages', 'stage', 'steps',
    'parallel', 'def', 'return', 'if', 'else', 'true', 'false', 'null', 'sh',
    'credentials', 'kubernetes', 'label',
  ],
  yaml: [],
};

function tokenize(line, language) {
  // Comments (full-line only — simple and good enough here)
  const commentChar = language === 'python' || language === 'yaml' ? '#' : null;
  if (commentChar) {
    const trimmed = line.trimStart();
    if (trimmed.startsWith(commentChar) || (language === 'groovy' && trimmed.startsWith('//'))) {
      return [{ kind: 'comment', text: line }];
    }
  }
  if (language === 'groovy' && line.trimStart().startsWith('//')) {
    return [{ kind: 'comment', text: line }];
  }
  if (language === 'hcl' && line.trimStart().startsWith('#')) {
    return [{ kind: 'comment', text: line }];
  }

  // Tokenize: strings, numbers, keywords, else plain.
  // Regex order matters — strings first so keywords inside strings are ignored.
  const parts = [];
  const rx = /("(?:\\.|[^"\\])*")|('(?:\\.|[^'\\])*')|(\b\d+(?:\.\d+)?\b)|([A-Za-z_][\w]*)|([^A-Za-z_0-9"']+)/g;
  const keywords = KEYWORDS[language] || [];

  let m;
  while ((m = rx.exec(line)) !== null) {
    const [ , dq, sq, num, word, other ] = m;
    if (dq)          parts.push({ kind: 'string',  text: dq });
    else if (sq)     parts.push({ kind: 'string',  text: sq });
    else if (num)    parts.push({ kind: 'number',  text: num });
    else if (word)   parts.push({ kind: keywords.includes(word) ? 'keyword' : 'ident', text: word });
    else if (other)  parts.push({ kind: 'op',      text: other });
  }
  return parts.length ? parts : [{ kind: 'plain', text: line }];
}

const TOKEN_CLASS = {
  keyword: 'text-teal-700',
  string:  'text-amber-700',
  number:  'text-rose-600',
  comment: 'text-ink-500 italic',
  ident:   'text-ink-800',
  op:      'text-ink-700',
  plain:   'text-ink-800',
};

function CodeLine({ text, language }) {
  const tokens = useMemo(() => tokenize(text, language), [text, language]);
  if (tokens.length === 1 && tokens[0].kind === 'comment') {
    return <span className={TOKEN_CLASS.comment}>{text || '\u00A0'}</span>;
  }
  return (
    <>
      {tokens.map((t, i) => (
        <span key={i} className={TOKEN_CLASS[t.kind] || TOKEN_CLASS.plain}>
          {t.text}
        </span>
      ))}
      {tokens.length === 0 ? '\u00A0' : null}
    </>
  );
}

export default function CodeBlock({ filename, language = 'yaml', lines = [] }) {
  const padWidth = String(lines.length).length;

  return (
    <div
      className="surface overflow-hidden"
      style={{ borderRadius: 14 }}
      aria-label={`Source file: ${filename}`}
    >
      {/* Editor tab header */}
      <div className="flex items-center gap-3 px-4 py-2.5 border-b border-ink-900/5 bg-paper-100/60">
        <div className="flex gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-red-300/70" />
          <span className="w-2.5 h-2.5 rounded-full bg-amber-300/70" />
          <span className="w-2.5 h-2.5 rounded-full bg-teal-300/70" />
        </div>
        <span className="font-mono text-xs text-ink-600 truncate">{filename}</span>
        <span className="ml-auto font-mono text-[10px] uppercase tracking-wider text-ink-500">
          {language}
        </span>
      </div>

      {/* Code body */}
      <pre
        className="font-mono text-[12.5px] leading-[1.65] overflow-x-auto bg-white/60"
        style={{ padding: 0, margin: 0 }}
      >
        <code className="block">
          {lines.map((line, i) => (
            <div key={i} className="flex items-start hover:bg-paper-100/80 transition-colors">
              <span
                className="code-gutter font-mono text-[11.5px] text-ink-500 select-none pl-4"
                style={{ minWidth: `${padWidth + 2}ch`, paddingTop: 1 }}
              >
                {String(i + 1).padStart(padWidth, ' ')}
              </span>
              <span className="flex-1 pl-4 pr-6 whitespace-pre">
                <CodeLine text={line} language={language} />
              </span>
            </div>
          ))}
        </code>
      </pre>
    </div>
  );
}
