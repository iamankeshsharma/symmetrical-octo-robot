import { notFound } from "next/navigation";
import { getPost } from "@/lib/strapi";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import { Metadata } from "next";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

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
    title: post.Title, // or post.title depending on your Strapi field names
    description: post.Excerpt,
  };
}

export default async function BlogPostPage({
  params,
}: Props) {
  const { slug } = await params;

  const post = await getPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="max-w-3xl mx-auto py-10">
      <h1 className="text-5xl font-bold mb-4">
        {post.Title}
      </h1>

      <p className="text-muted-foreground mb-10">
        {post.Excerpt}
      </p>

        <BlocksRenderer content={post.Content} />
    </article>
  );
}