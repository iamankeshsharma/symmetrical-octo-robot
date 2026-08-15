"use client";
import {
  BlocksRenderer,
  type BlocksContent,
} from "@strapi/blocks-react-renderer";
import type { JSX } from "react";

type Props = {
  content: BlocksContent;
};

export function RichText({ content }: Props) {
  return (
    <BlocksRenderer
      content={content}
      blocks={{
        heading: ({ children, level }) => {
          const className = {
            1: "mt-5 text-3xl md:text-5xl text-pretty text-foreground bg-background",
            2: "mt-5 text-2xl md:text-3xl text-pretty text-foreground bg-background",
            3: "mt-5 text-xl md:text-2xl text-pretty text-foreground bg-background",
            4: "mt-5 text-lg md:text-xl text-pretty text-foreground bg-background",
            5: "mt-5 text-base md:text-lg text-pretty text-foreground bg-background",
            6: "mt-5 text-base text-pretty text-foreground bg-background",
          }[level];

          const Tag = `h${level}` as keyof JSX.IntrinsicElements;

          return <Tag className={className}>{children}</Tag>;
        },

        paragraph: ({ children }) => (
          <p className="text-pretty text-foreground bg-background">
            {children}
          </p>
        ),

        link: ({ children, url }) => (
          <a
            href={url}
            className="
          underline
          underline-offset-2
          hover:opacity-80
          transition-opacity
          text-pretty
          text-foreground
          bg-background
        "
          >
            {children}
          </a>
        ),

        list: ({ children, format }) => {
          if (format === "ordered") {
            return (
              <ol className="ml-5 mt-5 list-decimal text-pretty text-foreground bg-background">
                {children}
              </ol>
            );
          }

          return (
            <ul className="ml-5 mt-5 list-disc text-pretty text-foreground bg-background">
              {children}
            </ul>
          );
        },

        "list-item": ({ children }) => (
          <li className="text-pretty text-foreground bg-background">
            {children}
          </li>
        ),

        quote: ({ children }) => (
          <blockquote className="text-pretty text-foreground bg-background">
            {children}
          </blockquote>
        ),

        code: ({ children }) => (
          <pre className="my-5 bg-foreground/30 dark:bg-foreground/30 p-4 rounded-lg overflow-x-auto">
            <code className="text-base text-foreground">{children}</code>
          </pre>
        ),
      }}
      modifiers={{
        bold: ({ children }) => (
          <strong className="font-semibold">{children}</strong>
        ),

        italic: ({ children }) => <em className="italic">{children}</em>,

        underline: ({ children }) => (
          <u className="underline underline-offset-2">{children}</u>
        ),

        strikethrough: ({ children }) => <s>{children}</s>,
      }}
    />
  );
}
