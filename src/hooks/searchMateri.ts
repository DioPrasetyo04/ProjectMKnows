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
  const materi = useMemo(() => {
    if (keyword.trim() === "") {
      return staticData;
    } else {
      return staticData.filter((item) =>
        item.title.toLowerCase().includes(keyword.toLowerCase())
      );
    }
  }, [keyword, staticData]);

  return materi;
};

export default searchMateri;
