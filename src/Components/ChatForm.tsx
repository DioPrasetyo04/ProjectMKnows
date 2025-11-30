import React, { useState, useEffect, useRef } from "react";
import { FaWhatsapp, FaRobot } from "react-icons/fa";
import { ChatFormProps } from "@/Types/ChatProps";
import { IoIosCloseCircle } from "react-icons/io";
import { formatDateLabel, formatTime } from "@/Utils/merge";
import { fetchAPIGemini } from "@/Services/api_service";

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

  const sendMessageToGemini = async (msg: string) => {
    try {
      const model = process.env.NEXT_PUBLIC_MODELS_API_GEMINI;
      const chatGemini = await fetchAPIGemini.post(
        // Path sudah benar, dimulai setelah v1/ atau v1beta/
        `/models/${model}:generateContent?key=${process.env.NEXT_PUBLIC_API_KEY_GEMINI}`,
        {
          contents: [{ parts: [{ text: msg }] }],
        }
      );

      const reply =
        chatGemini.data.candidates?.[0]?.content?.parts?.[0]?.text ||
        "Maaf, saya tidak mengerti pertanyaan Anda.";

      setChat((prevChat) => [
        ...prevChat,
        { sender: "Bot Gemini", text: reply, timestamp: new Date() },
      ]);
    } catch (error) {
      console.log(error);
      setChat((prevChat) => [
        ...prevChat,
        {
          sender: "Bot Gemini",
          text: "Terjadi kesalahan konfigurasi server.",
          timestamp: new Date(),
        },
      ]);
    }
  };

  const handleChatbotStart = async () => {
    setStep("chatbot");

    // Tambahkan pesan pertama user dari form
    setChat([
      {
        sender: "You",
        text: formData.message,
        timestamp: new Date(),
      },
    ]);

    // Bot menyapa dan menanggapi
    setTimeout(async () => {
      setChat((prev) => [
        ...prev,
        {
          sender: "Bot Gemini",
          text: `Halo ${formData.name}! Senang bertemu denganmu 😊`,
          timestamp: new Date(),
        },
      ]);
      await sendMessageToGemini(formData.message);
    }, 500);
  };

  const handleSendMessage = async (e: any) => {
    e.preventDefault();
    if (!message.trim()) return false;

    setChat((prev) => [
      ...prev,
      { sender: "You", text: message, timestamp: new Date() },
    ]);
    setMessage("");
    await sendMessageToGemini(message);
  };

  return (
    <>
      {isOpen && (
        <div
          className="w-[276px] max-h-[80vh] md:max-h-[85vh] rounded-[15px] bg-[#02353C] backdrop-blur-sm flex flex-col overflow-hidden shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
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

                <button
                  className="flex justify-center items-center gap-x-2 bg-white text-[#02353C] opacity-80 py-2 rounded"
                  onClick={handleChatbotStart}
                >
                  <FaRobot className="text-[25px]" />
                  Chat AI (Coming Soon)
                </button>
              </div>
            )}

            {step === "chatbot" && (
              <div className="flex flex-col justify-between h-full w-full">
                {/* CHAT LIST */}
                <div className="flex-1 overflow-y-auto space-y-2 p-5">
                  {(() => {
                    let lastDate = "";
                    return chat.map((c, index) => {
                      const currentDateLabel = formatDateLabel(c.timestamp);
                      const showDateLabel = currentDateLabel !== lastDate;
                      lastDate = currentDateLabel;

                      return (
                        <div key={index}>
                          {showDateLabel && (
                            <div className="text-center text-gray-400 border-gray-600 rounded-full p-2 text-xs my-2">
                              {currentDateLabel}
                            </div>
                          )}
                          <div
                            className={`max-w-[80%] p-2 rounded-lg my-1 ${
                              c.sender === "You"
                                ? "bg-green-500 self-end ml-auto text-right text-black"
                                : "bg-white text-left text-black"
                            }`}
                          >
                            <p className="text-sm font-poppins">{c.text}</p>
                            <span className="block text-[10px] text-gray-500 mt-1 font-poppins">
                              {formatTime(c.timestamp)}
                            </span>
                          </div>
                        </div>
                      );
                    });
                  })()}
                </div>

                <form
                  onSubmit={handleSendMessage}
                  className="flex bg-[#05272A] mt-2 mb-3 bottom-0 left-0 right-0 w-full"
                >
                  <input
                    type="text"
                    name="msg"
                    placeholder="Type a message..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="flex-1 p-2 rounded-l bg-[#084C54] text-white placeholder-gray-300 text-sm"
                  />
                  <button
                    type="submit"
                    className="bg-[#A9DFBF] text-[#02353C] px-3 rounded-r font-bold"
                  >
                    ➤
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default ChatForm;
