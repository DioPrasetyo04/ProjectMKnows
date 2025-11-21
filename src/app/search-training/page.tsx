import SearchMateri from "@/Components/UI/SearchMateri";
import { getStaticDataMateri } from "@/Props/searchMateri";

const Page = async () => {
  const staticDataMateri = await getStaticDataMateri();
  return <SearchMateri staticDataMateri={staticDataMateri}></SearchMateri>;
};

export default Page;
