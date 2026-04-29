/* eslint-disable @next/next/no-img-element */

import { ComponentPropsWithoutRef } from "react";

import { CodeBlock } from "@/components/CodeBlock";

export const RichTextComponents = {
  pre: ({ children }: ComponentPropsWithoutRef<"pre">) => {
    const childArray = Array.isArray(children) ? children : [children];
    const firstChild = childArray[0] as any;

    let code = "";
    let language = "typescript";

    if (firstChild?.props?.node) {
      const node = firstChild.props.node;

      if (node.text) {
        code = node.text;
      } else if (node.children && Array.isArray(node.children)) {
        code = node.children.map((child: any) => child.value || child.text || "").join("");
      }

      if (node.lang) {
        language = node.lang;
      } else if (node.meta) {
        language = node.meta;
      }
    }

    return <CodeBlock code={code} language={language} showLineNumbers />;
  },
  code: ({ children, className, ...props }: ComponentPropsWithoutRef<"code">) => {
    const isInline = !className?.includes("language-");

    if (isInline) {
      return (
        <code {...props} className={className}>
          {children}
        </code>
      );
    }

    return (
      <code {...props} className={className}>
        {children}
      </code>
    );
  },
  p: ({ children, ...props }: ComponentPropsWithoutRef<"p">) => <p {...props}>{children}</p>,
  h1: ({ children, ...props }: ComponentPropsWithoutRef<"h1">) => <h1 {...props}>{children}</h1>,
  h2: ({ children, ...props }: ComponentPropsWithoutRef<"h2">) => <h2 {...props}>{children}</h2>,
  h3: ({ children, ...props }: ComponentPropsWithoutRef<"h3">) => <h3 {...props}>{children}</h3>,
  a: ({ children, ...props }: ComponentPropsWithoutRef<"a">) => <a {...props}>{children}</a>,
  blockquote: ({ children, ...props }: ComponentPropsWithoutRef<"blockquote">) => (
    <blockquote {...props}>{children}</blockquote>
  ),
  strong: ({ children, ...props }: ComponentPropsWithoutRef<"strong">) => (
    <strong {...props}>{children}</strong>
  ),
  ul: ({ children, ...props }: ComponentPropsWithoutRef<"ul">) => <ul {...props}>{children}</ul>,
  ol: ({ children, ...props }: ComponentPropsWithoutRef<"ol">) => <ol {...props}>{children}</ol>,
  li: ({ children, ...props }: ComponentPropsWithoutRef<"li">) => <li {...props}>{children}</li>,
  img: ({ src, alt, ...props }: ComponentPropsWithoutRef<"img">) => (
    // Rich text images come from the CMS, so we keep the browser img element here.
    <img src={src} alt={alt} {...props} />
  ),
};
