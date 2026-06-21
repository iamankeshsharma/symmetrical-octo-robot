import { getPosts } from "@/lib/strapi";
import Link from "next/link";

export default async function Home() {
  const posts = await getPosts();
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black text-black dark:text-white">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-start justify-start py-32 px-16 bg-white dark:bg-black sm:items-start">
        <h1 className="text-3xl font-bold mb-8">Writings</h1>

        <div className="w-full">
          {posts.length &&
            posts.map((post: any, index: number) => (
              <article key={post?.documentId} className="flex items-center gap-10 border-b py-6">
                <span className="text-6xl leading-none shrink-0">
                  {index + 1}
                </span>

                <Link href={`/${post?.Slug}`} className="block text-xl">
                  <span className="font-semibold">{post?.Title}</span>
                  <p className="mt-2 text-muted-foreground">{post?.Excerpt}</p>
                </Link>
              </article>
            ))}
        </div>
      </main>
    </div>
  );
}
