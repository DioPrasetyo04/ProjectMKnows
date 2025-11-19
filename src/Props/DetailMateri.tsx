export const getStaticDataDetailMateri = async (slug: string) => {
  const env = process.env.NEXT_PUBLIC_DB_URL;
  try {
    const res = await fetch(`${env}/${slug}`, {
      next: { revalidate: 3600 },
      cache: "no-cache",
    });

    const data = await res.json();
    return data[0];
  } catch (error) {
    return [];
  }
};
