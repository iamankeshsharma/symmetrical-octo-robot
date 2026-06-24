import { notFound } from "next/navigation";
import { getPost, getPosts } from "@/lib/strapi";
import type { Metadata } from "next";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { twMerge } from "tailwind-merge";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export const revalidate = 60;

export async function generateStaticParams() {
  const posts = await getPosts();

  return posts.map((post: { Slug: string }) => ({
    slug: post.Slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  const post = await getPost(slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.Title,
    description: post.Excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;

  const post = await getPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="w-full max-w-3xl mx-auto px-4 md:px-0 py-5 md:py-10">
      <h1 className="text-foreground bg-background text-pretty mb-2 md:mb-4 text-2xl md:text-5xl font-bold">
        {post.Title}
      </h1>

      <p className="text-pretty text-muted-foreground mb-5 md:mb-10">
        {post.Excerpt}
      </p>

      <article className="w-full">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            h1: (props) => (
              <h1
                className="mt-5 text-3xl md:text-5xl text-pretty text-foreground bg-background"
                {...props}
              />
            ),
            h2: (props) => (
              <h2
                className="mt-5 text-2xl md:text-3xl text-pretty text-foreground bg-background"
                {...props}
              />
            ),
            h3: (props) => (
              <h3
                className="mt-5 text-xl md:text-2xl text-pretty text-foreground bg-background"
                {...props}
              />
            ),

            p: (props) => (
              <p
                className="text-pretty text-foreground bg-background"
                {...props}
              />
            ),

            a: (props) => (
              <a
                className="text-pretty text-foreground bg-background"
                {...props}
              />
            ),

            ul: (props) => (
              <ul
                className="ml-5 mt-5 list-disc text-pretty text-foreground bg-background"
                {...props}
              />
            ),
            ol: (props) => (
              <ol
                className="text-pretty text-foreground bg-background"
                {...props}
              />
            ),
            li: (props) => (
              <li
                className="text-pretty text-foreground bg-background"
                {...props}
              />
            ),

            blockquote: (props) => (
              <blockquote
                className="text-pretty text-foreground bg-background"
                {...props}
              />
            ),

            pre: ({ children }) => (
              <pre className="my-5 bg-foreground/30 dark:bg-foreground/30 p-4 rounded-lg overflow-x-auto">
                {children}
              </pre>
            ),

            code: ({ className, children, ...props }) => {
              const isBlock = className?.startsWith("language-");

              return (
                <code
                  className={twMerge(
                    "text-base",
                    isBlock
                      ? "text-foreground"
                      : "bg-foreground/30 dark:bg-foreground/30 px-1 rounded",
                  )}
                  {...props}
                >
                  {children}
                </code>
              );
            },
            table: (props) => (
              <table
                className="text-pretty text-foreground bg-background"
                {...props}
              />
            ),
            thead: (props) => (
              <thead
                className="text-pretty text-foreground bg-background"
                {...props}
              />
            ),
            tbody: (props) => (
              <tbody
                className="text-pretty text-foreground bg-background"
                {...props}
              />
            ),
            tr: (props) => (
              <tr
                className="text-pretty text-foreground bg-background"
                {...props}
              />
            ),
            th: (props) => (
              <th
                className="text-pretty text-foreground bg-background"
                {...props}
              />
            ),
            td: (props) => (
              <td
                className="text-pretty text-foreground bg-background"
                {...props}
              />
            ),

            hr: (props) => (
              <hr
                className="text-pretty text-foreground bg-background"
                {...props}
              />
            ),
            img: (props) => (
              <img
                className="text-pretty text-foreground bg-background"
                {...props}
              />
            ),
          }}
        >
          {post.Content}
        </ReactMarkdown>
      </article>
    </article>
  );
}
