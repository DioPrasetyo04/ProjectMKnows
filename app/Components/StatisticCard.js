"use client";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import { FaClock, FaBuilding, FaUsers, FaSmile } from "react-icons/fa";

export default function StatisticCard({ value, label, description, iconType }) {
  const iconMap = {
    experience: <FaClock className="text-green-600 text-5xl mb-4" />,
    inhouse: <FaBuilding className="text-green-600 text-5xl mb-4" />,
    public: <FaUsers className="text-green-600 text-5xl mb-4" />,
    happy: <FaSmile className="text-green-600 text-5xl mb-4" />,
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-white rounded-2xl shadow-lg p-8 text-center w-[250px] hover:shadow-xl transition-all duration-300"
    >
      <div className="flex justify-center">{iconMap[iconType]}</div>

      <h3 className="text-[#4697CE] text-4xl font-extrabold font-montserrat">
        <CountUp end={value} duration={2} />+
      </h3>

      <p className="text-black text-[28px] font-bold font-montserrat">{label}</p>
      <p className="text-gray-700 text-[24px] font-montserrat font-medium">{description}</p>
    </motion.div>
  );
}
