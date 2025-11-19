import { CardClientProps } from "@/Types/CardClient";
import { CardHouseTrainingProps } from "@/Types/CardHouseTraining";

const urlDB = process.env.NEXT_PUBLIC_DB_URL;

export async function getStaticDataCardHouseTraining(): Promise<
  CardHouseTrainingProps[]
> {
  try {
    const res = await fetch(`${urlDB}/CardHouse`, {
      next: { revalidate: 3600 },
    });
    return res.json();
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function getStaticDataCardClient(): Promise<CardClientProps[]> {
  try {
    const res = await fetch(`${urlDB}/CardClient`, {
      next: { revalidate: 3600 },
    });
    return res.json();
  } catch (error) {
    return [];
  }
}
