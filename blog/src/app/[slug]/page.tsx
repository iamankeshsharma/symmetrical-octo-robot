import { notFound } from "next/navigation";
import { getPost, getPosts } from "@/lib/strapi";
import type { Metadata } from "next";
import { RichText } from "@/components/richText";

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
        <RichText content={post.Content}/>
      </article>
    </article>
  );
}
