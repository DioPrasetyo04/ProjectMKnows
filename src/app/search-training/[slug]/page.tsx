import BreadCrumbTraining from "@/Components/BreadCrumbTraining";
import Footer from "@/Components/Footer";
import PageDetailTimeTable from "@/Components/UI/pageDetailTimeTable";
import { getStaticDataDetailMateri } from "@/Props/DetailMateri";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = await getStaticDataDetailMateri(slug);

  // Base style for each series page
  const pageStyle: Record<string, string> = {
    "new-training-2026": "bg-[#DEE5E7] relative",
    "tech-series":
      "relative bg-gradient-to-b from-[#02353C]/100 via-[#35DAF1]/88 to-[#28AEC1]/91",
    "bnsp-series": "relative bg-[#102635]",
    "esg-series": "relative bg-[#102635]",
    "finance-series": "relative bg-[#102635]",
    "office-adm-series": "relative bg-[#102635]",
  };

  const appliedStyle = pageStyle[slug] || "bg-gray-100 text-black";

  return (
    <>
      <div className={`relative min-h-screen ${appliedStyle}`}>
        {slug === "new-training-2026" && (
          <>
            <div className="absolute top-[140px] left-3 w-[358px] h-[344px] bg-[#AEC9B6] rounded-full z-0" />
            <div className="absolute top-[381px] right-[351px] w-[313px] h-[273px] bg-[#AEC9B6] rounded-full z-0" />
            <div className="absolute top-[133px] right-[58px] w-56 h-[218px] bg-[#6F967B]/64 rounded-full z-0" />
          </>
        )}

        {slug === "bnsp-series" && (
          <div className="absolute bg-cover bg-no-repeat z-0">
            <img
              src="/images/jadwal-training/bnsp_series_vector.png"
              alt="bnsp"
            />
          </div>
        )}

        {slug === "esg-series" && (
          <div
            className="
            absolute inset-0 
            bg-[url('/images/jadwal-training/esg_vector.png')]
            bg-cover bg-no-repeat bg-top 
            z-0
          "
          />
        )}

        {slug === "finance-series" && (
          <div
            className="
            absolute inset-0 
            bg-[url('/images/jadwal-training/finance_series_vector.png')]
            bg-cover bg-no-repeat bg-top 
            z-0
          "
          />
        )}

        {slug === "office-adm-series" && (
          <div
            className="
            absolute inset-0 
            bg-[url('/images/jadwal-training/office_vector.png')]
            bg-cover bg-no-repeat bg-top 
            z-0
          "
          />
        )}

        {slug === "leadership-series" && (
          <div
            className="
            absolute
            bg-cover bg-no-repeat 
            z-0 pt-[100px]
            right-0 left-0
          "
          >
            <img
              src="/images/jadwal-training/leadership_header.png"
              alt="leadership header"
              className="w-[1500px] h-full"
            />
          </div>
        )}

        {slug === "sales-marketing-series" && (
          <div
            className="
            absolute
            bg-cover bg-no-repeat 
            z-0 pt-[100px]
            right-0 left-0
          "
          >
            <img
              src="/images/jadwal-training/sales_header.png"
              alt="leadership header"
              className="w-[1500px] h-full"
            />
          </div>
        )}

        {slug === "credit-collection-series" && (
          <div
            className="
            absolute
            bg-cover bg-no-repeat 
            z-0 pt-[100px]
            right-0 left-0
          "
          >
            <img
              src="/images/jadwal-training/credit_header.png"
              alt="leadership header"
              className="w-[1500px] h-full"
            />
          </div>
        )}

        {slug === "hc-training-series" && (
          <div
            className="
            absolute
            bg-cover bg-no-repeat 
            z-0 pt-[100px]
            right-0 left-0
          "
          >
            <img
              src="/images/jadwal-training/hc_header.png"
              alt="leadership header"
              className="w-[1500px] h-full"
            />
          </div>
        )}

        <div className="relative z-10">
          <PageDetailTimeTable
            Title={data.title}
            Desc={data.description}
            link={data.link}
            data={data.data}
          >
            <BreadCrumbTraining
              items={[
                { name: "Public Training 2026", slug: "/search-training" },
                { name: data.title, slug: `/search-training/${slug}` },
              ]}
            />
          </PageDetailTimeTable>
        </div>
      </div>
      <Footer />
    </>
  );
}
