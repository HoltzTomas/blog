'use client'

import { useState } from 'react'
import { Check, Copy } from 'lucide-react'

import { Button } from '@/components/ui/button'

interface CodeBlockProps {
  code: string
  language?: string
  filename?: string
  showLineNumbers?: boolean
}

export function CodeBlock({
  code,
  language = 'typescript',
  filename,
  showLineNumbers = true,
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const lines = code.split('\n')

  const highlightTypescript = (line: string): JSX.Element[] => {
    const elements: JSX.Element[] = []
    let currentIndex = 0

    const patterns = [
      {
        name: 'comment',
        regex: /\/\/.*$|\/\*[\s\S]*?\*\//,
        className: 'text-neutral-500 italic',
      },
      {
        name: 'string',
        regex: /(["'`])((?:\\.|(?!\1).)*?)\1/,
        className: 'text-emerald-500',
      },
      {
        name: 'keyword',
        regex: /\b(const|let|var|function|async|await|return|if|else|for|while|import|export|from|interface|type|class|extends|implements|public|private|protected|static|readonly|enum|namespace|as|typeof|instanceof|new|this|super|throw|try|catch|finally|break|continue|switch|case|default|void|null|undefined)\b/,
        className: 'text-sky-500 font-medium',
      },
      {
        name: 'function',
        regex: /\b([a-zA-Z_$][\w$]*)\s*(?=\()/,
        className: 'text-violet-500',
      },
      {
        name: 'number',
        regex: /\b(\d+\.?\d*)\b/,
        className: 'text-amber-500',
      },
    ]

    interface Token {
      type: string
      value: string
      start: number
      end: number
      className: string
    }

    const tokens: Token[] = []

    patterns.forEach((pattern) => {
      let match
      const regex = new RegExp(pattern.regex.source, 'g')
      while ((match = regex.exec(line)) !== null) {
        tokens.push({
          type: pattern.name,
          value: match[0],
          start: match.index,
          end: match.index + match[0].length,
          className: pattern.className,
        })
      }
    })

    tokens.sort((a, b) => a.start - b.start)

    const filteredTokens: Token[] = []
    let lastEnd = 0
    tokens.forEach((token) => {
      if (token.start >= lastEnd) {
        filteredTokens.push(token)
        lastEnd = token.end
      }
    })

    filteredTokens.forEach((token, idx) => {
      if (token.start > currentIndex) {
        elements.push(
          <span key={`text-${idx}`}>
            {line.substring(currentIndex, token.start)}
          </span>,
        )
      }

      elements.push(
        <span key={`token-${idx}`} className={token.className}>
          {token.value}
        </span>,
      )

      currentIndex = token.end
    })

    if (currentIndex < line.length) {
      elements.push(
        <span key="text-end">
          {line.substring(currentIndex)}
        </span>,
      )
    }

    return elements
  }

  return (
    <div className="relative overflow-hidden rounded-[1.5rem] border border-black/10 bg-[#111111] text-[#f5f4f0] shadow-[0_24px_80px_rgba(10,10,10,0.12)]">
      {(filename || language) && (
        <div className="flex items-center justify-between border-b border-white/10 bg-white/5 px-4 py-3 font-sans">
          <div className="flex items-center gap-2">
            {filename ? <span className="text-sm font-medium text-white">{filename}</span> : null}
            {language ? (
              <span className="text-[11px] uppercase tracking-[0.2em] text-white/50">{language}</span>
            ) : null}
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 rounded-full border border-white/10 text-white hover:bg-white/10"
            onClick={handleCopy}
          >
            {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
          </Button>
        </div>
      )}

      <div className="overflow-x-auto">
        <div className="p-4 font-mono text-sm leading-7">
          {lines.map((line, index) => (
            <div key={index} className="group flex gap-4 rounded-xl px-2 transition-colors hover:bg-white/5">
              {showLineNumbers ? (
                <span className="w-8 shrink-0 select-none text-right text-white/25">
                  {index + 1}
                </span>
              ) : null}
              <pre className="flex-1 whitespace-pre-wrap break-all text-white/90">
                {line ? highlightTypescript(line) : <span className="opacity-0">.</span>}
              </pre>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
