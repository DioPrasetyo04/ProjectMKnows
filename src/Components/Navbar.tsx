"use client";

import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import data from "../DB/db.json";

const Navbar = () => {
  const [openMore, setOpenMore] = useState(false);
  const [openService, setOpenService] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const toggleMore = () => {
    setOpenMore(!openMore);
    setOpenService(false);
  };

  const toggleService = () => {
    setOpenService(!openService);
    setOpenMore(false);
  };

  const handleSubmenu = (menu: string) => {
    setActiveSubmenu(menu === activeSubmenu ? null : menu);
  };

  const navigateTo = (href: string) => {
    router.push(href);
    setOpenMore(false);
    setOpenService(false);
    setMenuOpen(false);
  };

  return (
    <div className="fixed top-0 left-0 z-[9999] flex items-center justify-between px-6 lg:px-16 py-4 bg-[#02353C] w-full h-[120px] shadow-md">
      {/* ===== LOGO ===== */}
      <div
        className="flex items-center gap-3 cursor-pointer"
        onClick={() => navigateTo("/")}
      >
        <img
          src="/images/logos/M-Knows.png"
          alt="M-Knows"
          className="w-[180px] h-[60px] object-contain"
        />
      </div>

      {/* ===== HAMBURGER BUTTON (MOBILE & TABLET) ===== */}
      <div className="lg:hidden">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-white focus:outline-none"
        >
          {menuOpen ? <X size={36} /> : <Menu size={36} />}
        </button>
      </div>

      {/* ===== NAVIGATION (DESKTOP ONLY ≥1024px) ===== */}
      <div className="hidden lg:flex items-center gap-x-16 relative">
        {data.navLinksStatics.map((link) => {
          const isActive = pathname === link.href;
          return (
            <button
              key={link.id}
              onClick={() => navigateTo(link.href)}
              className={`font-montserrat font-medium text-[26px] transition-all ${
                isActive ? "text-[#B9F443]" : "text-white"
              } hover:text-[#B9F443]`}
            >
              {link.label}
            </button>
          );
        })}

        {/* OUR SERVICES */}
        <div className="relative">
          <button
            onClick={toggleService}
            className="font-montserrat font-mediium text-[26px] text-white hover:text-[#B9F443] transition-all"
          >
            Our Services ▾
          </button>

          <AnimatePresence>
            {openService && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="absolute top-12 left-0 w-[300px] bg-[#1E2430] font-montserrat text-white rounded-3xl shadow-2xl p-6 z-50"
              >
                <h3 className="text-2xl font-montserrat font-semibold mb-4">
                  Our Services
                </h3>

                {["Training", "Consulting", "Digitalisasi"].map((menu) => (
                  <div key={menu} className="mb-2">
                    <button
                      onClick={() => handleSubmenu(menu)}
                      className={`block text-left w-full font-montserrat text-lg ${
                        activeSubmenu === menu
                          ? "text-[#4697CE]"
                          : "text-white hover:text-[#B9F443]"
                      }`}
                    >
                      {menu} ▾
                    </button>

                    <AnimatePresence>
                      {activeSubmenu === menu && (
                        <motion.div
                          initial={{ opacity: 0, y: -5 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -5 }}
                          className="ml-4 mt-1 space-y-2 text-[15px] text-white"
                        >
                          {menu === "Training" && (
                            <>
                              <p
                                onClick={() =>
                                  navigateTo(
                                    "/training/public-in-house-training"
                                  )
                                }
                                className="cursor-pointer hover:text-[#B9F443]"
                              >
                                Public In House Training
                              </p>
                              <p
                                onClick={() => navigateTo("/training/bootcamp")}
                                className="cursor-pointer hover:text-[#B9F443]"
                              >
                                Bootcamp Program
                              </p>
                              <p
                                onClick={() => navigateTo("/training/outbound-gallery")}
                                className="cursor-pointer hover:text-[#B9F443]"
                              >
                                Outbound & Event
                              </p>
                              <p
                                onClick={() => navigateTo("/training/lms")}
                                className="cursor-pointer hover:text-[#B9F443]"
                              >
                                Learning Management System
                              </p>
                              <p
                                onClick={() => navigateTo("/training/lms-pengembangan")}
                                className="cursor-pointer hover:text-[#B9F443]"
                              >
                                Pengembangan LMS Kustom
                              </p>
                            </>
                          )}

                          {menu === "Consulting" && (
                            <>
                              <p
                                onClick={() =>
                                  navigateTo("/consulting/brand-consulting")
                                }
                                className="cursor-pointer hover:text-[#B9F443]"
                              >
                                Brand Consulting
                              </p>
                              <p
                                onClick={() =>
                                  navigateTo("/consulting/executive-coaching")
                                }
                                className="cursor-pointer hover:text-[#B9F443]"
                              >
                                Executive Coaching
                              </p>
                              <p
                                onClick={() =>
                                  navigateTo("/consulting/hybrid-officer-development")
                                }
                                className="cursor-pointer hover:text-[#B9F443]"
                              >
                                Hybrid Officer Development
                              </p>
                              <p
                                onClick={() =>
                                  navigateTo("/consulting/assessment-technical-competency")
                                }
                                className="cursor-pointer hover:text-[#B9F443]"
                              >
                                Assessment for Technical Competency
                              </p>
                            </>
                          )}

                          {menu === "Digitalisasi" && (
                            <>
                              <p
                                onClick={() => navigateTo("/digitalisasi/SolusiAI")}
                                className="cursor-pointer hover:text-[#B9F443]"
                              >
                                Solusi AI
                              </p>
                              <p
                                onClick={() =>
                                  navigateTo("/digitalisasi/jasa-web-development")
                                }
                                className="cursor-pointer hover:text-[#B9F443]"
                              >
                                Web Development
                              </p>
                              <p
                                onClick={() => navigateTo("/digitalisasi/apps-development")}
                                className="cursor-pointer hover:text-[#B9F443]"
                              >
                                Apps Development
                              </p>
                              <p
                                onClick={() => navigateTo("/digitalisasi/games-development")}
                                className="cursor-pointer hover:text-[#B9F443]"
                              >
                                Game Development
                              </p>
                              <p
                                onClick={() =>
                                  navigateTo("/digitalisasi/digitals-marketing")
                                }
                                className="cursor-pointer hover:text-[#B9F443]"
                              >
                                Digital Marketing
                              </p>
                              <p
                                onClick={() => navigateTo("/digitalisasi/content-creator")}
                                className="cursor-pointer hover:text-[#B9F443]"
                              >
                                Content Creator
                              </p>
                              <p
                                onClick={() => navigateTo("/digitalisasi/virtual-reality")}
                                className="cursor-pointer hover:text-[#B9F443]"
                              >
                                Virtual Reality
                              </p>
                            </>
                          )}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* MORE */}
        <div className="relative">
          <button
            onClick={toggleMore}
            className="font-montserrat font-medium text-[26px] text-white hover:text-[#B9F443] transition-all"
          >
            More ▾
          </button>

          <AnimatePresence>
            {openMore && (
              <motion.div
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.2 }}
                className="absolute right-0 top-full mt-3 w-[250px] bg-[#1E2430] text-white rounded-3xl shadow-xl py-6 border border-[#2C3A47] z-50 text-right"
              >
                <h3 className="text-2xl font-montserrat font-semibold mb-4 px-6 text-right">
                  More
                </h3>

                <div className="flex flex-col space-y-2 px-6">
                  {data.Mores.map((item) => (
                    <button
                      key={item.href}
                      onClick={() => navigateTo(item.href)}
                      className="block w-full text-[16px] font-montserrat tracking-wide hover:text-[#B9F443] transition-all text-right"
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* ===== MOBILE/TABLET MENU (≤1023px) ===== */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            className="absolute top-[120px] left-0 w-full bg-[#1E2430] text-white flex flex-col items-center py-6 space-y-4 shadow-lg z-50 lg:hidden"
          >
            {/* Static Nav */}
            {data.navLinksStatics.map((link) => (
              <button
                key={link.id}
                onClick={() => navigateTo(link.href)}
                className={`font-montserrat text-[18px] ${
                  pathname === link.href ? "text-[#B9F443]" : "text-white"
                } hover:text-[#B9F443] transition-all`}
              >
                {link.label}
              </button>
            ))}

            {/* Our Services */}
            <div className="flex flex-col items-center space-y-2">
              <button
                onClick={toggleService}
                className="font-montserrat text-[18px] text-white hover:text-[#B9F443]"
              >
                Our Services ▾
              </button>

              {openService && (
                <div className="flex flex-col items-center font-montserrat text-white text-[16px] space-y-2">
                  {["Training", "Consulting", "Digitalisasi"].map((menu) => (
                    <div key={menu} className="flex flex-col items-center">
                      <button
                        onClick={() => handleSubmenu(menu)}
                        className={`font-montserrat ${
                          activeSubmenu === menu
                            ? "text-[#4697CE]"
                            : "hover:text-[#B9F443]"
                        }`}
                      >
                        {menu} ▾
                      </button>

                      {activeSubmenu === menu && (
                        <div className="flex flex-col items-center text-sm mt-2 space-y-1">
                          {menu === "Training" && (
                            <>
                              <p
                                onClick={() => navigateTo("/training/public-in-house-training")}
                                className="cursor-pointer hover:text-[#B9F443]"
                              >
                                Public In House Training
                              </p>
                              <p
                                onClick={() => navigateTo("/training/bootcamp")}
                                className="cursor-pointer hover:text-[#B9F443]"
                              >
                                Bootcamp Program
                              </p>
                              <p
                                onClick={() => navigateTo("/training/outbound-gallery")}
                                className="cursor-pointer hover:text-[#B9F443]"
                              >
                                Outbound & Event
                              </p>
                              <p
                                onClick={() => navigateTo("/training/lms")}
                                className="cursor-pointer hover:text-[#B9F443]"
                              >
                                Learning Management System
                              </p>
                              <p
                                onClick={() => navigateTo("/training/lms-pengembangan")}
                                className="cursor-pointer hover:text-[#B9F443]"
                              >
                                Pengembangan LMS Kustom
                              </p>
                            </>
                          )}

                          {menu === "Consulting" && (
                            <>
                              <p
                                onClick={() =>
                                  navigateTo("/consulting/brand-consulting")
                                }
                                className="cursor-pointer hover:text-[#B9F443]"
                              >
                                Brand Consulting
                              </p>
                              <p
                                onClick={() =>
                                  navigateTo("/consulting/executive-coaching")
                                }
                                className="cursor-pointer hover:text-[#B9F443]"
                              >
                                Executive Coaching
                              </p>
                              <p
                                onClick={() =>
                                  navigateTo("/consulting/hybrid-officer-development")
                                }
                                className="cursor-pointer hover:text-[#B9F443]"
                              >
                                Hybrid Officer Development
                              </p>
                              <p
                                onClick={() =>
                                  navigateTo("/consulting/assessment-technical-competency")
                                }
                                className="cursor-pointer hover:text-[#B9F443]"
                              >
                                Assessment for Technical Competency
                              </p>
                            </>
                          )}

                          {menu === "Digitalisasi" && (
                            <>
                              <p
                                onClick={() => navigateTo("/digitalisasi/SolusiAI")}
                                className="cursor-pointer hover:text-[#B9F443]"
                              >
                                Solusi AI
                              </p>
                              <p
                                onClick={() =>
                                  navigateTo("/digitalisasi/jasa-web-development")
                                }
                                className="cursor-pointer hover:text-[#B9F443]"
                              >
                                Web Development
                              </p>
                              <p
                                onClick={() => navigateTo("/digitalisasi/apps-development")}
                                className="cursor-pointer hover:text-[#B9F443]"
                              >
                                Apps Development
                              </p>
                              <p
                                onClick={() => navigateTo("/digitalisasi/games-development")}
                                className="cursor-pointer hover:text-[#B9F443]"
                              >
                                Game Development
                              </p>
                              <p
                                onClick={() =>
                                  navigateTo("/digitalisasi/digitals-marketing")
                                }
                                className="cursor-pointer hover:text-[#B9F443]"
                              >
                                Digital Marketing
                              </p>
                              <p
                                onClick={() => navigateTo("/digitalisasi/content-creator")}
                                className="cursor-pointer hover:text-[#B9F443]"
                              >
                                Content Creator
                              </p>
                              <p
                                onClick={() => navigateTo("/digitalisasi/virtual-reality")}
                                className="cursor-pointer hover:text-[#B9F443]"
                              >
                                Virtual Reality
                              </p>
                            </>
                          )}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* More */}
            <div className="flex flex-col items-center space-y-2">
              <button
                onClick={toggleMore}
                className="font-montserrat text-[18px] text-white hover:text-[#B9F443]"
              >
                More ▾
              </button>

              {openMore && (
                <div className="flex flex-col items-center space-y-2 font-montserrat text-white text-[16px]">
                  {data.Mores.map((item) => (
                    <button
                      key={item.href}
                      onClick={() => navigateTo(item.href)}
                      className="hover:text-[#B9F443]"
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
