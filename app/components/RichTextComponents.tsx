import { CodeBlock } from '@/components/CodeBlock'
import { ComponentPropsWithoutRef } from 'react'

export const RichTextComponents = {
  pre: ({ children }: ComponentPropsWithoutRef<'pre'>) => {
    // BaseHub sends children as an array with React elements
    const childArray = Array.isArray(children) ? children : [children]
    const firstChild = childArray[0] as any

    let code = ''
    let language = 'typescript'

    // Try to extract code from the node structure
    if (firstChild?.props?.node) {
      const node = firstChild.props.node

      // The code is directly in node.text
      if (node.text) {
        code = node.text
      } else if (node.children && Array.isArray(node.children)) {
        // Fallback: Extract text from children
        code = node.children
          .map((child: any) => child.value || child.text || '')
          .join('')
      }

      // Try to get language from node properties
      if (node.lang) {
        language = node.lang
      } else if (node.meta) {
        language = node.meta
      }
    }

    return (
      <CodeBlock
        code={code}
        language={language}
        showLineNumbers={true}
      />
    )
  },
  code: ({ children, className, ...props }: ComponentPropsWithoutRef<'code'>) => {
    // Check if this is inline code (no language class)
    const isInline = !className?.includes('language-')

    if (isInline) {
      // Render inline code with simple styling
      return (
        <code
          className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono border border-border"
          {...props}
        >
          {children}
        </code>
      )
    }

    // For code blocks, children will be handled by the pre component
    return <code {...props}>{children}</code>
  },
  p: ({ children, ...props }: ComponentPropsWithoutRef<'p'>) => {
    return (
      <p className="my-6 leading-relaxed" {...props}>
        {children}
      </p>
    )
  },
  h1: ({ children, ...props }: ComponentPropsWithoutRef<'h1'>) => {
    return (
      <h1
        className="mt-6 mb-6 text-4xl font-bold text-center text-[#4770FF]"
        {...props}
      >
        {children}
      </h1>
    )
  },
  h2: ({ children, ...props }: ComponentPropsWithoutRef<'h2'>) => {
    return (
      <h2
        className="mt-4 mb-4 text-3xl font-bold text-black"
        {...props}
      >
        {children}
      </h2>
    )
  },
  a: ({ children, ...props }: ComponentPropsWithoutRef<'a'>) => {
    return (
      <a
        className="text-[#4770FF] underline font-bold hover:opacity-80"
        {...props}
      >
        {children}
      </a>
    )
  },
  blockquote: ({ children, ...props }: ComponentPropsWithoutRef<'blockquote'>) => {
    return (
      <blockquote
        className="my-8 text-gray-600 italic border-l-8 border-gray-300 pl-5"
        {...props}
      >
        {children}
      </blockquote>
    )
  },
  strong: ({ children, ...props }: ComponentPropsWithoutRef<'strong'>) => {
    return (
      <strong className="underline" {...props}>
        {children}
      </strong>
    )
  },
  img: ({ src, alt, ...props }: ComponentPropsWithoutRef<'img'>) => {
    return (
      <img
        src={src}
        alt={alt}
        className="my-6 mx-auto max-w-sm rounded-lg"
        {...props}
      />
    )
  },
}
