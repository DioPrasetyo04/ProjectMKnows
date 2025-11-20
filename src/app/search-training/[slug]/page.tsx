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

  // Background style for each slug
  const pageStyle: Record<string, string> = {
    "new-training-2026": "bg-[#DEE5E7] relative",
    "tech-series":
      "relative bg-gradient-to-b from-[#02353C]/100 via-[#35DAF1]/88 to-[#28AEC1]/91",
    "bnsp-series": "relative bg-[#102635]",
    "esg-series": "relative bg-[#102635]",
    "finance-series": "relative bg-[#102635]",
    "office-adm-series": "relative bg-[#102635]",
  };

  // Title styling per slug
  const titleStyle: Record<string, string> = {
    "new-training-2026": "text-[#143A26]",
    "tech-series": "text-white",
    "bnsp-series": "text-[#ffff]",
    "esg-series": "text-[#82FFCD]",
    "finance-series": "text-[#ffff]",
    "office-adm-series": "text-[#E8F1FF]",
    "leadership-series": "text-white",
    "sales-marketing-series": "text-white",
    "credit-collection-series": "text-white",
    "hc-training-series": "text-white",
  };

  // Desc styling
  const descStyle: Record<string, string> = {
    "new-training-2026": "text-[#1B4630]",
    "tech-series": "text-white/90",
    "bnsp-series": "text-gray-200",
    "esg-series": "text-gray-200",
    "finance-series": "text-gray-200",
    "office-adm-series": "text-gray-200",
    "leadership-series": "text-gray-200",
    "sales-marketing-series": "text-gray-200",
    "credit-collection-series": "text-gray-200",
    "hc-training-series": "text-gray-200",
  };

  const appliedStyle = pageStyle[slug] || "bg-gray-100 text-black";
  const appliedTitle = titleStyle[slug] || "";
  const appliedDesc = descStyle[slug] || "";

  return (
    <>
      <div className={`relative min-h-screen overflow-hidden ${appliedStyle}`}>
        {/* Background decoration per slug */}
        {slug === "new-training-2026" && (
          <>
            {" "}
            <div className="absolute top-[140px] lg:top-[140px] left-3 w-[200px] h-[200px] lg:w-[358px] lg:h-[344px] bg-[#AEC9B6] rounded-full z-0" />{" "}
            <div className="absolute top-[300px] lg:top-[381px] right-[10px] md:right-[358px] lg:right-[358px] w-[200px] h-[200px] lg:w-[313px] lg:h-[273px] bg-[#AEC9B6] rounded-full z-0" />{" "}
            <div className="hidden lg:block md:block absolute top-[400px] md:top-[133px] lg:top-[133px] right-[58px] w-45 md:w-56 lg:w-56 h-45 md:h-56 lg:h-[218px] bg-[#6F967B]/64 rounded-full z-0" />{" "}
            <div className="block lg:hidden md:hidden absolute top-[450px] md:top-[133px] lg:top-[133px] left-[20px] w-45 md:w-56 lg:w-56 h-45 md:h-56 lg:h-[218px] bg-[#6F967B]/64 rounded-full z-0" />{" "}
          </>
        )}{" "}
        {slug === "bnsp-series" && (
          <div className="absolute bg-cover bg-no-repeat z-0 top-[120px]">
            {" "}
            <img
              src="/images/jadwal-training/bnsp_series_vector.png"
              alt="bnsp"
            />{" "}
          </div>
        )}{" "}
        {slug === "esg-series" && (
          <div className=" absolute inset-0 bg-[url('/images/jadwal-training/esg_vector.png')] bg-cover bg-no-repeat bg-top z-0 " />
        )}{" "}
        {slug === "finance-series" && (
          <div className=" absolute inset-0 bg-[url('/images/jadwal-training/finance_series_vector.png')] bg-cover bg-no-repeat bg-top z-0 " />
        )}{" "}
        {slug === "office-adm-series" && (
          <div className=" absolute inset-0 bg-[url('/images/jadwal-training/office_vector.png')] bg-cover bg-no-repeat bg-top z-0 " />
        )}{" "}
        {slug === "leadership-series" && (
          <div className=" absolute bg-cover bg-no-repeat z-0 pt-[100px] right-0 left-0 ">
            {" "}
            <img
              src="/images/jadwal-training/leadership_header.png"
              alt="leadership header"
              className="w-[1500px] h-[250px] lg:h-full md:h-[250px]"
            />{" "}
          </div>
        )}{" "}
        {slug === "sales-marketing-series" && (
          <div className=" absolute bg-cover bg-no-repeat z-0 pt-[100px] right-0 left-0 ">
            {" "}
            <img
              src="/images/jadwal-training/sales_header.png"
              alt="leadership header"
              className="w-[1500px] h-[250px] lg:h-full md:h-[250px]"
            />{" "}
          </div>
        )}{" "}
        {slug === "credit-collection-series" && (
          <div className=" absolute bg-cover bg-no-repeat z-0 pt-[100px] right-0 left-0 ">
            {" "}
            <img
              src="/images/jadwal-training/credit_header.png"
              alt="leadership header"
              className="w-[1500px] h-[250px] lg:h-full md:h-[250px]"
            />{" "}
          </div>
        )}{" "}
        {slug === "hc-training-series" && (
          <div className=" absolute bg-cover bg-no-repeat z-0 pt-[100px] right-0 left-0 ">
            {" "}
            <img
              src="/images/jadwal-training/hc_header.png"
              alt="leadership header"
              className="w-[1500px] h-[250px] lg:h-full md:h-[250px]"
            />{" "}
          </div>
        )}
        {/* Content */}
        <div className="relative z-10">
          <PageDetailTimeTable
            Title={data.title}
            Desc={data.description}
            link={data.link}
            data={data.data}
            stylingTitle={appliedTitle}
            stylingDesc={appliedDesc}
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
