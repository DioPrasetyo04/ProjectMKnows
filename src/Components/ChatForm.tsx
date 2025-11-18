import { useState } from "react";
import { fetchAPIGemini } from "../Services/api_service";
import { formatDateLabel, formatTime } from "../Utils/merge";
import { FaWhatsapp } from "react-icons/fa";
import { FaRobot } from "react-icons/fa";
import { ChatFormProps } from "@/Types/ChatProps";

const ChatForm = ({ isOpen, onClose }: any) => {
  const [step, setStep] = useState<"open" | "option" | "chatbot">("open");
  const [chat, setChat] = useState<ChatFormProps[]>([]);
  const [message, setMessage] = useState("");

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

  // ======================
  //  SUBMIT FORM PERTAMA
  // ======================
  const onHandleSubmit = (e: any) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.hp && formData.message) {
      setStep("option");
    } else {
      alert("Mohon isi semua field dengan benar.");
    }
  };

  // ======================
  //  KIRIM PESAN KE GEMINI
  // ======================
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

  // chatbot
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

  // whatsAPP
  const handleWhatsApp = () => {
    const pesan = `Halo M-Knows Consulting Team, Berikut data saya:\n\nNama: ${formData.name}\nEmail: ${formData.email}\nNo HP: ${formData.hp}\n\nSaya Mau Bertanya Tentang:\n\nPesan: ${formData.message}`;
    const url = `https://wa.me/6281381876265?text=${encodeURIComponent(pesan)}`;
    window.open(url, "_blank");
  };

  // message to gemini
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
          className="card w-[276px] h-[542px] rounded-[15px] bg-[#02353C] flex flex-col"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="bg-[#083F45] w-full h-[56px] rounded-t-[15px] flex items-center px-3 justify-between">
            <div className="flex items-center gap-3">
              <div className="lime-green-2 flex items-center justify-center w-[34px] h-[34px] bg-[#A9DFBF] rounded-full">
                <h1 className="text-[#083F45] font-bold">MK</h1>
              </div>
              <div className="flex flex-col leading-tight">
                <h1 className="text-white font-bold text-[14px]">
                  Let’s Chat!
                </h1>
                <ul className="list-disc pl-3">
                  <li className="text-[#BFF932] text-[10px] font-semibold">
                    We’ll Reply as soon as we can
                  </li>
                </ul>
              </div>
            </div>
            <button onClick={onClose} className="text-white text-lg font-bold">
              ×
            </button>
          </div>

          <div className="flex-1 overflow-y-auto text-white px-2 py-3">
            {/* STEP 1: FORM */}
            {step === "open" && (
              <div className="flex flex-col items-center text-start gap-y-2 w-[219px] h-full">
                <form
                  onSubmit={onHandleSubmit}
                  className="flex flex-col gap-3 text-sm card border border-inside border-[#BFF932] bg-[#18393B] rounded-[9px] p-3"
                >
                  <p className="w-[197px] font-montserrat font-semibold text-[11px]">
                    Hey there, please leave your details so we can contact you
                    even if you are no longer on the site.
                  </p>
                  <label
                    className="font-montserrat font-semibold text-[11px] text-start"
                    htmlFor="name"
                  >
                    Name:
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={onHandleValueChange}
                    className="rounded-[5px] bg-[#084C54] text-white placeholder-gray-300 border border-[#BFF932] W-[197px] h-[21px] p-3"
                    required
                  />
                  <label
                    className="font-montserrat font-semibold text-[11px] text-start"
                    htmlFor="email"
                  >
                    Email:
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={onHandleValueChange}
                    className="rounded-[5px] bg-[#084C54] text-white placeholder-gray-300 border border-[#BFF932] W-[197px] h-[21px] p-3"
                  />
                  <label
                    className="font-montserrat font-semibold text-[11px] text-start"
                    htmlFor="phone"
                  >
                    Phone:
                  </label>
                  <input
                    type="text"
                    name="hp"
                    placeholder="Your Phone Number"
                    value={formData.hp}
                    onChange={onHandleValueChange}
                    className="rounded-[5px] bg-[#084C54] text-white placeholder-gray-300 border border-[#BFF932] W-[197px] h-[21px] p-3"
                  />
                  <label
                    className="font-montserrat font-semibold text-[11px] text-start"
                    htmlFor="name"
                  >
                    Message:
                  </label>
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={onHandleValueChange}
                    className="rounded-[5px] bg-[#084C54] border border-[#BFF932] text-white placeholder-gray-300 W-[197px] h-[48px] p-3"
                  ></textarea>
                  <div className="flex justify-start items-start left-0">
                    <button
                      type="submit"
                      className="bg-[#BFF932] text-[#02353C] font-bold py-1 px-5 rounded-full"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            )}

            {/* STEP 2: OPTION */}
            {step === "option" && (
              <div className="flex flex-col gap-4 items-center justify-center h-full p-3">
                <p className="text-center text-xl w-full font-bold">
                  Pilih metode percakapan
                </p>
                <div className="flex justify-center items-center gap-x-2 bg-green-500 hover:bg-green-600 w-full py-2 rounded">
                  <FaWhatsapp className="text-[25px]" />
                  <button
                    onClick={handleWhatsApp}
                    className="text-white font-semibold"
                  >
                    Chat via WhatsApp
                  </button>
                </div>

                <div className="flex justify-center items-center gap-x-2 bg-white w-full py-2 rounded px-3">
                  <FaRobot className="text-[25px] text-black  " />
                  <button
                    onClick={handleChatbotStart}
                    className="bg-white text-[#02353C] opacity-80 rounded font-semibold w-full"
                    disabled
                  >
                    chat AI (coming soon)
                  </button>
                </div>
              </div>
            )}

            {/* STEP 3: CHATBOT */}
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
                            <p className="text-sm">{c.text}</p>
                            <span className="block text-[10px] text-gray-500 mt-1">
                              {formatTime(c.timestamp)}
                            </span>
                          </div>
                        </div>
                      );
                    });
                  })()}
                </div>

                {/* INPUT PESAN */}
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
