import { Materi } from "@/Types/Materi";
import { useMemo } from "react";

const searchMateri = (keyword: string, staticData: Materi[]) => {
  // const [materi, setMateri] = useState([]);

  // fetching api resmi
  // useEffect(() => {
  //   const getMateri = async () => {
  //     try {
  //       const response = await fetchData.get("/materi-training", {
  //         params: {
  //           title_like: keyword,
  //         },
  //       });
  //       setMateri(response.data);
  //     } catch (error) {
  //       console.error(error);
  //       setMateri([]);
  //     }
  //   };

  //   if (keyword.trim() !== "") {
  //     getMateri();
  //   }
  // }, [keyword]);

  // use memo digunakan digunakan ketika ada perubahan pada keyword value dan staticData dan mempercepat proses load data
  // filter digunakan untuk memfilter data proses searching
  return useMemo(() => {
    const lower = keyword.toLowerCase();

    return staticData.filter((item) => {
      // Search Title & Slug Kategori
      const matchTitle = item.title.toLowerCase().includes(lower);
      const matchSlug = item.slug.toLowerCase().includes(lower);

      const matchdescription = item.description?.toLowerCase().includes(lower);

      // Search di dalam data Training
      const matchData =
        Array.isArray(item.data) &&
        item.data.some((child) => {
          const trainingName = Object.keys(child).find((k) => k !== "id");
          if (!trainingName) return false;

          const nameMatch = trainingName.toLowerCase().includes(lower);

          if (!nameMatch) return false;

          // jadwal searching
          const value = (child as any)[trainingName as any];
          const scheduleMatch =
            Array.isArray(value) &&
            (value as any[]).some(
              (schedule: any) =>
                typeof schedule.data === "string" &&
                schedule.data.toLowerCase().includes(lower)
            );

          return nameMatch || scheduleMatch;
        });

      return matchTitle || matchSlug || matchdescription || matchData;
    });
  }, [keyword, staticData]);
};

export default searchMateri;
