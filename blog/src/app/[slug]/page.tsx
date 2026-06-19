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

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
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

      <p className="text-muted-foreground mb-10">
        {post.Excerpt}
      </p>

      <article className="prose prose-neutral max-w-none">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {post.Content}
        </ReactMarkdown>
      </article>
    </article>
  );
}