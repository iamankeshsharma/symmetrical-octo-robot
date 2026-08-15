const STRAPI_URL = process.env.STRAPI_URL;
const CACHE_REVALIDATION_INTERVAL = Number(process.env.CACHE_REVALIDATION_INTERVAL ?? 60);

export async function getPosts() {
  const res = await fetch(
    `${STRAPI_URL}/api/blog-posts?sort=publishedDate:desc`,
    {
      next: {
        revalidate: CACHE_REVALIDATION_INTERVAL,
      },
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }

  const data = await res.json();

  return data.data;
}

export async function getPost(slug: string) {
  const res = await fetch(
    `${STRAPI_URL}/api/blog-posts?filters[Slug][$eq]=${slug}`,
    {
      next: {
        revalidate: CACHE_REVALIDATION_INTERVAL,
      },
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch post");
  }

  const data = await res.json();

  return data.data[0];
}