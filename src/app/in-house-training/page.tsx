import InHouseTraining from "@/Components/UI/InHouseTraining";
import {
  getStaticDataCardClient,
  getStaticDataCardHouseTraining,
} from "@/Props/houseTraining";

const page = async () => {
  const staticDataHouseTraining = await getStaticDataCardHouseTraining();
  const staticDataClient = await getStaticDataCardClient();

  return (
    <InHouseTraining
      staticDataHouseTraining={staticDataHouseTraining}
      staticDataClient={staticDataClient}
    />
  );
};

export default page;
