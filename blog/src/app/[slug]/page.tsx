import { notFound } from "next/navigation";
import { getPost, getPosts } from "@/lib/strapi";
import type { Metadata } from "next";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

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
    <article className="max-w-3xl mx-auto py-10">
      <h1 className="mb-4 text-5xl font-bold">{post.Title}</h1>

      <p className="text-muted-foreground mb-10">{post.Excerpt}</p>

      <article
        className="prose
    max-w-none
    prose-headings:text-black
    prose-p:text-black
    prose-li:text-black
    prose-strong:text-black
    prose-a:text-black
    prose-code:text-white
    prose-pre:text-black
      prose-code:before:content-none
      prose-code:after:content-none
      

    dark:prose-headings:text-white
    dark:prose-p:text-white
    dark:prose-li:text-white
    dark:prose-strong:text-white
    dark:prose-a:text-white

    dark:prose-code:text-white
    dark:prose-pre:text-white

      dark:prose-code:before:content-none
      dark:prose-pre:after:content-none
    "
      >
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            code({ className, children }) {
              const isBlock = !!className;

              return (
                <code
                  className={
                    isBlock
                      ? "text-white"
                      : "text-black bg-gray-500 px-1 rounded"
                  }
                >
                  {children}
                </code>
              );
            },
          }}
        >
          {post.Content}
        </ReactMarkdown>
      </article>
    </article>
  );
}
