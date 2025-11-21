import { Materi } from "@/Types/Materi";

export async function getStaticDataMateri(): Promise<Materi[]> {
  try {
    const data = process.env.NEXT_PUBLIC_DB_URL;
    const res = await fetch(`${data}/materi-training`, {
      next: { revalidate: 3600 },
    });

    return res.json();
  } catch (error) {
    return [];
  }
}
