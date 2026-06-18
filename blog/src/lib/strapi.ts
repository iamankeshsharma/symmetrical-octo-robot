const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL;

export async function getPosts() {
  const res = await fetch(
    `${STRAPI_URL}/api/blog-posts?sort=publishedDate:desc`,
    {
      next: {
        revalidate: 60,
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
        revalidate: 60,
      },
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch post");
  }

  const data = await res.json();

  return data.data[0];
}