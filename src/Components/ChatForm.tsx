import React, { useState, useEffect, useRef } from "react";
import { FaWhatsapp, FaRobot } from "react-icons/fa";
import { ChatFormProps } from "@/Types/ChatProps";
import { IoIosCloseCircle } from "react-icons/io";

const ChatForm = ({ isOpen, onClose }: any) => {
  const [step, setStep] = useState<"open" | "option" | "chatbot">("open");
  const [chat, setChat] = useState<ChatFormProps[]>([]);
  const [message, setMessage] = useState("");

  const chatBottomRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    setTimeout(() => {
      chatBottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  useEffect(scrollToBottom, [chat]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    hp: "",
    message: "",
  });

  const onHandleValueChange = (e: any) => {
    setFormData((value) => ({
      ...value,
      [e.target.name]: e.target.value,
    }));
  };

  const onHandleSubmit = (e: any) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.hp && formData.message) {
      setStep("option");
    } else {
      alert("Mohon isi semua field dengan benar.");
    }
  };

  const handleWhatsApp = () => {
    const pesan = `Halo M-Knows Consulting Team, Berikut data saya:\n\nNama: ${formData.name}\nEmail: ${formData.email}\nNo HP: ${formData.hp}\nPesan: ${formData.message}`;
    const url = `https://wa.me/6281210468281?text=${encodeURIComponent(pesan)}`;
    window.open(url, "_blank");
  };

  return (
    <>
      {isOpen && (
        <div
          className="w-[276px] max-h-[80vh] md:max-h-[85vh] rounded-[15px] bg-[#02353C] backdrop-blur-sm flex flex-col overflow-hidden shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* HEADER */}
          <div className="sticky top-0 bg-[#083F45] w-full h-[56px] rounded-t-[15px] flex items-center px-3 justify-between z-888 p-3">
            <div className="flex items-center gap-3">
              <div className="lime-green-2 flex items-center justify-center w-[34px] h-[34px] bg-[#A9DFBF] rounded-full">
                <h1 className="text-[#083F45] font-bold">MK</h1>
              </div>
              <div className="flex flex-col leading-tight">
                <h1 className="text-white font-bold text-[14px]">
                  Let’s Chat!
                </h1>
                <p className="text-[#BFF932] text-[10px] font-semibold">
                  We’ll reply as soon as we can
                </p>
              </div>
            </div>
            <button onClick={onClose} className="text-white text-lg font-bold">
              <IoIosCloseCircle className="text-[24px]" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto text-white px-4 py-3 touch-pan-y overscroll-y-contain">
            {/* STEP 1 FORM */}
            {step === "open" && (
              <form
                onSubmit={onHandleSubmit}
                className="flex flex-col gap-3 bg-[#18393B] rounded-[9px] border border-[#BFF932] p-4 w-full"
              >
                <p className="text-[11px] font-montserrat font-semibold">
                  Hey there, please leave your details so we can contact you.
                </p>

                <label className="text-[11px] font-semibold">Name:</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={onHandleValueChange}
                  className="rounded-[5px] bg-[#084C54] border border-[#BFF932] text-white p-2"
                />

                <label className="text-[11px] font-semibold">Email:</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={onHandleValueChange}
                  className="rounded-[5px] bg-[#084C54] border border-[#BFF932] text-white p-2"
                />

                <label className="text-[11px] font-semibold">Phone:</label>
                <input
                  type="text"
                  name="hp"
                  placeholder="Your Phone Number"
                  value={formData.hp}
                  onChange={onHandleValueChange}
                  className="rounded-[5px] bg-[#084C54] border border-[#BFF932] text-white p-2"
                />

                <label className="text-[11px] font-semibold">Message:</label>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={onHandleValueChange}
                  className="rounded-[5px] bg-[#084C54] border border-[#BFF932] text-white p-2 h-[60px]"
                />

                <button
                  type="submit"
                  className="bg-[#BFF932] text-[#02353C] font-bold py-1 px-5 rounded-full"
                >
                  Submit
                </button>
              </form>
            )}

            {step === "option" && (
              <div className="flex flex-col gap-4 p-3">
                <p className="text-center text-lg font-bold">
                  Pilih metode percakapan
                </p>

                <button
                  onClick={handleWhatsApp}
                  className="flex justify-center items-center gap-x-2 bg-green-500 hover:bg-green-600 py-2 rounded"
                >
                  <FaWhatsapp className="text-[25px]" />
                  Chat via WhatsApp
                </button>

                <button className="flex justify-center items-center gap-x-2 bg-white text-[#02353C] opacity-80 py-2 rounded">
                  <FaRobot className="text-[25px]" />
                  Chat AI (Coming Soon)
                </button>
              </div>
            )}

            <div ref={chatBottomRef}></div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatForm;
