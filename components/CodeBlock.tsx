'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Check, Copy } from 'lucide-react'
import { NeueMachinaRegular } from '@/app/components/Fonts'

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
  showLineNumbers = true 
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
        className: 'text-muted-foreground/70 italic'
      },
      { 
        name: 'string', 
        regex: /(["'`])((?:\\.|(?!\1).)*?)\1/,
        className: 'text-green-600 dark:text-green-400'
      },
      { 
        name: 'keyword', 
        regex: /\b(const|let|var|function|async|await|return|if|else|for|while|import|export|from|interface|type|class|extends|implements|public|private|protected|static|readonly|enum|namespace|as|typeof|instanceof|new|this|super|throw|try|catch|finally|break|continue|switch|case|default|void|null|undefined)\b/,
        className: 'text-blue-600 dark:text-blue-400 font-medium'
      },
      { 
        name: 'function', 
        regex: /\b([a-zA-Z_$][\w$]*)\s*(?=\()/,
        className: 'text-purple-600 dark:text-purple-400'
      },
      { 
        name: 'number', 
        regex: /\b(\d+\.?\d*)\b/,
        className: 'text-orange-600 dark:text-orange-400'
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
    
    patterns.forEach(pattern => {
      let match
      const regex = new RegExp(pattern.regex.source, 'g')
      while ((match = regex.exec(line)) !== null) {
        tokens.push({
          type: pattern.name,
          value: match[0],
          start: match.index,
          end: match.index + match[0].length,
          className: pattern.className
        })
      }
    })

    tokens.sort((a, b) => a.start - b.start)

    const filteredTokens: Token[] = []
    let lastEnd = 0
    tokens.forEach(token => {
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
          </span>
        )
      }
      
      elements.push(
        <span key={`token-${idx}`} className={token.className}>
          {token.value}
        </span>
      )
      
      currentIndex = token.end
    })

    if (currentIndex < line.length) {
      elements.push(
        <span key="text-end">
          {line.substring(currentIndex)}
        </span>
      )
    }

    return elements
  }

  return (
    <div className="relative rounded-lg border border-border bg-muted/40 overflow-hidden shadow-sm">
      {(filename || language) && (
        <div className={`flex items-center justify-between px-4 py-2 border-b border-border bg-muted/60 ${NeueMachinaRegular.className}`}>
          <div className="flex items-center gap-2">
            {filename && (
              <span className={`text-sm text-foreground font-medium ${NeueMachinaRegular.className}`}>
                {filename}
              </span>
            )}
            {language && (
              <span className={`text-xs text-muted-foreground uppercase ${NeueMachinaRegular.className}`}>
                {language}
              </span>
            )}
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="h-7 w-7 hover:bg-accent"
            onClick={handleCopy}
          >
            {copied ? (
              <Check className="h-3.5 w-3.5 text-green-600 dark:text-green-400" />
            ) : (
              <Copy className="h-3.5 w-3.5" />
            )}
          </Button>
        </div>
      )}

      <div className="overflow-x-auto">
        <div className={`p-4 text-sm ${NeueMachinaRegular.className}`}>
          {lines.map((line, index) => (
            <div key={index} className="flex gap-4 group hover:bg-accent/30 px-2 -mx-2 rounded">
              {showLineNumbers && (
                <span className={`select-none text-muted-foreground/40 text-right w-8 shrink-0 ${NeueMachinaRegular.className}`}>
                  {index + 1}
                </span>
              )}
              <pre className={`flex-1 whitespace-pre-wrap break-all ${NeueMachinaRegular.className}`}>
                {line ? highlightTypescript(line) : <span className="opacity-0">.</span>}
              </pre>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
